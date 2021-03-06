import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

function Links({ user, canRegister }) {
    if (user) {
        return (
            <InertiaLink href="/dashboard" className="text-sm text-gray-700 underline">
                Dashboard
            </InertiaLink>
        );
    }

    return (
        <>
            <InertiaLink href={route('login')} className="text-sm text-gray-700 underline">
               Login
            </InertiaLink>
            {canRegister && (<InertiaLink href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                Register
            </InertiaLink>)}
        </>
    );
}

export default function Welcome({ canLogin, canRegister, laravelVersion, phpVersion, user }) {
    return (
        <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
            {canLogin && (
                <Links user={user} canRegister={canRegister} />
            )}
        </div>
    );
}
