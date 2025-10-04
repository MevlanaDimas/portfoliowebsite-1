// Components
import { home, logout } from '@/routes';
import { send } from '@/routes/verification';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { useEffect } from 'react';

import TextLink from '@/components/text-link';
import Button from '@/components/ui/button';
import AuthLayout from '@/layouts/auth-layout';
import React from 'react';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    useEffect(() => {
        if (status !== 'verification-link-sent') {
            post(send().url);
        }
    }, [post, status]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(send().url);
    };

    return (
        <AuthLayout
            title="Verify email"
            description="We've sent a verification link to your email. If you didn't receive it, click the button below to resend."
        >
            <Head title="Email verification" />

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address you provided during registration.
                </div>
            )}

            <form onSubmit={submit} className="space-y-6 text-center">
                <Button disabled={processing} variant="secondary" className='cursor-pointer'>
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    Resend verification email
                </Button>

                <div className="my-10 flex flex-row items-center justify-center gap-20 text-center text-muted-foreground">
                    <TextLink href={home().url} className="block text-sm cursor-pointer">
                        Home
                    </TextLink>

                    <TextLink href={logout().url} method="post" as="button" className="block text-sm cursor-pointer">
                        Log out
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
