import b1_c1_text from './b1_c1';
import b1_c2_text from './b1_c2';
import b1_c3_text from './b1_c3';
import b1_c4_text from './b1_c4';
import b1_c5_text from './b1_c5';
import {read_chapter} from '../_lib/common'

const chapter_1_1 = {
    id: "paraphrase_b1_c1",
    title: "Умение и искусство",
    origin_paragraphs: read_chapter(b1_c1_text)
};

const chapter_1_2 = {
    id: "paraphrase_b1_c2",
    title: "Мудрость",
    origin_paragraphs: read_chapter(b1_c2_text)
};

const chapter_1_3 = {
    id: "paraphrase_b1_c3",
    title: "Первопричины - основы",
    origin_paragraphs: read_chapter(b1_c3_text)
};

const chapter_1_4 = {
    id: "paraphrase_b1_c4",
    title: "Первопричины - обзор",
    origin_paragraphs: read_chapter(b1_c4_text)
};

const chapter_1_5 = {
    id: "paraphrase_b1_c5",
    title: "Первопричины - пифагорейцы",
    origin_paragraphs: read_chapter(b1_c5_text)
};

export default {
    id: "paraphrase_book_1",
    title: "Философия - наука о причинах",
    chapters: [
        chapter_1_1,
        chapter_1_2,
        chapter_1_3,
        chapter_1_4,
        chapter_1_5,
    ]
};
