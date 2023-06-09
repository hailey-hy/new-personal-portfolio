/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { HIGHLITGHT } from 'styles/Colors';
import { BLACK } from 'styles/Colors';
import { defaultFont } from 'styles/Fonts';

// Article
const articleStyle = css({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '25px',
    marginBottom: '5rem',

    span: {
        lineHeight: '2.5rem',
    },

    '@media (max-width: 425px)': {
        rowGap: '15px',
        span: {
            lineHeight: '1.5rem',
        },
        h4: {
            fontSize: '15px',
        },
    },
});

const spanRowStyle = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    alignItems: 'center',
});

// ArticleDetail
const articleDetailStyle = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',
    '@media (max-width: 425px)': {
        h3: { fontSize: '17px', lineHeight: '1rem' },
        gap: '0.5rem',
    },
});

const circleStyle = css({
    fontSize: '1rem',
    color: `${HIGHLITGHT}`,
    marginTop: '0.5rem',
});

// ArticleGithubUrl
const gitUrlStyle = css({
    lineHeight: '3.7rem',
});

// ArticleTitleUrl
const articleTitleStyle = css({
    fontSize: '25px',
    margin: '1rem 0 1rem 0',
    padding: '0.5rem 1rem 0.3rem 1rem',
    fontFamily: defaultFont,
    color: BLACK,
    fontWeight: 600,
    borderRadius: '2rem',
    '@media (max-width: 425px)': {
        fontSize: '20px',
        margin: '0.5rem 0 0.5rem 0',
    },
});

// ArticleDetailUrl
const articleDetialUrlStyle = css({
    fontFamily: defaultFont,
    color: BLACK,
    padding: 0
})

// ArticleDetailUrl
const articleDetailClipStyle = css({
    marginLeft: '0.5rem'
})

export {
    articleStyle,
    spanRowStyle,
    articleDetailStyle,
    circleStyle,
    gitUrlStyle,
    articleTitleStyle,
    articleDetialUrlStyle,
    articleDetailClipStyle
};
