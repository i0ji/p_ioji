import { useRouter } from 'next/router';

export default function TabsPage() {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <div>
      <h1>Вкладки</h1>
      <div>
        <button onClick={() => router.push('/tabs?tab=tab1')}>
          Вкладка 1
        </button>
        <button onClick={() => router.push('/tabs?tab=tab2')}>
          Вкладка 2
        </button>
        <button onClick={() => router.push('/tabs?tab=tab3')}>
          Вкладка 3
        </button>
      </div>
      <div>
        {tab === 'tab1' && <p>Контент вкладки 1</p>}
        {tab === 'tab2' && <p>Контент вкладки 2</p>}
        {tab === 'tab3' && <p>Контент вкладки 3</p>}
      </div>
    </div>
  );
}
