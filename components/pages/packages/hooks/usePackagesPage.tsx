"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPackages } from "../actions";

const usePackagesPage = (page: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [`packages:${page}`, page],
    queryFn: async () => {
      const data = await fetchPackages({ page });
      console.log(data);
      return data;
    },
  });

  const items = data || [];
  const total = data?.length || 0;

  return { data: items, isLoading, total };
};

export default usePackagesPage;

// const getMaterials = async () => {
//   const res = await fetch(`/api/material?page=${page}`);
//   const { data, total } = await res.json();
//   // console.log(total);
//   const formatted = data.map((d: any) => {
//     return {
//       ...d,
//       createdAt: new Date(d.createdAt),
//     };
//   });
//   return { data: formatted, total };
// };
