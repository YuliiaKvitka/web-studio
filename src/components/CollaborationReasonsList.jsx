import Image from 'next/image';
import styles from '../styles/components/CollaborationReasonsList.module.scss';

const CollaborationReasonsList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <h3 className={styles.caption}>В сроки сдаем работу!</h3>
        <p className={styles.text}>Расписываем каждый этап по срокам, и придерживаемся дедлайнов</p>
        <div className={styles.image}>
          <Image src='/assets/collaborations-reasons/time.png' alt='' width={200} height={189} loading='lazy' />
        </div>
      </li>
      <li className={styles.item}>
        <h3 className={styles.caption}>Команда специалистов</h3>
        <p className={styles.text}>В нашей команде множество специалистов, и каждый из них хорошо знает свое дело</p>
        <div className={styles.image}>
          <Image src='/assets/collaborations-reasons/employ.png' alt='' width={200} height={189} loading='lazy' />
        </div>
      </li>
      <li className={styles.item}>
        <h3 className={styles.caption}>Консультация перед заказом</h3>
        <p className={styles.text}>Наши менеджеры в сети 24/7, и готовы помочь вам, а так же ответить на ваши вопросы</p>
        <div className={styles.image}>
          <Image src='/assets/collaborations-reasons/support.png' alt='' width={200} height={189} loading='lazy' />
        </div>
      </li>
    </ul>
  );
};

export default CollaborationReasonsList;

