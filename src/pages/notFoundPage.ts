import PageComponent from '../components/PageComponent';
import { PageProps } from 'types/routeTypes';

class NotFoundPage extends PageComponent<PageProps> {
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
