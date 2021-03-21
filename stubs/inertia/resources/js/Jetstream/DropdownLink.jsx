import React from 'react';
import { InertiaLink  } from '@inertiajs/inertia-react';

export default function DropdownLink({ children, href, as }) {
    let link = null;
    if (as === 'button') {
        link = (
            <button type="submit" className="block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                {children}
            </button>
        );
    } else if (as === 'a') {
        link = (
            <a href={href} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                {children}
            </a>
        );
    } else {
        link = (
            <InertiaLink href={href} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                {children}
            </InertiaLink>
        );
    }

    return (
        <div>
            {link}
        </div>
    );
}
