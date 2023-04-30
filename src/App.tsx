/** @jsxImportSource @emotion/react */
import Intro from 'pages/Intro';
import Main from 'pages/Main';
import Default from 'styles/Default';

function App() {
    return (
        <div className='App' css={Default}>
            <Intro></Intro>
            <Main></Main>
        </div>
    );
}

export default App;
