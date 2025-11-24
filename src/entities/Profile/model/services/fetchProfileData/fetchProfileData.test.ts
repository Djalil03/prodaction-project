import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData.test', () => {
    test('success fetch profile data', async () => {
        const profileValue = {
            first: 'Джалиль',
            lastname: 'Мукашов',
            age: 22,
            currency: 'KZT',
            country: 'Kazakhstan',
            city: 'Astana',
            username: 'admin',
            avatar: 'https://static.wikia.nocookie.net/onepiece/images/4/4f/Portgas_D._Ace_Anime_Infobox.png',
        };

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileValue }));
        const result = await thunk.callThunk('1');
        
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileValue);
    });

    test('error fetch profile data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Error');
    });
});
