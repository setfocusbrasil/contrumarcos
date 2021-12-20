/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HeaderPage } from "../../components/HeaderPage";
import { Footer } from "../../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

export default function Contato() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Contato | Clínica Odontológica - Laís Coneglian Dutra</title>
        <meta
          name="description"
          content="Clínica Odontológica em Lençóis Paulista com Harmonização Facial - dra. Laís Coneglian Dutra"
        />
        <meta
          name="keywords"
          content="Dentista, Clínica Odontológica, Dentista em Lençóis Paulista, Harmonização Facial, Clareamento Dental, Clínica Odontológica em Lençóis Paulista"
        />
        <meta name="author" content="dra. Laís Coneglian Dutra" />
      </Head>

      <HeaderPage subtitle="Entre em contato com nós" title="Nosso Contato." />

      <main className={`${styles.contact}`}>
        <section className="mainContainer">
          <div className={styles.contactLeft}>
            <ul>
              <li>
                <p>
                  <img src="/icons/localizacaoIcon.svg" alt="Localização" />
                  Rua Ali Perto, 175
                </p>
                <p>Lençóis Paulista - SP</p>
              </li>
              <li></li>
              <li className={styles.separador}>
                <p>
                  <img src="/icons/emailIcon.svg" alt="email" />
                  contato@hotmail.com
                </p>
              </li>
              <li>
                <p>
                  <img src="/icons/telefoneIcon.svg" alt="Telefone" />
                  +55 (14) 3263-9999
                </p>
                <p>+55 (14) 99123-4567</p>
              </li>
              <li className={styles.separador}>
                <p>
                  <img src="/icons/horarioIcon.svg" alt="Horários" />
                  08-18h de seg à sex
                </p>
                <p>08-12h sáb</p>
              </li>
              <li className={styles.social}>
                <Link href="/">
                  <a>
                    <img src="/icons/instaContato.svg" alt="Instagram" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="/icons/faceContato.svg" alt="Facebook" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="/icons/youtubeContato.svg" alt="Youtube" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <form className={styles.contactRight}>
            <div className={styles.inputWrap}>
              <div className={styles.input}>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" />
              </div>
              <div className={styles.input}>
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" />
              </div>
            </div>
            <div className={styles.input}>
              <label htmlFor="message">Mensagem</label>
              <textarea name="message" rows="6"></textarea>
            </div>

            <button className={styles.button}>ENVIAR MENSAGEM</button>
          </form>
        </section>
      </main>

      <section className={`${styles.loc} mainContainer`} data-aos="fade-up">
        <div>
          <h2>Localização</h2>
          <p>
            Prédio azul com janela e porta espelhadas. Local climatizado e
            aconchegante, fácil de chegar, ao lado do 1° Tabelionato de Notas e
            Protestos de Lençóis Paulista.
          </p>
        </div>
        <Image
          src="/images/localizacao.jpg"
          alt="Localização"
          width="750"
          height="350"
          objectFit="cover"
        />
      </section>

      <Footer />
    </>
  );
}
