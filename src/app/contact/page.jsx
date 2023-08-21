import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/button";
import contact from "../../../public/contact.svg"

export const metadata = {
  title: "tendac Contact Information",
  description: "This is Contact Page",
};


const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={contact}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
        <label style={{color:"black"}}>Name</label>
          <input type="text"  className={styles.input} />
          <label style={{color:"black"}}>Email</label>
          <input type="text"  className={styles.input} />
          <label style={{color:"black"}}>Message</label>
          <textarea
            className={styles.textArea}
           
            cols="30"
            rows="7"
          ></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact