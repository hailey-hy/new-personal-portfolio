/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BACKGROUND } from 'styles/Colors';
import { HIGHLITGHT } from 'styles/Colors';

const sectionStyle = css({
    display: 'flex',
    height: 'fit-content',
    backgroundColor: `${BACKGROUND}`,
    position: 'relative',
    flexDirection: 'column',
    padding: '5rem',
    paddingBottom: '0rem',
    '@media (max-width: 425px)': {
        padding: '3.2rem',
    },
});

const sectionTitleStyle = css({
    position: 'relative',
    fontSize: '35px',
    fontWeight: '700',
    borderLeft: `solid ${HIGHLITGHT} 10px`,
    paddingLeft: '1rem',
    marginBottom: '4rem',

    '@media (max-width: 425px)': {
        fontSize: '25px',
    },
});

export { sectionStyle, sectionTitleStyle };
