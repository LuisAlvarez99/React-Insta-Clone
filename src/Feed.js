import { useState } from "react";
import FeedPost from "./FeedPost";

const postsArray = [
    {
        profile: 'genMan.jpg',
        name:'Luis',
        posted:'2d'
    }
]

const FeedList = () => {
    const [post,setPost] = useState(postsArray);
    const addPost = () => {
        setPost()
    }
    return(
    <div className="container-fluid">
        {post.map( p => (<FeedPost profile={p.profile} posted={p.posted} name= {p.name} /> )) }
    </div>
    )

};

export default FeedList;