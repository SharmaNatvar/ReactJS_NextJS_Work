import Link from "next/link";
import React from "react";

const NavBar = () => {
    const id = 2
  return (
    <>
      <h1>NavBar</h1>
      <ul>

        <li><Link href='/admin/dasboard'>Admin DashBorad</Link></li>
        <li><Link href={`/user/profile/${id}`}>user profile</Link></li>
      </ul>
    </>
  );
};

export default NavBar;
