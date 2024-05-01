import PageComponent from '../components/PageComponent';

export type PageProps = {
  searchParams?: URLSearchParams;
};
export type PageComponentConstructor<T extends PageProps = {}> = new (
  props: T,
) => PageComponent<T>;

export type Route = {
  path: string;
  component: PageComponentConstructor<PageProps>;
};
