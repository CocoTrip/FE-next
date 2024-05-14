'use client';

import { PlacesList, usePlacesList } from '@/widgets';

export default function Planner() {
  const {
    allPlaces,
    selectedPlaces,
    selectedCategory,
    filteredPlaces,
    handleListClick,
    handleRemovePlace,
    handleCategorySelect,
  } = usePlacesList();
  return (
    <div>
      <p>🚗 여행을 떠나요</p>
      <PlacesList
        allPlaces={allPlaces}
        selectedPlaces={selectedPlaces}
        selectedCategory={selectedCategory}
        filteredPlaces={filteredPlaces}
        handleListClick={handleListClick}
        handleRemovePlace={handleRemovePlace}
        handleCategorySelect={handleCategorySelect}
      />
    </div>
  );
}
