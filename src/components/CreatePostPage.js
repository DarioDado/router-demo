import { useState } from 'react';
import { useNavigate } from 'react-router';

export const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCreatePost = () => {
    setLoading(true);
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log('Error');
          setLoading(false);
          return;
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        console.log('created post: ', data);
        navigate('/posts');
      });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <p>Title</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
      <p>Body</p>
      <textarea value={body} rows="10" onChange={(e) => setBody(e.target.value)}></textarea>
      <div>
        <button disabled={!title || !body || loading} onClick={onCreatePost}>
          Create Post
        </button>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};
