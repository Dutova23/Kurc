import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate, Routes, Route } from 'react-router-dom';
import promoImg from '../../imgs/Figurs1.png';
import Zayvka from '../../pages/Zayvka';
import './home.css';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Zayvka');
  };

  return (
    <div className="scrollable-container">
      <Container>
        <div className="main-content">
          <h1>Охрана<br/>природы - это<br/> ты!</h1>
          <Button
            onClick={handleClick}
            style={{ backgroundColor: '#61FF68', color: '#fff', borderRadius: '32.5px', borderColor: '#000000'}}>
            Очистить природу
          </Button>
        </div>
        <img src={promoImg} width={600} alt="Promo" />
      </Container>
      <Container style={{ marginTop: '80px' }}>
        <div className="additional-content">
          <h2>Дополнительный контент</h2>
          <p>Здесь можете разместить ваш дополнительный контент, который будет отображаться ниже изображения и кнопки.</p>
        </div>
      </Container>
      <Routes>
        <Route path='/Zayvka' element={<Zayvka />} />
      </Routes>
    </div>
  );
}

export default Home;
