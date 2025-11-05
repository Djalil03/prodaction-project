import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileData.test', () => {
    test('should return form', () => {
        const data = {
            first: 'first',
            lastname: 'lastname',
            age: 25,
            city: 'city',
            username: 'username',
            avatar: 'avatar',
            currency: Currency.KZT,
            country: Country.Kazakhstan,
        };
        const state: DeepPartial<StateSchema> = { 
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
