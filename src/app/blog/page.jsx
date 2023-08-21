
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  try{
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }catch(err){
    console.log(err.message);
  }
}



const Blog = async () => {
  
   const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (

        <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              alt="Img"
              width={400} 
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
    
  );
}

export default Blog