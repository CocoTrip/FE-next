import { PlaceResponse } from '@/shared/constant/types';
import { BASE_URL } from '@/shared/constant/baseUrl';

export const getPlaceData = async (): Promise<PlaceResponse> => {
  const response = await fetch(BASE_URL, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Faild to fetch data.. HTTP status: ${response.status}`);
  }
  return response.json();
};
