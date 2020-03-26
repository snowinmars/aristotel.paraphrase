import React from "react";
import './About.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

class About extends React.Component {
    render = () => {
        return (
            <div className={'about'}>
                <div>
                    <h4>О проекте</h4>

                    <div className={'chapter'}>
                        <p>Этот проект посвящён парафразу "Метафизики" Аристотеля. Я хочу упростить стиль лекций, потеряв при этом минимум смысла.</p>
                    </div>

                    <div className={'chapter'}>
                        Оглавление:

                        <ul>
                            <li><a href={'#what'}>Что</a></li>
                            <li><a href={'#why-aristotle'}>Зачем читать Аристотеля</a></li>
                            <li><a href={'#why-paraphrase'}>Зачем делать парафраз</a></li>
                            <li><a href={'#who'}>Кто</a></li>
                            <li><a href={'#how'}>Как</a></li>
                            <li><a href={'#advices'}>Советы</a></li>
                            <li><a href={'#faq'}>Faq</a></li>
                        </ul>
                    </div>

                    <h4 id={'what'}>Что</h4>

                    <div className={'chapter'}>
                        <p>"Метафизика" Аристотеля - это набор лекций о мудрости.</p>

                        <p>Мудрость - это умение понимать причины вещей. Такое знание Аристотель называет первой философией, на которой дальше строит свою систему.</p>

                        <p>Парафраз - это вольное изложение, пересказ.</p>

                        <p>Получается, этот проект посвящён пересказу лекций Аристотеля о мудрости.</p>
                    </div>

                    <h4 id={'why-aristotle'}>Зачем читать Аристотеля</h4>

                    <div className={'chapter'}>
                        Когда я показал проект знакомым, я услышал несколько возражений.

                        <ul>
                            <li>
                                <p>Q: Аристотель - это устаревшая философия.</p>
                                <p>A: Не особо. С одной стороны, многие его идеи наивны, некоторые физические предположения - просто ложны. Однако, основное ядро диалектики Аристотеля до сих пор никто не смог внятно оспорить. Именно на нём построено как научное, так и христианское мировоззрение. Но самое интересное - что на диалектике Аристотеля построен наш здравый смысл. Закон исключённого третьего, поиски аксиом в науках, материализм с нематериальными сущностями, да и сама логика его рассуждений крайне близка современной. Аристотелем пронизан наш взгляд на мир, и он не может устареть.</p>
                            </li>

                            <li>
                                <p>Q: Предположим, на Аристотеле построено современное общество. Давай изучать его, а не то, как мы к нему пришли.</p>
                                <p>A: В прицнипе, это разумно. К сожалению, я не знаю подробных книг о работе здравого смысла у людей, не отсылающих к древнегреческой философии. На западе такую проблему уже решили: там просто есть качественные парафразы Аристотеля. Здесь уже дело вкуса и привычки. Я привык идти от начала к концу. В принципе, можно читать и современные работы того же Ross (ссылка ниже).</p>
                            </li>

                            <li>
                                <p>Q: Знание Аристотеля бесполезно. Ни в работе, ни в жизни философия не применима</p>
                                <p>A: Любая наука делится на теорию и практику. Теоретическая философия не описывает нашу реальность, равно как и теоретическая физика. Эти знания создают свои миры, не обязательно связанные с нашим, в которых живут и процветают. Наш мир исследует практика. Диалектика Аристотеля близка к ней. Она показывает, как правильно задавать вопрос и как искать на него ответ. Как рассуждать и как опровергать рассуждение. Я считаю, что эти умения применимы в любой работе.</p>
                            </li>

                            <li>
                                <p>Q: Моя работа не связана с рассуждениями. Мне Аристотель не нужен.</p>
                                <p>A: В прицнипе, наверное, да. С другой стороны, любая логическая наука упорядочивает мышление, и это хорошо.</p>
                            </li>
                        </ul>
                    </div>

                    <h4 id={'why-paraphrase'}>Зачем делать парафраз</h4>

                    <div className={'chapter'}>
                        <p>Существует четыре перевода "Метафизики" на русский язык.</p>

                        <ul>
                            <li>Первый - незавершённый перевод первых пяти книг П. Первова и В. Розанова 1895 года.</li>
                            <li>Второй - перевод тринадцатой и четырнадцатой книг А.Ф. Лосева 1929 года.</li>
                            <li>Третий и основной - перевод с древнегреческого А.В. Кубицкого 1934 года. Он издавался во множестве вариаций, самый полный, что я видел - как раз <a href="https://rutracker.org/forum/viewtopic.php?t=3917537">первое издание 1934 года</a>.</li>
                            <li>Четвёртый - перевод с древнегреческого А. Маркова 2018 года (ISBN 978-5-386-10325-5)</li>
                        </ul>

                        <br/>

                        <p>У указанных переводов есть недостатки. Первые два незавершены, вторые же два мне сложно читать. Я предполагаю, что эти переводы были подстрочными: они стремились не исказить текст оригинала. Это отдельный вид переводов, и то, что их сложно воспринимать - это не их вина. Они служат другой цели.</p>

                        <p>Перевод Маркова критикуют за небрежность, поэтому за основу я взял Кубицкого. Примечания к нему я собирал из разных изданий: много - не мало.</p>

                        <br/>

                        <p>Переводов на иностранные языки больше, и они сильно понятнее. В первой половине XX века <a href="https://www.amazon.com/s?i=stripbooks&rh=p_27%3AW.D.+Ross&s=relevancerank&text=W.D.+Ross&ref=dp_byline_sr_book_1">W.D. Ross</a> перевёл на английский множество работ Аристотеля. Его парафраз - <a href={'https://archive.org/details/in.ernet.dli.2015.190825'}>W.D. Ross - Aristotle's Metaphysics</a>.</p>

                        <br/>

                        <p>
                            Я начал читать "Метафизику" - и понял две вещи:
                            <ul>
                                <li>книга невероятна полезна,</li>
                                <li>текст о диалектике сложнее самой диалектики.</li>
                            </ul>

                            Я решил найти что-нибудь, что может мне помочь прочитать "Метафизику".
                        </p>

                        <p>Об Аристотеле есть несколько видов работ:</p>

                        <ul>
                            <li>Лекции, сжато пересказывающие суть диалектики. Как дополнительный материал - прекрасно, но я хочу читать Аристотеля.</li>
                            <li>Исторические исследования древней Греции. Аналогично: полезно, но это не Аристотель.</li>
                            <li>Вольные сочинения на тему: статьи, рассуждения, трактовки. В основном, они написаны специалистами для специалистов, поэтому я с трудом могу понять, о чём в них идёт речь.</li>
                            <li>Аудиокниги. Максимально бесполезная вещь, я считаю. На слух Аристотеля воспринимать невозможно совсем.</li>
                        </ul>

                        <p>На русском языке я не нашёл ни одного разбора "Метафизики" по абзацам или хотя бы по главам. Ближе всех к этому подошёл "Аристотель для всех" М. Адлера, но он сильнее, чем мне надо, отходит в сторону упрощения.</p>

                        <br/>

                        <p>Я решил: пока читаю Аристотеля, я буду записывать абзац за абзацем так, как я их понял.</p>
                    </div>

                    <h4 id={'who'}>Кто</h4>
                    <div className={'chapter'}>
                        <p>Я не имею должного образования, чтобы утверждать, что я написал что-то осмысленное. Парафраз я делаю в меру своего разумения и лишь как отправную точку для изучения.</p>
                    </div>

                    <h4 id={'how'}>Как</h4>

                    <div className={'chapter'}>
                        <p>Я разбил текст "Метафизики" на три части. Первая - перевод 1934 года. Третья - мой парафраз. Между ними - вторая: примечания к обоим частям.</p>

                        <p>В тексте будут встречаться анахронизмы. Аристотель в парафразе говорит современными нам терминами. Это позволяет одновременно и сократить, и упростить текст. Например, Аристотель употребляет термин "сам-по-себе объект". Это же понятие мы знаем как "абстрактный объект". Как другой пример я предлагаю прочесть первую книгу, <a href="/books/b1#origin_b1_c9">девятую главу</a>, четвёртый абзац оригинала. Без привлечения современного языка это просто ад какой-то.</p>

                        <p>Вообще, у "Метафизики" надо бы первой читать пятую книгу. Она целиком посвящена базисным определениям. Я не знал этого, когда начинал парафраз, поэтому живём вот так вот.</p>
                    </div>

                    <h4 id={'advices'}>Советы</h4>

                    <div className={'chapter'}>
                        <ul>
                            <li>Необходимо закапываться в иностранные источники.</li>
                            <li>Не следует пренебрегать пре- и послесловиями к переводам Аристотеля. Часто там указывают полезную литературу.</li>
                        </ul>
                    </div>

                    <h4 id={'faq'}>ЧаВо</h4>

                    <div className={'chapter faq'}>
                        <ul>
                            <li>
                                <h5>Я нашёл опечатку, ошибку / Ты неправильно понял оригинал / Есть идея</h5>
                                <p>Пишите: справа указаны контакты. Если правда мой косяк - поправлю.</p>
                            </li>

                            <li>
                                <h5>Почему ты не переведёшь английский парафраз?</h5>
                                <p>Мне и на русском тяжело. Переводя английский, я перевру всё и вся. Я уверен, что любой специалист по древнегреческой философии поразится количеству неточностей в моём парафразе; хотя я пишу на родном языке с помощью английских книг. Что было бы, используй я только английский - боюсь сказать.</p>
                            </li>

                            <li>
                                <h5>Хочу помочь в переводе/разработке</h5>
                                <ul>
                                    <li><a href={'https://github.com/snowinmars/aristotel.paraphrase'}>GitHub</a></li>
                                    <li>Необходимо перевести примечания W.D. Ross'а с греческо-английского на просто английский.</li>
                                    <li>Необходимо отвалидировать парафраз на соответствие научному консенсусу.</li>
                                </ul>
                            </li>

                            <li>
                                <h5>Хочу закинуть денег</h5>
                                <p>Не надо.</p>
                            </li>

                            <li>
                                <h5>Хочу использовать этот парафраз в своей работе.</h5>
                                <p>Под открытой лицензией - на здоровье.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h5>Контакты</h5>

                    <div className={'chapter contacts'}>
                        <div>
                            <span>Telegram: <a href="https://t.me/snowinmars">@snowinmars</a></span>
                            <CopyToClipboard text={'@snowinmars'}>
                                <i className="material-icons">
                                    file_copy
                                </i>
                            </CopyToClipboard>
                        </div>

                        <div>
                            <span>GitHub: <a href="https://github.com/snowinmars">snowinmars</a></span>
                            <CopyToClipboard text={'snowinmars'}>
                                <i className="material-icons">
                                    file_copy
                                </i>
                            </CopyToClipboard>
                        </div>

                        <div>
                            <span>Email: <a href="mailto:snowinmars@yandex.ru">snowinmars@yandex.ru</a></span>
                            <CopyToClipboard text={'snowinmars@yandex.ru'}>
                                <i className="material-icons">
                                    file_copy
                                </i>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>

                <ScrollUpButton ContainerClassName={'scroll-up-button'}
                                AnimationDuration={100}/>
            </div>
        )
    }
}

export default About;
