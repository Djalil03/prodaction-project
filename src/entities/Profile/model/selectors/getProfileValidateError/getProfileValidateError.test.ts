import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateError';
import { ValidateProfileErrors } from '../../types/profile';

describe('getProfileData.test', () => {
    test('should return return validation error with filled state', () => {
        const state: DeepPartial<StateSchema> = { 
            profile: {
                validateErrors: [ValidateProfileErrors.NO_DATA],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileErrors.NO_DATA]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
