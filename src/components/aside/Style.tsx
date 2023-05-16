/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { HIGHLITGHT } from 'styles/Colors';
import { BACKGROUND } from 'styles/Colors';

const asideBtnStyle = css({
    fontSize: 18,
    fontWeight: 400,
    ':hover': {
        color: `${HIGHLITGHT}`,
        cursor: 'pointer',
    },
});

const asideContainerStyle = css({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'start',
    margin: 'auto',
    height: '60vh',
    gap: '25px',
    top: '85px',
});

const asideStyle = css({
    background: `${BACKGROUND}`,
    height: '100vh',
    width: '20vw',
    position: 'sticky',
    top: '0px',
    bottom: '100vh',
});
export { asideBtnStyle, asideStyle, asideContainerStyle };
