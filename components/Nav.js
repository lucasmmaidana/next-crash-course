import Link from "next/link"
import navStyles from "../styles/Nav.module.scss"

function Nav() {
  return (
    <nav className={navStyles.container}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
