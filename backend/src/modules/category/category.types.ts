
export interface CreateCategoryDTO {
  name: string;
  color: string;
}

export interface UpdateCategoryDTO {
  name?: string | undefined;
  color?: string | undefined;
}
