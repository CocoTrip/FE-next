'use server';

import { PAGE_SIZE } from '@/shared';
import { Post } from '@/widgets/postDetail/types/post';
import fs from 'fs';
import path from 'path';

export async function fetchPosts(
  category: string,
  page: number,
): Promise<Post[]> {
  const filePath = path.join(
    process.cwd(),
    'src',
    'shared',
    'mocks',
    'posts.json',
  );

  const jsonData = await fs.promises.readFile(filePath, 'utf8');
  const posts: Post[] = JSON.parse(jsonData);
  const sortedPosts = posts.sort(
    (post1, post2) =>
      new Date(post2.createdAt).getTime() - new Date(post1.createdAt).getTime(),
  );
  const filteredPosts: Post[] =
    category === 'all'
      ? sortedPosts
      : sortedPosts.filter(post => post.category === category);

  const pagenatedPosts: Post[] = filteredPosts.slice(
    PAGE_SIZE * (page - 1),
    PAGE_SIZE * page,
  );

  return pagenatedPosts;
}
