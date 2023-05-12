/** @jsxImportSource @emotion/react */
import { useEffect, useState, forwardRef } from 'react';
import { css } from '@emotion/react';
import Article from 'components/article/Article';
import SectionTitle from './SectionTitle';
import { TYPE } from 'constants/SectionTypeConstants';
import { PROJECT } from 'constants/ArticleConstants';
import { BACKGROUND } from 'styles/Colors';
import { SectionPropsType } from 'pages/Main';
import { ArticlePropsType } from 'components/article/Article';

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

const Project = forwardRef(({ ref }: SectionPropsType) => {
    const [articleProps, setArticleProps] = useState<ArticlePropsType[]>([]);
    useEffect(() => {
        setArticleProps(PROJECT);
    }, []);
    return (
        <section css={sectionStyle} ref={ref}>
            <SectionTitle type={TYPE.PROJECT}></SectionTitle>
            {articleProps.map((articleProp) => (
                <Article articleProp={articleProp} />
            ))}
        </section>
    );
});

export default Project;
