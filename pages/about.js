import Container from "@/components/Container";
import styles from "@/styles/about.module.css";
import Image from "next/image";
import profileImage from "@/public/profile-image.jpg";

const About = () => {
  return (
    <Container>
      <div className={styles.profileContainer}>
        <div className={styles.profileImageSection}>
          <div className={styles.profileImageDiv}>
            <Image src={profileImage} layout="fill"></Image>
          </div>
        </div>
        <div className={styles.profileDescriptionSection}>
          <h1 className={styles.title}>About Me</h1>
          <p>
            My name is Luke and I am a 20 year old front-end developer living in
            Malta. I graduated from Middlesex University in 2021.
          </p>
        </div>
      </div>
      <div className={styles.portfolioContainer}>
        <h2 className={styles.portfolioTitle}>Portfolio</h2>
        <ul className={styles.cards}>
          <li className={styles.portfolioCardsItem}>
            <div className={styles.card}>
              <div className={styles.portfolioCardImage}>
                <img src="https://picsum.photos/500/300/?image=10" />
              </div>
              <div className={styles.portfolioCardContent}>
                <h2 className={styles.portfolioCardTitle}>Card Grid Layout</h2>
                <p className={styles.portfolioCardText}>
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
              </div>
            </div>
          </li>
          <li className={styles.portfolioCardsItem}>
            <div className={styles.card}>
              <div className={styles.portfolioCardImage}>
                <img src="https://picsum.photos/500/300/?image=5" />
              </div>
              <div className={styles.portfolioCardContent}>
                <h2 className={styles.portfolioCardTitle}>Card Grid Layout</h2>
                <p className={styles.portfolioCardText}>
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
              </div>
            </div>
          </li>
          <li className={styles.portfolioCardsItem}>
            <div className={styles.card}>
              <div className={styles.portfolioCardImage}>
                <img src="https://picsum.photos/500/300/?image=11" />
              </div>
              <div className={styles.portfolioCardContent}>
                <h2 className={styles.portfolioCardTitle}>Card Grid Layout</h2>
                <p className={styles.portfolioCardText}>
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
              </div>
            </div>
          </li>
          <li className={styles.portfolioCardsItem}>
            <div className={styles.card}>
              <div className={styles.portfolioCardImage}>
                <img src="https://picsum.photos/500/300/?image=14" />
              </div>
              <div className={styles.portfolioCardContent}>
                <h2 className={styles.portfolioCardTitle}>Card Grid Layout</h2>
                <p className={styles.portfolioCardText}>
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default About;
