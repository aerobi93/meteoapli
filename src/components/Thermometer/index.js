import React from 'react';
import './styles.scss';

const Thermometer = ({ temperature }) => {
  let color = '';
  const graduations = [];
  
  const graduation = (temperature, i) => {
    if (temperature < 0) { color = 'blue'}
    else color = 'red';
    return (
      <div className="thermometer-div" key={i} id={i}>
        {i % 10 === 0 ? <div className="thermometer-number thermometer-number--right"> {i < 0 ? i * -1 : i } </div> : ''}
        {i % 10 === 0 ? <div className="thermometer-number thermometer-number--left">  {i < 0 ? i * -1 : i } </div> : ''}
        <div className={i % 5 === 0 ? ' thermometer-graduation--long thermometer-graduation--left' : 'thermometer-graduation--short thermometer-graduation--left'} />
        <div className={(temperature <= i && i <= -20) || (temperature >= i && i >= -20) ? `thermometer-color thermometer-color--${color}` : 'thermometer-color'} />
        <div className={i % 5 === 0 ? 'thermometer-graduation--long thermometer-graduation--right' : 'thermometer-graduation--short thermometer-graduation--right'} />
      </div>
    );
  }

  for (let i = 40; i >= -20; i --) {
    graduations.push(graduation(temperature, i));
  }

  return (
    <div className="thermometer">
      { graduations.map((thermometer) => (thermometer)) }
      <div className={temperature < 0 ? 'thermometer-longe thermometer-ball--blue' : 'thermometer-longe thermometer-ball--red'} />
      <div className={temperature < 0 ? 'thermometer-ball thermometer-ball--blue' : 'thermometer-ball thermometer-ball--red'} />
    </div>
  );
};

export default Thermometer;
