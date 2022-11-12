import style from "./style.module.scss";
import Link from "next/link";

const Navbar = async () => {
  const { wrapper, linkContainer, container, Button, logo } = style;
  return (
    <div className={wrapper}>
      <div className={logo}>
        Next <br></br> Service
      </div>
      <div className={container}>
        <div className={linkContainer}>
          <Link href="/" className={Button} autoFocus>
            About
          </Link>
          <button className={Button}>Projects</button>
          <Link href="/Founder" className={Button}>
            Founder
          </Link>
          <button className={Button}>Tech</button>
          <button className={Button}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
