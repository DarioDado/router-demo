import { Route, Routes, Navigate } from 'react-router';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CreatePostPage } from './components/CreatePostPage';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
import { Posts } from './components/Posts';
import { SinglePost } from './components/SinglePost';
import { UpdatePostPage } from './components/UpdatePostPage';

export function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={'/not-found'} element={<NotFound />} />
        <Route path={'/home'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/posts'} element={<Posts />} />
        <Route path={'/posts/:id'} element={<SinglePost />} />
        <Route path={'/posts/:id/update'} element={<UpdatePostPage />} />
        <Route path={'/posts/create'} element={<CreatePostPage />} />
        <Route path={'/'} element={<Navigate replace to={'/home'} />} />
        <Route path={'*'} element={<Navigate replace to={'/not-found'} />} />
      </Route>
    </Routes>
  );
}
