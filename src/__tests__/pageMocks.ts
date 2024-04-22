export class PostsPageMock {
  render() {
    const div = document.createElement('div');
    div.innerText = '리스트';
    return div;
  }
}

export class PostPageMock {
  private searchParams: URLSearchParams;

  constructor({ searchParams }: { searchParams: URLSearchParams }) {
    this.searchParams = searchParams;
  }

  render() {
    const div = document.createElement('div');
    const id = this.searchParams.get('id');
    div.innerText = id ? `디테일: ${id}` : '해당 id를 가진 게시글이 없음';
    return div;
  }
}

export class NotFoundPageMock {
  render() {
    const div = document.createElement('div');
    div.innerText = 'NOT FOUND';
    return div;
  }
}
