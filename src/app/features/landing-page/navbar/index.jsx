"use client";
import React, { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../navbar/navbar.module.scss";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLetterX } from "react-icons/tb";
// import logo from "../../../../../../public/assets/images/RogueDevTech.svg"
// import menu from "../../../../../../public/assets/images/Vector.svg"
// import exit from "../../../../../../public/assets/images/exit.svg"

const NavBar = () => {
  const [mobile, setMobile] = useState(true);

  const toggleMenu = () => {
    setMobile((open) => !open);
  };

  const handleNavbar = () => {
    toggleMenu();
  };

  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_image}>
        <Link href={"/"}>
          <h2>Animal Rescue</h2>
        </Link>
      </div>
      <div className={mobile ? styles.Navbar_List : styles.Navbar_List_isopen}>
        <ul>
          <span onClick={toggleMenu}>
            <TbLetterX className={styles.exx} />
            {/* <Image className={styles.exx} src={exit} alt="menu" width={30}/> */}
          </span>

          <li
            className={`${pathname === "/about-us" ? styles.active : ""}`}
            onClick={() => {
              handleNavbar("/about");
            }}
          >
            <Link href="/about-us">About Us</Link>
          </li>
          {/* <li>
              Service
            </li> */}
          <li
            className={`${pathname === "/contact" ? styles.active : ""}`}
            onClick={() => {
              handleNavbar("/contact");
            }}
          >
            <Link href="/about-us">Contact</Link>
          </li>
          <li
            className={`${pathname === "/about-us" ? styles.active : ""}`}
            onClick={() => {
              handleNavbar("/contact");
            }}
          >
            <Link href="/about-us">
              <button>Get in touch</button>
            </Link>
          </li>
        </ul>
      </div>
      <div id={styles.Hamburger}>
        <span className="Hamburger span" onClick={toggleMenu}>
          <div className="Hamburger">
            {mobile ? <RxHamburgerMenu /> : <TbLetterX />}
          </div>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
