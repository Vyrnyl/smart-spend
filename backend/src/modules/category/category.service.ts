import { CreateCategoryDTO, UpdateCategoryDTO } from "./category.types";
import AppError from "../../utils/AppError";
import * as categoryRepo from "./category.repository";

export const createCategory = (userId: string, dto: CreateCategoryDTO) => {
  return categoryRepo.createCategory({
    ...dto,
    user: { connect: { id: userId } },
  });
};

export const getAllCategory = (userId: string) => {
  return categoryRepo.getAllCategory(userId);
};

export const updateCategory = async (
  categoryId: string,
  userId: string,
  dto: UpdateCategoryDTO,
) => {
  const category = await categoryRepo.getCategoryById(categoryId, userId);

  if (!category) throw new AppError("Category not found", 404);

  return categoryRepo.updateCategory(categoryId, {
    ...(dto.name !== undefined && { name: dto.name }),
    ...(dto.color !== undefined && { color: dto.color }),
  });
};

export const deleteCategory = async (categoryId: string, userId: string) => {
  const category = await categoryRepo.getCategoryById(categoryId, userId);

  if (!category) throw new AppError("Category not found", 404);

  return categoryRepo.deleteCategory(categoryId);
};
