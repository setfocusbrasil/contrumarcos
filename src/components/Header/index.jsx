import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import * as gtag from "../../lib/gtag";
import styles from "./styles.module.scss";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }

  function agendarConsulta() {
    gtag.event({
      action: "agendar_consulta_cabeçalho",
      category: "marcar_consulta_whatsapp_cabeçalho",
      label: "Agendar Consulta pelo Whatsapp",
      value: "Marcar consulta",
    });
  }

  function agendarConsultaMenu() {
    setShowMenu(false);
    gtag.event({
      action: "agendar_consulta_cabeçalho",
      category: "marcar_consulta_whatsapp_cabeçalho",
      label: "Fale com nossos Vendedores",
      value: "Marcar consulta",
    });
  }

  return (
    <>
      <header className={styles.header}>
        <div className="mainContainer">
          <Link href="/">
            <a>
              <Image
                src="/icons/logo_transparente.png"
                alt="Eletro Santa Clara"
                width="180"
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
              <a>Produtos</a>
            </Link>
            <Link href="/clinica">
              <a>A Empresa</a>
            </Link>
            <Link href="/contato">
              <a>Localização</a>
            </Link>
            <Link href="/contato">
              <a>Contato A</a>
            </Link>
          </nav>

          <div className={styles.btnAgendar}>
            <Button
              dark
              onClick={agendarConsulta}
              link="https://wa.me/5514981189197"
            >
               <img src="/icons/whatsIcon.svg" alt="whatsapp" />
              Fale com nossos Vendedores
            </Button>
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
                <a>Produtos</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/clinica">
                <a>A Empresa</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/contato">
                <a>Localização</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
            <Link href="/contato">
              <a>Contato</a>
            </Link>
            </li>
            <li onClick={agendarConsultaMenu}>
              <Link href="https://wa.me/551981189197">
                <a target="_blank">Fale Conosco</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
