import 'reflect-metadata';
import 'focus-visible';
import 'flexboxgrid2';
import {AppProps} from 'next/app';

import {useAppInit} from '@/hooks/useAppInit';
import {Header, Footer} from '@/parts';

import './_app.scss';


const App = ({
    Component,
    pageProps,
}: AppProps) => {
    return (
        <div className="app">
            {/* <Header /> */}

            <main>
                <Component {...pageProps} />
            </main>

            <Footer />
        </div>
    );
};

export default App;
