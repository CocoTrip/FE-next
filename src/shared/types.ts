export interface Post {
  postId: number;
  category: string;
  title: string;
  contents: string;
  createdAt: Date;
  writer: string;
  likes: number;
  comments: number;
  tags: string[];
  viewCount: number;
  status: 'active' | 'deleted';
}

export interface Comment {
  commentId: number;
  author: string;
  date: string;
  content: string;
}
