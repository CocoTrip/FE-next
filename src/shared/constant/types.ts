export interface PlaceResponse {
  currentCount: number;
  data: Place[];
  matchCount: number;
  page: number;
  perPage: number;
  totalCount: number;
}

export interface Place {
  '건물 번호': string;
  경도: string;
  '기본 정보_장소설명': string;
  '도로명 이름': string;
  도로명주소: string;
  '리 명칭': string;
  '반려동물 동반 가능정보': string;
  '반려동물 전용 정보': string;
  '반려동물 제한사항': string;
  번지: string;
  법정읍면동명칭: string;
  '시군구 명칭': string;
  '시도 명칭': string;
  시설명: string;
  '애견 동반 추가 요금': string;
  우편번호: number;
  운영시간: string;
  위도: string;
  '입장 가능 동물 크기': string;
  '입장(이용료)가격 정보': string;
  '장소(실내) 여부': string;
  '장소(실외)여부': string;
  전화번호: string;
  '주차 가능여부': string;
  지번주소: string;
  최종작성일: string;
  카테고리1: string;
  카테고리2: string;
  카테고리3: string;
  홈페이지: string;
  휴무일: string;
}

export type CategoryType =
  | { museum?: '박물관' }
  | { gallery?: '미술관' }
  | { destination?: '여행지' }
  | { accomodation?: '숙소' }
  | { restaurant?: '식당' }
  | { cafe?: '카페' };

export interface Categories {
  museum: string;
  gallery: string;
  destination: string;
  accomodation: string;
  restaurant: string;
  cafe: string;
}
