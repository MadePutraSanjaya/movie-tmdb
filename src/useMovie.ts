// "use client"

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { fetchMovie } from "./utils/api/axios";

// export const useMovie = (offset: number, limit: number, title: string) => {
//     return useQuery({
//         queryKey: ['movies', offset, limit, title],
//         queryFn: async () => {
//           const data = await fetchMovie({offset:, limit: limit})
//         },
//     })
// }
