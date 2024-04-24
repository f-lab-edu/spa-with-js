import BaseComponent from '../components/BaseComponent';

export type PageProps = {
  searchParams?: URLSearchParams;
};
export type PageComponent<T extends PageProps = {}> = new (
  props: T,
) => BaseComponent<T>;

export type Route<T extends PageProps = {}> = {
  path: string;
  component: PageComponent<T>;
};
