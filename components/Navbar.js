import Link from "next/link";
import NavbarStyles from "./NavbarStyles.module.css";

const Navbar = () => {
  return (
    <div className={NavbarStyles.container}>
      <nav>
        <ul className={NavbarStyles.list}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Navbar };
