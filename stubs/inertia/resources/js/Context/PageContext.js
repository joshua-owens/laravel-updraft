import { createContext } from 'react';

export default createContext({
    jetstream: {
        canCreateTeams: false,
        canManageTwoFactorAuthentication: false,
        canUpdatePassword: false,
        canUpdateProfileInformation: false,
        flash: [],
        hasAccountDeletionFeatures: false,
        hasApiFeatures: false,
        hasTeamFeatures: false,
        hasTermsAndPrivacyPolicyFeature: false,
        managesProfilePhotos: false,
    },
    user: {},
    errors: {},
    errorBags: [],
});
