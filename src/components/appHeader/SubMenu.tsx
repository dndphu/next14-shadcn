import Image from "next/image";
const SubMenu = () => {
  return (
    <div className="h-10 bg-white	">
      <div className="container lg">
        <div className="flex py-2 cursor-pointer">
          <Image
            src="/like.svg"
            alt="logo"
            width={20}
            height={20}
            loading="lazy"
          />

          <span className="sub-text font-semibold ml-2 text-sm hover:text-red-600">
            Deal soc moi ngay
          </span>
        </div>
      </div>
    </div>
  );
};
export default SubMenu;
