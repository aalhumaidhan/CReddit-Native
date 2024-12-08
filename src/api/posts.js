import instance from ".";

const getAllPosts = async () => {
  const response = await instance.get("/posts");
  return response.data;
};

const getPostById = async (id) => {
  const response = await instance.get(`/posts/${id}`);
  return response.data;
};

const createPost = async (post) => {
  const response = await instance.post("/posts", post);
  return response.data;
};

const deletePostById = async (id) => {
  const response = await instance.delete(`/posts/${id}`);
  return response.data;
};

export { getAllPosts, getPostById, createPost, deletePostById };
