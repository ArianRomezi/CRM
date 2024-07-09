import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h2>CRM project</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <p>developed by Chaos || NextJS project</p>
      </footer>
    </>
  );
};

export default Layout;
