import styles from './secao_livros.module.css';

const Livros = () => {
    const featuredBooks = [
        {
          id: 1,
          title: "É Assim que Acaba",
          author: "Ana Luz Santos",
          price: 49.9,
          coverImage:
            "https://images.tcdn.com.br/img/img_prod/1272692/lv_e_assim_que_acaba_capa_dura_ed_colecionador_1819_1_e9b28ec32791cc5e9287d142b8065393.jpg",
          rating: 4.5,
          tags: ["Romance", "Violencia"],
        },
        {
          id: 2,
          title: "Harry Potter, Reliquias da Morte",
          author: "Marcos Silva",
          price: 39.9,
          coverImage:
            "https://a-static.mlcdn.com.br/800x560/livro-harry-potter-e-as-reliquias-da-morte/magazineluiza/089064300/f15876eaab6a290b3b99fe33a2a19f50.jpg",
          rating: 4.8,
          tags: ["Ficção", "Magia"],
        },
        {
          id: 3,
          title: "Pequeno Principe",
          author: "Julia Mendes",
          price: 55.9,
          coverImage:
            "https://m.media-amazon.com/images/I/81TmOZIXvzL._AC_UF1000,1000_QL80_.jpg",
          rating: 4.2,
          tags: ["Magia", "Ficcção"],
        },
        {
          id: 4,
          title: "Como Eu era Antes de Você",
          author: "Lucas Costa",
          price: 47.9,
          coverImage:
            "https://m.media-amazon.com/images/I/81-P6oEm8cL.jpg",
          rating: 4.7,
          tags: ["Romance", "Filosofia"],
        },
      ];

      const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
    
        for (let i = 0; i < fullStars; i++) {
          stars.push(
            <span key={`star-${i}`} className={styles.star}>
              ★
            </span>
          );
        }
    
        if (hasHalfStar) {
          stars.push(
            <span key="half-star" className={styles.starHalf}>
              ★
            </span>
          );
        }
    
        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
          stars.push(
            <span key={`empty-star-${i}`} className={styles.starEmpty}>
              ☆
            </span>
          );
        }
    
        return stars;
      };

    return (
        <section className={styles.bookSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Destaques da Semana</h2>
          <a href="/destaques" className={styles.viewAll}>
            Ver todos
          </a>
        </div>

        <div className={styles.booksGrid}>
          {featuredBooks.map((book) => (
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
    );

}
      
export default Livros;