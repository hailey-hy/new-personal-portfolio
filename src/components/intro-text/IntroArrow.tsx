/** @jsxImportSource @emotion/react */
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { introArrowStyle } from './Style';

const IntroArrow = () => {
    return (
        <ArrowDropDownIcon
            fontSize='large'
            css={introArrowStyle}
        ></ArrowDropDownIcon>
    );
};

export default IntroArrow;
