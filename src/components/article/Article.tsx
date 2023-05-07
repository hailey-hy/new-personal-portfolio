/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ArticleDetail from './ArticleDetail';
import { ArticlePropsType } from './Section';
import { useEffect, useState } from 'react';
import SkillsTab from 'components/tabs/SkillsTab';
import { TabPanelProps } from 'components/tabs/SkillsTab';

const articleStyle = css({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '25px',
    marginBottom: '5rem',

    span: {
        lineHeight: '2.5rem',
    },
});

interface ArticlePropType {
    articleProp: ArticlePropsType;
}

const Article = ({ articleProp }: ArticlePropType) => {
    const { title, subtitle, term, group, detail, tabContents, tabLables } =
        articleProp;
    const [detailProps, setDetailProps] = useState<string[]>([]);
    useEffect(() => {
        setDetailProps(detail);
    }, [title]);

    if (tabContents == undefined || tabLables == undefined) {
        return (
            <article css={articleStyle}>
                <span>
                    <h4>{group}</h4>
                    <h2>{title}</h2>
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
                    <h2>{title}</h2>
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
