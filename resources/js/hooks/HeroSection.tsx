import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export const HeroSection = () => (
    <section id="home" className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden">
        <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `url('wmremove-transformed.jpeg')`,
            }}
            initial={{ filter: 'blur(8px)', scale: 1.1 }}
            animate={{ filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-[#697565]/30" />
        <motion.div
            className="relative z-10 flex flex-col items-center justify-center p-4 text-center text-white"
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: {
                        delayChildren: 0.5,
                        staggerChildren: 0.3,
                    },
                },
            }}
        >
            <motion.h1
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { ease: 'easeOut', duration: 0.5 } },
                }}
                className="text-4xl font-bold drop-shadow-md md:text-6xl lg:text-7xl"
            >
                Hi, I'm Dimas Maulana
            </motion.h1>
            <motion.p
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { ease: 'easeOut', duration: 0.5 } } }}
                className="mt-4 max-w-2xl text-lg drop-shadow-sm md:text-xl"
            >
                A Full-Stack Developer passionate about building modern, responsive, and user-friendly web applications.
            </motion.p>
            <motion.div
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { ease: 'easeOut', duration: 0.5 } } }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
                <Link href="#project" className="rounded-md bg-[#697565] px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105">View My Work</Link>
                <Link href="#contact" className="rounded-md border-2 border-white px-6 py-3 font-semibold text-white shadow-lg backdrop-blur-sm transition-transform hover:bg-white/10">Get In Touch</Link>
            </motion.div>
        </motion.div>
    </section>
);
