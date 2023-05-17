/** @jsxImportSource @emotion/react */
import { useEffect, useState, forwardRef } from 'react';
import { sectionStyle } from './Style';
import Article from 'components/article/Article';
import SectionTitle from './SectionTitle';
import { ArticlePropsType } from 'components/article/Article';
import { SectionPropsType } from 'pages/Main';
import { EDUCATION } from 'constants/ArticleConstants';
import { TYPE } from 'constants/SectionTypeConstants';

const Education = forwardRef<HTMLDivElement, SectionPropsType>((props, ref) => {
    const [articleProps, setArticleProps] = useState<ArticlePropsType[]>([]);
    useEffect(() => {
        setArticleProps(EDUCATION);
    }, []);

    return (
        <section css={sectionStyle} ref={ref}>
            <SectionTitle type={TYPE.EDUCATION}></SectionTitle>
            {articleProps.map((articleProp) => (
                <Article articleProp={articleProp} />
            ))}
        </section>
    );
});

export default Education;
