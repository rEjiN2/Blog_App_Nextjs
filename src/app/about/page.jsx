import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/button";
import about from "../../../public/about.svg"
import clients from "../../../public/clients.svg"

const About = () => {
  return (
    <div className={styles.container}>
      
    <div className={styles.imgContainer}>
    <div className={styles.about}>
      <h1 >
        About Us
        </h1>
        <h1 className={styles.underlined}></h1>
    </div>
      <Image
        src={about}
        alt=""
        className={styles.img} 
      />
    </div>
    <div className={styles.content}>
     <div>
     <h1>What we do...!!!</h1>
     <h1 className={styles.underlined}></h1>
     <ol className={styles.orderedList}>
     <li>Site preparation and grading</li>
          <li>Infrastructure design</li>
          <li>Structural analysis and design</li>
          <li>Construction management</li>
          <li>Environmental impact assessment</li>
        </ol>
     </div>
     <div>
      <h1>What we offer</h1>
      <h1 className={styles.underlined}></h1>
      <ol className={styles.orderedList}>
      <li>Consultation services</li>
          <li>Project planning and feasibility studies</li>
          <li>Design and drafting services</li>
          <li>Construction supervision</li>
          <li>Sustainable and eco-friendly solutions</li>
        </ol>
     </div>
    </div>
    <div className={styles.clients} >
    <div>
    <Image src={clients} className={styles.img1} />
    </div>
    <div className={styles.text}>
      <h1>Our Services</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?</p>
            <Button  url="/contact" text="Contact"/>
    </div>
    </div>
  </div>
  )
}

export default About