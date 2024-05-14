'use client';

import { useEffect, useState } from 'react';
import { dummies, Place } from '@/widgets/place/PlacesData';

export default function usePlacesList() {
  const [allPlaces, setAllPlace] = useState<Place[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedCategory, setSelectedCategory] = useState<
    'restaurants' | 'attractions' | 'cafes' | 'accomodations' | null
  >(null);
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>(allPlaces);

  useEffect(() => {
    setAllPlace(dummies);
  }, []);

  useEffect(() => {
    if (selectedCategory === null) {
      setFilteredPlaces(allPlaces);
    } else {
      setFilteredPlaces(
        allPlaces.filter(place => place.categories === selectedCategory),
      );
    }
  }, [selectedCategory, allPlaces]);

  const handleListClick = (place: Place) => {
    setSelectedPlaces(prev => ({
      ...prev,
      [place.name]: !prev[place.name],
    }));
  };

  const handleRemovePlace = (name: string) => {
    setSelectedPlaces(prev => {
      const newState = { ...prev };
      delete newState[name];
      return newState;
    });
  };

  const handleCategorySelect = (
    category: 'restaurants' | 'attractions' | 'cafes' | 'accomodations' | null,
  ) => {
    setSelectedCategory(category);
  };

  return {
    allPlaces,
    selectedPlaces,
    selectedCategory,
    filteredPlaces,
    handleListClick,
    handleRemovePlace,
    handleCategorySelect,
  };
}
