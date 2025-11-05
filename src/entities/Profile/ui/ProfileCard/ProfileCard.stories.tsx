import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import StorybookAvatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'John',
        lastname: 'Doe',
        age: 30,
        city: 'New York',
        country: Country.Kazakhstan,
        currency: Currency.KZT,
        avatar: StorybookAvatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'Error loading profile',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
