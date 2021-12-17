interface ListItemKind {
  title?: string;
  name?: string;
  description?: string;
  address?: string;
  complete: boolean;
}

interface DataKind1 {
  id: number;
  title: string;
}

interface DataKind2 {
  name: string;
  description: string;
  address?: string;
}

type InputDataKind = DataKind1[] | DataKind2[];

type ToggleListItem = (selectedListItem: ListItemKind) => void;
