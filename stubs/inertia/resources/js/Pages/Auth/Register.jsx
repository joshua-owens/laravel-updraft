import React from 'react';
import { InertiaLink, useForm  } from '@inertiajs/inertia-react';
import AuthenticationCard from '@/Jetstream/AuthenticationCard';
import ValidationErrors from '@/Jetstream/ValidationErrors';
import Input from '@/Jetstream/Input';
import Label from '@/Jetstream/Label';
import Checkbox from '@/Jetstream/Checkbox';
import Button from '@/Jetstream/Button';

export default function Register({ jetstream }) {
    const { hasTermsAndPrivacyPolicyFeature } = jetstream;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    function submit(e) {
        e.preventDefault()
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation')
        });
    }

    return (
        <AuthenticationCard>
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <div>
                    <Label htmlFor="name" value="Name" />
                    <Input id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        required autoFocus autoComplete="name" />
                </div>
                <div className="mt-4">
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
                <div className="mt-4">
                    <Label htmlFor="password_confirmation" value="Confirm Password" />
                    <Input id="password_confirmation"
                        type="password"
                        className="mt-1 block w-full"
                        value={data.password_confirmation}
                        onChange={e => setData('password_confirmation', e.target.value)}
                        required autoFocus autoComplete="new-password" />
                </div>
                {hasTermsAndPrivacyPolicyFeature && (
                    <div className="mt-4">
                        <Label htmlFor="terms">
                            <div className="flex items-center">
                                <Checkbox name="terms"
                                    id="terms"
                                    value={data.terms}
                                    onChange={e => setData('terms', e.target.value)} />
                            </div>
                            <div className="ml-2">
                            I agree to the <a target="_blank" href={route('terms.show')} className="underline text-sm text-gray-600 hover:text-gray-900">Terms of Service</a> and <a target="_blank" href={route('policy.show')} className="underline text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
                            </div>
                        </Label>
                    </div>
                )}
                <div className="flex items-center justify-end mt-4">
                    <InertiaLink href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </InertiaLink>
                    <Button className={processing ? 'opacity-25' : ''} disabled={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </AuthenticationCard>
    );
}
