export interface PathFromRoot {
  id: string;
  name: string;
}

export interface FilterValues {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: FilterValues[];
}
