type PostPageProps = {
  searchParams: URLSearchParams;
};
class PostPage {
  private readonly postId: string | null;
  constructor(props: PostPageProps) {
    this.postId = props.searchParams.get('id');
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
