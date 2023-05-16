/** @jsxImportSource @emotion/react */
import { useRef } from 'react';
import { css } from '@emotion/react';
import Aside from 'components/aside/Aside';
import Project from 'components/section/Project';
import Activity from 'components/section/Activity';

const mainStyle = css({
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
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

    const onProjectClick = () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const onActivityClick = () => {
        activityRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div css={mainStyle}>
            <Aside
                onProjectClick={onProjectClick}
                onActivityClick={onActivityClick}
            ></Aside>
            <section css={mainSectionStyle}>
                <Project props={'props'} ref={projectRef}></Project>
                <Activity props={'props'} ref={activityRef}></Activity>
            </section>
        </div>
    );
};

export default Main;
