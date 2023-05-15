/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import { HIGHLITGHT } from 'styles/Colors';
import { articleDetailStyle, circleStyle } from './Style';

interface detailType {
    detail: string;
}

const ArticleDetail = ({ detail }: detailType) => {
    return (
        <span css={articleDetailStyle}>
            <CircleIcon fontSize='small' css={circleStyle} />
            <h3>{detail}</h3>
        </span>
    );
};

export default ArticleDetail;
