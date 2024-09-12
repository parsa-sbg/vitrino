import { useContext, useEffect, useState } from "react";
import { getPosts } from "../services/api";
import { useLocations } from "./useLocations";
import { useCategory } from "./useCategory"
import { PostsContext } from "../contexts/postsContext";


export default function usePosts() {


    return useContext(PostsContext)


}