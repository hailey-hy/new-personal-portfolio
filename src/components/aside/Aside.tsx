/** @jsxImportSource @emotion/react */
import AsideBtnBg from './AsideBtnBg';
import BtnContent from 'constants/BtnConstants';
import { asideContainerStyle, asideStyle } from './Style';

export interface AsideBtnType {
    title: string;
    url: string;
}

interface AsidePropType {
    onClickEvents: (() => void)[];
}

const Aside = ({ onClickEvents }: AsidePropType) => {
    return (
        <aside css={asideStyle}>
            <div css={asideContainerStyle}>
                {onClickEvents.map((event, index) => (
                    <AsideBtnBg btn={BtnContent.Main[index]} event={event} />
                ))}
            </div>
        </aside>
    );
};

export default Aside;
