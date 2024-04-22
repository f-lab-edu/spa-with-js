export type PageComponent = new (props: any) => {
  render: () => HTMLElement;
};

export type Route = {
  path: string;
  component: PageComponent;
};
