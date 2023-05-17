/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState, forwardRef } from 'react';
import { sectionStyle } from './Style';
import Article from 'components/article/Article';
import SectionTitle from './SectionTitle';
import { TYPE } from 'constants/SectionTypeConstants';
import { PROJECT } from 'constants/ArticleConstants';
import { SectionPropsType } from 'pages/Main';
import { ArticlePropsType } from 'components/article/Article';

const Project = forwardRef<HTMLDivElement, SectionPropsType>((props, ref) => {
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
