class PostsPage {
  render(): HTMLDivElement {
    const $postsPage: HTMLDivElement = document.createElement('div');
    $postsPage.innerText = '리스트';
    return $postsPage;
  }
}
export default PostsPage;
