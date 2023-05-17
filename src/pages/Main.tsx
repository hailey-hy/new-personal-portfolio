/** @jsxImportSource @emotion/react */
import { useRef } from 'react';
import { css } from '@emotion/react';
import Aside from 'components/aside/Aside';
import Project from 'components/section/Project';
import Activity from 'components/section/Activity';
import Education from 'components/section/Education';

const mainStyle = css({
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    boxSizing: 'border-box',
});

const mainSectionStyle = css({
    display: 'flex',
    flexDirection: 'column',
});

export interface SectionPropsType {
    props: any;
}

const Main = () => {
    const projectRef = useRef<HTMLDivElement>(null);
    const activityRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);

    const onProjectClick = () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const onActivityClick = () => {
        activityRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const onEducationClick = () => {
        educationRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section css={mainStyle}>
            <Aside
                onProjectClick={onProjectClick}
                onActivityClick={onActivityClick}
                onEducationClick={onEducationClick}
            ></Aside>
            <section css={mainSectionStyle}>
                <Project props={'props'} ref={projectRef}></Project>
                <Activity props={'props'} ref={activityRef}></Activity>
                <Education props={'props'} ref={educationRef}></Education>
            </section>
        </section>
    );
};

export default Main;
