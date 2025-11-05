import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileErrors } from '../../types/profile';

const profileValue = {
    first: 'Джалиль',
    lastname: 'Мукашов',
    age: 22,
    currency: Currency.KZT,
    country: Country.Kazakhstan,
    city: 'Astana',
    username: 'admin',
    avatar: 'https://static.wikia.nocookie.net/onepiece/images/4/4f/Portgas_D._Ace_Anime_Infobox.png',
};

describe('updateProfileData.test', () => {
    test('success fetch profile data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileValue,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileValue }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileValue);
    });

    test('error update profile data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileValue,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...profileValue, lastname: '' },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });
});
