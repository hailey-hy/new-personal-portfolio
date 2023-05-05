/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SectionPropsType } from './Section';
import { HIGHLITGHT } from 'styles/Colors';

const sectionTitleStyle = css({
    position: 'relative',
    fontSize: '35px',
    fontWeight: '700',
    borderLeft: `solid ${HIGHLITGHT} 10px`,
    paddingLeft: '1rem',
    marginBottom: '4rem',
});

const SectionTitle = ({ sectionProps }: SectionPropsType) => {
    const { type } = sectionProps;
    return <h1 css={sectionTitleStyle}>{type}</h1>;
};

export default SectionTitle;
