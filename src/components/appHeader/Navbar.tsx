import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 flex items-center justify-between flex-wrap bg-red-600 p-3 h-auto"
      style={{ height: "72px" }}
    >
      <div className="container lg w-full block flex items-center">
        <div className="mr-4">
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
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
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
        <div className="flex ml-4 cursor-pointer">
          <Image
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(2%) hue-rotate(192deg) brightness(130%) contrast(101%)",
            }}
            src="/like.svg"
            alt="logo"
            width={24}
            height={24}
          />
          <div className="hidden lg:flex flex-col ml-2 text-white text-sm font-semibold ">
            <span className="leading-4 text-xs">Hotline</span>
            <span className="leading-4 text-xs">1900 xxx</span>
          </div>
        </div>
        <div className="flex ml-4 cursor-pointer">
          <Image
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(2%) hue-rotate(192deg) brightness(130%) contrast(101%)",
            }}
            src="/like.svg"
            alt="logo"
            width={24}
            height={24}
          />
          <div className="hidden lg:flex flex-col ml-2 text-white text-sm font-semibold">
            <span className="leading-4 text-xs">Hệ thống</span>
            <span className="leading-4 text-xs">Show room</span>
          </div>
        </div>
        <div className="flex ml-4 cursor-pointer">
          <Image
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(2%) hue-rotate(192deg) brightness(130%) contrast(101%)",
            }}
            src="/like.svg"
            alt="logo"
            width={24}
            height={24}
          />
          <div className="hidden lg:flex flex-col ml-2 text-white text-sm font-semibold">
            <span className="leading-4 text-xs">Tra cứu</span>
            <span className="leading-4 text-xs">đơn hàng</span>
          </div>
        </div>
        <div className="flex ml-4 cursor-pointer">
          <Image
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(2%) hue-rotate(192deg) brightness(130%) contrast(101%)",
            }}
            src="/like.svg"
            alt="logo"
            width={24}
            height={24}
          />
          <div className="hidden lg:flex flex-col ml-2 text-white text-sm font-semibold">
            <span className="leading-4 text-xs">Giỏ</span>
            <span className="leading-4 text-xs">hàng</span>
          </div>
        </div>
        <div
          className="flex ml-4 cursor-pointer p-2 rounded"
          style={{ background: "#BE1529" }}
        >
          <Image
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(2%) hue-rotate(192deg) brightness(130%) contrast(101%)",
            }}
            src="/like.svg"
            alt="logo"
            width={24}
            height={24}
          />
          <div className="hidden lg:flex flex-col ml-2 text-white text-sm font-semibold">
            <span className="leading-4 text-xs">Đăng</span>
            <span className="leading-4 text-xs">Nhập</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
