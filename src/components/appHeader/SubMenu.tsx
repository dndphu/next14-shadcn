"use client";
import {
  Tag,
  Newspaper,
  Youtube,
  CreditCard,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const SubMenu = () => {
  return (
    <div className="hidden lg:flex h-10 bg-white lg:container px-0  flex-row justify-between items-center">
      <div className="w-auto relative flex-auto border-r-2 mr-2">
        <div className="flex items-center justify-center py-2 cursor-pointer hover:text-red-600">
          <Tag />
          <span className="sub-text font-semibold ml-2 text-xs ">
            Deal sốc mỗi ngày
          </span>
        </div>
      </div>
      <div className="w-auto relative flex-auto border-r-2 mr-2">
        <div className="flex items-center justify-center py-2 cursor-pointer hover:text-red-600">
          <Newspaper />
          <span className="sub-text font-semibold ml-2 text-xs ">
            Tin công nghệ
          </span>
        </div>
      </div>
      <div className="w-auto relative flex-auto border-r-2 mr-2">
        <div className="flex items-center justify-center  py-2 cursor-pointer hover:text-red-600">
          <Youtube />
          <span className="sub-text font-semibold ml-2 text-xs ">Video</span>
        </div>
      </div>
      <div className="w-auto relative flex-auto border-r-2 mr-2">
        <div className="flex items-center justify-center py-2 cursor-pointer hover:text-red-600">
          <CreditCard />
          <span className="sub-text font-semibold ml-2 text-xs ">
            Hướng dẫn thanh toán
          </span>
        </div>
      </div>
      <div className="w-auto relative flex-auto border-r-2 mr-2">
        <div className="flex items-center justify-center py-2 cursor-pointer hover:text-red-600">
          <Wallet />
          <span className="sub-text font-semibold ml-2 text-xs ">
            Hướng dẫn trả góp
          </span>
        </div>
      </div>
      <div className="w-auto relative flex-auto ">
        <div className="flex items-center justify-center py-2 cursor-pointer hover:text-red-600">
          <ShieldCheck />
          <span className="sub-text font-semibold ml-2 text-xs ">
            Chính sách bảo hành
          </span>
        </div>
      </div>
    </div>
  );
};
export default SubMenu;
