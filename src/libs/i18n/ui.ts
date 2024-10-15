export const languages = {
  en: 'English',
  ko: '한국어',
} as const;

export type Language = keyof typeof languages;

export const defaultLang = 'ko';

export const ui = {
  en: {
    '404.desc': 'Cannot find the related document.',
    'nav.title': 'Category',
    'nav.writing': 'Writing',
    'nav.writing.desc': 'A place to write tech-article',
    'nav.note': 'Imagery',
    'nav.note.desc': 'A place to write down my thoughts',
    'index.name': 'Wongi Rim',
    'index.desc':
      `<p>I'm recording to doesn't volatilize.</p>`,
    'index.currentWork': `<p>
    </p>`,
  },
  ko: {
    '404.desc': '관련된 문서를 찾을 수 없습니다.',
    'nav.title': '카테고리',
    'nav.writing': '개발',
    'nav.writing.desc': '개발 관련 글을 적는 곳',
    'nav.note': '심상',
    'nav.note.desc': '생각을 적는 곳',
    'index.name': '임원기',
    'index.desc':
      `<p>휘발되지 않도록 <b>기록</b>을 남기고 있습니다.</p>`,
    'index.currentWork': `      <p>
    </p>`,
  },
} satisfies Record<Language, { [key: string]: string }>;
