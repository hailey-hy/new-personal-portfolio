/** @jsxImportSource @emotion/react */
import Intro from 'pages/Intro';
import Main from 'pages/Main';
import Default from 'styles/Default';

function App() {
    return (
        <main className='App' css={Default}>
            <Intro></Intro>
            <Main></Main>
        </main>
    );
}

export default App;
