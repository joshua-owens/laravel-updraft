import React from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import Button from '@/Jetstream/Button';
import FormSection from '@/Jetstream/FormSection';
import Input from '@/Jetstream/Input';
import InputError from '@/Jetstream/InputError';
import Label from '@/Jetstream/Label';

export default function CreateTeamForm() {
    const { jetstream, user } = usePage().props;
    const { data, setData, post, processing, errors, reset, transform } = useForm({
        name: '',
    });
    return (
        <FormSection
            title="Team Details"
            description="Create a new team to collaborate with others on projects."
            submitted={(event) => {
                event.preventDefault();
                post(route('teams.store'), {
                    errorBag: 'createTeam',
                    preserveScroll: true,
                })
            }}
            form={(
                <>
                    <div className="col-span-6">
                        <Label value="Team Owner" />

                        <div className="flex items-center mt-2">
                            <img className="w-12 h-12 rounded-full object-cover" src={user.profile_photo_url} alt={user.name} />

                            <div className="ml-4 leading-tight">
                                <div>{user.name}</div>
                                <div className="text-gray-700 text-sm">{user.email}</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                        <Label htmlFor="name" value="Team Name" />
                        <Input id="name" type="text" className="mt-1 block w-full" autoFocus onChange={(e) => setData('name', e.target.value)} />
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                </>
            )}
            actions={(
                <Button className={processing ? 'opacity-25': ''} disabled={processing}>
                    Create
                </Button>
            )}
        />
    );
}
