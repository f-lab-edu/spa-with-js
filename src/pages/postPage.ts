import { PageProps } from 'types/routeTypes';
import PageComponent from '../components/PageComponent';
import Todo from '../components/todo';

type PostPageProps = PageProps & {};
class PostPage extends PageComponent<PostPageProps> {
  private readonly postId: string | null;
  constructor(props: PostPageProps) {
    super(props);
    this.postId = props.searchParams?.get('id') ?? null;
  }

  render() {
    const $postPage: HTMLDivElement = document.createElement('div');

    if (this.postId) {
      const todoComponent = new Todo({ todoId: Number(this.postId) });
      todoComponent
        .fetchTodo()
        .then(() => $postPage.appendChild(todoComponent.render()));
    } else {
      $postPage.innerText = '해당 id를 가진 게시글이 없음';
    }
    return $postPage;
  }
}
export default PostPage;
