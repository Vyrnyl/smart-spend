import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

type CreateCategoryInput = Prisma.CategoryCreateInput;
type UpdateCategoryInput = Prisma.CategoryUpdateInput;

export const createCategory = (data: CreateCategoryInput) => {
  return prisma.category.create({
    data,
  });
};

export const getAllCategory = (userId: string) => {
  return prisma.category.findMany({ where: { userId } });
};

export const getCategoryById = (categoryId: string, userId: string) => {
  return prisma.category.findFirst({ where: { id: categoryId, userId } });
};

export const updateCategory = (categoryId: string, data: UpdateCategoryInput) => {
  return prisma.category.update({ where: { id: categoryId }, data });
};

export const deleteCategory = (categoryId: string) => {
  return prisma.category.delete({ where: { id: categoryId } }); 
}