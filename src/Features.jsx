import styles from "./Features.module.css"

const Features = () => {

    // eslint-disable-next-line react/prop-types
    function IconTitleText({ icon, title, text }) {
        return (
            <div className={styles.feature}>
                <img 
                    src={icon} 
                    alt=""
                    aria-hidden="true" 
                    className={styles.icon}
                />
                <p className={styles.subtitle}>{title}</p>
                <p className={styles.description}>{text}</p>
            </div>
        );
    }

    return (
        <section className={styles.features}>
            <h2 className={styles.title}>We're different</h2>
            <div className={styles.wrapper}>
                <IconTitleText 
                    icon={"images/icon-snappy-process.svg"}
                    title={"Ride with Unity"}
                    text={
                        "At ZX Owners Medan, we believe in the power of community. We are more than just riders; we are a family united by our love for the ZX Series. Together, we share experiences, support one another, and create lasting memories both on and off the road."
                    }
                />
                <IconTitleText 
                    icon={"images/icon-affordable-prices.svg"}
                    title={"Safety First"}
                    text={
                        "We prioritize safety in every ride. Our commitment to responsible riding ensures that every member of ZX Owners Medan enjoys the thrill of the ZX Series while staying protected. We believe that true speed comes from knowing how to ride safely and confidently."
                    }
                />
                <IconTitleText 
                    icon={"images/icon-people-first.svg"}
                    title={"Driven by Passion"}
                    text={
                        "Our love for Kawasaki ZX Series fuels everything we do. Whether it's through exhilarating rides, technical knowledge sharing, or social gatherings, our passion drives us to continuously grow, connect, and celebrate the thrill of riding together."
                    }
                />
            </div>
        </section>
    )
}

export default Features