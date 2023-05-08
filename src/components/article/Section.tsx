/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Article from 'components/article/Article';
import SectionTitle from './SectionTitle';
import { sectionType } from 'pages/Main';
import { Project } from 'constants/ArticleConstants';
import { Activity } from 'constants/ArticleConstants';
import { BACKGROUND } from 'styles/Colors';
import { TabPanelProps } from 'components/tabs/SkillsTab';

const sectionStyle = css({
    display: 'flex',
    height: 'fit-content',
    width: '80vw',
    backgroundColor: `${BACKGROUND}`,
    position: 'relative',
    flexDirection: 'column',
    padding: '5rem',
    paddingBottom: '0rem',
});

export interface SectionPropsType {
    sectionProps: sectionType;
}

export interface ArticlePropsType {
    title: string;
    githubUrl?: string;
    subtitle: string;
    term: string;
    group: string;
    detail: string[];
    tabContents?: TabPanelProps[];
    tabLables?: string[];
}

const Section = ({ sectionProps }: SectionPropsType) => {
    const { type } = sectionProps;
    const [articleProps, setArticleProps] = useState<ArticlePropsType[]>([]);
    useEffect(() => {
        if (type == 'PROJECT') {
            setArticleProps(Project);
        } else {
            setArticleProps(Activity);
        }
    }, [type]);
    return (
        <section css={sectionStyle}>
            <SectionTitle sectionProps={sectionProps}></SectionTitle>
            {articleProps.map((articleProp) => (
                <Article articleProp={articleProp} />
            ))}
        </section>
    );
};

export default Section;
