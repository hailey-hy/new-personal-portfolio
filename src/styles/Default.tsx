import { css } from '@emotion/react';

const Default = css({
    '*': {
        boxSizing: 'border-box',
        '-moz-box-sizing': 'border-box',
        '-webkit-box-sizing': 'border-box',
        margin: 0,
    },
    body: {
        overflowX: 'hidden',
    },
    // 기본 폰트
    '@font-face': [
        {
            'font-family': 'S-CoreDream-3Light',
            src: 'url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff") format("woff")',
            'font-weight': 'normal',
            'font-style': 'normal',
        },
    ],
    fontFamily: 'S-CoreDream-3Light',

    p: {
        position: 'relative',
        margin: '13px',
    },

    'h2, h3, h4 ': {
        margin: 0,
        lineHeight: '2rem',
    },
    h2: {
        //제목
        fontSize: '25px',
        margin: '1rem 0 1rem 0',
    },
    h3: {
        //중요 설명
        fontSize: '18px',
    },
    h4: {
        //세부 설명
        fontWeight: '400',
    },

    // 미디어 쿼리
});

export default Default;
