/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import IntroText from './IntroText';

const introContainerStyle = css({
    color: 'white',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    '-webkit-box-pack': 'center',
    justifyContent: 'center',
    '-webkit-box-align': 'center',
    alignItems: 'center',
    height: '100vh',
    width: 'fit-in-content',
});

const IntroContainer = () => {
    return (
        <div css={introContainerStyle}>
            <IntroText></IntroText>
        </div>
    );
};

export default IntroContainer;
