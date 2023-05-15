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

const asideStyle = css({
    background: `${BACKGROUND}`,
    height: '100vh',
    width: '20vw',
    padding: '100px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '25px',
    position: 'sticky',
    top: '0px',
    bottom: '100vh',
});
export { asideBtnStyle, asideStyle };
