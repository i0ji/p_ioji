import { useRouter } from 'next/router';

export default function Tab() {
  const router = useRouter();
  const { tabId } = router.query; // Получаем текущую вкладку из URL

  return (
    <div>
      <h1>Вкладка: {tabId}</h1>
      <div>
        <button onClick={() => router.push('/tabs/tab1')}>Вкладка 1</button>
        <button onClick={() => router.push('/tabs/tab2')}>Вкладка 2</button>
        <button onClick={() => router.push('/tabs/tab3')}>Вкладка 3</button>
      </div>
      <div>
        {tabId === 'tab1' && <p>Контент вкладки 1</p>}
        {tabId === 'tab2' && <p>Контент вкладки 2</p>}
        {tabId === 'tab3' && <p>Контент вкладки 3</p>}
      </div>
    </div>
  );
};
