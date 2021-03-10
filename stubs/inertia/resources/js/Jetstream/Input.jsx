import React from 'react';

export default function Input(props) {
    return (
        <input {...props} className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" />
    );
}