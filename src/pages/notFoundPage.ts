import BaseComponent from '../components/BaseComponent';
import { PageProps } from 'types/routeTypes';

class NotFoundPage extends BaseComponent<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }
  render(): HTMLDivElement {
    const $notFoundPage: HTMLDivElement = document.createElement('div');
    $notFoundPage.innerText = 'NOT FOUND';
    return $notFoundPage;
  }
}
export default NotFoundPage;
