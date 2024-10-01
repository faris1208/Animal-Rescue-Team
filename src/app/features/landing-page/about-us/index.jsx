import React from "react";
import styles from "../about-us/styles.module.scss";
import Image from "next/image";
import tazzy from "../../assets/images/big (3).jpg";
import three from "../../assets/images/big (4).jpg";
import four from "../../assets/images/big (2).jpg";

export default function AboutUs() {
  return (
    <div className={styles.about_container}>
      {/* <div className={styles.about_first}>
        <h2>About Us</h2>
        <p>About Us</p>
      </div> */}
      <div className={styles.tazzy_image}>
        <Image
          src={tazzy}
          alt="tazzy"
          width={100}
          className={styles.tazzy_first}
        />
      </div>
      <div className={styles.aboutus_wrapper}>
        <div className={styles.aboutus_text}>
          <h1>About Us</h1>
          <p>
          Millie Animal Rescue Fund was founded in 2005 by Leilani and Rick
            Laca.
          </p>
          <p>
            After their beloved rescue boxer Millie passed away in 2004, Leilani
            and Rick made a commitment to do everything in their power to help
            other animals in order to honor and thank Millie for the love he
            brought into their lives.
          </p>
          <p>
            In the years since, many amazing people have joined the mission of
            Millie Animal Fund, with each one of them bringing the dedication and love
            for the furry companions they have lost and a passion to help other
            animals in need.
          </p>
        </div>
        <div className={styles.aboutus_text}>
          <h1>Our Mission</h1>
          <p>
            Our mission is to help reduce the number of dogs and cats
            relinquished by their owners to City & County Animal Shelters. We
            focus our attention on animal ownership retention by providing those
            who are financially struggling with FREE community programs.{" "}
          </p>
          <ul>
            <li>There are 3,943 animal shelters in the US.</li>
            <li>No-kill shelters attempt to save 9 out of 10 animals.</li>
            <li>
              More than 6 million animals enter animal shelters across the US
              every year.
            </li>
            <li>710,000 strays are returned to their owners each year.</li>
            <li>Dog adoptions soared during the Covid-19 pandemic.</li>
            <li>
              About 40% of animals in shelters are left there by their owners.
            </li>
            <li>
              Animal shelters cost US citizens almost $2 billion every year.
            </li>
          </ul>
          <i>For more references and to verify these statistics, click below: </i>
        </div>
        <div className={styles.tazzy_image}>
        <Image
          src={three}
          alt="tazzy"
          width={100}
          className={styles.tazzy_first}
        />
      </div>
        <div className={styles.aboutus_text}>
          <h1>Our Community Programs:</h1>
          <ul>
            <li>Free Spay & Neuter Clinics</li>
            <li>Free Pet Food Pantries</li>
            <li>Emergency Medical Care</li>
            <li>Proper Pet Care Education</li>
            <li>Free Dog and Cat CPR classes for rescued animal owners</li>
          </ul>
        </div>
        <div className={styles.tazzy_img}>
        <Image
          src={four}
          alt="tazzy"
          width={100}
          className={styles.tazzy_second}
        />
      </div>
      <div className={styles.aboutus_text_two}>
        <p>Millie Fund also supports other non profit animal rescues with dogs and cats, with the greatest needs. These include the elderly, medically-challenged, and those who need additional behavior related training to allow them to be placed in to a home. </p>
        <p>We require that these animals be housed in foster homes, not a kennel or boarding facility. The rescue must be committed to caring for the animal until a permanent home can be found.</p>
      </div>
      </div>
    </div>
  );
}
