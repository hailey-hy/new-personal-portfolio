/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { articleTitleStyle } from './Style';
import Button from '@mui/material/Button';
import { useLinkToPage } from 'hooks/useLinkToPage';

interface titleUrlType {
    title: string;
    url: string;
}

const ArticleTitleUrl = ({ title, url }: titleUrlType) => {
    useEffect(() => {
        useLinkToPage(title, url);
    }, [title, url]);
    return (
        <Button id={title} variant='text' size='large' css={articleTitleStyle}>
            {title}
        </Button>
    );
};

export default ArticleTitleUrl;
