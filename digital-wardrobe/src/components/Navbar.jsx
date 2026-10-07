import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Heart,
    Shirt,
    Sparkles,
    Menu,
    X,
} from "lucide-react";

import "../styles/navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">

            {/* LOGO */}

            <Link
                to="/"
                className="navbar-logo"
                onClick={() => setMenuOpen(false)}
            >
                <span className="logo-heart">
                    ♡
                </span>

                <span className="logo-text">
                    my little
                    <strong>closet</strong>
                </span>
            </Link>


            {/* DESKTOP NAVIGATION */}

            <nav className="navbar-links">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/closet"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    <Shirt size={16} />
                    My Closet
                </NavLink>

                <NavLink
                    to="/dress-up"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    <Sparkles size={16} />
                    Dress Me
                </NavLink>

                <NavLink
                    to="/looks"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    <Heart size={16} />
                    My Looks
                </NavLink>

            </nav>


            {/* DESKTOP CTA */}

            <Link
                to="/dress-up"
                className="navbar-cta"
            >
                Style Me
                <Sparkles size={15} />
            </Link>


            {/* MOBILE HAMBURGER */}

            <button
                type="button"
                className="mobile-menu-button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Open navigation menu"
            >
                {menuOpen ? (
                    <X size={22} />
                ) : (
                    <Menu size={22} />
                )}
            </button>


            {/* MOBILE MENU */}

            {menuOpen && (
                <div className="mobile-menu">

                    <NavLink
                        to="/closet"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <Shirt size={17} />
                        <span>My Closet</span>
                    </NavLink>


                    <NavLink
                        to="/dress-up"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <Sparkles size={17} />
                        <span>Dress Me</span>
                    </NavLink>


                    <NavLink
                        to="/looks"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <Heart size={17} />
                        <span>My Looks</span>
                    </NavLink>

                </div>
            )}

        </header>
    );
}

export default Navbar;