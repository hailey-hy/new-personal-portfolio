/** @jsxImportSource @emotion/react */
import { asideBtnStyle } from './Style';

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
