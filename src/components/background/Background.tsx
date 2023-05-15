/** @jsxImportSource @emotion/react */
import BackgroundImg from './BackgroundImg';
import { backgroundStyle } from './Style';

const Background = () => {
    return (
        <div css={backgroundStyle}>
            <BackgroundImg></BackgroundImg>
        </div>
    );
};

export default Background;
