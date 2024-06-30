'use client';

import React, { useState } from 'react';
import * as Yup from 'yup';
import styles from '../styles/components/FormValidate.module.scss';
import InputMask from 'react-input-mask';

const FormValidate = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    comments: '',
    budget: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // New state for submitted

  const schema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required').matches(/^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/, 'Invalid phone number'),
    comments: Yup.string(),
    budget: Yup.string(),
  });

  const validateField = async (name, value) => {
    try {
      await schema.validateAt(name, { [name]: value });
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    } catch (error) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: error.message }));
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    await validateField(name, value);
  };

  const handlePhoneChange = async (e) => {
    const { value } = e.target;
    setFormData(prevData => ({ ...prevData, phone: value }));
    await validateField('phone', value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await schema.validate(formData, { abortEarly: false });

      // Simulate successful form submission
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true); // Set submitted to true
        setSuccessMessage('Registration successful!');
        setFormData({
          firstName: '',
          email: '',
          phone: '',
          comments: '',
          budget: '',
        });
        setErrors({});
        setTimeout(() => setSubmitted(false), 3000); // Reset submitted state after 3 seconds
      }, 2000);
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach(fieldError => {
        validationErrors[fieldError.path] = fieldError.message;
      });
      setErrors(validationErrors);
      setLoading(false);
    }
  };

  return (
    <div>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <div>
          <label className={styles['form__label']}>
            Ваше имя *
            <input
              className={`${styles['form__input']} ${styles['form__input--focus']}`}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </label>
          {errors.firstName && <span className={styles["error-message"]}>{errors.firstName}</span>}
        </div>

        <div>
          <label className={styles['form__label']}>
            Ваш e-mail адрес *
            <input
              className={`${styles['form__input']} ${styles['form__input--focus']}`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your e-mail"
            />
          </label>
          {errors.email && <span className={styles["error-message"]}>{errors.email}</span>}
        </div>

        <div>
          <label className={styles['form__label']}>
            Ваш номер телефона *
            <InputMask
              className={`${styles['form__input']} ${styles['form__input--mask']}`} // Добавление стилей для маски
              mask="+380 (99) 999-99-99"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="Your phone number"
            />
          </label>
          {errors.phone && <span className={styles["error-message"]}>{errors.phone}</span>}
        </div>

        <div>
          <label className={styles['form__label']}>
            Ваш комментарий (по желанию)
            <input
              className={`${styles['form__input']} ${styles['form__input--focus']}`}
              type="text"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Your comments"
            />
          </label>
          {errors.comments && <span className={styles["error-message"]}>{errors.comments}</span>}
        </div>

        <div>
          <label className={styles['form__label']}>
            Бюджет на сайт
            <input
              className={`${styles['form__input']} ${styles['form__input--focus']}`}
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Your budget"
            />
          </label>
          {errors.budget && <span className={styles["error-message"]}>{errors.budget}</span>}
        </div>

        <div className={styles['form__wrapper-button']}>
          <button className={styles['form__button']} type="submit" disabled={loading || submitted}>
            {submitted ? 'Отправлено' : loading ? 'Отправляется...' : 'Отправить'}
          </button>
        </div>
      </form>
      {successMessage && <div className={styles["success-message"]}>{successMessage}</div>}
    </div>
  );
};

export default FormValidate;



