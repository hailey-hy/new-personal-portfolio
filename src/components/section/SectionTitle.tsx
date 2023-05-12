/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { HIGHLITGHT } from 'styles/Colors';

const sectionTitleStyle = css({
    position: 'relative',
    fontSize: '35px',
    fontWeight: '700',
    borderLeft: `solid ${HIGHLITGHT} 10px`,
    paddingLeft: '1rem',
    marginBottom: '4rem',
});

interface typeType {
    type: string;
}

const SectionTitle = ({ type }: typeType) => {
    return <h1 css={sectionTitleStyle}>{type}</h1>;
};

export default SectionTitle;
