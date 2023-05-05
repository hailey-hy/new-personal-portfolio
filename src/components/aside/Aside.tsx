/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import AsideBtnBg from './AsideBtnBg';
import BtnContent from 'constants/BtnConstants';
import { BACKGROUND } from 'styles/Colors';

const AsideStyle = css({
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

export interface AsideBtnType {
    title: string;
    url: string;
}

const Aside = () => {
    const [btnContent, setBtnContent] = useState<AsideBtnType[]>(
        BtnContent.Main,
    );

    return (
        <aside css={AsideStyle}>
            {btnContent.map((btn) => (
                <AsideBtnBg btn={btn} />
            ))}
        </aside>
    );
};

export default Aside;
