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
            Para transformar os seus banhos em momentos de puro relaxamento e descanso dispomos de toda linha de chuveiros e duchas.
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
            Fios e cabos elétricos certificados pelo INMETRO. Garanta a segurança da sua obra!
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
            Se é de conexão e condução que voê precisa, nós dispomos de toda linha de conduletes e acessórios.
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
            A palavra chave desde a linha residêncial até à Industra 4.0 é <strong2>Segurança</strong2>. Por isso dispomos de toda linha de disjuntores, disjuntor-motor, contatores e relês das mais conceituadas marcas do mercado.
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
            Ótimas soluções para ambientes que precisam de uma solução pratica e economica para a condução de fios e cabos. Por isso temos toda linha de eletrocalhas, perfilados e acessórios.
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
            Falou de força bruta conte com a gente. Média e Alta Tensão é o nosso DNA. Transformadores, cabos multiplexados, chaves e acessórios.
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
            Pensou em um ótimo acabamento com qualidade e estilo você encontra aqui! Diversos modelos de interruptores e tomadas.
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
            Seja qual for o ambiente, resdêncial ou industrial uma ótima e econômica iluminação faz toda a diferença. Por isso temos toda linha de lâmpadas, reatores e acessórios que atendem do residêncial ao industrial.
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
            Pra quem não abre mão da elegância e além de tudo ter segurança e economia em sua residência. Toda linha de luminárias e plafons a pronta entrega.
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
            Quer dar um toque de elegância e beleza ao seu lar? Conte com a grande variedade de lustres e pendentes.
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
