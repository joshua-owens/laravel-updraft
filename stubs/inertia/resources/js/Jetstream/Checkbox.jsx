import React from 'react';

export default function Checkbox(props) {
    return (
        <input type="checkbox" {...props} className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    );
}
