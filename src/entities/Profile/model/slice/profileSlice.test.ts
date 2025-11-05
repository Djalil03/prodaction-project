import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    first: 'Джалиль',
    lastname: 'Мукашов',
    age: 22,
    currency: Currency.KZT,
    country: Country.Kazakhstan,
    city: 'Astana',
    username: 'admin',
    avatar: 'https://static.wikia.nocookie.net/onepiece/images/4/4f/Portgas_D._Ace_Anime_Infobox.png',
};

describe('loginSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({ 
                readonly: true, 
                form: data, 
                validateErrors: undefined, 
                data,
            });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '123456' })))
            .toEqual({ 
                form: {
                    username: '123456',
                }, 
            });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { 
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({ 
                isLoading: true,
                validateErrors: undefined,
            });
    });

    test('test update profile service fullfilled', () => {
        const state: DeepPartial<ProfileSchema> = { 
            isLoading: true,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({ 
                isLoading: false,
                validateErrors: undefined,
                readonly: true,
                data,
                form: data,
            });
    });
});
