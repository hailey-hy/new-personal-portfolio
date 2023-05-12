/** @jsxImportSource @emotion/react */
import { useEffect, useState, forwardRef } from 'react';
import { css } from '@emotion/react';
import Article from 'components/article/Article';
import SectionTitle from './SectionTitle';
import { sectionType } from 'pages/Main';
import { ACTIVITY } from 'constants/ArticleConstants';
import { BACKGROUND } from 'styles/Colors';
import { TabPanelProps } from 'components/tabs/SkillsTab';
import { useRecoilState } from 'recoil';
import { activityState } from 'recoil/atoms/navState';

const sectionStyle = css({
    display: 'flex',
    height: 'fit-content',
    width: '100vw',
    backgroundColor: `${BACKGROUND}`,
    position: 'relative',
    flexDirection: 'column',
    padding: '5rem',
    paddingBottom: '0rem',
});

export interface SectionPropsType {
    sectionProps: sectionType;
    ref: React.MutableRefObject<HTMLDivElement>;
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

const Activity = forwardRef(({ sectionProps, ref }: SectionPropsType) => {
    const { type } = sectionProps;
    const [articleProps, setArticleProps] = useState<ArticlePropsType[]>([]);
    useEffect(() => {
        setArticleProps(ACTIVITY);
    }, [type]);

    return (
        <section css={sectionStyle} ref={ref}>
            <SectionTitle type={type}></SectionTitle>
            {articleProps.map((articleProp) => (
                <Article articleProp={articleProp} />
            ))}
        </section>
    );
});

export default Activity;
