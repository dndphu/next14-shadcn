"use client";
import { Navbar } from "@/components/appHeader/navbar";
import Banner from "@/components/appHeader/banner";
import SubMenu from "@/components/appHeader/sub-menu";
const mainLayout = () => {
  const handleChildClick = (info: string) => {
    console.log("From child: ", info);
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
