import React from 'react';
import { nanoid } from 'nanoid';

export default function ValidationErrors({ errors }) {
    if (Object.keys(errors).length > 0) {
        return (
            <div className="mb-4">
                <div className="font-medium text-red-600">Whoops! Something went wrong.</div>

                <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                    {Object.keys(errors).map((key) => <li key={nanoid()}>{errors[key]}</li>)}
                </ul>
            </div>
        );
    }

    return null;
}
