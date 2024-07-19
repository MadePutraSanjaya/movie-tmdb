import { Paginate } from "@/types/paginate.type";
import { CreateProductRequest } from "@/types/product.type";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Fetches a list of products from the API based on the provided pagination parameters.
 * @param {Paginate} offset - The offset value for pagination.
 * @param {Paginate} limit - The limit value for pagination.
 * @param {Paginate} title - The title to search for in the products.
 * @returns {Promise} A promise that resolves with the data of the fetched products.
 * @throws {Error} If there is an error during the API request.
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

/**
 * Fetches all products from the API endpoint.
 * @returns {Promise} A promise that resolves with the data of all products fetched.
 * @throws {Error} If there is an error while fetching the products.
 */
export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetches product data from the API based on the provided product ID.
 * @param {number} id - The ID of the product to fetch.
 * @returns {Promise} A promise that resolves to the product data.
 * @throws {Error} If there is an error fetching the product data.
 */
export const fetchProductById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Creates a new product by making a POST request to the API endpoint.
 * @param {CreateProductRequest} product - The product object to be created.
 * @returns {Promise} A promise that resolves to the response data from the API.
 * @throws {Error} If there is an error making the POST request.
 */
export const createProduct = async (product: CreateProductRequest) => {
  try {
    return axios.post(`${API_BASE_URL}/products`, product);
  } catch (error) {
    throw error;
  }
};

/**
 * Updates a product with the given ID using the provided product data.
 * @param {number} id - The ID of the product to update.
 * @param {Omit<CreateProductRequest, "id">} product - The product data to update.
 * @returns {Promise} A promise that resolves to the updated product data if successful.
 * @throws {Error} If an error occurs during the update process.
 */
export const updateProduct = async (
  id: number,
  product: Omit<CreateProductRequest, "id">
) => {
  try {
    return axios.put(`${API_BASE_URL}/products/${id}`, product);
  } catch (error) {
    throw error;
  }
};

/**
 * Deletes a product with the given ID from the server.
 * @param {number} id - The ID of the product to delete.
 * @returns {Promise} A promise that resolves to the result of the deletion request.
 * @throws {Error} If there is an error during the deletion process.
 */
export const deleteProduct = async (id: number) => {
  try {
    return axios.delete(`${API_BASE_URL}/products/${id}`);
  } catch (error) {
    throw error;
  }
};

/**
 * Fetches the list of categories from the API endpoint.
 * @returns {Promise} A promise that resolves with the list of categories from the API.
 * @throws {Error} If there is an error while fetching the categories.
 */
export const fetchCategories = async () => {
  try {
    const data = await axios.get(`${API_BASE_URL}/categories`);
    return data;
  } catch (error) {
    throw error;
  }
};
