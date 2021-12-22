/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import { Button } from "../components/Button";
import { MyImage } from "../components/MyImage";
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";
import { depositions } from "../data/depositions.js";
import * as gtag from "../lib/gtag";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [currentDepositions, setCurrentDepositions] = useState(depositions[0]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  function agendarConsulta() {
    gtag.event({
      action: "agendar_consulta",
      category: "marcar_consulta_whatsapp",
      label: "Agendar Consulta pelo Whatsapp",
      value: "Marcar consulta",
    });
  }

  return (
    <>
      <Head>
        <title>Home | Clínica Odontológica - Laís Coneglian Dutra</title>
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

      {/* <div className={styles.schedule}>
        <p>
          Aberto: Seg - Sex: 08:00 - 18:00 | Av. Principal, 999 - Lençóis
          Paulista -SP
        </p>
      </div> */}

      <main className={styles.hero}>
        <div className={`mainContainer ${styles.heroWrap}`}>
          <section className={styles.leftContent}>
            <h1 className="title" data-aos="fade-up">
              <strong>Um Sorriso</strong> é a coisa mais bonita que você pode
              usar.
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              officia et quos repudiandae quisquam consequuntur totam,
              architecto corporis tempore eaque?
            </p>
            <div
              className={styles.btnWrap}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Button
                onClick={agendarConsulta}
                link="https://wa.me/5514981472951"
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Agendar Consulta
              </Button>
              <span>
                Ou nos ligue: <strong>(14) 3264-9999</strong>
              </span>
            </div>
          </section>

          <div
            className={styles.imgHero}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <MyImage
              src="/images/hero.jpg"
              alt="Paciente Sorrindo na clínica"
              width="440"
              height="510"
            />
          </div>
        </div>
      </main>

      <section className={`${styles.about} mainContainer`}>
        <div data-aos="fade-down">
          <Title title="Sobre a Clínica" subtitle="Conheça nossa Clínica" />
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.imgAbout} data-aos="fade-up">
            <MyImage
              src="/images/fachada.jpg"
              alt="Paciente Sorrindo na clínica"
              width="541"
              height="626"
              left
            />
          </div>

          <div className={styles.aboutRightContent} data-aos="fade-up">
            <h3>
              <strong>Única Clínica</strong> Odotonlógica com Harmonização
              Facial em Lençóis Paulista.
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
              ipsa corrupti eaque tenetur, impedit laboriosam placeat aliquid,
              nemo quaerat veniam nostrum aliquam inventore a dignissimos vel
              rerum? Consectetur mollitia excepturi aperiam magni officiis nobis
              nulla ut repellendus distinctio perferendis consequatur, ad unde
              voluptas molestias deleniti odio provident rem voluptatum
              blanditiis?
            </p>
            <Button link="/clinica">Ver Mais</Button>
          </div>
        </div>
      </section>

      <section className={styles.treatments}>
        <div data-aos="fade-down">
          <Title title="Tratamentos" subtitle="Nossos Serviços" />
        </div>

        <div className={`${styles.treatmentsWrap} mainContainer`}>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img
                src="/icons/tratamentos1.svg"
                alt="Implantodontia"
                width={25}
                height={32}
              />
            </div>
            <h3>Implantodontia</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img src="/icons/tratamentos2.svg" alt="Implantodontia" />
            </div>
            <h3>Clareamento dentário</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img
                src="/icons/tratamentos3.svg"
                alt="Implantodontia"
                width={32}
                height={27}
              />
            </div>
            <h3>Prótese Fixa</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img src="/icons/tratamentos4.svg" alt="Implantodontia" />
            </div>
            <h3>Profilaxia</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img src="/icons/tratamentos3.svg" alt="Implantodontia" />
            </div>
            <h3>Botox</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img src="/icons/tratamentos2.svg" alt="Implantodontia" />
            </div>
            <h3>Laserterapia</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.doctor} mainContainer`}>
        <div className={styles.doctorContent} data-aos="fade-up">
          <Title
            title="Laís Coneglian Dutra"
            subtitle="Conheça nossa doutora"
          />
          <p className={styles.doctorText}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt.
          </p>
          <Link href="/doutora">
            <a>Ler mais</a>
          </Link>
        </div>

        <Image
          src="/images/sobreDoutora.png"
          alt="Dra Laís C. Dutra"
          width="527"
          height="539"
          objectFit="contain"
          data-aos="fade-down"
        />
      </section>

      <section className={styles.patients}>
        <Title
          title="Pacientes Satisfeitos"
          subtitle="Cuidados focado no paciente"
        />

        <ul className={`${styles.patientsList} mainContainer`}>
          {depositions.map((item) => (
            <li
              key={item.id}
              className={
                currentDepositions === item
                  ? `${styles.active} animeOpacity`
                  : ""
              }
            >
              <p>&ldquo;{item.description}&rdquo;</p>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        <div className={styles.slideBtn}>
          {depositions.map((item, idx) => (
            <button
              key={item.id}
              className={currentDepositions === item ? styles.active : ""}
              onClick={() => setCurrentDepositions(item)}
              aria-label="mudar depoimento"
            ></button>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
