import React from 'react';

import {Box, Typo} from '@/uikit';

import {Tips} from './components';
import styles from './styles.module.scss';

const AboutPage = () => (
    <Box className={styles.main}>
        <Typo
            as="h1"
            color="black"
            size="xxxl"
            weight="normal"
        >
            О нас
        </Typo>

        <div className={styles.subtitle}>
            <Typo
                as="p"
                color="black"
                size="md"
                weight={300}
            >
                В Tints of Nature мы все занимаемся созданием естественного здорового оттенка волос и средств по уходу за ними. 
                Вот уже более 20 лет мы увлечены производством высококачественной продукции, которая будет не только доступна 
                по цене, а также этична, максимально натуральна, и создана с любовью.
            </Typo>
        </div>

        <section className={styles.main__tips}>
            <Tips />
        </section>
    </Box>
);

export default AboutPage;
