/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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

export { backgroundStyle };
