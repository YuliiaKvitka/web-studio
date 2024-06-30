import styles from '../styles/components/ContactForm.module.scss'

const ContactForm = () => {
  return (
    <form className={styles['form']}>
                        <label className={styles['form__label']} >Ваше имя
                            <input className={styles['form__input']} type="text" id="name" name="name" required/>
                        </label>

                        <label className={styles['form__label']} > Ваш e-mail адрес
                            <input className={styles['form__input']} type="text" id="name" name="name" required/>
                        </label>

                        <label className={styles['form__label']} > Ваш номер телефона
                            <input className={styles['form__input']} type="text" id="name" name="name" required/>
                        </label>

                        <label className={styles['form__label']} > Ваш комментарий ( по желанию )
                            <input className={styles['form__input']} type="text" id="name" name="name" required/>
                        </label>

                        <label className={styles['form__label']} > Бюджет на сайт
                            <input className={styles['form__input']} type="text" id="name" name="name" required/>
                        </label>

                        <input className={styles['form__button']} type='button' value='Отправить'/>
                    </form>
  )
}

export default ContactForm
