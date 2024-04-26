import { PageProps } from 'types/routeTypes';
import PageComponent from '../components/PageComponent';

type PostPageProps = PageProps & {};
class PostPage extends PageComponent<PostPageProps> {
  private readonly postId: string | null;
  constructor(props: PostPageProps) {
    super(props);
    this.postId = props.searchParams?.get('id') ?? null;
  }

  render(): HTMLDivElement {
    const $postPage: HTMLDivElement = document.createElement('div');
    $postPage.innerText = this.postId
      ? `디테일: ${this.postId}`
      : '해당 id를 가진 게시글이 없음';
    return $postPage;
  }
}
export default PostPage;
