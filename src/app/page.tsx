import MenuHome from "@/components/appBody/menu";
import { SlideBanner } from "@/components/appBody/slide-banner/slide-banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen p-4 bg-slate-100	">
      <div className="flex flex-row max lg:container">
        <MenuHome></MenuHome>
        <div className="lg:ml-2 ml-0 w-full h-[350px] md:h-[512px]">
          <div className="grid grid-rows-3 grid-cols-3  gap-4 w-full h-full">
            <div className="row-span-3 col-span-3 md:row-span-2 md:col-span-2 ˝">
              <SlideBanner></SlideBanner>
            </div>
            <div className="hidden md:block h-full w-full">
              <Image
                src="/subBanner/pc-1.webp"
                alt="pc-1"
                className="h-full w-full"
                width={500}
                height={250}
                priority
              />
            </div>
            <div className="hidden md:block h-full w-full">
              <Image
                src="/subBanner/pc-2.webp"
                alt="pc-1"
                className="h-full w-full"
                width={500}
                height={250}
                priority
              />
            </div>
            <div className="hidden md:block h-full w-full">
              <Image
                src="/subBanner/pc-3.webp"
                alt="pc-4"
                className="h-full w-full"
                width={500}
                height={250}
                priority
              />
            </div>
            <div className="hidden md:block bg-gray-500 rounded-sm">
              <Image
                src="/subBanner/pc-4.webp"
                alt="pc-4"
                className="h-full w-full"
                width={500}
                height={250}
                priority
              />
            </div>
            <div className="hidden md:block h-full w-full">
              <Image
                src="/subBanner/pc-5.webp"
                alt="pc-5"
                className="h-full w-full"
                width={500}
                height={250}
                priority
              />
            </div>
          </div>
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
