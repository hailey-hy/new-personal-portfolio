/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { bouncing } from 'styles/Animations';
import fadinSliding from 'styles/Animations';

// IntroArrow
const introArrowStyle = css({ animation: `${bouncing} 1s ease infinite;` });

// IntroContainer
const introContainerStyle = css({
    color: 'white',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    '-webkit-box-pack': 'center',
    justifyContent: 'center',
    '-webkit-box-align': 'center',
    alignItems: 'center',
    height: '100vh',
    width: 'fit-in-content',
});

// IntroText
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

const introAnimationFrist = css({
    animation: `${fadinSliding} 0.7s ease both;`,
});

const introAnimationSecond = css({
    animation: `${fadinSliding} 0.7s ease 1s both;`,
});

const introAnimationThird = css({
    animation: `${fadinSliding} 0.7s ease 2s both;`,
});

export {
    introArrowStyle,
    introContainerStyle,
    introTitleStyle,
    introBodyStyle,
    introAnimationFrist,
    introAnimationSecond,
    introAnimationThird,
};
