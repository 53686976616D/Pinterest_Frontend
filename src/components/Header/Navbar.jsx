import styles from "./Navbar.module.css";
import EndPart from "./EndPart/EndPart";
import LogoPart from "./LogoPart/LogoPart";
import MidPart from "./MidPart/MidPart";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  // const loc = useLocation();

  // useEffect(() => {
  //   // console.log(loc);
  //   // setIsSelect(loc.pathname.slice(1).slice(0,1).toUpperCase() + loc.pathname.slice(2))
  // },[loc.pathname])

  return (
    <header id={styles["nav-menu"]}>
      <div className={styles.container}>
        <LogoPart />
        <div className={styles["nav-mid"]}>
          <MidPart />
        </div>
        <div className={styles["nav-end"]}>
          <EndPart />
        </div>
      </div>
      <MobileNav />
    </header>
  );
};

export default Navbar;
