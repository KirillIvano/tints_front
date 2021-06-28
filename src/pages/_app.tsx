import 'reflect-metadata';
import 'focus-visible';
import 'flexboxgrid2';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {AppProps} from 'next/app';

import {Footer} from '@/parts';
import {useAppInit} from '@/hooks/useAppInit';
import {Header} from '@/parts';

import './_app.scss';
import {WithDeviceContext} from '@/contexts/DeviceContext';


const App = ({
    Component,
    pageProps,
}: AppProps) => {
    useAppInit(pageProps);

    return (
        <WithDeviceContext>
            <div className="app" id="root">
                <Header />

                <main>
                    <Component {...pageProps} />
                </main>

                <Footer />
            </div>
        </WithDeviceContext>
    );
};

export default App;
