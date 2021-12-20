import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Footer = ({ children, link = "/" }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`mainContainer ${styles.footerWrap}`}>
          <Link href="/">
            <a className={styles.logo}>
              <Image
                src="/icons/logo.svg"
                alt="Logo"
                width="200"
                height="110"
              />
            </a>
          </Link>

          <div>
            <h3>Nome Clínica</h3>
            <ul>
              <li>(14) 99999-8888</li>
              <li>contato@hotmail.com</li>
              <li>Rua Ali Perto, 42</li>
              <li>Lençóis Paulista - SP</li>
              <li className={styles.social}>
                <Link href="/">
                  <a>
                    <Image
                      src="/icons/instaFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Image
                      src="/icons/faceFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Image
                      src="/icons/youtubeFooter.svg"
                      alt="Logo"
                      width="32"
                      height="27"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Responsável Técnica</h3>
            <p>Dra. Laís Coneglian Dutra</p>
            <p>CRO SP 99.999</p>
          </div>

          <div>
            <h3>Atendimento</h3>
            <p>Seg - Sex: 08:00 - 18:00</p>
            <p>Sáb: até 12h - Dom: Fechado</p>
          </div>
        </div>
      </footer>

      <p className={`${styles.copy}`}>
        2022 © Dra. Lais Coneglian Dutra. Todos os direitos reservados.
      </p>
    </>
  );
};
