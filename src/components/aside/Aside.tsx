/** @jsxImportSource @emotion/react */
import AsideBtnBg from './AsideBtnBg';
import BtnContent from 'constants/BtnConstants';
import { asideContainerStyle, asideStyle } from './Style';

export interface AsideBtnType {
    title: string;
    url: string;
}

interface AsidePropType {
    onProjectClick: () => void;
    onActivityClick: () => void;
    onEducationClick: () => void;
}

const Aside = ({
    onProjectClick,
    onActivityClick,
    onEducationClick,
}: AsidePropType) => {
    return (
        <aside css={asideStyle}>
            <div css={asideContainerStyle}>
                <AsideBtnBg
                    btn={BtnContent.Main[1]}
                    event={onProjectClick}
                ></AsideBtnBg>
                <AsideBtnBg
                    btn={BtnContent.Main[2]}
                    event={onActivityClick}
                ></AsideBtnBg>
                <AsideBtnBg
                    btn={BtnContent.Main[3]}
                    event={onEducationClick}
                ></AsideBtnBg>
            </div>
        </aside>
    );
};

export default Aside;
