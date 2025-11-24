import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string | undefined, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const { 
            extra, 
            rejectWithValue, 
            getState,
            dispatch,
        } = thunkAPI;
        const userData = getUserAuthData(getState());
        const articleId = getArticleDetailsData(getState())?.id;

        if (!userData || !text || !articleId) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post('/comments', {
                articleId,
                userId: userData.id,
                text,
            });

            if (!response.data) { 
                throw new Error();
            } 

            dispatch(fetchCommentsByArticleId(articleId));

            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
