import style from "./style.module.scss";

const Navbar = async () => {
  const { wrapper, linkContainer, container, Button, logo } = style;
  return (
    <div className={wrapper}>
      <div className={logo}>
        Next <br></br> Service
      </div>
      <div className={container}>
        <div className={linkContainer}>
          <button className={Button} autoFocus>
            About
          </button>
          <button className={Button}>Projects</button>
          <button className={Button}>Founder</button>
          <button className={Button}>Tech</button>
          <button className={Button}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
