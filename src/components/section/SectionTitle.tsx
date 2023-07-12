/** @jsxImportSource @emotion/react */
import { sectionTitleStyle } from './Style';

interface typeType {
    type: string;
}

const SectionTitle = ({ type }: typeType) => {
    return <h1 css={sectionTitleStyle}>{type}</h1>;
};

export default SectionTitle;
