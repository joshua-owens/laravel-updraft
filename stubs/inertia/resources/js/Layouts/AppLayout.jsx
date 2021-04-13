import React, { useState } from 'react';
import { InertiaLink, usePage, useForm  } from '@inertiajs/inertia-react';
import Banner from '@/Jetstream/Banner'
import ApplicationMark from '@/Jetstream/ApplicationMark'
import NavLink from '@/Jetstream/NavLink';
import Dropdown from '@/Jetstream/Dropdown';
import DropdownLink from '@/Jetstream/DropdownLink';
import ResponsiveNavLink from '@/Jetstream/ResponsiveNavLink';

export default function AppLayout({ children, header }) {
    const { jetstream, profile_photo_url, user } = usePage().props;
    const { post } = useForm();
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

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


                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    {/* Teams Dropdown */}
                                </div>


                                {/* Settings Dropdown */}
                                <div className="ml-3 relative">
                                    <Dropdown
                                        align="right"
                                        width="48"
                                        trigger={(
                                            <>
                                                {jetstream.managesProfilePhotos && (
                                                    <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                                                        <img className="h-8 w-8 rounded-full object-cover" src={profile_photo_url} alt={user.name} />
                                                    </button>
                                                )}

                                                {!jetstream.managesProfilePhotos && (
                                                    <span className="inline-flex rounded-md">
                                                        <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                                            {user.name}
                                                            <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                )}
                                            </>
                                        )}
                                        content={(
                                            <>
                                                {/* Account Management */}
                                                <div className="block px-4 py-2 text-xs text-gray-400">
                                                    Manage Account
                                                </div>

                                                <DropdownLink href={route('profile.show')}>
                                                    Profile
                                                </DropdownLink>

                                                {jetstream.hasApiFeatures && (
                                                    <DropdownLink href={route('api-tokens.index')}>
                                                        API Tokens
                                                    </DropdownLink>
                                                )}

                                                <div className="border-t border-gray-100"></div>

                                                {/* Authentication */}
                                                <form onSubmit={() => post(route('logout'))}>
                                                    <DropdownLink as="button">
                                                        Log Out
                                                    </DropdownLink>
                                                </form>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                            
                            {/* Hamburger */}
                            <div className="-mr-2 flex items-center sm:hidden">
                                <button 
                                    onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)} 
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
                                >
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path className={showingNavigationDropdown ? 'hidden' : 'inline-flex'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        <path className={showingNavigationDropdown ? 'inline-flex' :'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Responsive Navigation Menu */}
                    <div className={'sm:hidden ' + (showingNavigationDropdown ? 'block' : 'hidden')}>
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        {/* Responsive Settings Option */}
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="flex items-center px-4">
                                {jetstream.managesProfilePhotos && (<div className="flex-shrink-0 mr-3">
                                    <img className="h-10 w-10 rounded-full object-cover" src={profile_photo_url} alt={user.name}  />
                                </div>)}

                                <div>
                                    <div className="font-medium text-base text-gray-800">{user.name}</div>
                                    <div className="font-medium text-sm text-gray-500">{user.email}</div>
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('profile.show')} active={route().current('profile.show')}>
                                    Profile
                                </ResponsiveNavLink>

                                {jetstream.hasApiFeatures && (
                                    <ResponsiveNavLink href={route('api-tokens.index')} active={route().current('api-tokens.index')}>
                                        API Tokens
                                    </ResponsiveNavLink>
                                )}

                                {/* Authentication */}
                                <form onSubmit={() => post(route('logout'))}>
                                    <DropdownLink as="button">
                                        Log Out
                                    </DropdownLink>
                                </form>
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
