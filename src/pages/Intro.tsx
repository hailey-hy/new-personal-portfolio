/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Nav from 'components/nav/Nav';

const IntroStyle = css({
    width: '100vw',
    height: '100vh',
});

const Intro = () => {
    return (
        <div css={IntroStyle}>
            <Nav></Nav>
        </div>
    );
};

export default Intro;
