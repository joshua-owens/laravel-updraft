import React from 'react';

export default function Input({ type = 'text', className, ...props}) {
    return (
        <input type={type} {...props} className={className + " border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"} />
    );
}
