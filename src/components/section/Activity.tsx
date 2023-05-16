/** @jsxImportSource @emotion/react */
import { useEffect, useState, forwardRef } from 'react';
import { sectionStyle } from './Style';
import Article from 'components/article/Article';
import SectionTitle from './SectionTitle';
import { TYPE } from 'constants/SectionTypeConstants';
import { ACTIVITY } from 'constants/ArticleConstants';
import { ArticlePropsType } from 'components/article/Article';
import { SectionPropsType } from 'pages/Main';

const Activity = forwardRef<HTMLDivElement, SectionPropsType>((props, ref) => {
    const [articleProps, setArticleProps] = useState<ArticlePropsType[]>([]);
    useEffect(() => {
        setArticleProps(ACTIVITY);
    }, []);

    return (
        <section css={sectionStyle} ref={ref}>
            <SectionTitle type={TYPE.ACTIVITY}></SectionTitle>
            {articleProps.map((articleProp) => (
                <Article articleProp={articleProp} />
            ))}
        </section>
    );
});

export default Activity;
