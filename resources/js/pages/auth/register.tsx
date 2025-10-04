import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import { login } from '@/routes';
import { Form, Head, usePage } from '@inertiajs/react';
import { LoaderCircle, TriangleAlert } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useEffect, useState } from 'react';

export default function Register() {
        const { flash } = usePage<{ flash?: { success?: string; error?: string} }>().props;
        const flashMessage = flash?.success || flash?.error;
        const [showAlert, setShowAlert] = useState(flash ? true : false);
    
        useEffect(() => {
            if (flashMessage) {
                const timer = setTimeout(() => setShowAlert(false), 3000);
    
                return () => clearTimeout(timer);
            }
        }, [flashMessage]);

    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <Head title="Register" />
            <Form
                {...RegisteredUserController.store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing={true}
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        {showAlert && flashMessage && (
                            <div className='flex flex-col bg-red-600/25 border-none justify-center items-center rounded-2xl p-4'>
                                <TriangleAlert size="50" className='text-red-600'/>
                                <Alert variant='destructive' className='flex flex-col border-none justify-center items-center text-red-600'>
                                    <AlertTitle className='font-bold text-2xl text-center p-1'>Errors</AlertTitle>
                                    <AlertDescription className='text-center items-center font-bold text-red-600'>{flashMessage}</AlertDescription>
                                </Alert>
                            </div>
                        )}
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    name="name"
                                    placeholder="Full name"
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    name="email"
                                    placeholder="email@example.com"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password_confirmation">Confirm password</Label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    name="password_confirmation"
                                    placeholder="Confirm password"
                                />
                                <InputError message={errors.password_confirmation} />
                            </div>

                            <Button type="submit" className="mt-2 w-full cursor-pointer" tabIndex={5} {...(processing ? { 'inert': 'true' } : {})}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Create account
                            </Button>
                        </div>

                        <div className="text-center text-sm text-muted-foreground">
                            Already have an account?{' '}
                            <TextLink href={login()} tabIndex={6}>
                                Log in
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
