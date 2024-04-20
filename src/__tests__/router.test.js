import { Router } from '../router';
describe('Router', () => {
  let router;

  // 페이지 컴포넌트 클래스 정의
  class PostsPageMock {
    async render() {
      const div = document.createElement('div');
      div.innerText = '리스트';
      return div;
    }
  }

  class PostPageMock {
    constructor({ searchParams }) {
      this.searchParams = searchParams;
    }
    async render() {
      const div = document.createElement('div');
      const id = this.searchParams.get('id');
      div.innerText = id ? `디테일: ${id}` : '해당 id를 가진 게시글이 없음';
      return div;
    }
  }

  class NotFoundPageMock {
    async render() {
      const div = document.createElement('div');
      div.innerText = 'NOT FOUND';
      return div;
    }
  }

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    router = new Router();
    router.addRoute('/', PostsPageMock);
    router.addRoute('/posts', PostsPageMock);
    router.addRoute('/post', PostPageMock);
    router.addRoute('*', NotFoundPageMock);
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
