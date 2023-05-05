import { keyframes } from '@emotion/react';

// 슬라이드- 페이드인 애니메이션

const fadinSliding = keyframes({
    from: {
        opacity: 0,
        top: '-10%',
    },
    to: {
        opacity: 1,
        top: '0%',
    },
});

export const bouncing = keyframes({
    'from, 20%, 53%, 80%, to': {
        transform: 'translate3d(0,0,0)',
    },

    '40%, 43%': {
        transform: 'translate3d(0, -15px, 0)',
    },

    '70%': {
        transform: 'translate3d(0, -10px, 0)',
    },

    '90%': {
        transform: 'translate3d(0,-3px,0)',
    },
});

export default fadinSliding;
