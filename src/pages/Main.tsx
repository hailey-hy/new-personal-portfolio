/** @jsxImportSource @emotion/react */
import { useRef } from 'react';
import { css } from '@emotion/react';
import Aside from 'components/aside/Aside';
import Project from 'components/section/Project';
import Activity from 'components/section/Activity';
import Education from 'components/section/Education';
import { useMediaQuery } from '@mui/material';

const mainStyle = css({
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    boxSizing: 'border-box',
});

const mainSectionStyle = css({
    display: 'flex',
    flexDirection: 'column',
    width: '80vw',
    '@media (max-width: 750px)': {
        width: '100vw',
    },
});

export interface SectionPropsType {
    props: any;
}

const Main = () => {
    const projectRef = useRef<HTMLDivElement>(null);
    const activityRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);

    const onIntroClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const onProjectClick = () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const onActivityClick = () => {
        activityRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const onEducationClick = () => {
        educationRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const onClickEvents = [
        onIntroClick,
        onProjectClick,
        onActivityClick,
        onEducationClick,
    ];

    const match = useMediaQuery('(min-width:750px)');

    return (
        <section css={mainStyle}>
            {match && <Aside onClickEvents={onClickEvents}></Aside>}

            <section css={mainSectionStyle}>
                <Project props={'props'} ref={projectRef}></Project>
                <Activity props={'props'} ref={activityRef}></Activity>
                <Education props={'props'} ref={educationRef}></Education>
            </section>
        </section>
    );
};

export default Main;
