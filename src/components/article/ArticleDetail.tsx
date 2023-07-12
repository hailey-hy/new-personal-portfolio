/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import { HIGHLITGHT } from 'styles/Colors';
import { articleDetailStyle, circleStyle } from './Style';
import ArticleDetailUrl from './ArticleDetailUrl';

export interface detailType {
    detail: string;
}

const ArticleDetail = ({ detail }: detailType) => {
    if(detail.includes('<')) return (<ArticleDetailUrl detail={detail}></ArticleDetailUrl>);
    else return (
        <span css={articleDetailStyle}>
            <CircleIcon fontSize='small' css={circleStyle} />
            <h3>{detail}</h3>
        </span>
    );
};

export default ArticleDetail;
