import LandingPage from "./features/landing-page";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
        <LandingPage />
    </div>
  );
}
