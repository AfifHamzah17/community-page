import styles from "./Findout.module.css"

const Findout = () => {
    return (
        <section className={styles.findout}>
            <h3 className={styles.title}>Find out more about who we are</h3>
            <a href="/community-profile" className={styles.btn}>Learn More</a>
        </section>   
    )
}

export default Findout