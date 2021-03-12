import React from 'react';
import AuthenticationCard from '@/Jetstream/AuthenticationCard';
import AuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo';
import ValidationErrors from '@/Jetstream/ValidationErrors';

export default function Login() {
    return (
        <AuthenticationCard logo={<AuthenticationCardLogo />}>
            <ValidationErrors errors={errors} />
        </AuthenticationCard>
    );
}
