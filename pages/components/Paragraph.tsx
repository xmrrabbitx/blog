
import styles from '@/styles/Paragraph.module.css'

export default function Paragraph(props:{text:any}){

    return(
        <div className={`${styles.text} mt-5 mb-5 lg:text-xl md:text-xl text-sm lg:leading-10`}>{props.text}</div>
    )
    
}