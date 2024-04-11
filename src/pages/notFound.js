class NotFound {
  constructor(props) {}

  render() {
    const $notFoundPage = document.createElement('div');
    $notFoundPage.innerText = 'NOT FOUND';
    return $notFoundPage;
  }
}
export default NotFound;
