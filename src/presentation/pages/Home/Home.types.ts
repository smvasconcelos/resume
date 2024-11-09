export type ImplementationsStylesType = {
  $active?: boolean;
};

export interface IProjects {
  title: string;
  description: string;
  previewLink: string;
  githubLink: string;
  image?: string;
}

export interface IWorks {
  tab: string;
  description: string;
  title: string;
}

export interface IImplementations {
  title: string;
  description: string;
  codeString: string;
}
