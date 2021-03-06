import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Welcome({ canLogin, canRegister, laravelVersion, phpVersion, ...props }) {
    console.log({ props })
    return (
        <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
            {canLogin && (
                <InertiaLink href="/dashboard" className="text-sm text-gray-700 underline">
                    Dashboard
                </InertiaLink>
            )}
        </div>
    );
}
