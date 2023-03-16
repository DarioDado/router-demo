import { useEffect, useState } from 'react';
import './Posts.css';
import { useNavigate } from 'react-router';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const onPostClick = (id) => {
    console.log(id);
    navigate(`/posts/${id}`);
  };

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <div className="post" key={post.id} onClick={() => onPostClick(post.id)}>
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
