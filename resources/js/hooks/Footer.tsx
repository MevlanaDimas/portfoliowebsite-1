import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export const Footer = () => (
    <motion.footer
        className="w-full flex flex-col gap-10 justify-center items-center bg-[#1E201E] p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <div className='flex flex-row pt-2 gap-8 justify-center items-center container mx-auto text-center text-white'>
            <Link href="https://github.com/MevlanaDimas" target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-gray-400">
                <Github className="size-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/maulana-arbi" target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-gray-400">
                <Linkedin className="size-6" />
            </Link>
        </div>
        <span className='h-px w-full max-w-7xl bg-gray-700'/>
        <div className="container mx-auto text-center text-white">
            <p>© {new Date().getFullYear()} Dimas Maulana. All rights reserved.</p>
        </div>
    </motion.footer>
);
