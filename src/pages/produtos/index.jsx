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
        <HeaderPage subtitle="As melhores marcas" title="Produtos Certificados e Qualificados." />
      </div>
      <main className={`${styles.treatments} mainContainer`}>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_chuveiros.png"
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
            src="/images/prod_cabos.png"
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
            src="/images/prod_conduletes.png"
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
            src="/images/clareamento.jpg"
            alt="Clareamento dental"
            width="350"
            height="279"
          />
          <h3>Clareamento dental</h3>
          <div className={styles.description}>
            <p>
              Um dos serviços mais procurados por ser considerado um tratamento
              pouco invasivo, muito seguro e com resultados incríveis para os
              dentes. O dentista usa um gel que clareia a superfície dentaria e
              o resultado pode ser visto logo após a sessão do clareamento a
              laser.
            </p>
            <p>
              Nosso diferencial é o uso da laserterapia para controle da
              sensibilidade pós operatória.
            </p>
          </div>
        </div>        

        

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/facetas.jpg"
            alt="Facetas de Resina"
            width="350"
            height="279"
            left
          />
          <h3>Facetas de Resina</h3>
          <div className={styles.description}>
            <p>
              É uma película de resina esculpida dente a dente para harmonizar a
              cor, forma e posição dos dentes.
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/preenchimentoLabial.jpeg"
            alt="Preenchimento Labial"
            width="350"
            height="279"
            left
          />
          <h3>Preenchimento Labial</h3>
          <div className={styles.description}>
            <p>
              Um procedimento que visa dar volume, contorno e brilho, realçando
              a sensualidade dos lábios. Bastante procurado entre as mulheres.
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/botulinica.jpg"
            alt="Botulinica"
            width="350"
            height="279"
            left
          />
          <h3>Toxina Botulinica</h3>
          <div className={styles.description}>
            <p>
              Nosso queridinho é o mais procurado na área da harmonização
              facial. Ele paralisa a musculatura temporariamente suavizando
              linhas de expressão e prevenindo rugas.
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/preenchimentoFacial.jpg"
            alt="Preenchimento facial"
            width="350"
            height="279"
            left
          />
          <h3>Preenchimento facial com ácido hialuronico</h3>
          <div className={styles.description}>
            <p>
              Pode ser feito no malar, mandibula e mento com o intuito de dar
              volume onde é necessário melhorar o contorno deixando a face mais
              harmoniosa, jovem e atraente.
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/restauração.jpeg"
            alt="Restauração"
            width="350"
            height="279"
            left
          />
          <h3>Restauração</h3>
          <div className={styles.description}>
            <p>
              Feita com resina composta com o intuito de paralisar o avanço da
              doença carie.
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/bioestimuladorColageno.jpeg"
            alt="Bioestimulador de colageno"
            width="350"
            height="279"
            left
          />
          <h3>Bioestimulador de colageno</h3>
          <div className={styles.description}>
            <p>
              Procedimento injetável que visa tratar a flacidez da pele
              rejuvenescendo o rosto dos pacientes através do estímulo natural
              do colágeno, melhorando a firmeza e a colocação da pele.
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/microagulhamento.jpg"
            alt="Microagulhamento"
            width="350"
            height="279"
            left
          />
          <h3>Microagulhamento</h3>
          <div className={styles.description}>
            <p>
              Procedimento feito com uma derma pen por meio do qual selecionamos
              mesclas que penetram na pele com o intuito de entregar vitaminas,
              estimular o colágeno, suavizar rugas, tratar manchas e melhorar a
              qualidade da pele. Depois selamos a pele com um peeling químico.
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
          <MyImage src="/images/peeling.jpg" alt="Peeling" width="350" height="279" left />
          <h3>Peeling</h3>
          <div className={styles.description}>
            <p>
              Um ativo que ajuda a remover manchas, estimular colágeno, suavizar
              rugas, dar brilho e melhorar o aspecto da pele
            </p>
          </div>
        </div>
      </main>

      <section className={styles.images}>
        <Title title="Fotos" subtitle="Produtos em Destaque" />

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
