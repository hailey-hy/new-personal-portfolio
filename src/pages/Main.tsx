/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import Nav from 'components/aside/Aside';
import Section from 'components/article/Section';

const mainStyle = css({
    display: 'flex',
    flexDirection: 'row',
});

const mainSectionStyle = css({
    display: 'flex',
    flexDirection: 'column',
});

export interface sectionType {
    type: string;
}

const Main = () => {
    const [projectProps, setProjectProps] = useState<sectionType>({
        type: 'PROJECT',
    });
    const [articleProps, setArticleProps] = useState<sectionType>({
        type: 'ACTIVITY',
    });
    return (
        <div css={mainStyle}>
            <Nav></Nav>
            <section css={mainSectionStyle}>
                <Section sectionProps={projectProps}></Section>
                <Section sectionProps={articleProps}></Section>
            </section>
        </div>
    );
};

export default Main;
