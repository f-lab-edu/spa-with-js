import Posts from './pages/posts';
import Post from './pages/post';

const routes = [
  { path: '/', component: Posts },
  { path: '/posts', component: Posts },
  { path: '/post', component: Post },
];

export default routes;
