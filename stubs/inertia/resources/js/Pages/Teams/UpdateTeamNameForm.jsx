import React from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import ActionMessage from '@/Jetstream/ActionMessage';
import Button from '@/Jetstream/Button';
import FormSection from '@/Jetstream/FormSection';
import Label from '@/Jetstream/Label';
import Input from '@/Jetstream/Input';
import InputError from '@/Jetstream/InputError';

export default function UpdateTeamNameForm({ team, permissions }) {
    const { data, setData, put, processing, errors, reset, transform, recentlySuccessful } = useForm({
        name: '',
    });
    return (
        <FormSection
            title="Team Name"
            description="The team's name and owner information."
            submitted={(event) => {
                event.preventDefault();
                put(route('teams.update', team), {
                    errorBag: 'updateTeamName',
                    preserveScroll: true,
                })
            }}
            form={(
                <>
                    {/* Team Owner Information */}
                    <div className="col-span-6">
                        <Label value="Team Owner" />

                        <div className="flex items-center mt-2">
                            <img className="w-12 h-12 rounded-full object-cover" src={team.owner.profile_photo_url} alt={team.owner.name} />

                            <div className="ml-4 leading-tight">
                                <div>{team.owner.name}</div>
                                <div className="text-gray-700 text-sm">{team.owner.email}</div>
                            </div>
                        </div>
                    </div>

                    {/* Team Name*/}
                    <div className="col-span-6 sm:col-span-4">
                        <Label htmlFor="name" value="Team Name" />
                        <Input
                            id="name"
                            type="text"
                            className="mt-1 block w-full"
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={!permissions.canUpdateTeam}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                </>
            )}
            actions={(
                <>
                    {permissions.canUpdateTeam && (
                        <>
                            <ActionMessage on={recentlySuccessful} className="mr-3">
                                Saved.
                            </ActionMessage>

                            <Button className={processing ? 'opacity-25': ''} disabled={processing}>
                                Save
                            </Button>
                        </>
                    )}
                </>
            )}
        />
    );
}
