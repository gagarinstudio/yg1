import Script from 'next/script';
import styles from '@/components/space.module.css'

export default function Space() {
    return (
       <>
           <Script
               src="/space.js"
               strategy="beforeInteractive"
           />
       </>
    )
}