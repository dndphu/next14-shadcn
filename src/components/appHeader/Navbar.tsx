import Link from "next/link";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  HoverCardArrow,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import {
  Headphones,
  MapPin,
  CalendarClock,
  ShoppingCart,
  UserRound,
  Menu,
  HandMetal,ShieldQuestion
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-red-600 p-3 h-auto">
      <div className="lg:container  w-full  flex items-center">
        <div className="mr-2">
          <Link href="/">
            <Image
              src="/vercel.svg"
              width={100}
              height={40}
              alt="banner header"
            />
          </Link>
        </div>
        <div className="mr-4">
          <button
            style={{ background: "#BE1529" }}
            className="flex items-center px-3 py-3  rounded text-white text-lg"
          >
            <Menu></Menu>
            <span className="lg:block hidden px-1 leading-4 text-base">
              Danh mục
            </span>
          </button>
        </div>
        <div className="flex flex-grow flex-1">
          <input
            placeholder="Bạn muốn tìm gì?"
            type="text"
            className="w-full  rounded px-4 h-11 outline-none	"
          />
        </div>
        <div className="hidden md:flex items-center ml-4 cursor-pointer">
          <Headphones className="text-white"></Headphones>
          <div className="hidden lg:flex flex-col ml-2 text-white text-sm font-semibold ">
            <span className="leading-4 text-xs">Hotline</span>
            <span className="leading-4 text-xs">1900 xxx</span>
          </div>
        </div>
        <div className="hidden md:flex items-center ml-4 cursor-pointer">
          <MapPin className="text-white"></MapPin>
          <div className="hidden lg:flex flex-col ml-2 text-white text-sm font-semibold">
            <span className="leading-4 text-xs">Hệ thống</span>
            <span className="leading-4 text-xs">Show room</span>
          </div>
        </div>
        <div className="hidden md:flex items-center ml-4 cursor-pointer">
          <CalendarClock className="text-white"></CalendarClock>
          <div className="hidden lg:flex flex-col ml-2 text-white text-sm font-semibold">
            <span className="leading-4 text-xs">Tra cứu</span>
            <span className="leading-4 text-xs">đơn hàng</span>
          </div>
        </div>
        <div className="hidden md:flex items-center ml-4 cursor-pointer">
          <ShoppingCart className="text-white"></ShoppingCart>
          <div className="hidden lg:flex flex-col ml-2 text-white text-sm font-semibold">
            <span className="leading-4 text-xs">Giỏ</span>
            <span className="leading-4 text-xs">hàng</span>
          </div>
        </div>
        <HoverCard>
          <HoverCardTrigger>
            <div
              className="flex ml-4 items-center cursor-pointer p-2 rounded"
              style={{ background: "#BE1529" }}
            >
              <UserRound className="text-white"> </UserRound>
              <div className="hidden lg:flex flex-col ml-2 text-white text-sm font-semibold">
                <span className="leading-4 text-xs">Đăng</span>
                <span className="leading-4 text-xs">Nhập</span>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent sideOffset={7} className="w-full">
            <div className="text-sm flex items-center">
              {" "}
              <HandMetal className="mr-2 w-fit"></HandMetal>
              <b>Xin chào, vui lòng đăng nhập</b>
            </div>

            <div className="flex gap-4 my-4 justify-between">
              <Button className="flex flex-1 w-full">Đăng nhập</Button>
              <Button className="flex flex-1 w-full" variant="outline">
                Đăng kí
              </Button>
            </div>

            <hr style={{ margin: "0 -16px" }} />

            <div className="mt-4 flex">
              <ShieldQuestion className="mr-2"></ShieldQuestion>
              <span>Trợ giúp</span>
            </div>
            <HoverCardArrow fill="#fff"></HoverCardArrow>
          </HoverCardContent>
        </HoverCard>
      </div>
    </nav>
  );
};

export default Navbar;