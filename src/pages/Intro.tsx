/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import Nav from 'components/nav/Nav';
import { NavPurposeType } from 'components/nav/Nav';

const IntroStyle = css({
    width: '100vw',
    height: '100vh',
});

const Intro = () => {
    const [navPurpose, setNavPurpose] = useState<NavPurposeType>({
        purpose: 'Intro',
    });

    return (
        <div css={IntroStyle}>
            <Nav navPurpose={navPurpose}></Nav>
        </div>
    );
};

export default Intro;
