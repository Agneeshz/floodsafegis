import React from "react";
import Button from "./Button";
import Link from "next/link";

function Navbar() {
  return (
    <div
      className="flex justify-between px-16 py-4 items-center border-b-2"
      style={{ height: "100%" }}
    >
      <div className="flex justify-center items-center">
        <div className="bg-gray-600 rounded-full h-10 w-10"></div>
        <div className="text-2vw ml-4 font-semibold">FloodSafeGIS</div>
      </div>
      <div
        className="flex items-center gap-8"
        style={{ fontSize: "1.2vw", fontWeight: "400" }}
      >
        <div>
          {" "}
          <Link href={"/home"}>Home</Link>
        </div>
        <div>
          <Link href={"/"}>Explore</Link>
        </div>
        <div>
          <Link href={"/contactUs"}>Contact Us</Link>
        </div>
      </div>
      <div>
        <Button text={"Login/Register ➡️"} />
      </div>
    </div>
  );
}

export default Navbar;
