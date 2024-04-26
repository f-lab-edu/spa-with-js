import { PageProps } from 'types/routeTypes';

abstract class PageComponent<T extends PageProps = PageProps> {
  protected constructor(protected props: T) {}

  abstract render(): HTMLElement;
}

export default PageComponent;
