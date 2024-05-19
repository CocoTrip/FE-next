export const formatDate = (date: Date): string => {
  const currentDate = new Date();
  const diffInMillisenconds = currentDate.getTime() - date.getTime();
  const diffInHours = Math.floor(diffInMillisenconds / (1000 * 60 * 60));
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }
  return `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`;
};
