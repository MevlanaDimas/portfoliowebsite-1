import { motion } from 'framer-motion';
import { getSafeUrl } from '@/lib/utils';

interface About {
    id: number;
    photo_url: string;
    photo_name: string;
    bio: string;
}

export const AboutSection = ({ abouts }: { abouts: About[] }) => (
    <section id="about" className="w-full bg-[#FDFDFC] py-20 sm:py-32">
        {abouts.map((about) => (
            <div key={about.id} className='flex flex-col justify-between items-center'>
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }}
                    className="text-3xl font-bold text-[#1E201E] drop-shadow-md sm:text-4xl text-center mb-12"
                >
                    About Me!
                </motion.h2>
                <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-20">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="flex aspect-square items-center justify-center overflow-hidden rounded-full bg-[#ECDFCC] shadow-lg">
                        <img src={getSafeUrl(about.photo_url)} alt={about.photo_name} className="h-full w-full object-cover object-[50%_5%]" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="text-center md:text-left">
                        <p className="mt-6 text-lg leading-relaxed text-gray-600">{about.bio}</p>
                    </motion.div>
                </div>
            </div>
        ))}
    </section>
);
