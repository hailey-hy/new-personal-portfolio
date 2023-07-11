import { css } from '@emotion/react';
import { defaultFont } from './Fonts';

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
    
    '@font-face': [
        {
            'font-family': 'S-CoreDream-3Light',
            src: 'url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff") format("woff")',
            'font-weight': 'normal',
            'font-style': 'normal',
        },
        {
            'font-family': 'NEXON Lv2 Gothic',
            src: 'url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff") format("woff")',
            'font-weight': 'normal',
            'font-style': 'normal',
        }
    ],

    fontFamily: defaultFont,

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
        fontSize: '18px'
    },

    // 미디어 쿼리
});

export default Default;
