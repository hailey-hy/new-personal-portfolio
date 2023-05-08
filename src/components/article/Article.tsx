/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ArticleDetail from './ArticleDetail';
import { ArticlePropsType } from './Section';
import { useEffect, useState } from 'react';
import SkillsTab from 'components/tabs/SkillsTab';
import ArticleGithubUrl from './ArticleGithubUrl';

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
});

interface ArticlePropType {
    articleProp: ArticlePropsType;
}

const Article = ({ articleProp }: ArticlePropType) => {
    const {
        title,
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
                        <h2>{title}</h2>
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
                        <h2>{title}</h2>
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
