"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-vertical";

const data = [
  {
    id: 1,
    name: "Laptop",
  },
  {
    id: 2,
    name: "Laptop Gaming",
  },
  {
    id: 3,
    name: "PC GVN",
  },
  {
    id: 4,
    name: "Main, CPU, VGA, Tản",
  },
  {
    id: 5,
    name: "Case - Nguồn - Phụ kiện",
  },
  {
    id: 6,
    name: "Ổ cứng, RAM, Thẻ nhớ ",
  },
  {
    id: 7,
    name: "Case - Nguồn - Phụ kiện",
  },
  {
    id: 8,
    name: "Apple",
  },
  {
    id: 9,
    name: "Màn hình",
  },
  {
    id: 10,
    name: "Bàn phím",
  },
  {
    id: 11,
    name: "Chuột + Lót chuột",
  },
  {
    id: 12,
    name: "Tai nghe - Loa",
  },
  {
    id: 13,
    name: "Ghế - Bàn",
  },
  {
    id: 14,
    name: "Phần mềm & Mạng",
  },
  {
    id: 15,
    name: "Phụ kiện",
  },
  {
    id: 16,
    name: "Thủ thuật - Giải đáp",
  },
];
const MenuHome = () => {
  return (
    <div className="lg:block hidden">
      <NavigationMenu orientation="vertical" className="w-[216px]">
        <NavigationMenuList className="flex flex-col relative w-full">
          {data.map((item, index) => (
            <NavigationMenuItem
              key={index}
              className="items-start justify-start w-[216px]"
            >
              <NavigationMenuTrigger className="w-full text-xs">
                {item.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div
                  style={{ width: "calc(100vw - 250px)" }}
                  className=" h-[514px] p-4 max-w-[975px]"
                >
                  Say hi
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        {/* <NavigationMenuViewport className="h-[512px]"></NavigationMenuViewport> */}
      </NavigationMenu>
    </div>
  );
};
export default MenuHome;
