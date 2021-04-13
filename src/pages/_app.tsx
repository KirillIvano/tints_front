import {AppProps} from 'next/app';

import {useAppInit} from '@/hooks/useAppInit';


const App = ({
    Component,
    pageProps,
}: AppProps) => {
    useAppInit();

    return <Component {...pageProps} />;
};

export default App;
