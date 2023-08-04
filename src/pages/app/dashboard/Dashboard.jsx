import { Form, Popconfirm, Space, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "./Store";

function Dashboard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dashboard.dashboardData);
  const [dataSource, setDataSource] = useState(data);
  useEffect(() => {
    if (data) {
      setDataSource(data);
    }
  }, [data]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        dispatch(
          dashboardActions.getDashboardDetails({
            dashboardData: response.data,
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const handleDelete = (id) => {
    const newData = dataSource?.filter((item) => item.id !== id);
    setDataSource(newData);
  };

  const columns = [
    {
      title: "userId",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        dataSource?.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dashboard</h2>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Dashboard;
