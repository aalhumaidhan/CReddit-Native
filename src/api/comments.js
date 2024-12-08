import instance from ".";

const addComment = async (postId) => {
  const response = await instance.post(`/posts/${postId}/comments`);
  return response.data;
};

const deleteComment = async (commentId) => {
  const response = await instance.delete(`/posts/comments/${commentId}`);
  return response.data;
};

export { addComment, deleteComment };
