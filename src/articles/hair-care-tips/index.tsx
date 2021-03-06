import React from 'react';

import {ArticlePage} from '../components';
import {CLIENT_ORIGIN} from '@/settings';

const AdvicePage = () => (
    <ArticlePage>
        <section className="reverse">
            <div className="section__item">
                <img src="/articles/hair-care-tips/structuretreatment.png" />
            </div>
            <div className="section__item">
                <h3>Как использовать <a href="https://tintsofnature.com/shop/care/structure-treatment">Tints of Nature Structure Treatment...</a></h3>
                <p>
                    Восстановите здоровье ваших волос с помощью нашей уникальной питательной и укрепляющей
                    процедуры <a href="https://tintsofnature.com/shop/care/structure-treatment ">Nature Structure Treatment</a>.
                    Используйте в качестве предварительного ухода
                    перед окрашиванием или в качестве еженедельного ухода для ваших волос.
                </p>
                <p>
                    1. Вымойте волосы <a href={CLIENT_ORIGIN + '/product/35'}>увлажняющим шампунем</a>,
                    нанесите кремовую пену и смойте.
                </p>
                <p>
                    2. высушите волосы полотенцем и распылите Structure Treatment на волосы от корней до
                    кончиков.
                </p>
                <p>
                    3. Вмассируйте пену в волосы
                </p>
                <p>
                    4. заколите или закрепите волосы, откиньтесь назад и расслабьтесь в течение 15 минут.
                </p>
                <p>
                    5. Тщательно промойте волосы водой и нанесите на 5 минут <a href={CLIENT_ORIGIN + '/product/38'}>кондиционер</a>.
                </p>
                <p>
                    Влюбитесь в то, какие мягкие, объемные и плотные ваши волосы после всего одной
                    процедуры!
                </p>
            </div>
        </section>
        <section>
            <div className="section__item">
                <h3>Как использовать <a href={CLIENT_ORIGIN + '/product/34'}>Hydrate Treatment...</a></h3>
                <p><a href={CLIENT_ORIGIN + '/product/34'}>Hydrate Treatment </a>
                    придаст вашим волосам невероятную мягкость и плотность, восстанавливая идеальный баланс протеинов
                    и влаги в структуре волос. Используйте как еженедельно, так и перед окрашиванием волос для достижения
                    максимального результата, в особенности перед окрашиванием седины.
                </p>
                <p>
                    1. Вымойте волосы с <a href={CLIENT_ORIGIN + '/product/35'}>увлажняющим шампунем</a>,
                    тщательно промойте водой.
                </p>
                <p>
                    2. Высушите волосы полотенцем и нанесите 4-8 нажатий
                    &nbsp;<a href={CLIENT_ORIGIN + '/product/34'}>Hydrate Treatment</a> от корней до кончиков.
                </p>
                <p>
                    3. расчешите волосы.
                </p>
                <p>
                    4. Оставьте на 15 минут.
                </p>
                <p>
                    5. Тщательно промойте и нанесите на 5 минут
                    &nbsp;<a href={CLIENT_ORIGIN + '/product/38'}>кондиционер</a>.
                </p>
                <p>
                    6. Промойте  водой и уложите.
                </p>
                <p>
                    7. Почувствуйте, насколько мягкими и бархатистыми стали ваши волосы!
                </p>
                <p>
                    Привет шелковистым, гладким волосам!
                </p>
            </div>
            <div className="section__item">
                <img src="/articles/hair-care-tips/hydratetreatment.png" />
            </div>
        </section>
        <section className="reverse">
            <div className="section__item">
                <img src="/articles/hair-care-tips/scalptreatment.png" />
            </div>
            <div className="section__item">
                <h3>Как использовать <a href="https://tintsofnature.com/shop/care/scalp-treatment">
                    средство для лечения кожи головы</a>...</h3>
                <p><a href="https://tintsofnature.com/shop/care/scalp-treatment">Tints of Nature Scalp Treatment </a>
                    это успокаивающее средство для раздраженной и чувствительной кожи головы. Изготовленная из нежных и натуральных
                    ингредиентов, наша процедура для кожи головы снимает раздражение с  кожи головы придает успокаивающее облегчение.
                </p>
                <p>
                    <a href="https://tintsofnature.com/shop/care/scalp-treatment">Спрей</a> можно наносить на кожу вне
                    зависимости от того, что волосы сухие или влажные.
                </p>
                <p>
                    1. Равномерно распылите на кожу головы и оставьте - смывать не нужно.
                </p>
                <p>
                    2. Начните чувствовать успокаивающее облегчение и отсутствие зуда!
                </p>
            </div>
        </section>
        <section>
            <div className="section__item">
                <h3>
                    Как использовать <a href={CLIENT_ORIGIN + '/product/38'}>Seal and Shine...</a>
                </h3>
                <p>
                    <a href={CLIENT_ORIGIN + '/product/38'}>Seal and Shine</a> - это защитный
                    несмываемый кондиционер, который защищает ваши волосы от вредного ультрафиолетового излучения.
                </p>
                <p>
                    <a href={CLIENT_ORIGIN + '/product/38'}>Seal and Shine</a>
                    &nbsp;можно использовать на сухих, влажных или высушенных полотенцем волосах.
                </p>
                <span>
                    Для влажных волос...
                </span>
                <p>
                    1. Используйте <a href={CLIENT_ORIGIN + '/product/35'}>Hydrate Shampoo</a> и
                    &nbsp;<a href={CLIENT_ORIGIN + '/product/38'}>Hydrate Conditioner</a>.
                </p>
                <p>
                    2. Высушите волосы полотенцем и распылите на все волосы.
                </p>
                <p>
                    3. Высушите феном.
                </p>
                <span>
                    Для сухих волос...
                </span>
                <p>
                    1. Распылите и оставьте на волосах.
                </p>
            </div>
            <div className="section__item">
                <img src="/articles/hair-care-tips/sealshine.png" />
            </div>
        </section>
    </ArticlePage>
);

export default AdvicePage;
