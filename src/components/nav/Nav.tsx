/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import NavBtnBg from './NavBtnBg';
import BtnContent from 'constants/BtnConstants';

const NavStyle = css({
    background: '#353535',
    height: '100vh',
    width: '15rem',
    padding: '100px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '25px',
    isolation: 'isolate',
});

export interface NavPurposeType {
    purpose: string;
}

type NavProps = {
    navPurpose: NavPurposeType;
};

export interface NavBtnType {
    title: string;
    url: string;
}

const Nav = ({ navPurpose }: NavProps) => {
    const { purpose } = navPurpose;
    const [btnContent, setBtnContent] = useState<NavBtnType[]>([]);
    useEffect(() => {
        if (purpose == 'Intro') {
            setBtnContent(BtnContent.Intro);
        } else setBtnContent(BtnContent.Main);
    }, [purpose]);

    return (
        <div css={NavStyle}>
            {btnContent.map((btn) => (
                <NavBtnBg btn={btn} />
            ))}
        </div>
    );
};

export default Nav;
