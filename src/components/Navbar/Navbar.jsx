import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"
import logo  from  "../../../public/logo.png"
import Image from 'next/image'
import DarkModeToogle from '../DarkModeToogle/DarkModeToogle'
const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];


const Navbar = () => {
  
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} />
      </Link>
      <div className={styles.items}>
       <DarkModeToogle/>
        {links.map((item) => {
          return (
            <Link key={item.id} href={item.url} className={styles.item}>
              {item.title}
            </Link>
          );
        })}
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar