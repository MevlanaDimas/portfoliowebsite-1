import AppLogoIconBlack from '@/components/app-logo-icon-black';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';

const NavItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link
        href={href}
        onClick={onClick}
        className="group relative block rounded-md px-4 py-2 text-lg font-medium text-gray-700 transition-colors lg:text-base lg:text-[#1E201E] hover:font-bold"
    >
        {children}
        <span className="absolute inset-x-4 bottom-1 hidden h-0.5 origin-center scale-x-0 transform bg-[#697565] transition-transform duration-300 ease-in-out group-hover:scale-x-100 lg:block" />
    </Link>
);

const CTAButton = ({ href, children, variant = 'primary', onClick }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary', onClick?: () => void }) => (
    <Link
        href={href}
        onClick={onClick}
        className={`rounded-md px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors focus-visible:outline focus-visible:outline-offset-2 ${
            variant === 'primary'
                ? 'bg-[#697565] text-white hover:bg-[#5a6656] focus-visible:outline-[#697565]'
                : 'bg-white text-[#1E201E] hover:bg-gray-100 focus-visible:outline-white'
        }`}
    >
        {children}
    </Link>
);

const AnimatedHamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
    const transition = { duration: 0.3, ease: 'easeInOut' };

    const topLine = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 8 },
    };

    const middleLine = {
        closed: { opacity: 1 },
        open: { opacity: 0 },
    };

    const bottomLine = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -8 },
    };

    return (
        <div className="relative size-8">
            <motion.span className="absolute block h-0.5 w-full origin-center bg-[#1E201E]" style={{ top: '7px' }} variants={topLine} animate={isOpen ? 'open' : 'closed'} transition={transition} />
            <motion.span
                className="absolute block h-0.5 w-full origin-center bg-[#1E201E]"
                style={{ top: '15px' }}
                variants={middleLine}
                animate={isOpen ? 'open' : 'closed'}
                transition={transition}
            />
            <motion.span className="absolute block h-0.5 w-full origin-center bg-[#1E201E]" style={{ top: '23px' }} variants={bottomLine} animate={isOpen ? 'open' : 'closed'} transition={transition} />
        </div>
    );
};

const MobileMenu = ({ isOpen, setOpen, auth }: { isOpen: boolean; setOpen: (isOpen: boolean) => void, auth: SharedData['auth'] }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} />
        )}
        {isOpen && (
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 right-0 z-50 flex h-screen w-full max-w-sm flex-col gap-8 bg-[#FDFDFC] p-6 lg:hidden"
            >
                <div className="flex items-center justify-between">
                    <Link href="#home" onClick={() => setOpen(false)} className="leading-normal">
                        <AppLogoIconBlack className="size-12 fill-current" />
                    </Link>
                    <button onClick={() => setOpen(false)} className="p-2 cursor-pointer">
                        <AnimatedHamburgerIcon isOpen={isOpen} />
                    </button>
                </div>
                <nav className="flex flex-1 flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <NavItem href="#home" onClick={() => setOpen(false)}>Home</NavItem>
                        <NavItem href="#about" onClick={() => setOpen(false)}>About</NavItem>
                        <NavItem href="#project" onClick={() => setOpen(false)}>Projects</NavItem>
                        <NavItem href="#contact" onClick={() => setOpen(false)}>Contact</NavItem>
                    </div>
                    <div className="flex flex-col gap-4">
                        {auth.user ? (
                            <CTAButton href={dashboard().url} onClick={() => setOpen(false)}>Dashboard</CTAButton>
                        ) : (
                            <>
                                <CTAButton href={login().url} onClick={() => setOpen(false)} variant="secondary">Log in</CTAButton>
                                <CTAButton href={register().url} onClick={() => setOpen(false)}>Register</CTAButton>
                            </>
                        )}
                    </div>
                </nav>
            </motion.div>
        )}
    </AnimatePresence>
);

export const Header = ({ auth, isScrolled, isMobileMenuOpen, setMobileMenuOpen }: { auth: SharedData['auth']; isScrolled: boolean; isMobileMenuOpen: boolean; setMobileMenuOpen: (isOpen: boolean) => void }) => (
    <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`top-0 z-30 flex w-full items-center justify-between px-4 py-3 text-lg transition-all duration-300 sm:px-8 md:px-16 ${
            isScrolled ? 'fixed shadow-md bg-[#FDFDFC]/90 backdrop-blur-sm' : 'absolute bg-transparent shadow-none'
        }`}
    >
        <Link href="#home" className="leading-normal">
            <AppLogoIconBlack className="size-12 fill-current transition-transform duration-500 ease-in-out hover:rotate-x-360" />
        </Link>
        <nav className="hidden items-center gap-2 font-medium lg:flex">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#project">Projects</NavItem>
            <NavItem href="#contact">Contact</NavItem>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
            {auth.user ? (
                <CTAButton href={dashboard().url}>Dashboard</CTAButton>
            ) : (
                <>
                    <Link href={login().url} className="block rounded-md px-4 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 lg:text-base lg:text-[#1E201E]">Log in</Link>
                    <CTAButton href={register().url}>Register</CTAButton>
                </>
            )}
        </div>
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="z-[60] p-2 lg:hidden cursor-pointer">
            <AnimatedHamburgerIcon isOpen={isMobileMenuOpen} />
        </button>
    </motion.header>
);

export { MobileMenu };
