import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../types/profile';

const profileData = {
    first: 'Джалиль',
    lastname: 'Мукашов',
    age: 22,
    country: Country.Kazakhstan,
};

describe('validateProfileData.test', () => {
    test('success validate profile data', async () => {
        const result = validateProfileData(profileData);

        expect(result).toEqual([]);
    });

    test('without first and lastname', async () => {
        const result = validateProfileData({ ...profileData, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...profileData, age: 22.2 });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...profileData, country: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY,
        ]);
    });
});
