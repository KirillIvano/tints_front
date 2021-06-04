import 'reflect-metadata';
import 'focus-visible';
import {AppProps} from 'next/app';

import {useAppInit} from '@/hooks/useAppInit';

import './_app.scss';

const App = ({
    Component,
    pageProps,
}: AppProps) => {
    useAppInit(pageProps);

    return <Component {...pageProps} />;
};

export default App;
