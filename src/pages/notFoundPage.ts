class NotFoundPage {
  render(): HTMLDivElement {
    const $notFoundPage: HTMLDivElement = document.createElement('div');
    $notFoundPage.innerText = 'NOT FOUND';
    return $notFoundPage;
  }
}
export default NotFoundPage;
