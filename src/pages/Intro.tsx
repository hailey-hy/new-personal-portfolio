/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import Background from 'components/background/Background';
import IntroTitle from 'components/intro-text/IntroText';
import IntroContainer from 'components/intro-text/IntroContainer';

const IntroStyle = css({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
});

const Intro = () => {
    return (
        <div css={IntroStyle}>
            <Background></Background>
            <IntroContainer></IntroContainer>
        </div>
    );
};

export default Intro;
