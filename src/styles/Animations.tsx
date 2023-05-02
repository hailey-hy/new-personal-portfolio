import { keyframes } from '@emotion/react';

// 슬라이드- 페이드인 애니메이션

const fadinSliding = keyframes({
    from: {
        opacity: 0,
        top: '-2%',
    },
    to: {
        opacity: 1,
        top: '0%',
    },
});

export default fadinSliding;
