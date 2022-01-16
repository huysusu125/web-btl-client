import "./post.css";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Post({post}) {
    // const PF = "http://localhost:5000/images/";
    const [categoryName, setCategoryName] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/category");
            // setPosts(res.data.data);
            console.log(typeof res.data.data)
            setCategoryName();
        };
        fetchPosts();
    },[])
    return (
        <div className="post">
            {/*{post.photo && <img className="postImg" src={PF + post.photo} alt="" />}*/}
            <img className="postImg" src="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg" alt=""/>
            <div className="postInfo">
                {/*<div className="postCats">*/}
                {/*  {post.categories.map((c) => (*/}
                {/*    <span className="postCat">{c.name}</span>*/}
                {/*  ))}*/}
                {/*</div>*/}
                <div className="postCats">
                    <span className="postCat">{post.category}</span>
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr/>
                <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
            </div>
            <p className="postDesc">{post.description}</p>
        </div>
    );
}
