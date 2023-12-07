import Image from "next/image";

const Banner = () => {
  return (
    <div

      style={{ backgroundColor: "rgb(40, 44, 134)", height: "40px" }}
    >
      <div className=" container lg flex justify-center">
        <Image
          src="/banner.webp"
          width={1000}
          height={40}
          alt="banner header"
        />
      </div>
    </div>
  );
};
export default Banner;
