import { lazy } from "react";
const Navbar = lazy(() => import("../Navbar/Navbar.jsx"));
const Footer = lazy(() => import("../Footer/Footer.jsx"));

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
