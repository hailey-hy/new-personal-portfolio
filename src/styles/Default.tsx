import { css } from '@emotion/react';

const Default = css({
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

    // 미디어 쿼리
});

export default Default;
