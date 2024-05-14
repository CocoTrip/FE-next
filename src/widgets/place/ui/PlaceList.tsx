'use client';

import { ReactElement, memo } from 'react';
import { Place } from '@/widgets/place/PlacesData';

interface PlacesListProps {
  allPlaces: Place[];
  selectedPlaces: { [key: string]: boolean };
  selectedCategory:
    | 'restaurants'
    | 'attractions'
    | 'cafes'
    | 'accomodations'
    | null;
  filteredPlaces: Place[];
  handleListClick: (place: Place) => void;
  handleRemovePlace: (name: string) => void;
  handleCategorySelect: (
    category: 'restaurants' | 'attractions' | 'cafes' | 'accomodations' | null,
  ) => void;
}

interface CategoryButtonProps {
  category: 'restaurants' | 'attractions' | 'cafes' | 'accomodations' | null;
  selectedCategory:
    | 'restaurants'
    | 'attractions'
    | 'cafes'
    | 'accomodations'
    | null;
  onCategorySelect: (
    category: 'restaurants' | 'attractions' | 'cafes' | 'accomodations' | null,
  ) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = memo(
  ({ category, selectedCategory, onCategorySelect }: CategoryButtonProps) => (
    <button
      type="button"
      className={
        selectedCategory === category ? 'bg-violet-100' : 'bg-gray-100'
      }
      onClick={() => onCategorySelect(category)}
    >
      {category ?? '전체'}
    </button>
  ),
);

CategoryButton.displayName = 'CategoryButton';

export default function PlacesList({
  allPlaces,
  selectedPlaces,
  selectedCategory,
  filteredPlaces,
  handleListClick,
  handleRemovePlace,
  handleCategorySelect,
}: PlacesListProps): ReactElement {
  return (
    <div>
      {/* 카테고리 선택 버튼 */}
      <div>
        <CategoryButton
          category={null}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
        <CategoryButton
          category="restaurants"
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
        <CategoryButton
          category="attractions"
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
        <CategoryButton
          category="cafes"
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
        <CategoryButton
          category="accomodations"
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
      </div>
      <ul>
        {/* 장소 리스트 렌더링 */}
        {selectedCategory === null
          ? allPlaces.map(place => (
              <li key={place.name}>
                <input
                  id={`place-${place.name}`}
                  type="checkbox"
                  checked={selectedPlaces[place.name] || false}
                  onChange={() => handleListClick(place)}
                />
                <label htmlFor={`place-${place.name}`}>
                  {place.name} - {place.categories}
                </label>
              </li>
            ))
          : filteredPlaces.map(place => (
              <li key={place.name}>
                <input
                  id={`place-${place.name}`}
                  type="checkbox"
                  checked={selectedPlaces[place.name] || false}
                  onChange={() => handleListClick(place)}
                />
                <label htmlFor={`place-${place.name}`}>
                  {place.name} - {place.categories}
                </label>
              </li>
            ))}
      </ul>
      <ul>
        {/* 선택된 장소 리스트 렌더링 */}
        {typeof selectedPlaces === 'object' && selectedPlaces !== null
          ? Object.keys(selectedPlaces)
              .filter(name => selectedPlaces[name])
              .map(name => (
                <li key={name}>
                  {name}
                  <button type="button" onClick={() => handleRemovePlace(name)}>
                    삭제
                  </button>
                </li>
              ))
          : null}
      </ul>
    </div>
  );
}
