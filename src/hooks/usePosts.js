import { useContext } from "react";
import { PostsContext } from "../contexts/postsContext";

const usePosts = () => useContext(PostsContext)

export default usePosts