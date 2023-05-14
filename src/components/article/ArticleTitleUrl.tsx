/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import { useLinkToPage } from 'hooks/useLinkToPage';
import { BLACK } from 'styles/Colors';

interface titleUrlType {
    title: string;
    url: string;
}

const articleTitleStyle = css({
    fontSize: '25px',
    margin: '1rem 0 1rem 0',
    padding: '0.5rem 1rem 0.3rem 1rem',
    fontFamily: 'S-CoreDream-3Light',
    color: BLACK,
    fontWeight: 600,
    borderRadius: '2rem',
});

const ArticleTitleUrl = ({ title, url }: titleUrlType) => {
    useEffect(() => {
        useLinkToPage(title, url);
    }, [title, url]);
    return (
        <div id={title}>
            <Button variant='text' size='large' css={articleTitleStyle}>
                {title}
            </Button>
        </div>
    );
};

export default ArticleTitleUrl;
