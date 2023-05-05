/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavBtnType } from './Nav';
import { HIGHLITGHT } from 'styles/Colors';

const NavBtnStyle = css({
    fontSize: 18,
    fontWeight: 400,
    ':hover': {
        color: `${HIGHLITGHT}`,
        cursor: 'pointer',
    },
});

type NavBtnProps = {
    btn: NavBtnType;
};

const NavBtnBg = ({ btn }: NavBtnProps) => {
    const { title, url } = btn;

    const useLink = () => {
        window.open(url);
    };

    return (
        <div css={NavBtnStyle} onClick={useLink}>
            {title}
        </div>
    );
};

export default NavBtnBg;
