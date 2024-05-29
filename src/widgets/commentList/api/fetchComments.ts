'use server';

import { Comment } from '@/shared';
import fs from 'fs';
import path from 'path';

export default async function fetchComments(
  postId: number,
): Promise<Comment[]> {
  const filePath = path.join(
    process.cwd(),
    'src',
    'shared',
    'mocks',
    'comments.json',
  );

  const jsonData = await fs.promises.readFile(filePath, 'utf8');
  const comments: Comment[] = JSON.parse(jsonData);
  const sortedComments = comments.sort(
    (post1, post2) =>
      new Date(post1.date).getTime() - new Date(post2.date).getTime(),
  );

  return sortedComments;
}
