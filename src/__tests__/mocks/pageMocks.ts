import PageComponent from '../../components/PageComponent';
import { PageProps } from 'types/routeTypes';

export class PostsPageMock extends PageComponent<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }
  render() {
    const div = document.createElement('div');
    div.innerText = '리스트';
    return div;
  }
}

export class PostPageMock extends PageComponent<PageProps> {
  private searchParams: URLSearchParams;

  constructor(props: PageProps) {
    super(props);
    if (!props.searchParams) {
      throw new Error('searchParams is required for PostPageMock');
    }
    this.searchParams = props.searchParams;
  }

  render() {
    const div = document.createElement('div');
    const id = this.searchParams.get('id');
    div.innerText = id ? `디테일: ${id}` : '해당 id를 가진 게시글이 없음';
    return div;
  }
}

export class NotFoundPageMock extends PageComponent<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }
  render() {
    const div = document.createElement('div');
    div.innerText = 'NOT FOUND';
    return div;
  }
}
