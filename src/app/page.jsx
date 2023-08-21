import Image from 'next/image'
import styles from './page.module.css'
import Img from '../../public/constr.svg'
import Button from '@/components/Button/button'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
      <Image  src={Img} className={styles.img}  />
      </div>
    </div>
  )
}