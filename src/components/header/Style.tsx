/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyle = css({
    color: 'white',
    ':hover': {
        background: 'rgba(255, 255, 255, 0.3)',
    },
    borderRadius: '10rem',
});

const headerContainerStyle = css({
    display: 'flex',
    position: 'absolute',
    height: '3rem',
    gap: '2rem',
    padding: '3rem',
    alignItems: 'center',
    zIndex: 100,
});

export { buttonStyle, headerContainerStyle };
