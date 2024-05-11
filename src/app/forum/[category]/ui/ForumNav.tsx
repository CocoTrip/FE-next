import { CATEGORIES } from '@/shared/index';
import Category from './Category';

export default function ForumNav({
  category: currentCategory,
}: {
  category: string;
}) {
  return (
    <nav aria-label="Forum Category">
      <ul className="space-y-2">
        {Object.keys(CATEGORIES).map(categoryKey => (
          <Category
            key={categoryKey}
            categoryKey={categoryKey}
            category={CATEGORIES[categoryKey]}
            isCurrentCategory={currentCategory === categoryKey}
          />
        ))}
      </ul>
    </nav>
  );
}
