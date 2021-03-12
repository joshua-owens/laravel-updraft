import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import PageContext from '@/Context/PageContext';

export default function Dashboard(props) {
    return (
        <PageContext.Provider value={props}>
            <AppLayout>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                            Welcome
                        </div>
                    </div>
                </div>
            </AppLayout>
        </PageContext.Provider>
    );
}
