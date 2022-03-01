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
            src="/images/clinica1.jpeg"
            alt="Frente da Clínica"
            width="430"
            height="508"
            left
          />
        </div>

        <div className={styles.clinicDescription} data-aos="fade-up">
          <p>
            A Clínica foi fundada no ano de 2020 com o propósito de trazer para
            Lençóis Paulista e região uma nova visão sobre a Odontologia e
            Harmonização Facial. Uma clínica em que o paciente tem atenção
            especial pois é um espaço exclusivo onde somente a Dra Lais
            Coneglian Dutra atende. Dessa maneira ela pode executar um
            atendimento mais individualizado e humanizado, respeitando as
            particularidades e exigências de cada paciente, além de proporcionar
            muito mais privacidade ao atendimento.
          </p>
          <p>
            A clínica está sempre pronta, com ambiente muito bem esterilizado e
            higienizado para garantir a segurança e integridade de todos os
            pacientes.
          </p>
          <p>
            Os equipamentos são todos novos e de última geração garantindo a
            todos os cliente o que há de melhor e mais moderno em tratamento
            odontológicos e de harmonização facial.
          </p>
          <p>
            A clínica preza sempre por tratamentos de excelência, por isso
            utilizamos produtos da melhor qualidade em toxina botulínica,
            preenchedores, bioestimuladores de colageno, resinas, clareadores
            dentais, entre outros. A melhor qualidade em produtos é equipamentos
            para oferecer o melhor resultado em todos os tratamentos!!
          </p>
        </div>
      </main>

      <section className={`${styles.photos} mainContainer`}>
        <Title subtitle="Algumas imagens" title="Fotos" />

        <div className={styles.photosSlider}>
          <ul>
            <li data-aos="zoom-in-up" className={styles.bigger}>
              <Image
                src="/images/clinica2.jpg"
                alt="Foto interna da clínica"
                width="1216"
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
            <li data-aos="zoom-in-up">
              <Image
                src="/images/clinica4.jpg"
                alt="Foto interna da clínica"
                width="600"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/clinica5.jpg"
                alt="Foto interna da clínica"
                width="600"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/clinica6.jpg"
                alt="Foto interna da clínica"
                width="600"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up" className={styles.bigger}>
              <Image
                src="/images/clinica7.jpg"
                alt="Foto interna da clínica"
                width="1216"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/clinica8.jpg"
                alt="Foto interna da clínica"
                width="600"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/clinica9.jpg"
                alt="Foto interna da clínica"
                width="600"
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
