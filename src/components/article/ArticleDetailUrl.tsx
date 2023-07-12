/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { useLinkToPage } from 'hooks/useLinkToPage';
import { detailType } from "./ArticleDetail";
import CircleIcon from '@mui/icons-material/Circle';
import { articleDetailStyle, circleStyle } from './Style';
import Button from '@mui/material/Button';
import { articleDetialUrlStyle } from './Style';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { articleDetailClipStyle } from './Style';

const ArticleDetailUrl =  ({detail}:detailType) => {
    const title = detail.slice(detail.indexOf('>') + 1);
    const url= detail.slice(1, detail.indexOf('>'))
    console.log(url)

    useEffect(() => {
        useLinkToPage(title, url);
    }, [title, url]);

return (<span css={articleDetailStyle}>
    <CircleIcon fontSize='small' css={circleStyle} />
    <Button id={title} variant='text' size='medium' css={articleDetialUrlStyle}>
    <h3>{title}</h3>
    <AttachmentIcon color='disabled' css={articleDetailClipStyle}></AttachmentIcon>
    </Button>
    </span>)
}

export default ArticleDetailUrl;