'use client';

import { useEffect, useState } from 'react';
import { Categories, Place, PlaceResponse } from '@/shared/constant/types';
import { getPlaceData } from './api/tour';

function PlannerPage() {
  const [data, setData] = useState<PlaceResponse>();
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPlaceData();
      setData(result);
      console.log(result);

      const categoryData: Categories[] = result.data.reduce(
        (category, place) => {
          const category3 = place.카테고리3;
          if (category3 === '박물관') {
            category.push({ museum: '박물관' });
          } else if (category3 === '미술관') {
            category.push({ gallery: '미술관' });
          } else if (category3 === '여행지' || category3 === '문예회관') {
            category.push({ destination: '여행지' });
          } else if (category3 === '펜션' || category3 === '호텔') {
            category.push({ accomodation: '숙소' });
          } else if (category3 === '식당') {
            category.push({ restaurant: '식당' });
          } else if (category3 === '카페') {
            category.push({ cafe: '카페' });
          }
          return category;
        },
        [],
      );

      setCategories(categoryData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        {categories.map((category, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <button type="button" key={index}>
            {Object.entries(category)[0][1]}
          </button>
        ))}
      </div>
      <div>
        PlannerPage
        {data &&
          data.data.map((place: Place) => (
            <div key={place['건물 번호']}>
              <p>카테고리1: {place.카테고리1}</p>
              <p>카테고리2: {place.카테고리2}</p>
              <p>카테고리3: {place.카테고리3}</p>
              <p>시설명: {place.시설명}</p>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
}

export default PlannerPage;
