'use server';

import fs from 'fs';
import path from 'path';
import { Post } from '../types/post';

export async function fetchPost(postId: number): Promise<Post | undefined> {
  const filePath = path.join(
    process.cwd(),
    'src',
    'shared',
    'mocks',
    'posts.json',
  );

  const jsonData = await fs.promises.readFile(filePath, 'utf8');
  const posts: Post[] = JSON.parse(jsonData);
  const filteredPost: Post | undefined = posts.find(
    post => post.postId === Number(postId),
  );
  return filteredPost;
}
