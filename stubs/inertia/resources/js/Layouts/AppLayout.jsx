import React from 'react';
import { InertiaLink  } from '@inertiajs/inertia-react';
import Banner from '@/Jetstream/Banner'
import ApplicationMark from '@/Jetstream/ApplicationMark'
import NavLink from '@/Jetstream/NavLink';

export default function AppLayout({ children, header }) {
    return (
        <div>
            <Banner />
            <div className="min-h-screen bg-gray-100">
                <nav className="bg-white border-b border-gray-100">
                    {/* Primary Navigation Menu */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                {/* Logo */}
                                <div className="flex-shrink-0 flex items-center">
                                    <InertiaLink href={route('dashboard')}>
                                        <ApplicationMark className="block h-9 w-auto" />
                                    </InertiaLink>
                                </div>

                                {/* Navigation Links */}
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                        Dashboard
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {header && (<header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>)}

                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}
