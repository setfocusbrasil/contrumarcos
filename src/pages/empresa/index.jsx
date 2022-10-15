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
        <title>Sobre a Empresa | Eletro Santa Clara</title>
        <meta
          name="description"
          content="Eletro Santa Clara"
        />
        <meta
          name="keywords"
          content="eletro santa clara, materiais elétricos, média tensão,ferragens, alta tensão, tomada, interruptor, disjuntor, contator, para-raio, poste, transformador"
        />
        <meta name="author" content="Eletro Santa Clara" />
      </Head>

      <HeaderPage subtitle="Conheça nossa Empresa" title="Sobre." />

      <main className={`${styles.clinic} mainContainer`}>
        <div data-aos="fade-up">
          <MyImage
            src="/images/loja1.jpeg"
            alt="Frente da Loja"
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
                src="/images/loja2.jpg"
                alt="Foto Loja 2"
                width="1216"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja3.jpg"
                alt="Foto Loja"
                width="600"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja4.jpg"
                alt="Foto Loja"
                width="600"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja5.jpg"
                alt="Foto Loja"
                width="600"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja6.jpg"
                alt="Foto Loja"
                width="600"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up" className={styles.bigger}>
              <Image
                src="/images/loja7.jpg"
                alt="Foto Loja"
                width="1216"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja8.jpg"
                alt="Foto Loja"
                width="600"
                height="375"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja9.jpg"
                alt="Foto Loja"
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
