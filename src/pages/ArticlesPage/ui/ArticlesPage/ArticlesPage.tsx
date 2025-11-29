import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import cls from './ArticlesPage.module.scss';
import { articlePageAction, articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesError, getArticlesIsLoading, getArticlesView } from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducerList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesView);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);

    const onChangeView = useCallback((newView) => {
        dispatch(articlePageAction.setView(newView));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlePageAction.initState());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector 
                    view={view} 
                    onViewClick={onChangeView} 
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
        
    );
};

export default memo(ArticlesPage);
