/** @jsxImportSource @emotion/react */
import { introContainerStyle } from './Style';
import IntroText from './IntroText';
import IntroArrow from './IntroArrow';

const IntroContainer = () => {
    return (
        <section css={introContainerStyle}>
            <IntroText></IntroText>
            <IntroArrow></IntroArrow>
        </section>
    );
};

export default IntroContainer;
