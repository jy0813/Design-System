import { getToastState } from '@/store/useToastStore';
import { useToast } from '@/hooks/useToast';
import { ToastMessageType } from '@/types/toast';
import Toast from '@/components/toast/Toast';

export default function Home() {
  const { showToast } = useToast();
  const state = getToastState();

  console.log(state);

  const handleToast = (type: ToastMessageType) => {
    switch (type) {
      case 'success':
        return showToast(type, '성공하였습니다.');
      case 'error':
        return showToast(type, '실패하였습니다.');
      case 'info':
        return showToast(type, '정보입니다.');
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <button onClick={() => handleToast('success')}>성공</button>
        <button onClick={() => handleToast('error')}>에러</button>
        <button onClick={() => handleToast('info')}>정보</button>
      </div>
      <Toast />
    </>
  );
}
