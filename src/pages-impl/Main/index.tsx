import React from 'react';

import {Box} from '@/uikit';

import {TipsSection} from './components';
import styles from './styles.module.scss';

const tipsItems = [
    { caption: "Советы по перманентным краскам", href: "/TODO", image: "/main/permanentPaints.png" },
    { caption: "Советы по использованию Henna Cream", href: "/TODO", image: "/main/hennaCream.png" },
    { caption: "Советы для окрашивания светлых волос", href: "/TODO", image: "/main/lightHair.png" },
];

const MainPage = () => (
    <Box className={styles.main}>
        asdasdgasdgasdg

        <section className={styles.main__tips}>
            <TipsSection Tips={tipsItems} showAll={true} />
        </section>
    </Box>
);

export default MainPage;
