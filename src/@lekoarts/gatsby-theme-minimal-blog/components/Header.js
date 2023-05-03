import React, { useState } from "react";
import { Link } from "gatsby";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const HeaderMehdi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Link to="/">
        <img
          src="/logo.png"
          alt="Logo"
          style={{ height: "80px", width: "auto", maxWidth: "100%" }}
        />
      </Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <nav
          style={{
            display: "none",
            "@media (min-width: 500px)": { display: "flex" },
            opacity: 0.4,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "16px",
              margin: 0,
            }}
          >
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/persian-music">Persian Music</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <button onClick={toggleMenu} style={{ marginLeft: "16px" }}>
          {isOpen ? <FaTimes size={24} /> : <MdMenu size={24} />}
        </button>
        {isOpen && (
          <nav
            style={{
              position: "absolute",
              top: "80px",
              left: 0,
              right: 0,
              backgroundColor: "#fff",
              padding: "16px",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                margin: 0,
              }}
            >
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/persian-music">Persian Music</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default HeaderMehdi;
