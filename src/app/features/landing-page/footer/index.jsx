import React from "react";
import styles from "../footer/styles.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_about}>
        <Link href={"/about-us"}>
          <h3>About Us</h3>
        </Link>
      </div>
      <div className={styles.copy}>
        <a
          href="https://Laylaivanson@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          tazzyfund@gmail.com
          {/* <button>Go to Gmail</button> */}
        </a>
        {/* <p>tazzyfund@gmail.com</p> */}
        <p>Copyright © 2024 Animal Rescue Fund Inc.</p>
      </div>
    </div>
  );
}
