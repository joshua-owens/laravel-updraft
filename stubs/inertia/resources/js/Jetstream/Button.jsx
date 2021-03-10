import React from 'react';

export default function Button({ type = 'submit', children, className = '', disabled = false }) {
    return (
        <button type={type}
            className={className + "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
