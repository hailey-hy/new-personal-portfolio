/** @jsxImportSource @emotion/react */
import { useState, useRef } from 'react';
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

interface AsidePropType {
    onProjectClick: () => void;
    onActivityClick: () => void;
}

const Aside = ({ onProjectClick, onActivityClick }: AsidePropType) => {
    // const [btnContent, setBtnContent] = useState<AsideBtnType[]>(
    //     BtnContent.Main,
    // );

    return (
        <aside css={AsideStyle}>
            <AsideBtnBg
                btn={BtnContent.Main[1]}
                event={onProjectClick}
            ></AsideBtnBg>
            <AsideBtnBg
                btn={BtnContent.Main[2]}
                event={onActivityClick}
            ></AsideBtnBg>
        </aside>
    );
};

export default Aside;
