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
                src="/icons/logo_transparente.png"
                alt="Logo"
                width="300"
                height="110"
              />
            </a>
          </Link>

          <div>
            <h3>Clínica Dra. Laís C. Dutra</h3>
            <ul>
              <li>(14) 981472951</li>
              <li>dralaisconegliandutra@gmail.com</li>
              <li>R. Cel. Joaquim Anselmo Martins, 851</li>
              <li>Lençóis Paulista - SP</li>
              <li className={styles.social}>
                <Link href="https://www.instagram.com/dralaiscdutra">
                  <a target="_blank">
                    <Image
                      src="/icons/instaFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/dralaiscdutra">
                  <a target="_blank">
                    <Image
                      src="/icons/faceFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                {/* <Link href="/">
                  <a>
                    <Image
                      src="/icons/youtubeFooter.svg"
                      alt="Logo"
                      width="32"
                      height="27"
                    />
                  </a>
                </Link> */}
              </li>
            </ul>
          </div>

          <div>
            <h3>Responsável Técnica</h3>
            <p>Dra. Laís Coneglian Dutra</p>
            <p>CRO SP 135950</p>
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
