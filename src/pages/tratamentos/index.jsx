import { useEffect } from "react";
import Head from "next/head";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Footer } from "../../components/Footer";
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
        <title>Tratamentos | Clínica Odontológica - Laís Coneglian Dutra</title>
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

      <div>
        <HeaderPage subtitle="Todos os serviços" title="Nossos Tratamentos." />
      </div>
      <main className={`${styles.treatments} mainContainer`}>
        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/restauracao.jpg"
            alt="Restaurações"
            width="350"
            height="279"
            left
          />
          <h3>Restaurações</h3>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              fuga eveniet reprehenderit tenetur, modi neque repellendus eum
              ullam tempora praesentium illum est, aliquid repudiandae dolorum
              voluptatum in dolor possimus commodi ut tempore. Nostrum at est,
              aperiam ex molestias repellendus odio voluptatibus quas incidunt
              libero animi veritatis sint iste nam natus?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              repellendus suscipit ex nostrum reiciendis accusantium impedit
              asperiores quae similique tenetur?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              animi fugiat aliquid cumque blanditiis est amet, placeat quasi
              rerum dolore maxime, soluta quos voluptatum inventore?
              Dignissimos, architecto ipsa ea sunt laboriosam quae?
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/faceta.jpeg"
            alt="Facetas De Resina"
            width="350"
            height="279"
          />
          <h3>Facetas De Resina</h3>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              fuga eveniet reprehenderit tenetur, modi neque repellendus eum
              ullam tempora praesentium illum est, aliquid repudiandae dolorum
              voluptatum in dolor possimus commodi ut tempore. Nostrum at est,
              aperiam ex molestias repellendus odio voluptatibus quas incidunt
              libero animi veritatis sint iste nam natus?
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/profilaxia.jpg"
            alt="Profilaxia"
            width="350"
            height="279"
            left
          />
          <h3>Profilaxia</h3>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              fuga eveniet reprehenderit tenetur, modi neque repellendus eum
              ullam tempora praesentium illum est, aliquid repudiandae dolorum
              voluptatum in dolor possimus commodi ut tempore. Nostrum at est,
              aperiam ex molestias repellendus odio voluptatibus quas incidunt
              libero animi veritatis sint iste nam natus?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              repellendus suscipit ex nostrum reiciendis accusantium impedit
              asperiores quae similique tenetur?
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/clareamento.jpg"
            alt="Claramente Dental"
            width="350"
            height="279"
            left
          />
          <h3>Claramente Dental</h3>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              fuga eveniet reprehenderit tenetur, modi neque repellendus eum
              ullam tempora praesentium illum est, aliquid repudiandae dolorum
              voluptatum in dolor possimus commodi ut tempore. Nostrum at est,
              aperiam ex molestias repellendus odio voluptatibus quas incidunt
              libero animi veritatis sint iste nam natus?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              repellendus suscipit ex nostrum reiciendis accusantium impedit
              asperiores quae similique tenetur? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Id, minus? Ab adipisci itaque
              mollitia iure.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              animi fugiat aliquid cumque blanditiis est amet, placeat quasi
              rerum dolore maxime, soluta quos voluptatum inventore?
              Dignissimos, architecto ipsa ea sunt laboriosam quae?
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/botox.jpg"
            alt="Botox"
            width="350"
            height="279"
            left
          />
          <h3>Botox</h3>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              fuga eveniet reprehenderit tenetur, modi neque repellendus eum
              ullam tempora praesentium illum est, aliquid repudiandae dolorum
              voluptatum in dolor possimus commodi ut tempore. Nostrum at est,
              aperiam ex molestias repellendus odio voluptatibus quas incidunt
              libero animi veritatis sint iste nam natus?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              repellendus suscipit ex nostrum reiciendis accusantium impedit
              asperiores quae similique tenetur?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              animi fugiat aliquid cumque blanditiis est amet, placeat quasi
              rerum dolore maxime, soluta quos voluptatum inventore?
              Dignissimos, architecto ipsa ea sunt laboriosam quae?
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/laser.jpg"
            alt="Laserterapia"
            width="350"
            height="279"
            left
          />
          <h3>Laserterapia</h3>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              fuga eveniet reprehenderit tenetur, modi neque repellendus eum
              ullam tempora praesentium illum est, aliquid repudiandae dolorum
              voluptatum in dolor possimus commodi ut tempore. Nostrum at est,
              aperiam ex molestias repellendus odio voluptatibus quas incidunt
              libero animi veritatis sint iste nam natus?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              repellendus suscipit ex nostrum reiciendis accusantium impedit
              asperiores quae similique tenetur?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              animi fugiat aliquid cumque blanditiis est amet, placeat quasi
              rerum dolore maxime, soluta quos voluptatum inventore?
              Dignissimos, architecto ipsa ea sunt laboriosam quae?
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
