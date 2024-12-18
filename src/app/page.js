import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Main from "./pages/MainPage";
import FeaturePage from "./pages/FeaturePage";
import OneWayCabPage from "./pages/OneWayCabPage";
import Blog1 from "./pages/Blog1Page";
import Blog2 from "./pages/Blog2Page";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Main />
      <FeaturePage />
      <OneWayCabPage />
      <Blog1 />
      <Blog2 />
      <Footer />
    </div>
  );
}
