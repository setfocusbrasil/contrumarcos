import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

export default function Clinica() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Clínica | Clínica Odontológica - Laís Coneglian Dutra</title>
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

      <HeaderPage subtitle="Conheça nossa clínica" title="Sobre." />

      <main className={`${styles.clinic} mainContainer`}>
        <div data-aos="fade-up">
          <MyImage
            src="/images/clinica1.jpg"
            alt="Frente da Clínica"
            width="430"
            height="508"
            left
          />
        </div>

        <div className={styles.clinicDescription} data-aos="fade-up">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </main>

      <section className={`${styles.photos} mainContainer`}>
        <Title subtitle="Algumas imagens" title="Fotos" />

        <div className={styles.photosSlider}>
          <ul>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/clinica2.jpg"
                alt="Foto interna da clínica"
                width="600"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/clinica3.jpg"
                alt="Foto interna da clínica"
                width="600"
                height="375"
                objectFit="cover"
              />
            </li>
            <li className={styles.bigger} data-aos="zoom-in-up">
              <Image
                src="/images/clinica4.jpg"
                alt="Foto interna da clínica"
                width="1200"
                height="375"
                objectFit="cover"
              />
            </li>
          </ul>

          {/* <div className={styles.btns}>
            <button className={styles.active}></button>
            <button></button>
          </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
}
