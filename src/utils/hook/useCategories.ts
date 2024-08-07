"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/axios";
import { Category } from "@/types/categories.type";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetchCategories();
      return response?.data as Category[];
    },
  });
};
