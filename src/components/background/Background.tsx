/** @jsxImportSource @emotion/react */
import BackgroundImg from './BackgroundImg';
import { backgroundStyle } from './Style';

const Background = () => {
    return (
        <section css={backgroundStyle}>
            <BackgroundImg></BackgroundImg>
        </section>
    );
};

export default Background;
