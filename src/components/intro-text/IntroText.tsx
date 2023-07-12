/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import IntroConstants from 'constants/IntroConstants';
import {
    introTitleStyle,
    introBodyStyle,
    introAnimationFrist,
    introAnimationSecond,
    introAnimationThird,
} from './Style';

const IntroText = () => {
    return (
        <>
            <span css={introTitleStyle}>
                <p css={introAnimationFrist}>{IntroConstants.IntroTitle1}</p>
                <p css={introAnimationSecond}>{IntroConstants.IntroTitle2}</p>
            </span>
            <span
                css={css`
                    ${introAnimationThird}
                    ${introBodyStyle}
                `}
            >
                <p>{IntroConstants.IntroBody1}</p>
                <p>{IntroConstants.IntroBody2}</p>
                {/* <p>{IntroConstants.IntroBody3}</p> */}
            </span>
        </>
    );
};

export default IntroText;
