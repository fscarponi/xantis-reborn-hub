
export enum View {
  HOME = 'HOME',
  PS_CALCULATOR = 'PS_CALCULATOR',
  ITEM_CALCULATOR = 'ITEM_CALCULATOR',
  MAGIC_FOR_DUMMIES = 'MAGIC_FOR_DUMMIES',
}

export interface Project {
  id: View;
  name: string;
  url: string;
  icon: JSX.Element;
  description: string;
}