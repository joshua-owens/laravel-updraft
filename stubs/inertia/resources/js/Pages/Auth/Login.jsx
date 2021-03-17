import React from 'react';
import { InertiaLink, useForm } from '@inertiajs/inertia-react';
import AuthenticationCard from '@/Jetstream/AuthenticationCard';
import AuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo';
import ValidationErrors from '@/Jetstream/ValidationErrors';
import Input from '@/Jetstream/Input';
import Label from '@/Jetstream/Label';
import Checkbox from '@/Jetstream/Checkbox';
import Button from '@/Jetstream/Button';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset, transform } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    function submit(event) {
        event.preventDefault();
        transform((data) => ({
            ...data,
            remember: data.remember ? 'on' : '',
        }));
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    }

    return (
        <AuthenticationCard logo={<AuthenticationCardLogo />}>
            <ValidationErrors errors={errors} />
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <form onSubmit={submit}>
                <div>
                    <Label htmlFor="email" value="Email" />
                    <Input id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        required autoFocus />
                </div>
                <div className="mt-4">
                    <Label htmlFor="password" value="Password" />
                    <Input id="password"
                        type="password"
                        className="mt-1 block w-full"
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                        required autoFocus autoComplete="new-password" />
                </div>
                <div className="block mt-4">
                    <Label className="flex items-center">
                        <Checkbox name="remember"
                            value={data.remember}
                            onChange={e => setData('remember', e.target.value)} />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </Label>
                </div>
                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <InertiaLink href={route('password.request')} className="underline text-sm text-gray-600 hover:text-gray-900">
                            Forgot your password?
                        </InertiaLink>
                    )}
                    <Button className={processing ? 'opacity-25 ml-4' : 'ml-4'} disabled={processing}>
                        Log in
                    </Button>
                </div>
            </form>
        </AuthenticationCard>
    );
}
