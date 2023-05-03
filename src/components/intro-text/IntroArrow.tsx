/** @jsxImportSource @emotion/react */
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { css, keyframes } from '@emotion/react';
import { bouncing } from 'styles/Animations';

const IntroArrow = () => {
    return (
        <ArrowDropDownIcon
            fontSize='large'
            css={css`
                animation: ${bouncing} 1s ease infinite;
            `}
        ></ArrowDropDownIcon>
    );
};

export default IntroArrow;
