import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import styles from "./styles.module.scss";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }

  return (
    <>
      <header className={styles.header}>
        <div className="mainContainer">
          <Link href="/">
            <a>
              <Image
                src="/icons/logo.svg"
                alt="Logo Odontologia e armonização facial"
                width="130"
                height="64"
              />
            </a>
          </Link>

          <button
            className={
              showMenu
                ? `${styles.btnMenuMobile} ${styles.menuOpen}`
                : styles.btnMenuMobile
            }
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
            <span className={styles.iconHamburguer}></span>
          </button>

          <nav className={styles.menu}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/tratamentos">
              <a>Tratamentos</a>
            </Link>
            <Link href="/clinica">
              <a>Clínica</a>
            </Link>
            <Link href="/doutora">
              <a>Doutora</a>
            </Link>
            <Link href="/contato">
              <a>Contato</a>
            </Link>
          </nav>

          <div className={styles.btnAgendar}>
            <Button dark>Agendar Consulta</Button>
          </div>
        </div>

        <nav
          className={
            showMenu
              ? `${styles.menuMobile} ${styles.active}`
              : styles.menuMobile
          }
        >
          <ul>
            <li onClick={closeMenu}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/tratamentos">
                <a>Tratamentos</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/clinica">
                <a>Clínica</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/doutora">
                <a>Doutora</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/contato">
                <a>Contato</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/">
                <a>Agendar Consulta</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
