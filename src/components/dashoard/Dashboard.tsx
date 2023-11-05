import React, { useEffect } from "react";
import "./Dashboard.css";
import Sidebar from "../sidebar/Sidebar.tsx";
import { AccountCircle } from "@mui/icons-material";
import type { RootState } from "../../store/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { GradeResponse } from "../../store/features/grade/Grade.ts";
import { fetchGrades } from "../../store/features/grade/GradeSlice.ts";

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.message);
  const token = useSelector((state: RootState) => state.user.token);
  const grades = useSelector((state:RootState) => state.grade.message)
  const dispatch = useDispatch();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const fetchAllGrades = async () => {
      await axios
        .get("172.31.160.1:3000/grade/allGrades", config)
        .then((result) => {
          if (result.status == 200) {
            console.log(result.data.meassage);
            const grades: GradeResponse = {
              message: result.data.meassage,
            };
            dispatch(fetchGrades(grades));
          }
        });
    };

    console.log("message is ", user);
    fetchAllGrades();
  }, [dispatch, token, user]);

  return (
    <>
      <div className="flex flex-row min-h-screen min-w-full ">
        <Sidebar />
        <div className="flex flex-col overflow-y-auto w-3/4 gap-4">
          <header className="h-1/6 flex flex-row items-center justify-end p-2 ">
            <h1 className="text-gray-800">
              {user.firstname} {user.firstname}
            </h1>{" "}
            <AccountCircle color={"disabled"} />
          </header>
          <section className="bg-white flex flex-col border border-r-1 m-5 p-3 rounded">
            <h1 className="text-base text-gray-600">
              Welcome {user.firstname} {user.lastname}{" "}
            </h1>
            {/* {grades.map((item) => {
              return <p>{item.name}</p>
            })} */}
          </section>
          <section className="flex flex-col h-5/6 m-5 p3">
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
