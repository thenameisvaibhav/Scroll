import React from "react";
import Image from "./Image";

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center gap-y-10">
      <Image className={"w-[50vw]"} src={"1.jpg"} />
      <Image className={"w-[50vw]"} src={"2.jpg"} />
      <Image className={"w-[50vw]"} src={"3.jpg"} />
      <Image className={"w-[50vw]"} src={"4.jpg"} />
    </div>
  );
};

export default Page;
