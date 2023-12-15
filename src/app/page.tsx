import MenuHome from "@/components/appBody/menu";
import { SlideBanner } from "@/components/appBody/slide-banner/slide-banner";
import Image from "next/image";
export default function Home() {
  const subBanner = [
    { id: 1, path: "/subBanner/pc-1.webp", name: "pc-1" },
    { id: 2, path: "/subBanner/pc-2.webp", name: "pc-2" },
    { id: 3, path: "/subBanner/pc-3.webp", name: "pc-3" },
    { id: 4, path: "/subBanner/pc-4.webp", name: "pc-4" },
    { id: 5, path: "/subBanner/pc-5.webp", name: "pc-5" },
  ];

  const footerBanner = [
    { id: 1, path: "/footerBanner/foot-1.webp", name: "foot-1" },
    { id: 2, path: "/footerBanner/foot-2.webp", name: "foot-2" },
    { id: 3, path: "/footerBanner/foot-3.webp", name: "foot-3" },
    { id: 4, path: "/footerBanner/foot-4.webp", name: "foot-4" },
  ];

  return (
    <main className=" min-h-screen p-4 bg-slate-100	">
      <div className="flex flex-row lg:container">
        <MenuHome></MenuHome>
        <div className="lg:ml-2 ml-0 w-full h-[350px] md:h-[512px]">
          <div className="grid grid-rows-3 grid-cols-3  gap-4 w-full h-full">
            <div className="row-span-3 col-span-3 md:row-span-2 md:col-span-2 ˝">
              <SlideBanner></SlideBanner>
            </div>
            {subBanner.map((sub, i) => (
              <div key={sub.id} className="hidden md:block h-full w-full">
                <Image
                  src={sub.path}
                  alt={sub.name}
                  className="h-full w-full"
                  width={500}
                  height={250}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative container overflow-auto mt-4">
        <div className="flex flex-nowrap gap-4">
          {footerBanner.map((foot, k) => (
            <div key={foot.id} className="lg:w-1/4 w-2/4 flex-none lg:flex-1">
              <Image
                src={foot.path}
                alt={foot.name}
                className="h-full w-full"
                width={500}
                height={250}
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h1 className="mt-4 file:text-2xl font-semibold	">Hi i am Phu</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          mollitia facere odio deserunt beatae optio soluta rerum repellat sequi
          architecto, debitis ullam voluptatum doloribus, reiciendis nemo,
          impedit incidunt voluptate dignissimos?
        </div>
      </div>
    </main>
  );
}
