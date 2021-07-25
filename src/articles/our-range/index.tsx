import React from 'react';

import {ArticlePage} from '../components';

const AdvicePage = () => (
    <ArticlePage>
        <div className="top__header center">
            <h3 className="black">Простое и безопасное окрашивание и уход за волосами</h3>
            <b>
                Наша широкая натуральная линейка домашних красителей для волос и средств по уходу за
                волосами использует силу натуральных и органических компонентов, придаёт вашим волосам
                великолепные оттенки, питает и увлажняет.
            </b>
        </div>
        <section className="reverse">
            <div className="section__item">
                <img src="/articles/our-range/hometint.jpg" />
            </div>
            <div className="section__item">
                <h3 className="black">
                    Перманентная домашняя краска для волос.
                </h3>
                <b>
                    У нас есть особый метод окрашивания волос в домашних условиях по сравнению с
                    традиционными методами окрашивания. Используя минимальное количество пигментов PPD,
                    75% сертифицированных органических и 95% натуральных ингредиентов без содержания
                    продуктов животного происхождения поддерживает баланс белка и влаги в структуре
                    волос во время окрашивания.
                </b>
                <p>
                    Это значит, что ваши волосы в процессе окрашивания получают дополнительный уход и ваш
                    цвет сохранится на более длительный срок. Благодаря палитре цветов из 24 оттенков,
                    каждый сможете подобрать нужный!
                </p>
                <p>
                    Купите уже сегодня и откройте для себя новое состояние ваших волос.
                </p>
            </div>
        </section>
        <section>
            <div className="section__item">
                <h3 className="black">
                    Хна-полуперманентная краска для волос
                </h3>
                <b>
                    Tints of Nature Henna Cream предлагает еще один здоровый способ окрашивания волос на
                    короткий срок. Деликатная полуперманентная формула без PPD/PTD, изготовленная из
                    натуральной хны и более чем на 95% из натуральных и 15 сертифицированных органических
                    компонентов, которые лечат, увлажняют и укрепляют ваши волосы во время окрашивания,
                    чтобы придать им красивый глянцевый цвет, здоровья и закрашивание седины.
                </b>
                <p>
                    Наш ассортимент кремов из хны идеально подходит, если вы хотите поэкспериментировать с
                    новыми оттенками или добавить глубину и тон вашему существующему цвету. Выпускается в 9
                    оттенках и держится до 12 смоек.
                </p>
            </div>
            <div className="section__item">
                <img src="/articles/our-range/henna.jpg" />
            </div>
        </section>
        <section className="reverse">
            <div className="section__item">
                <img src="/articles/our-range/tlc.jpg" />
            </div>
            <div className="section__item">
                <h3 className="black">
                    Уход за вашими волосами - Treatment
                </h3>
                <b>
                    Наша удостоенная наград линейка средств по уходу специально разработана для того, чтобы
                    зафиксировать ваш цвет, сохраняя его мягким и шелковистым. Питает и укрепляет ваши волосы
                    изнутри, одновременно разглаживая и защищая их снаружи, что дает существенно более здоровые
                    результаты.
                </b>
                <p>
                    Продукты содержат 100% натуральный аромат и увлажняющие ингредиенты, такие как алоэ, окопник
                    и ромашка. Наша линейка по уходу за волосами бережно относится к вашим волосам и коже головы.
                </p>
                <p>
                    Проявите немного любви к своим волосам с помощью набора средств по уходу, сделанного специально
                    для вас.
                </p>
            </div>
        </section>
    </ArticlePage>
);

export default AdvicePage;
