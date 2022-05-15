import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, fetchBooks } from "../../store/librarySlice";

import BaseTable from "./BaseTable";

export default function LibraryTable() {
  const { books } = useSelector((state) => state.library);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBooks());
    console.log("b", books);
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
            handelClick: (id) => dispatch(deleteBook(id)),
          },
          { actionName: "edit" },
        ]}
        data={books}
      />
    </div>
  );
}
