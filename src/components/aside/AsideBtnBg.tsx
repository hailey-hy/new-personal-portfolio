/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AsideBtnType } from './Aside';
import { HIGHLITGHT } from 'styles/Colors';

const AsideBtnStyle = css({
    fontSize: 18,
    fontWeight: 400,
    ':hover': {
        color: `${HIGHLITGHT}`,
        cursor: 'pointer',
    },
});

type AsideBtnProps = {
    btn: AsideBtnType;
};

const AsideBtnBg = ({ btn }: AsideBtnProps) => {
    const { title, url } = btn;

    const useLink = () => {
        window.open(url);
    };

    return (
        <div css={AsideBtnStyle} onClick={useLink}>
            {title}
        </div>
    );
};

export default AsideBtnBg;
