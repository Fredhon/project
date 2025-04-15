import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    // Здесь можно добавить логику для аналитики
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">NIZHNIY SHIELD</h1>
          <h2 className="hero-subtitle">Комплексная безопасность вашего бизнеса</h2>
          
          <div className="hero-description">
            <p>Профессиональное охранное предприятие с 15-летним опытом работы на рынке безопасности.</p>
            <p>Мы предоставляем полный спектр охранных услуг: от физической защиты объектов до кибербезопасности и консалтинга.</p>
          </div>

          <div className="hero-features">
            <ul>
              <li>✓ Лицензированная деятельность</li>
              <li>✓ Опытные специалисты</li>
              <li>✓ Современные технологии</li>
            </ul>
          </div>

          <button 
            className="cta-button"
            onClick={handleOpenModal}
            aria-label="Получить консультацию по услугам охраны"
          >
            Получить консультацию
          </button>

          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3>Оставьте заявку</h3>
                <form>
                  <input type="text" placeholder="Ваше имя" required />
                  <input type="tel" placeholder="Телефон" required />
                  <textarea placeholder="Ваш вопрос"></textarea>
                  <button type="submit">Отправить</button>
                </form>
                <button 
                  className="modal-close"
                  onClick={() => setIsModalOpen(false)}
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;