import Post from "../post/Post";
import "./posts.css";
import axios from "axios";
import {useEffect, useState} from "react";

export default function Posts({posts}) {
    return (
        <div className="posts">
            {posts.map((p) => (
                <Post post={p}/>
            ))}
        </div>
    );
}
