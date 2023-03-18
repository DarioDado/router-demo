import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export const UpdatePostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
      });
  }, [params.id]);

  const onUpdatePost = () => {
    setLoading(true);
    fetch(`https://dummyjson.com/posts/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
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
        console.log('Updated post: ', data);
        navigate('/posts');
      });
  };

  return (
    <div>
      <h1>Update Post</h1>
      <p>Title</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
      <p>Body</p>
      <textarea value={body} rows="10" onChange={(e) => setBody(e.target.value)}></textarea>
      <div>
        <button disabled={!title || !body || loading} onClick={onUpdatePost}>
          Update
        </button>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};
