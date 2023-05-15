/** @jsxImportSource @emotion/react */
import { introContainerStyle } from './Style';
import IntroText from './IntroText';
import IntroArrow from './IntroArrow';

const IntroContainer = () => {
    return (
        <div css={introContainerStyle}>
            <IntroText></IntroText>
            <IntroArrow></IntroArrow>
        </div>
    );
};

export default IntroContainer;
