import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ProfileNav from "./ProfileNav";
import SignInButton from "./SignInButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  const userInfo = session?.user;

  return (
    <nav className="w-screen z-10 bg-white/80 backdrop-blur-md p-6 flex justify-between items-center h-20 fixed top-0 left-0">
      <div className="flex-1 flex">
        <Logo />
      </div>
      <NavLinks />
      <div className="flex-1 flex justify-end">
        {userInfo ? <ProfileNav user={userInfo} /> : <SignInButton />}
      </div>
    </nav>
  );
};

export default Navbar;
