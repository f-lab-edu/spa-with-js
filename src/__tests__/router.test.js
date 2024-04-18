import { Router } from '../router';
import PostsPage from '../pages/postsPage';
import PostPage from '../pages/postPage';
import NotFound from '../pages/notFoundPage';

describe('Router', () => {
  let router;
  beforeEach(() => {
    document.body.innerHTML = `<div id="app"></div>`;
    router = new Router();
    router.addRoute('/', PostsPage);
    router.addRoute('/posts', PostsPage);
    router.addRoute('/post', PostPage);
    router.addRoute('*', NotFound);
  });
  describe('Posts Page', () => {
    it('/로 진입', async () => {
      await router.render('http://localhost');
      expect(document.querySelector('#app > div').innerText).toContain(
        '리스트',
      );
    });
    it('/posts로 진입', async () => {
      await router.render('http://localhost/posts');
      expect(document.querySelector('#app > div').innerText).toContain(
        '리스트',
      );
    });
  });
  describe('Post Page', () => {
    it('/post?id=2 로 진입', async () => {
      await router.render('http://localhost/post?id=2');
      expect(document.querySelector('#app > div').innerText).toContain(
        '디테일: 2',
      );
    });
    it('/post 로 진입 (id 없음)', async () => {
      await router.render('http://localhost/post');
      expect(document.querySelector('#app > div').innerText).toContain(
        '해당 id를 가진 게시글이 없음',
      );
    });
  });

  it('없는 주소로 진입', async () => {
    await router.render('http://localhost/notfound');
    expect(document.querySelector('#app > div').innerText).toContain(
      'NOT FOUND',
    );
  });
});
