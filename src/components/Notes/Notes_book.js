import b1_c1_notes from './b1_c1.notes';
import b1_c2_notes from './b1_c2.notes';
import b1_c3_notes from './b1_c3.notes';
import b1_c4_notes from './b1_c4.notes';
import b1_c5_notes from './b1_c5.notes';
import b1_c6_notes from './b1_c6.notes';
import b1_c7_notes from './b1_c7.notes';
import b1_c8_notes from './b1_c8.notes';
import {read_notes} from '../_lib/common'

const chapter_1_1 = {
    id: "notes_b1_c1",
    title: "Примечания к первой главе",
    origin_paragraphs: read_notes(b1_c1_notes)

};

const chapter_1_2 = {
    id: "notes_b1_c2",
    title: "Примечания ко второй главе",
    origin_paragraphs: read_notes(b1_c2_notes)
};

const chapter_1_3 = {
    id: "notes_b1_c3",
    title: "Примечания к третьей главе",
    origin_paragraphs: read_notes(b1_c3_notes)
};

const chapter_1_4 = {
    id: "notes_b1_c4",
    title: "Примечания к четвёртой главе",
    origin_paragraphs: read_notes(b1_c4_notes)
};

const chapter_1_5 = {
    id: "notes_b1_c5",
    title: "Примечания к пятой главе",
    origin_paragraphs: read_notes(b1_c5_notes)
};

const chapter_1_6 = {
    id: "notes_b1_c6",
    title: "Примечания к шестой главе",
    origin_paragraphs: read_notes(b1_c6_notes)
};

const chapter_1_7 = {
    id: "notes_b1_c7",
    title: "Примечания к седьмой главе",
    origin_paragraphs: read_notes(b1_c7_notes)
};

const chapter_1_8 = {
    id: "notes_b1_c8",
    title: "Примечания к восьмой главе",
    origin_paragraphs: read_notes(b1_c8_notes)
};

export default {
    id: "notes_book_1",
    title: "",
    chapters: [
        chapter_1_1,
        chapter_1_2,
        chapter_1_3,
        chapter_1_4,
        chapter_1_5,
        chapter_1_6,
        chapter_1_7,
        chapter_1_8,
    ]
};
