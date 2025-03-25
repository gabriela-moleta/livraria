import styles from './secao_lancamentos.module.css';

export default function SecaoLancamentos() {
  return (

<section className={`${styles.bookSection} ${styles.newReleases}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Lançamentos</h2>
          <a href="/lancamentos" className={styles.viewAll}>
            Ver todos
          </a>
        </div>

        <div className={styles.booksGrid}>
          {newReleases.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <div className={styles.bookCover}>
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className={styles.coverImage}
                />
                <button className={styles.quickViewButton}>Visualizar</button>
              </div>
              <div className={styles.bookInfo}>
                <span className={styles.newBadge}>Novo</span>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>por {book.author}</p>
                <div className={styles.bookRating}>
                  {renderStars(book.rating)}
                  <span className={styles.ratingValue}>({book.rating})</span>
                </div>
                <div className={styles.bookTags}>
                  {book.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.bookPriceActions}>
                  <span className={styles.bookPrice}>
                    R$ {book.price.toFixed(2)}
                  </span>
                  <div className={styles.bookActions}>
                    <button className={styles.iconButton}>❤️</button>
                    <button className={styles.iconButton}>🛒</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  )}