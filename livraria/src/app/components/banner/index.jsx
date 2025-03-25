import styles from './banner.module.css';

export default function Banner() {
  return (
    <section className={styles.heroBanner}>
    <div className={styles.heroContent}>
      <h2 className={styles.heroHeading}>
        Descubra mundos extraordinários
      </h2>
      <p className={styles.heroParagraph}>
        Promoção de lançamentos com até 30% de desconto!
      </p>
      <button className={styles.ctaButton}>Ver ofertas</button>
    </div>
  </section>
  );
}