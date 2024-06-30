import styles from '../styles/components/ButtonShadow.module.scss';

const ButtonShadow = ({ width, fontSize }) => {
    
    const customStyles = {};

  if (width) {
    Object.keys(width).forEach((breakpoint) => {
      customStyles[`--button-width-${breakpoint}`] = width[breakpoint];
    });
  }

  if (fontSize) {
    Object.keys(fontSize).forEach((breakpoint) => {
      customStyles[`--button-font-size-${breakpoint}`] = fontSize[breakpoint];
    });
  }

    return (
        <div className={styles['button-wrapper']}>
            <div className={styles['button-border']}></div>
            <button className={styles['button']}  style={customStyles}>Портфолио</button>
        </div>
    );
}

export default ButtonShadow;