import LayoutStyles from "./LayoutStyles.module.css";
import { Navbar } from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className={LayoutStyles.container}>
      <Navbar />
      {children}
    </div>
  );
};

export { Layout };
