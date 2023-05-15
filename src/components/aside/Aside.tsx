/** @jsxImportSource @emotion/react */
import { useState, useRef } from 'react';
import AsideBtnBg from './AsideBtnBg';
import BtnContent from 'constants/BtnConstants';
import { asideStyle } from './Style';

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
        <aside css={asideStyle}>
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
