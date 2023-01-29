import Script from 'next/script';
import styles from '@/components/space.module.css'

export default function Space() {
    return (
       <>
           <div className={styles.star + " star"}></div>

           <div className={styles.stars}></div>
           <div className={styles.twinkling}></div>
           <div className={styles.clouds}></div>

           <Script
               src="/space.js"
               strategy="beforeInteractive"
           />
       </>
    )
}