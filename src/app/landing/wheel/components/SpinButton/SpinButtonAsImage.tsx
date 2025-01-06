import { FunctionComponent } from 'react';
import styles from './SpinButton.module.css';
import svgSpinButton from './spin-button.svg';

interface Props {
  onClick: (event: unknown) => void;
}

const SpinButtonAsImage: FunctionComponent<Props> = ({ onClick }) => {
  return <img className={styles.button} src={svgSpinButton.src} onClick={onClick} />;
};

export default SpinButtonAsImage;
