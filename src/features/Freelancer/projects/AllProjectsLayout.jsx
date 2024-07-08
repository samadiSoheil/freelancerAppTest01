import useCategory from "../../../hook/useCategory";
import BackPageBtn from "../../../ui/AppLauout/BackPageBtn";
import HeaderOfComponent from "../../../ui/AppLauout/HeaderOfComponent";
import Filter from "../../../ui/FilterComponents/Filter";
import FilterDropDown from "../../../ui/FilterComponents/FilterDropDown";
import ProjectsTable from "./ProjectsTable";

const AllProjectsLayout = () => {
  const { isLoading, transformedCategory } = useCategory();
  return (
    <>
      <HeaderOfComponent title="پروژه ها">
        <div className="flex justify-end items-center gap-8">
          <Filter
            label="وضعیت"
            filterField="status"
            optioins={[
              { value: "ALL", label: "همه" },
              { value: "OPEN", label: "باز" },
              { value: "CLOSED", label: "بسته" },
            ]}
          />
          <FilterDropDown
            filterField="category"
            optioins={[{ value: "ALL", label: "همه" }, ...transformedCategory]}
            isLoading={isLoading}
          />
          <FilterDropDown
            filterField="sort"
            optioins={[
              { value: "ALL", label: "پیش فرض" },
              { value: "latest", label: "جدیدترین" },
              { value: "earliest", label: "قدیمی ترین" },
            ]}
            isLoading={isLoading}
          />
          <BackPageBtn />
        </div>
      </HeaderOfComponent>
      <ProjectsTable />
    </>
  );
};

export default AllProjectsLayout;
