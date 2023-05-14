/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ArticleDetail from './ArticleDetail';
import { useEffect, useState } from 'react';
import SkillsTab from 'components/tabs/SkillsTab';
import ArticleGithubUrl from './ArticleGithubUrl';
import { TabPanelProps } from 'components/tabs/SkillsTab';
import ArticleTitleUrl from './ArticleTitleUrl';

const articleStyle = css({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '25px',
    marginBottom: '5rem',

    span: {
        lineHeight: '2.5rem',
    },
});

const spanRowStyle = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    alignItems: 'center',
});

export interface ArticlePropsType {
    title: string;
    url: string;
    githubUrl?: string;
    subtitle: string;
    term: string;
    group: string;
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
        detail,
        tabContents,
        tabLables,
    } = articleProp;

    const [urlProps, setUrlProps] = useState<string>();
    useEffect(() => {
        setUrlProps(githubUrl);
    }, [githubUrl]);

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
                    <span css={spanRowStyle}>
                        <ArticleTitleUrl title={title} url={url} />
                    </span>
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
                    <h4>{group}</h4>
                    <span css={spanRowStyle}>
                        <ArticleTitleUrl title={title} url={url} />
                        <ArticleGithubUrl githubUrl={githubUrl} title={title} />
                    </span>
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
