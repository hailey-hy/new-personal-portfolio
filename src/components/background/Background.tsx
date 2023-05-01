/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BackgroundImg from './BackgroundImg';

const backgroundStyle = css({
    width: '80vw',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    img: {
        objectFit: 'cover',
        height: '100vh',
        width: '100vw',
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
