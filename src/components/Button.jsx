import styles from '../styles/components/Button.module.scss'

const Button = ({ title, width, fontSize }) => {
  
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
    <button type='button' className={styles['button']}   style={customStyles} >
      {title}
    </button>
  )
}

export default Button
