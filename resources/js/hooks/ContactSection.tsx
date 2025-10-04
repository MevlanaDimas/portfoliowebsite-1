import TextFieldGroup from '@/components/text-field-group';
import Button from '@/components/ui/button';
import { message } from '@/routes/home';
import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';
import { FormEvent, useCallback } from 'react';

const ContactForm = () => {
    const { data: formData, setData, transform, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const handleContactSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        transform((data) => ({ ...data, _method: 'post' }));
        post(message().url, {
            onSuccess: () => reset(),
            onFinish: () => transform(data => data),
            preserveScroll: true,
        });
    }, [post, reset, transform]);

    return (
        <motion.form
            onSubmit={handleContactSubmit}
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="space-y-6 rounded-lg bg-white p-8 shadow-lg"
        >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <TextFieldGroup
                    id="name"
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={(val) => setData('name', val)}
                    error={errors.name}
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                />
                <TextFieldGroup
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    value={formData.email}
                    onChange={(val) => setData('email', val)}
                    error={errors.email}
                    placeholder="Your Email"
                    autoComplete="email"
                    required
                />
            </div>
            <div>
                <TextFieldGroup
                    id="message"
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={(val) => setData('message', val)}
                    error={errors.message}
                    placeholder="Your Message"
                    multiline
                    required
                />
            </div>
            <Button type="submit" disabled={processing} className="w-full bg-[#697565] py-3 text-base font-bold hover:bg-[#5a6656] text-white">
                {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                {processing ? 'Sending...' : 'Send Message'}
            </Button>
        </motion.form>
    );
};

export const ContactSection = () => (
    <section id="contact" className="w-full py-20 sm:py-32">
        <motion.div
            className="container mx-auto max-w-2xl px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
            <motion.h2
                className="mb-12 text-center text-3xl font-bold drop-shadow-md sm:text-4xl"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            >
                Contact Me
            </motion.h2>
            <ContactForm />
        </motion.div>
    </section>
);
