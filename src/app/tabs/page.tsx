'use client'

import {useState} from 'react';
import Button from '@/components/Button/Button'

const TabsPage = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div>
            <h1>Вкладки</h1>
            <div>
                <button onClick={() => setActiveTab('tab1')}>Вкладка 1</button>
                <button onClick={() => setActiveTab('tab2')}>Вкладка 2</button>
                <button onClick={() => setActiveTab('tab3')}>Вкладка 3</button>
            </div>
            <div>
                {activeTab === 'tab1' && <p>Контент вкладки 1</p>}
                {activeTab === 'tab2' && <p>Контент вкладки 2</p>}
                {activeTab === 'tab3' && <p>Контент вкладки 3</p>}
            </div>
            <Button></Button>
        </div>
    );
};

export default TabsPage;