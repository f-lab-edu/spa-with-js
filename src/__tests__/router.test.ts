import { Router } from 'router';
import {
  NotFoundPageMock,
  PostPageMock,
  PostsPageMock,
} from './mocks/pageMocks';
import { PageProps } from 'types/routeTypes';
describe('Router', () => {
  let router: Router<PageProps>;

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    router = new Router<PageProps>();
    router.addRoute('/', PostsPageMock);
    router.addRoute('/posts', PostsPageMock);
    router.addRoute('/post', PostPageMock);
    router.addRoute('*', NotFoundPageMock);
  });

  describe('Posts Page', () => {
    it('/로 진입', async () => {
      await router.render('http://localhost');
      const $element = document.querySelector('#app > div') as HTMLDivElement;
      expect($element.innerText).toContain('리스트');
    });
    it('/posts로 진입', async () => {
      await router.render('http://localhost/posts');
      const $element = document.querySelector('#app > div') as HTMLDivElement;
      expect($element.innerText).toContain('리스트');
    });
  });
  describe('Post Page', () => {
    it('/post?id=2 로 진입', async () => {
      await router.render('http://localhost/post?id=2');
      const $element = document.querySelector('#app > div') as HTMLDivElement;
      expect($element.innerText).toContain('디테일: 2');
    });
    it('/post 로 진입 (id 없음)', async () => {
      await router.render('http://localhost/post');
      const $element = document.querySelector('#app > div') as HTMLDivElement;
      expect($element.innerText).toContain('해당 id를 가진 게시글이 없음');
    });
  });

  it('없는 주소로 진입', async () => {
    await router.render('http://localhost/notfound');
    const $element = document.querySelector('#app > div') as HTMLDivElement;
    expect($element.innerText).toContain('NOT FOUND');
  });
});
