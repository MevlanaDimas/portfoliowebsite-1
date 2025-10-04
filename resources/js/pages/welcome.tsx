import { useFlashMessages } from '@/hooks/useFlashMessages';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { AboutSection } from '@/hooks/AboutSection';
import { ContactSection } from '@/hooks/ContactSection';
import { Footer } from '@/hooks/Footer';
import { Header, MobileMenu } from '@/hooks/Header';
import { HeroSection } from '@/hooks/HeroSection';
import { NotificationPopup } from '@/hooks/NotificationPopup';
import { ProjectsSection } from '@/hooks/ProjectsSection';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface About {
    id: number;
    photo_url: string;
    photo_name: string;
    photo_hash_name: string;
    bio: string;
    activate: boolean;
    updated_at: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    github_link: string;
    image_url: string;
    image_name: string;
    image_hash_name: string;
    updated_at: string;
}

interface DataProps {
    abouts: About[];
    projects: Project[];
}

interface WelcomeProps {
    data: DataProps;
}

export default function Welcome({ data }: WelcomeProps) {
    const { auth } = usePage<SharedData>().props;
    const { notification, setNotification } = useFlashMessages();
    const isScrolled = useScrollPosition();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'visible';
    }, [isMobileMenuOpen]);

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <style>{`
                    html {
                        scroll-padding-top: 5rem; /* Adjust as needed for header height */
                        scroll-behavior: smooth;
                    }
                `}</style>
            </Head>

            <NotificationPopup notification={notification} setNotification={setNotification} />
            <MobileMenu isOpen={isMobileMenuOpen} setOpen={setMobileMenuOpen} auth={auth} />

            <div className="w-full bg-[#FDFDFC] text-[#1E201E]">
                <Header auth={auth} isScrolled={isScrolled} isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

                <main>
                    <HeroSection />
                    <AboutSection abouts={data.abouts.data} />
                    <ProjectsSection projects={data.projects.data} />
                    <ContactSection />
                </main>

                <Footer />
            </div>
        </>
    );
}
