import React from 'react'
import styles from "../donate/styles.module.scss"
import Image from 'next/image'
import dog from "../../assets/images/IMG_3380.JPG"
import two from "../../assets/images/image (4).svg"
import Link from 'next/link'

export default function Donate() {
  return (
    <div className={styles.donate_container}>
        {/* <div className={styles.donate_btn}>
            <button>Donate</button>
        </div> */}
        <div className={styles.dog_image}>
            <Image
            src={two}
            alt='dog'
            width={100}
            height={200}
            className={styles.dog_img}
             />
             <p>Animal Rescue Fund is a 501(C)3 non-profit located in Los Angeles, California. </p>
        </div>
        <div className={styles.dog_image}>
            <Image
            src={dog}
            alt='dog'
            width={100}
            height={200}
            className={styles.dog_img}
             />
             <p>Anderson Family in memory of Millie&apos;s</p>
        </div>

        
        <div className={styles.about_btn}>
            <Link href={"/about-us"}>
                <button>About US</button>
            </Link>
        </div>
    </div>
  )
}
