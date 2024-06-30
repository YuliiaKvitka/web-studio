//src/app/page.js
import Hero from "@/components/Hero";
import styles from "./page.module.scss";
import CollaborationReasons from "@/components/CollaborationReasons";
import Portfolio from "@/components/Portfolio";
import Tariffs from "@/components/Tariffs";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <div className={styles['section-line-bottom']}></div>
      <CollaborationReasons />
      <Portfolio />
      <Tariffs />
      <Contacts/>
    </>
  );
}
