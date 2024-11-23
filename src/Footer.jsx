import styles from "./Footer.module.css";

const Footer = () => {
    const more = [
        {
            id: 1,
            title: "our community",
            links: [
                { id: 11, link: "Home", href: "/"},
                { id: 10, link: "Past Event", href: "/past-events" },
                { id: 12, link: "Our Activities",href: "/activities" },
                { id: 13, link: "Community Profiles",href:"/community-profile" }
            ]
        },
        {
            id: 2,
            title: "help me",
            links: [
                { id: 20, link: "faq" },
                { id: 21, link: "terms of use" },
                { id: 22, link: "privacy policy" },
                { id: 23, link: "cookies" }
            ]
        },
        {
            id: 3,
            title: "contact",
            links: [
                { id: 30, link: "Leader"},
                { id: 31, link: "support" },
                { id: 32, link: "live chat" }
            ]
        },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.head}>
                <img
                    src="images/zomm.png"
                    alt="zom logo"
                    className={styles.logo}
                    width="200px"
                />
                <div className={styles.wrapper}>
                    <SocialIcon name={"facebook"} />
                    <SocialIcon name={"twitter"} />
                    <SocialIcon name={"pinterest"} />
                    <a href="https://www.instagram.com/zx_owners_medan/">
                        <img
                            src="images/icon-instagram.svg"
                            alt="instagram icon"
                            className={styles.social}
                        />
                    </a>
                </div>
            </div>
            <hr />
            <div className={styles.more}>
                <Lists />
            </div>
        </footer>
    );

    // eslint-disable-next-line react/prop-types
    function SocialIcon({ name }) {
        return (
            <a href="#">
                <img
                    src={"images/icon-" + name + ".svg"}
                    alt={name + " icon"}
                    className={styles.social}
                />
            </a>
        );
    }

    function Lists() {
        return (
            more.map((list) => {
                return (
                    <ul className={styles.more_list} key={list.id}>
                        <li className={styles.title}>{list.title}</li>
                        {list.links.map((linkTxt) => {
                            return (
                                <li key={linkTxt.id} className={styles.item}>
                                    <a
                                        href={linkTxt.href || "#"} // Use href if available, else fallback to '#'
                                        className={styles.redirect}
                                    >
                                        {linkTxt.link}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                );
            })
        );
    }
};

export default Footer;
