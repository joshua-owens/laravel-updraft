import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react'

export default function Banner() {
    const [show, setShow] = useState(true);
    const { jetstream } = usePage().props;
    const style = jetstream.flash?.bannerStyle || 'success';
    const message = jetstream.flash?.banner || '';

    function handleClick(event) {
        event.preventDefault();
        setShow(false);
    }

    if (show && message) {
        return (
            <div>
                <div className={style == 'success' ? 'bg-indigo-500' : 'bg-red-700'}>
                    <div className="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between flex-wrap">
                            <div className="w-0 flex-1 flex items-center min-w-0">
                                <span className={"flex p-2 rounded-lg " + (style == 'success' ? 'bg-indigo-600' : 'bg-red-600')}>
                                    {style == 'success'
                                        ? (
                                            <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        )
                                        : (
                                            <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="style == 'danger'">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                        )}
                                </span>

                                <p className="ml-3 font-medium text-sm text-white truncate">
                                    {message}
                                </p>
                            </div>

                            <div className="flex-shrink-0 sm:ml-3">
                                <button
                                    type="button"
                                    className={"-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition ease-in-out duration-150 " + (style == 'success' ? 'hover:bg-indigo-600 focus:bg-indigo-600' : 'hover:bg-red-600 focus:bg-red-600')}
                                    aria-label="Dismiss"
                                    onClick={(e) => handleClick(e)}
                                >
                                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}