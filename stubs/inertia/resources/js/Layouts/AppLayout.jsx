import React from 'react';
import Banner from '@/Jetstream/Banner'

export default function AppLayout({ children }) {
    return (
        <div>
            <Banner />
            {children}
        </div>
    );
}
