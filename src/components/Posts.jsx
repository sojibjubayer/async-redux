import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/posts/postsSlice";

const Posts = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }


  return (
    <>
      {posts?.length > 0
        ? posts?.map((post) => 
            <div key={post.id} className="border rounded-md p-2 mx-2 my-2">{post.title}</div>
          )
        : "No data found"}
    </>
  );
};
export default Posts;
