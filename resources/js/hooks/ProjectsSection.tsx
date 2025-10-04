import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';
import { getSafeUrl } from '@/lib/utils';

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    github_link: string;
    image_url: string;
    image_name: string;
}

export const ProjectsSection = ({ projects }: { projects: Project[] }) => (
    <section id="project" className="w-full bg-gray-50 py-20 sm:py-32">
        <div className="container mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="mb-16 text-center text-3xl font-bold text-[#1E201E] drop-shadow-md sm:text-4xl"
            >
                My Projects
            </motion.h2>
            <div className="flex flex-col gap-20 lg:gap-28">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12"
                    >
                        <a href={project.link || project.github_link || '#'} target="_blank" rel="noopener noreferrer" className={`group relative overflow-hidden rounded-lg shadow-xl ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                            <img src={getSafeUrl(project.image_url)} alt={project.title} className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </a>
                        <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                            <h3 className="text-2xl font-bold text-[#1E201E]">{project.title}</h3>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">{project.description}</p>
                            <div className="mt-6 flex items-center gap-6">
                                {project.link && (
                                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-[#697565] transition-colors hover:text-[#4a5347]">
                                        <Globe className="size-5" />
                                        <span>Live Demo</span>
                                    </Link>
                                )}
                                {project.github_link && (
                                    <Link href={project.github_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-[#697565] transition-colors hover:text-[#4a5347]">
                                        <Github className="size-5" />
                                        <span>Source Code</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
