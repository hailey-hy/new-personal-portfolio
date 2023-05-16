/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BACKGROUND } from 'styles/Colors';
import { HIGHLITGHT } from 'styles/Colors';

const sectionStyle = css({
    display: 'flex',
    height: 'fit-content',
    width: '80vw',
    backgroundColor: `${BACKGROUND}`,
    position: 'relative',
    flexDirection: 'column',
    padding: '5rem',
    paddingBottom: '0rem',
});

const sectionTitleStyle = css({
    position: 'relative',
    fontSize: '35px',
    fontWeight: '700',
    borderLeft: `solid ${HIGHLITGHT} 10px`,
    paddingLeft: '1rem',
    marginBottom: '4rem',
});

export { sectionStyle, sectionTitleStyle };
