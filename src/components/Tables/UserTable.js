import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../../store/usersSlice";
import BaseTable from "./BaseTable";

export default function UserTable() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    console.log("u", users);
  }, []);

  return (
    <div>
      <BaseTable
        columnsHeaders={[
          "Id",
          "Full Name",
          "Specialization",
          "University",
          "Email",
          "phone Number",
        ]}
        fields={[
          "id",
          "fullname",
          "specialisation",
          "university",
          "email",
          "phone",
        ]}
        widths={[70, 160, 160, 160, 200, 160]}
        actions={[
          {
            actionName: "delete",
            handelClick: (id) => dispatch(deleteUser(id)),
          },
          { actionName: "edit" },
        ]}
        data={users}
      />
    </div>
  );
}
