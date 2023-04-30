/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavBtnType } from './Nav';

const NavBtnStyle = css({
    color: 'white',
    fontSize: 25,
    fontWeight: 900,
    ':hover': {
        color: '#BADBFA',
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
