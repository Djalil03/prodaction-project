import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, idx) => (
        <ArticleListItemSkeleton className={cls.card} key={idx} view={view} />
    ));

export const ArticleList = (props: ArticleListProps) => {
    const { 
        className, 
        articles, 
        isLoading, 
        view = ArticleView.SMALL,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                { getSkeletons(view) }
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem 
            key={article.id}
            article={article} 
            view={view}
            className={cls.card}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            { articles?.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    );
};
