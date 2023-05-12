/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AsideBtnType } from './Aside';
import { HIGHLITGHT } from 'styles/Colors';
import { useRef } from 'react';

const AsideBtnStyle = css({
    fontSize: 18,
    fontWeight: 400,
    ':hover': {
        color: `${HIGHLITGHT}`,
        cursor: 'pointer',
    },
});

type AsideBtnProps = {
    btn: string;
    event: () => void;
};

const AsideBtnBg = ({ btn, event }: AsideBtnProps) => {
    return (
        <div css={AsideBtnStyle} onClick={event}>
            {btn}
        </div>
    );
};

export default AsideBtnBg;
