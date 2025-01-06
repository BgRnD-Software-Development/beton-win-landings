import { Button } from '../../../../../components';
import styles from './SpinButton.module.css';

const SpinButtonAsButton: typeof Button = ({ onClick }) => {
  return (
    <Button className={styles.button} size="large" variant="round" onClick={onClick}>
      Girar
    </Button>
  );
};

export default SpinButtonAsButton;
