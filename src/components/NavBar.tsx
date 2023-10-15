import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link
              href="/"
              className={
                router.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                router.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .navbar {
          background: #fff;
          padding: 10px 0;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }

        ul {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }

        li {
          list-style-type: none;
        }

        .nav-link {
          padding: 10px 20px;
          text-decoration: none;
          pointer-events: none;
          cursor: default;
          color: #4a4a4a;
        }

        .nav-link:visited {
          color: #4a4a4a;
          text-decoration: none;
        }

        .nav-link.active {
          font-weight: bold;
          text-decoration: none;
          border-bottom: 3px solid #7434db;
        }
      `}</style>
    </>
  );
}

export default Navbar;
