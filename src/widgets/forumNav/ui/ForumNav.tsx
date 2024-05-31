import { FORUM_CATEGORIES } from '@/widgets/forumNav/types/forumCategory';
import Category from './Category';

export default function ForumNav({
  category: currentCategory,
}: {
  category: string;
}) {
  return (
    <nav aria-label="Forum Category">
      <ul className="flex justify-around ">
        {Object.keys(FORUM_CATEGORIES).map(categoryKey => (
          <Category
            key={categoryKey}
            categoryKey={categoryKey}
            category={FORUM_CATEGORIES[categoryKey]}
            isCurrentCategory={currentCategory === categoryKey}
          />
        ))}
      </ul>
    </nav>
  );
}
