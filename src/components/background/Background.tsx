/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BackgroundImg from './BackgroundImg';

const backgroundStyle = css({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    background: 'black',
    img: {
        objectFit: 'cover',
        height: '100vh',
        width: '100vw',
        opacity: 0.8,
    },
});

const Background = () => {
    return (
        <div css={backgroundStyle}>
            <BackgroundImg></BackgroundImg>
        </div>
    );
};

export default Background;
