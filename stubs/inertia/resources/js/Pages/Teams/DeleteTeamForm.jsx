import React, { useState } from 'react';
import ActionSection from '@/Jetstream/ActionSection';
import DangerButton from '@/Jetstream/DangerButton';
import Modal from '@/Jetstream/Modal';

export default function DeleteTeamForm({ className, team }) {
    const [confirmingTeamDeletion, setConfirmingTeamDeletion] = useState(false);

    return (
        <ActionSection
            title="Delete Team"
            description="Permanently delete this team."
            content={(
                <>
                    <div className="max-w-xl text-sm text-gray-600">
                        Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain.
                    </div>

                    <div className="mt-5">
                        <DangerButton onClick={() => setConfirmingTeamDeletion(true)}>
                            Delete Team
                        </DangerButton>
                    </div>

                    {/* Delete Team Confirmation Modal */}
                    <Modal show={confirmingTeamDeletion} close={(e) => {
                        e.preventDefault();
                        setConfirmingTeamDeletion(false);
                    }}>
                        test
                    </Modal>
                </>
            )}
        />
    );
}
