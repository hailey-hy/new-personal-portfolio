/** @jsxImportSource @emotion/react */
import Intro from 'pages/Intro';
import Main from 'pages/Main';
import Default from 'styles/Default';
import { RecoilRoot } from 'recoil';

function App() {
    return (
        <RecoilRoot>
            <div className='App' css={Default}>
                <Intro></Intro>
                <Main></Main>
            </div>
        </RecoilRoot>
    );
}

export default App;
