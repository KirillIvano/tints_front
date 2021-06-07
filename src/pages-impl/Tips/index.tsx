import React from 'react';

import {Box} from '@/uikit';

import styles from '@/pages-impl/Main/styles.module.scss';
import { TipsSection } from '../Main/components';

const tipsItems = [
    { caption: "Наша история", href: "/TODO", image: "/about/history.png" },
    { caption: "Наш бизнес", href: "/TODO", image: "/about/business.png" },
    { caption: "Наш ассортимент", href: "/TODO", image: "/about/assortment.png" },
    { caption: "Наша палитра", href: "/TODO", image: "/about/palette.png" },
    { caption: "Наша этика", href: "/TODO", image: "/about/ethics.png" },
];

const Tips = () => (
    <Box className={styles.main}>
        TIPS
        
        <section className={styles.main__tips}>
            <TipsSection Tips={tipsItems}/>
        </section>
    </Box>
);

export default Tips;