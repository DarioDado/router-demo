import { Route, Routes, Navigate } from 'react-router';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
import { Posts } from './components/Posts';
import { SinglePost } from './components/SinglePost';

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
      </Route>
      <Route path={'*'} element={<Navigate replace to={'/not-found'} />} />
    </Routes>
  );
}
