/** @jsxImportSource @emotion/react */
import ArticleDetail from './ArticleDetail';
import { useEffect, useState } from 'react';
import SkillsTab from 'components/tabs/SkillsTab';
import ArticleGithubUrl from './ArticleGithubUrl';
import { TabPanelProps } from 'components/tabs/SkillsTab';
import ArticleTitleUrl from './ArticleTitleUrl';
import { articleStyle, spanRowStyle } from './Style';
import ArticleTitleContainer from './ArticleTitleContainer';
import Chip from '@mui/material/Chip';

export interface ArticlePropsType {
    title: string;
    url: string;
    githubUrl?: string;
    subtitle: string;
    term: string;
    group: string;
    tool?: string;
    detail: string[];
    tabContents?: TabPanelProps[];
    tabLables?: string[];
}

interface ArticlePropType {
    articleProp: ArticlePropsType;
}

const Article = ({ articleProp }: ArticlePropType) => {
    const {
        title,
        url,
        githubUrl,
        subtitle,
        term,
        group,
        tool,
        detail,
        tabContents,
        tabLables,
    } = articleProp;

    const [detailProps, setDetailProps] = useState<string[]>([]);
    useEffect(() => {
        setDetailProps(detail);
    }, [title]);

    if (
        tabContents == undefined ||
        tabLables == undefined ||
        githubUrl == undefined
    ) {
        return (
            <article css={articleStyle}>
                <span>
                    <h4>{group}</h4>

                    <ArticleTitleContainer>
                        <ArticleTitleUrl title={title} url={url} />
                    </ArticleTitleContainer>
                    <h4>{term}</h4>
                    <h4>{subtitle}</h4>
                </span>

                {detailProps.map((detail) => (
                    <ArticleDetail detail={detail} />
                ))}
            </article>
        );
    } else {
        return (
            <article css={articleStyle}>
                <span>
                    <span css={spanRowStyle}>
                        <h4>{group}</h4>
                        <Chip label={tool} />
                    </span>
                    <ArticleTitleContainer>
                        <ArticleTitleUrl title={title} url={url} />
                        <ArticleGithubUrl githubUrl={githubUrl} title={title} />
                    </ArticleTitleContainer>
                    <h4>{term}</h4>
                    <h4>{subtitle}</h4>
                </span>

                {detailProps.map((detail) => (
                    <ArticleDetail detail={detail} />
                ))}
                <SkillsTab
                    tabContents={tabContents}
                    tabLables={tabLables}
                ></SkillsTab>
            </article>
        );
    }
};

export default Article;
