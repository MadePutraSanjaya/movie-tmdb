"use client";
import { Paginate } from "@/types/paginate.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProduct,
  deleteProduct,
  fetchAllProducts,
  fetchProductById,
  fetchProducts,
  updateProduct,
} from "../api/axios";
import {
  CreateProductRequest,
  UpdateProductRequest,
} from "@/types/product.type";

export const useProduct = ({ offset, limit, title }: Paginate) => {
  return useQuery({
    queryKey: ["products", offset, limit, title],
    queryFn: async () => {
      const data = await fetchProducts({ offset, limit, title });
      return data;
    },
  });
};

export const useAllProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetchAllProducts();
      return response.data;
    },
  });
};

export const useProductById = (id: number) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const response = await fetchProductById(id);
      return response.data;
    },
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData: CreateProductRequest) => {
      const response = await createProduct(formData);
      return response?.data;
    },
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(["products"]);
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData: UpdateProductRequest) => {
      const { id, ...rest } = formData;
      // @ts-ignore
      const response = await updateProduct(id, rest);
      return response?.data;
    },

    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(["products"]);
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await deleteProduct(id);
      return response?.data;
    },
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(["products"]);
    },
  });
};
