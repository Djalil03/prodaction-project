import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Text',
            user: { id: '1', username: 'Lucci' },
        },
        {
            id: '2',
            text: 'Hello world',
            user: { id: '2', username: 'Zorojuro' },
        },
    ],
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
    comments: [
        {
            id: '1',
            text: 'Text',
            user: { id: '1', username: 'Lucci' },
        },
        {
            id: '2',
            text: 'Hello world',
            user: { id: '2', username: 'Zorojuro' },
        },
    ],
};
