export type Place = {
  categories: 'restaurants' | 'attractions' | 'cafes' | 'accomodations';
  name: string;
};

// 예시 데이터
export const dummies: Place[] = [
  {
    categories: 'restaurants',
    name: '만리장성',
  },
  {
    categories: 'attractions',
    name: '올림픽 공원',
  },
  {
    categories: 'cafes',
    name: '냥냥 펀치',
  },
  {
    categories: 'accomodations',
    name: '서울 하얏트',
  },
];
