import { Paginate } from "@/types/paginate.type";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Fetches a list of products based on the provided pagination parameters.
 * @param {Paginate} param0 - An object containing offset, limit, and title for pagination.
 * @returns {Promise} A promise that resolves with the data of the fetched products.
 */
export const fetchProducts = async ({ offset, limit, title }: Paginate) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/`, {
      params: {
        offset,
        limit,
        title,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchProductById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
