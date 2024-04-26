import PageComponent from '../components/PageComponent';
import { PageProps } from 'types/routeTypes';

class PostsPage extends PageComponent<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }
  render(): HTMLDivElement {
    const $postsPage: HTMLDivElement = document.createElement('div');
    $postsPage.innerText = '리스트';
    return $postsPage;
  }
}
export default PostsPage;
