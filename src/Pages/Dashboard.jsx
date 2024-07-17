import React, { useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Divider,
  Input,
  Layout,
  Menu,
  Space,
  Switch,
  Table,
  Tag,
} from "antd";
import Sider from "antd/es/layout/Sider";
import {
  DownOutlined,
  BellFilled,
  SwitcherOutlined,
  DashboardFilled,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  PieChartFilled,
  ReadOutlined,
  SwitcherFilled,
  WechatFilled,
  UnorderedListOutlined,
  LoadingOutlined,
  ClockCircleOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";

function Dashboard() {
  const [active, setActive] = useState("dashboard");
  const items = [
    {
      label: "Dashboard",
      key: 1,
      icon: (
        <Link to="/">
          <DashboardFilled
            style={{
              fontSize: "25px",
            }}
          />
        </Link>
      ),
    },
    {
      label: "Project",
      key: 2,
      icon: (
        <PieChartFilled
          style={{
            fontSize: "25px",
          }}
        />
      ),
    },
    {
      label: "Task List",
      key: 3,
      icon: (
        <ReadOutlined
          style={{
            fontSize: "25px",
          }}
        />
      ),
    },
    {
      label: "Services",
      key: 4,
      icon: (
        <SwitcherFilled
          style={{
            fontSize: "25px",
          }}
        />
      ),
    },
    {
      label: "Notifications",
      key: 5,
      icon: (
        <>
          <BellFilled
            style={{
              fontSize: "25px",
            }}
          />
          <Badge
            count={5}
            overflowCount={10}
            size="small"
            status="processing"
            placement="end"
            className="absolute right-3 top-3"
          />
        </>
      ),
    },
    {
      label: "Chat",
      key: 6,
      icon: (
        <WechatFilled
          style={{
            fontSize: "25px",
          }}
        />
      ),
    },
  ];
  const [collapsed, setCollapsed] = useState(false);
  const [isCard, setIsCard] = useState(true);

  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Admin",
      key: "admin",
      dataIndex: "admin",
    },
    {
      title: "Members",
      key: "members",
      dataIndex: "members",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Run time",
      key: "runtime",
      dataIndex: "runtime",
    },
    {
      title: "Finish date",
      key: "finishdate",
      dataIndex: "finishdate",
    },
  ];

  const datasource = [
    {
      key: 1,
      name: "ClientOnBoarding - Circle",
      admin: (
        <Space>
          <Avatar src="/src/assets/avat1.jpg" />
          <p>Samanta J.</p>
        </Space>
      ),
      members: 3,
      status: (
        <Tag icon={<ClockCircleOutlined />} color="blue">
          In Progress
        </Tag>
      ),
      runtime: "6 hours",
      finishdate: <Tag>6 Mon</Tag>,
    },
    {
      key: 2,
      name: "Meeting with Webflow & Notion",
      admin: (
        <Space>
          <Avatar src="/src/assets/avat.jpg" />
          <p>Bob P.</p>
        </Space>
      ),
      members: 4,
      status: (
        <Tag icon={<CheckCircleFilled />} color="success">
          Done
        </Tag>
      ),
      runtime: "2 hours",
      finishdate: <Tag>7 Tue</Tag>,
    },
    {
      key: 3,
      name: "First Handoff with Engineers",
      admin: (
        <Space>
          <Avatar src="/src/assets/avat3.jpg" />
          <p>Kate O.</p>
        </Space>
      ),
      members: 10,
      status: (
        <Tag icon={<ClockCircleOutlined />} color="blue">
          In Progress
        </Tag>
      ),
      runtime: "3 days",
      finishdate: <Tag>10 Fri</Tag>,
    },
    {
      key: 4,
      name: "Client Drafting (2) with Lawrence",
      admin: (
        <Space>
          <Avatar src="/src/assets/avat4.jpg" />
          <p>Jack F.</p>
        </Space>
      ),
      members: 7,
      status: (
        <Tag icon={<ClockCircleOutlined />} color="blue">
          In Progress
        </Tag>
      ),
      runtime: "1 week",
      finishdate: <Tag>19 Sun</Tag>,
    },
  ];

  return (
    <div id="dashboard" className="w-full h-full p-1">
      <Layout className="h-full">
        <Sider
          className=" flex flex-col pt-4 px-3 relative"
          collapsed={collapsed}
        >
          <div className="h-8 w-3/4 bg-slate-800 ml-5" />
          <Divider className="border" />
          <Menu
            className="mt-10 flex flex-col gap-2"
            // items={items}
            defaultSelectedKeys={["3"]}
            theme="dark"
          >
            {items.map((item) => (
              <Menu.Item
                key={item.key.toString()}
                icon={item.icon}
                onClick={() => {
                  setActive(item.label.toLocaleLowerCase());
                }}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
          <div className="absolute bottom-5 right-5 left-5 flex justify-center">
            {collapsed ? (
              <DoubleRightOutlined
                onClick={() => setCollapsed(false)}
                className="hide"
              />
            ) : (
              <DoubleLeftOutlined
                onClick={() => setCollapsed(true)}
                className="hide"
              />
            )}
          </div>
        </Sider>
        <Layout>
          <Space
            direction="vertical"
            className="h-full"
            style={{ height: "100%" }}
          >
            <Header className=" flex items-center justify-between ">
              <div className="text-white w-full flex items-center ">
                <Input.Search className="w-2/6" placeholder="Search" />
                <Space className="ml-4">
                  <p>Monday, 6thMarch</p>
                  <DownOutlined />
                </Space>
              </div>
              <div
                className="bg-slate-400 flex  gap-1 rounded-3xl"
                style={{ height: "42px", minWidth: "fit-content" }}
              >
                <div
                  className="flex items-center px-5 rounded-3xl text-white gap-2 text-base cursor-pointer"
                  style={{ backgroundColor: isCard ? "rgb(14,16,101)" : "" }}
                  onClick={() => setIsCard(true)}
                >
                  <SwitcherFilled />
                  <p>Card</p>
                </div>
                <div
                  className="flex items-center  px-5 rounded-3xl text-white gap-2 text-base cursor-pointer"
                  style={{ backgroundColor: !isCard ? "rgb(14,16,101)" : "" }}
                  onClick={() => setIsCard(false)}
                >
                  <UnorderedListOutlined />
                  <p>List</p>
                </div>
              </div>
            </Header>
            <Content
              className=" h-full bg-slate-500"
              style={{ backgroundColor: "#050824" }}
            >
              <div className="w-full min-h-fit py-2">
                <div
                  id="grid3"
                  className="w-full flex justify-between items-center text-3xl font-semibold text-white px-5"
                >
                  <p className="">Last tasks</p>
                  <p className=" flex justify-center border-r">94</p>
                  <p className=" flex justify-center">23</p>
                </div>
                <div
                  id="grid3"
                  className="w-full flex justify-between items-center  font-semibold text-white px-5"
                >
                  <p className=" ">
                    <span className="text-blue-500 font-bold text-base">
                      117 total,
                    </span>{" "}
                    proceed to resolve them
                  </p>
                  <p className=" flex justify-center border-r">Done</p>
                  <p className=" flex justify-center ml-1">In progress</p>
                </div>
              </div>

              <div id="table" className="px-2">
                <Table
                  columns={columns}
                  dataSource={datasource}
                  rowSelection={{ type: "checkbox" }}
                  className="mt-5"
                />
              </div>
            </Content>
          </Space>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
