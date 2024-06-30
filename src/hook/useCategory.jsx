import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCategorys } from "../services/categoryService";

const useCategory = () => {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["getCategory"],
    queryFn: getAllCategorys,
  });

  const { categories: rawCategory = [] } = data || [];

  const category = rawCategory?.map((item) => {
    return {
      label: item.title,
      value: item._id,
    };
  });

  const transformedCategory = rawCategory?.map((item) => {
    return {
      label: item.title,
      value: item.englishTitle,
    };
  });

  return { isLoading, category, transformedCategory };
};

export default useCategory;
