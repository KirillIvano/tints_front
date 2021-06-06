import 'reflect-metadata';
import 'focus-visible';
import {AppProps} from 'next/app';

import {useAppInit} from '@/hooks/useAppInit';
import {Header, Footer} from '@/parts';

import './_app.scss';


const App = ({
    Component,
    pageProps,
}: AppProps) => {
    useAppInit(pageProps);

    return (
        <div className="app">
            <Header />

            <main>
                <Component {...pageProps} />
            </main>

            <Footer />
        </div>
    );
};

export default App;
