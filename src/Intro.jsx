import styles from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={styles.intro}>
            <picture className={styles.intro_img}>
            <source 
                srcSet="images/logo_wb2.png"
                media="(min-width: 1024px)"/>
            <img 
                src="images/logo_wb2.png"
                alt=""
                aria-hidden="true" />
            </picture>
            <div className={styles.intro_content}>
            <h1 className={styles.title}>Riding with Pride & Stay ZOM</h1>
            <p className={styles.description}>
            Join the ZX Owners Medan community and experience the thrill of riding with safety and unity. 
            Celebrate our 1st Anniversary with exciting events, starting with a Big Gathering on January 15, 2025, 
            followed by a Touring trip to Pulau Sabang with ZX clubs from across Indonesia. On January 16, enjoy a Gathering & Sharing session in Banda Aceh, 
            then join a Night Ride with local bikers. The celebration concludes with a Safety Riding Training session in Sabang, 
            all aimed at strengthening our bond and celebrating the ZX spirit!
            </p>
            <a href="/activities" className={styles.view_plans_btn}>view plans</a>
            </div>
        </div>
    )
}

export default Intro