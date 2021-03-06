import React from 'react';

import {ArticlePage} from '../components';
import {CLIENT_ORIGIN} from '@/settings';

const AdvicePage = () => (
    <ArticlePage>
        <div className="top__header">
            <p>
                Мы знаем, что окрашивание ваших волос может быть сложной задачей, поэтому мы собрали наши экспертные
                советы, чтобы вы получили наилучшие результаты от использования Tints of Nature Bold colours.
            </p>
        </div>
        <section className="reverse" id="apply">
            <div className="section__item">
                <img src="/articles/bold-tips/swatchring.png" />

            </div>
            <div className="section__item">
                <h2>
                        Как наносить Tins of Nature Bold Colours...
                </h2>
                <p>
                        Tints of Nature Bold Colours предназначены для натуральных светлых  или осветленных волос
                        (натуральных блондинов или милированных волос).
                </p>
                <p>
                        Пожалуйста, обратите внимание, что этот продукт <span>не содержит</span> перекиси, поэтому он не
                        осветлит ваши волосы до более светлого оттенка. Чтобы осветлить ваши волосы, купите наш
                        Осветитель.
                </p>
                <p>
                        Пожалуйста, убедитесь, что вы провели тест на чувствительность кожи за 48 часов до окрашивания
                        волос.
                </p>
                <p>
                        1.Используйте для мытья головы шампунь Tints of Nature Charcoal Clarify Shampoo (в комплекте с
                        Bold Colours) и тщательно промойте, чтобы удалить любой продукт или цвет, накопившийся на ваших
                        волосах.
                </p>
                <p>
                    <span>Полезный совет:</span> для самых ярких и смелых результатов после мытья головы нанесите
                    <a href={CLIENT_ORIGIN + '/product/34'}> Tints of Nature Hydrate
                        Treatment</a> и оставьте на 15 минут, смойте, а затем перейдите к шагу 2.
                </p>
                <p>
                        2. Аккуратно расчесывайте волосы.
                </p>
                <p>
                        3. Наденьте перчатки.
                </p>
                <p>
                        4. Нанесите краситель.
                </p>
                <p>
                        5. Наденьте шапочку и подождите 30-40 минут, чтобы достичь максимального окрашивания.
                </p>
                <p>
                        6. Снимите шапочку.
                </p>
                <p>
                        7. Наденьте перчатки и тщательно промойте волосы прохладной водой (более прохладная вода
                        помогает сохранить яркие цвета).
                </p>
                <p>
                        8. Высушите и уложите как обычно.
                </p>
            </div>
        </section>
        <section id="mix">
            <div className="section__item">
                <h2>
                    Как получить идеальный пастельный оттенок...
                </h2>
                <p>
                    Чтобы достичь максимальных результатов от окрашивания, предварительно выполните уход для волос, с Tints of Nature
                    &nbsp;<a href={CLIENT_ORIGIN + '/product/34'}>Hydrate Treatment</a>
                    &nbsp;или <a href="https://tintsofnature.com/shop/care/structure-treatment">Structure Treatment</a> и всегда
                    помните о проведении <span>теста на эластичность!</span>
                </p>
                <p>
                    1. Купите желаемый оттенок Bold Colour и Bold Pasteliser.
                </p>
                <p>
                    2. В миске смешайте Bold Colour с Bold Pasteliser в соотношении 1:1.
                </p>
                <p>
                    3. Выполните шаги 2-8 для нанесения Bold Colour, показанных выше.
                </p>
                <p>
                    Полезный совет: для самых ярких, смелых результатов после мытья головы нанесите Tints of Nature
                    &nbsp;<a href={CLIENT_ORIGIN + '/product/34'}>Hydrate Treatment</a> и оставьте на 15
                    минут, смойте, а затем перейдите к шагу 3.
                </p>
            </div>
            <div className="section__item">
                <img src="/articles/bold-tips/pastel.png" />
            </div>
        </section>
        <section className="reverse" id="care">
            <div className="section__item">
                <img src="/articles/bold-tips/care.jpg" />
            </div>
            <div className="section__item">
                <h2>
                    Забота о вашем цвете..
                </h2>
                <p>
                    1. Чем здоровее ваши волосы, тем лучше будет выглядеть результат окрашивания и тем дольше он будет держаться. К
                    сожалению, осветление ваших волос может поставить под угрозу их состояние до такой степени, что они не смогут
                    удерживать результат окрашивания длительное время, поэтому вы захотите, чтобы они были в идеальном состоянии,
                    прежде чем красить волосы. Если вашим волосам требуется восстановление, попробуйте нашу линейку по уходу для
                    повышения плотности и эластичности волос, прежде чем наносить краситель.
                </p>
                <p>
                    2. Используйте прохладную воду для мытья волос, чтобы сохранить результат окрашивания. Более теплая вода поможет
                    вашему цвету вымыться быстрее. Вода не обязательно должна быть ледяной, но чем холоднее, тем лучше!
                </p>
                <p>
                    3. Не мойте голову каждый день! Это может показаться очевидным, но ваш цвет будет вымываться с каждой мойкой,
                    поэтому постарайтесь делать перерыв по нескольку дней между мытьём головы. Если вас беспокоят наращенные или
                    быстро пачкающиеся волосы, используйте на корни волос&nbsp;
                    <a href="https://tintsofnature.com/catalog/product/view/id/132/s/dry-shampoo/category/36/">Dry Shampoo</a>.
                </p>
                <p>
                    4. Защитите ваши волосы от жары, по возможности избегайте тепловой укладки, и всегда используйте теплозащитное
                    средство, так как тепло является главным виновником выцветания окрашивания.
                </p>
                <p>
                    5. При посещении бассейна, попробуйте наш <a href={CLIENT_ORIGIN + '/product/38'}>Seal and Shine Leave In Conditioner</a>
                    &nbsp;прежде чем вы зайдёте в воду, для того чтобы защитить цвет от хлора.
                </p>
                <p>
                    6. Избегайте сульфатов в ваших средствах для волос, они сильно вымывают цвет. Наша линейка по уходу за волосами не
                    содержит сульфаты, поэтому она идеально подходит для ухода за окрашенными волосами.
                </p>
            </div>
        </section>
        <section id="tips">
            <div className="section__item">
                <h2>
                    Другие важные советы!
                </h2>
                <p>
                    Чтобы достичь максимальных результатов от окрашивания, предварительно выполните уход для волос, с Tints of Nature
                    &nbsp;<a href={CLIENT_ORIGIN + '/product/34'}>Hydrate Treatment</a>
                    &nbsp;или  <a href="https://tintsofnature.com/shop/care/structure-treatment">Structure Treatment</a> и всегда
                    помните о проведении <span>теста на эластичность!</span>
                </p>
                <p>
                    1. Чтобы избежать некрасивых пятен, попробуйте использовать вазелин или защитный крем вокруг линии роста волос, чтобы
                    защитить кожу.
                </p>
                <p>
                    2. Если краситель попадёт на руки, не паникуйте! Чтобы удалить пятна, используйте зубную пасту и небольшое количеством
                    тёплой воды.
                </p>
                <p>
                    3. Используйте старое или темное полотенце, во время сушки волос, чтобы избежать каких-либо неприятностей.
                </p>
            </div>
            <div className="section__item">
                <img src="/articles/bold-tips/tips.png" />
            </div>
        </section>
    </ArticlePage>
);

export default AdvicePage;
