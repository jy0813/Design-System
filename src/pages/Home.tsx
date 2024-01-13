import { getToastState } from '@/store/useToastStore';
import { useToast } from '@/hooks/useToast';
import { ToastMessageType } from '@/types/toast';
import Toast from '@/components/toast/Toast';

export default function Home() {
  const { showToast } = useToast();
  const state = getToastState();

  console.log(state);

  const handleToast = (type: ToastMessageType) => {
    showToast(type, '토스트 테스트', 'top');
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
