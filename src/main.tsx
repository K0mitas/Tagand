import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { init, miniApp, mainButton, shareURL } from '@telegram-apps/sdk';
import { loadScore } from './Components/firebase';


const initializeTelegramSDK = async () => {
  try {
    await init();

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      console.log('Mini App готово');
    }

    const launchParams = (miniApp as any).getLaunchParams();
    
    console.log('Параметры запуска:', launchParams);

    const userId = launchParams?.user?.id?.toString();
    if (!userId) {
      console.error('Не удалось получить ID пользователя');
      return;
    }

    // Загружаем очки из Firebase
    const score = await loadScore(userId);
    console.log('Загруженные очки:', score);

    // Устанавливаем цвет заголовка
    miniApp.setHeaderColor('#531919');

    // Настройка главной кнопки
    if (mainButton.setParams.isAvailable()) {
      mainButton.setParams({
        backgroundColor: '#aa1388',
        isEnabled: true,
        isVisible: true,
        text: 'Поделиться очками',
        textColor: '#000000',
      });
      console.log('Свойства главной кнопки настроены');
    }

    // Добавляем слушатель клика на кнопку
    if (mainButton.onClick.isAvailable()) {
      mainButton.onClick(async () => {
        try {
          const score = await loadScore(userId);
          shareURL(`Посмотрите! У меня ${score} очков в игре!`);
          console.log('Окно выбора чата открыто для отправки сообщения.');
        } catch (error) {
          console.error('Ошибка при открытии окна выбора чата:', error);
        }
      });
    }
  } catch (error) {
    console.error('Ошибка инициализации:', error);
  }
};

initializeTelegramSDK();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
