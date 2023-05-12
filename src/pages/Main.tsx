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

export interface SectionPropsType {
    ref: React.MutableRefObject<HTMLDivElement>;
}

const Main = () => {
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
                <Project ref={projectRef}></Project>
                <Activity ref={activityRef}></Activity>
            </section>
        </div>
    );
};

export default Main;
