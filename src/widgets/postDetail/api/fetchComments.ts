'use server';

import fs from 'fs';
import path from 'path';
import { CommentT } from '../types/comment';

export default async function fetchComments(): Promise<CommentT[]> {
  const filePath = path.join(
    process.cwd(),
    'src',
    'shared',
    'mocks',
    'comments.json',
  );

  const jsonData = await fs.promises.readFile(filePath, 'utf8');
  const comments: CommentT[] = JSON.parse(jsonData);
  const sortedComments = comments.sort(
    (post1, post2) =>
      new Date(post1.date).getTime() - new Date(post2.date).getTime(),
  );

  return sortedComments;
}
