import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Root.scss';
import Chapter from "../Chapter/Chapter";
import Origin_Books from '../Origin/Origin_book'
import Paraphrase_Books from '../Paraphrase/Paraphrase_book'
import Origin_notes_books from '../Origin/Origin_book.notes'
import Paraphrase_notes_books from '../Paraphrase/Paraphrase_book.notes'
import SiteMenu from "../Menu/Menu";
import About from "../About/About";
import Status from "../Status/Status";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {connect} from "react-redux";

class Root extends React.PureComponent {

    render = () => {
        const books = Origin_Books.books.map((book, book_index) => {
            const origin_book = Origin_Books.books[book_index];
            const paraphrase_book = Paraphrase_Books.books[book_index];
            const origin_notes_books = Origin_notes_books.books[book_index];
            const paraphrase_notes_books = Paraphrase_notes_books.books[book_index];
            const book_id = `${origin_book.id}_${origin_notes_books.id}_${paraphrase_book.id}_${paraphrase_notes_books.id}`;

            const content_items = book.chapters.map((_, chapter_index) => {
                const origin_chapter = origin_book.chapters[chapter_index];
                const paraphrase_chapter = paraphrase_book.chapters[chapter_index];

                return <React.Fragment key={`${book_id}_contents_chapter${chapter_index}`}>
                    <li><a href={`#${origin_chapter.id}`}>{paraphrase_chapter.title}</a></li>
                </React.Fragment>;
            });

            const chapters = book.chapters.map((_, chapter_index) => {
                const origin_chapter = origin_book.chapters[chapter_index];
                const paraphrase_chapter = paraphrase_book.chapters[chapter_index];
                const origin_notes_chapter = origin_notes_books.chapters[chapter_index];
                const paraphrase_notes_chapter = paraphrase_notes_books.chapters[chapter_index];

                let additional_text = null;

                if (this.props.isAdditionalTextVisible) {
                    additional_text = <React.Fragment>
                        <Chapter className={'chapter-column'} chapter={origin_chapter}/>

                        <Tabs defaultIndex={1} className={'sticky chapter-column'}>
                            <TabList>
                                <Tab>{origin_notes_chapter.title}</Tab>
                                <Tab>{paraphrase_notes_chapter.title}</Tab>
                            </TabList>

                            <TabPanel>
                                <Chapter chapter={origin_notes_chapter} />
                            </TabPanel>
                            <TabPanel>
                                <Chapter chapter={paraphrase_notes_chapter} />
                            </TabPanel>
                        </Tabs>
                    </React.Fragment>
                }

                return <React.Fragment
                    key={`${book_id}_chapter${chapter_index}`}>
                    <div className={'chapters-list'}>
                        {additional_text}

                        <Chapter className={'chapter-column'} chapter={paraphrase_chapter}/>
                    </div>
                </React.Fragment>;
            });

            return <React.Fragment key={book_id}>
                Оглавление:
                <ul className={'content'}>
                    {content_items}
                </ul>

                <div className={'chapters-list'}>
                    <span className={'book-title'}>{origin_book.title}</span>
                    <span className={'book-title'}>Примечания</span>
                    <span className={'book-title'}>{paraphrase_book.title}</span>
                </div>

                {chapters}
            </React.Fragment>;
        });

        return (
            <div className={'root'}>
                <Router>
                    <SiteMenu  />

                    <Switch>
                        <Route path={'/status'}>
                            <Status />
                        </Route>

                        <Route path={'/books/b1'}>
                            <ScrollUpButton ContainerClassName={'scroll-up-button'}
                                            AnimationDuration={100}/>
                            {books[0]}
                        </Route>

                        <Route path={'/books'}>
                            Оглавление
                            <ul>
                                <li>
                                    <Link to={'/books/b1'}>Книга первая: причины</Link>
                                </li>
                            </ul>
                        </Route>

                        <Route path={'/'}>
                            <About />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isAdditionalTextVisible: state.isAdditionalTextVisible,
    }
};

export default connect(mapStateToProps)(Root);

