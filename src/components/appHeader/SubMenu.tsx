"use client";
import { Like } from "@/components/svgs/index";
const SubMenu = () => {
  return (
    <div className=" h-10 bg-white lg:container px-0 flex flex-row justify-between items-center">
      <div className="w-auto relative flex-auto border-r-2 mr-2">
        <div className="flex items-center justify-center py-2 cursor-pointer hover:text-red-600">
          <Like />
          <span className="sub-text font-semibold ml-2 text-sm ">
            Deal soc moi ngay
          </span>
        </div>
      </div>
      <div className="w-auto relative flex-auto border-r-2 mr-2">
        <div className="flex items-center justify-center py-2 cursor-pointer hover:text-red-600">
          <Like />
          <span className="sub-text font-semibold ml-2 text-sm ">
            Deal soc moi ngay
          </span>
        </div>
      </div>
      <div className="w-auto relative flex-auto border-r-2 mr-2">
        <div className="flex items-center justify-center  py-2 cursor-pointer hover:text-red-600">
          <Like />
          <span className="sub-text font-semibold ml-2 text-sm ">
            Deal soc moi ngay
          </span>
        </div>
      </div>
      <div className="w-auto relative flex-auto border-r-2 mr-2">
        <div className="flex items-center justify-center py-2 cursor-pointer hover:text-red-600">
          <Like />
          <span className="sub-text font-semibold ml-2 text-sm ">
            Deal soc moi ngay
          </span>
        </div>
      </div>
      <div className="w-auto relative flex-auto border-r-2 mr-2">
        <div className="flex items-center justify-center py-2 cursor-pointer hover:text-red-600">
          <Like />
          <span className="sub-text font-semibold ml-2 text-sm ">
            Deal soc moi ngay
          </span>
        </div>
      </div>
      <div className="w-auto relative flex-auto ">
        <div className="flex items-center justify-center py-2 cursor-pointer hover:text-red-600">
          <Like />
          <span className="sub-text font-semibold ml-2 text-sm ">
            Deal soc moi ngay
          </span>
        </div>
      </div>

      <style jsx>{`
        .test {
          width: 600px;
          margin: 100px auto;
        }
      `}</style>
    </div>
  );
};
export default SubMenu;
