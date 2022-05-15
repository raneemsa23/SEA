import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, fetchCourses } from "../../store/coursesSlice";

import BaseTable from "./BaseTable";

export default function CoursesTable() {
  const { courses } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCourses());
    console.log("c", courses);
  }, []);
  return (
    <div>
      <BaseTable
        columnsHeaders={["ID", "Title", "Subtitle"]}
        fields={["id", "title", "subtitle"]}
        widths={[160, 160, 160]}
        avatar={true}
        actions={[
          {
            actionName: "delete",
            handelClick: (id) => dispatch(deleteCourse(id)),
          },
          { actionName: "edit" },
        ]}
        data={courses}
      />
    </div>
  );
}
