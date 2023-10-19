import { RefObject } from 'react';

import styles from './rn-button.module.scss';

type Props = {
  checkboxRef: RefObject<HTMLInputElement>,
  onChecked: () => void;
}

const RaxRNButton = (props: Props) => {

  const { checkboxRef, onChecked } = props;

  return (
    <div className={ styles.wrapper }>
        <input onChange={onChecked} ref={ checkboxRef } type="checkbox" id='responsive-navbar-button' className={ styles.hiddenCheckbox }/>
        <label htmlFor="responsive-navbar-button" className={ styles.buttonContainer }>
            <i className={`uil uil-bars ${ styles.buttonIcon }`}></i>
        </label>
    </div>
  )
}

export default RaxRNButton