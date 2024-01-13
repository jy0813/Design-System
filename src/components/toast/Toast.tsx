import { ToastMessageType, ToastStackType } from '@/types/toast';
import styles from './Toast.module.scss';
import { useToast } from '@/hooks/useToast';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { MdError } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { useToastStack } from '@/store/useToastStore';
import { createPortal } from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ToastIcon = ({ type }: { type: ToastMessageType }) => {
  switch (type) {
    case 'success':
      return <FaCheckCircle />;
    case 'error':
      return <MdError />;
    case 'info':
      return <FaInfoCircle />;
    default:
      return null;
  }
};

const SingleToast = ({ id, type, message, duration }: ToastStackType) => {
  const { removeToast } = useToast();
  const handleToastDelete = () => {
    removeToast(id);
  };

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <ToastIcon type={type} />
      <div className={styles.messageArea}>
        <p>{message}</p>
      </div>
      <button onClick={handleToastDelete}>
        <IoClose />
      </button>
      <div
        className={`${styles.progress} ${styles[type]}`}
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  );
};

const Toast = () => {
  const stack = useToastStack();
  const toastRoot =
    typeof window !== 'undefined' &&
    (document.getElementById('toast') as HTMLElement);

  return (
    toastRoot &&
    createPortal(
      <TransitionGroup>
        {stack.map((toast) => (
          <CSSTransition
            key={toast.id}
            timeout={toast.duration / 10}
            classNames={{
              enter: styles.toastEnter,
              enterActive: styles.toastEnterActive,
              exit: styles.toastEnterExit,
              exitActive: styles.toastEnterExitActive,
              exitDone: styles.toastEnterExitDone,
            }}
          >
            <SingleToast {...toast} />
          </CSSTransition>
        ))}
      </TransitionGroup>,
      toastRoot,
    )
  );
};

export default Toast;
