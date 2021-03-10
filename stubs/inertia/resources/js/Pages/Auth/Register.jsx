import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import AuthenticationCard from '@/Jetstream/AuthenticationCard';
import ValidationErrors from '@/Jetstream/ValidationErrors';

export default function Register() {
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
        </AuthenticationCard>
    );
}
