import headerStyles from "../styles/Header.module.scss"

function Header() {
  return (
    <div className={headerStyles.title}>
      <h1>
        <span>WebDev</span> News
      </h1>
      <p>The latest web dev news here!</p>
    </div>
  )
}

export default Header
