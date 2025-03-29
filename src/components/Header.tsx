import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-between border-b border-b-gray-200 items-center min-h-[80px] w-full px-4">
      <p className="text-black text-[25px] font-semibold">WhatBytes</p>
      <div className="flex gap-x-3 items-center rounded-[6px] border border-gray-200 px-3 py-2">
        <Image
          src="/images/user.jpg"
          width={24}
          height={24}
          alt=""
          className="w-6 h-6 rounded-[50%]"
        />
        <p className="text-black font-semibold">Tayo Adedigba</p>
      </div>
    </header>
  );
};
