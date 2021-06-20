import 'reflect-metadata';
import 'focus-visible';
import 'flexboxgrid2';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {AppProps} from 'next/app';

import {Footer} from '@/parts';

import './_app.scss';


const App = ({
    Component,
    pageProps,
}: AppProps) => {
    return (
        <div className="app" id="root">
            {/* <Header /> */}

            <main>
                <Component {...pageProps} />
            </main>

            <Footer />
        </div>
    );
};

export default App;
