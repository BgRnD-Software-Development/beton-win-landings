import { FunctionComponent } from 'react';
import svgSpinButton from './spin-button.svg';
import styles from './SpinButton.module.css';

interface Props {
  onClick: (event: unknown) => void;
}

const SpinButtonAsImage: FunctionComponent<Props> = ({ onClick }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt="Spin Button" className={styles.button} src={svgSpinButton.src} onClick={onClick} />;
};

export default SpinButtonAsImage;
