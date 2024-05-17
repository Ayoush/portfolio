import { atom } from 'recoil';

export const blogStatsAtom = atom({
  key: 'blogStats',
  default: [],
});

export const blogAtom = atom({
  key: 'blogs',
  default: [],
});

export const hblogAtom = atom({
  key: 'hblogs',
  default: [],
});

export const badgesAtom = atom({
  key: 'badges',
  default: [],
});


export const tagsAtom = atom({
  key: 'tags',
  default: [],
});