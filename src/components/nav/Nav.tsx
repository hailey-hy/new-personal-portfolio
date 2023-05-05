/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import NavBtnBg from './NavBtnBg';
import BtnContent from 'constants/BtnConstants';
import { BACKGROUND } from 'styles/Colors';

const NavStyle = css({
    background: `${BACKGROUND}`,
    height: '100vh',
    width: '20vw',
    padding: '100px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '25px',
    position: 'sticky',
    top: '0px',
    bottom: '100vh',
});

export interface NavBtnType {
    title: string;
    url: string;
}

const Nav = () => {
    const [btnContent, setBtnContent] = useState<NavBtnType[]>(BtnContent.Main);

    return (
        <div css={NavStyle}>
            {btnContent.map((btn) => (
                <NavBtnBg btn={btn} />
            ))}
        </div>
    );
};

export default Nav;
