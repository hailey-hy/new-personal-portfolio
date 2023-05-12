/** @jsxImportSource @emotion/react */
import { useState, useRef } from 'react';
import { css } from '@emotion/react';
import Aside from 'components/aside/Aside';
import Project from 'components/section/Project';
import Activity from 'components/section/Activity';

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

    const onProjectClick = () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const onActivityClick = () => {
        activityRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const projectRef = useRef<HTMLDivElement>(null);
    const activityRef = useRef<HTMLDivElement>(null);

    return (
        <div css={mainStyle}>
            {/* <Aside
                onProjectClick={onProjectClick}
                onActivityClick={onActivityClick}
            ></Aside> */}
            <section css={mainSectionStyle}>
                <Project sectionProps={projectProps} ref={projectRef}></Project>
                <Activity
                    sectionProps={articleProps}
                    ref={activityRef}
                ></Activity>
            </section>
        </div>
    );
};

export default Main;
