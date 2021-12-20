import { useEffect } from "react";
import Head from "next/head";
import { HeaderPage } from "../../components/HeaderPage";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { MyImage } from "../../components/MyImage";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

export default function Doutora() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Doutora | Clínica Odontológica - Laís Coneglian Dutra</title>
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

      <HeaderPage subtitle="conheça a doutora" title="Laís Coneglian Dutra." />

      <main className={`${styles.doctor} mainContainer`}>
        <div data-aos="fade-up">
          <MyImage
            src="/images/lais.jpeg"
            alt="Laís C. Dutra"
            width="500"
            height="540"
            left
          />
        </div>
        <div className={styles.doctorContent} data-aos="fade-up">
          <h2>Olá, eu sou a dra. Laís C. Dutra</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam.
          </p>
          <p>
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
            et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
          </p>
        </div>
      </main>

      <section className={`${styles.formation} mainContainer`}>
        <h2 data-aos="fade-down">Formação & Cursos</h2>

        <div className={styles.formationWrap}>
          <div className={styles.formationItem} data-aos="zoom-in">
            <span>Bacharel</span>
            <h3>Odontologia</h3>
            <p>USP</p>
          </div>
          <div className={styles.formationItem} data-aos="zoom-in">
            <span>Especialização</span>
            <h3>Harmonização Orofacial</h3>
            <p>ioe</p>
          </div>
          <div className={styles.formationItem} data-aos="zoom-in">
            <span>Curso</span>
            <h3>Aperfeiçoamento em Preenchimento Labial</h3>
            <p></p>
          </div>
          <div className={styles.formationItem} data-aos="zoom-in">
            <span>Curso</span>
            <h3>Toxina Botulínica (Botox)</h3>
            <p></p>
          </div>
          <div className={styles.formationItem} data-aos="zoom-in">
            <span>Curso</span>
            <h3>Fios de PDO</h3>
            <p></p>
          </div>
          <div className={styles.formationItem} data-aos="zoom-in">
            <span>Curso</span>
            <h3>Bioeslimuladores de colágeno</h3>
            <p></p>
          </div>
          <div className={styles.formationItem} data-aos="zoom-in">
            <span>Curso</span>
            <h3>Cirurgia de Extração de Terceiros Molares</h3>
            <p></p>
          </div>
          <div className={styles.formationItem} data-aos="zoom-in">
            <span>Curso</span>
            <h3>Resinas</h3>
            <p></p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`mainContainer ${styles.ctaWrap}`}>
          <div data-aos="fade-up">
            <MyImage
              src="/images/hero2.jpg"
              alt="Mulher sorrindo"
              width="500"
              height="540"
              left
            />
          </div>
          <div className={styles.ctaContent} data-aos="fade-up">
            <h3>
              Nada que você veste é mais importante que o seu {""}
              <strong>Sorriso.</strong>
            </h3>
            <p>
              Agende um horário ou fique a vontade para tirar qualquer dúvidas.
            </p>
            <Button link="/">AGENDAR</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
