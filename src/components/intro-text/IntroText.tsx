/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import IntroConstants from 'constants/IntroConstants';
import fadinSliding from 'styles/Animations';

const introTitleStyle = css({
    color: 'white',
    fontSize: 35,
    fontWeight: 600,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    '-webkit-box-pack': 'center',
    justifyContent: 'center',
    '-webkit-box-align': 'center',
    alignItems: 'center',
    margin: '10px',
});

const introBodyStyle = css({
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
});

const IntroText = () => {
    return (
        <>
            <span css={introTitleStyle}>
                <p
                    css={css`
                        animation: ${fadinSliding} 0.7s ease both;
                    `}
                >
                    {IntroConstants.IntroTitle1}
                </p>
                <p
                    css={css`
                        animation: ${fadinSliding} 0.7s ease 1s both;
                    `}
                >
                    {IntroConstants.IntroTitle2}
                </p>
            </span>
            <span
                css={css`
                    animation: ${fadinSliding} 0.7s ease 2s both;
                    ${introBodyStyle}
                `}
            >
                <p>{IntroConstants.IntroBody1}</p>
                <p>{IntroConstants.IntroBody2}</p>
                <p>{IntroConstants.IntroBody3}</p>
            </span>
        </>
    );
};

export default IntroText;
