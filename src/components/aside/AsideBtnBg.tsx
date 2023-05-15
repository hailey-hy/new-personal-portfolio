/** @jsxImportSource @emotion/react */
import { AsideBtnType } from './Aside';
import { asideBtnStyle } from './Style';
import { useRef } from 'react';

type AsideBtnProps = {
    btn: string;
    event: () => void;
};

const AsideBtnBg = ({ btn, event }: AsideBtnProps) => {
    return (
        <div css={asideBtnStyle} onClick={event}>
            {btn}
        </div>
    );
};

export default AsideBtnBg;
