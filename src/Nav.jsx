import styles from "./Nav.module.css"

const Nav = () => {
    const options = [
        {
            id: 0,
            text: "Home",
            href: "/" 
        },
        {
            id: 1,
            text: "Past Events",
            href: "/past-events " // Add the specific href for this option
        },
        {
            id: 2,
            text: "Profile",
            href: "/community-profile" // Add the specific href for this option
        }
    ]

    const listOptions = options.map((option) => {
        return (
            <li key={option.id}>
                <a href={option.href} className={styles.option}>
                    {option.text}
                </a>
            </li>
        )
    })

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {listOptions}
            </ul>
            <a href="/activities" className={styles.view_plans_btn_bar}>View plans</a>
        </nav>
    )
}

export default Nav
