import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import SectionBorder from '@/Jetstream/SectionBorder';
import UpdateTeamNameForm from './UpdateTeamNameForm';
import DeleteTeamForm from './DeleteTeamForm';

export default function Show({ team, availableRoles, permissions }) {
    const showDeleteForm = permissions.canDeleteTeam && ! team.personal_team;
    return (
        <AppLayout
            header={(
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Team Settings
                </h2>
            )}
        >
            <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <UpdateTeamNameForm team={team} permissions={permissions} />
            {/* Team member manager */}
                {showDeleteForm && (
                    <>
                        <SectionBorder />
                        <DeleteTeamForm className="mt-10 sm:mt-0" team={team} />
                    </>
                )}
            </div>
        </AppLayout>
    );
}
