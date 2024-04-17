class PostPage {
  constructor(props) {
    this.postId = props.searchParams.get('id');
  }

  render() {
    const $postPage = document.createElement('div');
    $postPage.innerText = this.postId
      ? `디테일: ${this.postId}`
      : '해당 id를 가진 게시글이 없음';
    return $postPage;
  }
}
export default PostPage;
