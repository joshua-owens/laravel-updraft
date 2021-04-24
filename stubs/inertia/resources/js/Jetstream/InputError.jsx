import React from 'react';

export default function InputError({ className, message }) {
    if (message) {
        return (
            <div className={className}>
                <p className="text-sm text-red-600">
                    {message}
                </p>
            </div>
        );
    }

    return null;
}