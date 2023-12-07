import MenuHome from "@/components/appBody/Menu";
export default function Home() {
  return (
    <main className=" min-h-screen p-4 bg-slate-100	">
      <div className="flex flex-row max lg:container">
        <MenuHome></MenuHome>
        <div className="lg:ml-2 ml-0 w-full h-[350px] md:h-[512px]">
          <div className="grid grid-rows-3 grid-cols-3  gap-4 w-full h-full">
            <div className="row-span-3 col-span-3 md:row-span-2 md:col-span-2 bg-gray-500 rounded-sm">
              01
            </div>
            <div className="hidden md:block bg-gray-500 rounded-sm">02</div>
            <div className="hidden md:block bg-gray-500 rounded-sm">03</div>
            <div className="hidden md:block bg-gray-500 rounded-sm">04</div>
            <div className="hidden md:block bg-gray-500 rounded-sm">05</div>
            <div className="hidden md:block bg-gray-500 rounded-sm">06</div>
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
