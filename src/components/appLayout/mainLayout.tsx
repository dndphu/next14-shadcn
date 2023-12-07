"use client";
import { Navbar } from "@/components/appHeader/Navbar";
import Banner from "@/components/appHeader/Banner";
import SubMenu from "@/components/appHeader/SubMenu";
const mainLayout = () => {
  const handleChildClick = (info: any) => {
    console.log("From child: ", info);
    // Xử lý thông tin từ child tại đây
  };
  return (
    <>
      <Banner></Banner>
      <Navbar onClick={handleChildClick}></Navbar>
      <SubMenu></SubMenu>
    </>
  );
};
export default mainLayout;
