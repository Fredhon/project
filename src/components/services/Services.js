import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Кибербезопасность', description: 'Защита от цифровых угроз' },
    { title: 'Физическая охрана', description: 'Обеспечение безопасности объектов' },
    { title: 'Консалтинг', description: 'Экспертные рекомендации' }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Наши услуги</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;