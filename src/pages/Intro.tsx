/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import Background from 'components/background/Background';

const IntroStyle = css({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
});

const Intro = () => {
    return (
        <div css={IntroStyle}>
            <Background></Background>
        </div>
    );
};

export default Intro;
