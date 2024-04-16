import PostsPage from './pages/postsPage';
import PostPage from './pages/postPage';
import NotFound from './pages/notFoundPage';

const routes = [
  { path: '/', component: PostsPage },
  { path: '/posts', component: PostsPage },
  { path: '/post', component: PostPage },
  { path: '*', component: NotFound },
];

export default routes;
