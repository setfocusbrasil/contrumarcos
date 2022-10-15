import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

export default function Tratamentos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>Produtos | Materiais Elétricos - Eletro Santa Clara</title>
        <meta
          name="description"
          content="As melhores marcas. Produtos certificados e qualificados"
        />
        <meta
          name="keywords"
          content="eletro santa clara, materiais elétricos, média tensão,ferragens, alta tensão, tomada, interruptor, disjuntor, contator, para-raio, poste, transformador"
        />
        <meta name="author" content=" Eletro Santa Clara" />
      </Head>

      <div>
        <HeaderPage subtitle="As melhores marcas" title="Produtos Certificados." />
      </div>
      <main className={`${styles.treatments} mainContainer`}>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_1.png"
            alt="Chuveiros"
            width="350"
            height="279"
            left
          />
          <h3>Chuveiros</h3>
          <div className={styles.description}>
            <p>
            Toda linha de chuveiros e duchas..
            </p>
          </div>
        </div>




        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_2.png"
            alt="Fios e Cabos"
            width="350"
            height="279"
          />
          <h3>Fios e Cabos</h3>
          <div className={styles.description}>
            <p>
            Toda linha de fios e cabos.
            </p>
            <p>
             
            </p>
          </div>
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_3.png"
            alt="Toda linha de conduletes e acessórios."
            width="350"
            height="279"
            left
          />
          <h3>Conduletes</h3>
          <div className={styles.description}>
            <p>
            Toda linha de conduletes e acessórios.
            </p>
          </div>
        </div>




        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_4.png"
            alt="disjuntores"
            width="350"
            height="279"
          />
          <h3>Disjuntores</h3>
          <div className={styles.description}>
            <p>
            Toda linha de disjuntores, disjuntor-motor, contatores e relês.
            </p>
            <p>
              
            </p>
          </div>
        </div>        

        

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_5.png"
            alt="ELETROCALHAS E PERFILADOS"
            width="350"
            height="279"
            left
          />
          <h3>Eletrocalhas e Perfilados</h3>
          <div className={styles.description}>
            <p>
            Toda linha de eletrocalhas, perfilados e acessórios.
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_12.png"
            alt="MÉDIA E ALTA TENSÃO"
            width="350"
            height="279"
            left
          />
          <h3>Alta Tensão</h3>
          <div className={styles.description}>
            <p>
            Transformadores, cabos multiplexados, chaves e acessórios.
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_6.png"
            alt="Diversos modelos de interruptores e tomadas."
            width="350"
            height="279"
            left
          />
          <h3>Interruptores e Tomadas</h3>
          <div className={styles.description}>
            <p>
            Diversos modelos de interruptores e tomadas.
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_7.png"
            alt="Toda linha de lâmpadas e acessórios em LED e demais."
            width="350"
            height="279"
            left
          />
          <h3>Lâmpadas</h3>
          <div className={styles.description}>
            <p>
            Toda linha de lâmpadas e acessórios em LED e demais.
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_8.png"
            alt="Toda linha de luminárias e plafons."
            width="350"
            height="279"
            left
          />
          <h3>Luminárias</h3>
          <div className={styles.description}>
            <p>
            Toda linha de luminárias e plafons.
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_9.png"
            alt="Grande variedade de lustres e pendentes."
            width="350"
            height="279"
            left
          />
          <h3>Lustres</h3>
          <div className={styles.description}>
            <p>
            Grande variedade de lustres e pendentes.
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_10.png"
            alt="Painéis de montagem e acessórios."
            width="350"
            height="279"
            left
          />
          <h3>Painéis de montagem</h3>
          <div className={styles.description}>
            <p>
            Painéis de montagem e acessórios.
            </p>
          </div>
        </div>

        {/* <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/"
            alt="Fios de PDO"
            width="350"
            height="279"
            left
          />
          <h3>Fios de PDO</h3>
          <div className={styles.description}>
            <p>São inseridos na derme com o intuito de estimular o colágeno.</p>
          </div>
        </div> */}

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/prod_11.png" alt="Toda linha de plugs e tomadas industriais." width="350" height="279" left />
          <h3>Plugs e tomadas industriais</h3>
          <div className={styles.description}>
            <p>
            Toda linha de plugs e tomadas industriais.
            </p>
          </div>
        </div>
      </main>

      <section className={styles.images}>
        <Title title="Material Elétrico é na Eletro Santa Clara" subtitle="Qualidade é Nosso Destaque" />

        <ul className={`${styles.imagesContainer} mainContainer`}>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/produto1.png"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/produto2.png"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/produto3.png"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/produto4.png"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/produto5.png"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/produto6.png"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
}
