/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import { HIGHLITGHT } from 'styles/Colors';

const spanRowStyle = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',
});

const circleStyle = css({
    fontSize: '1rem',
    color: `${HIGHLITGHT}`,
    marginTop: '0.4rem',
});

interface detailType {
    detail: string;
}

const ArticleDetail = ({ detail }: detailType) => {
    return (
        <span css={spanRowStyle}>
            <CircleIcon fontSize='small' css={circleStyle} />
            <h3>{detail}</h3>
        </span>
    );
};

export default ArticleDetail;
