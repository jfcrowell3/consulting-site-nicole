import React from 'react';
import { processData } from './ProcessData';
import './Process.css';

const Process = () => {
  const process = processData.map((item) => {
    return (
      <div className='card-container' id='the-process'>
        <div className='card-wrapper'>
          <div className='card'>
            <div className='card-items'>
              <div className='card-item'>
                <div className='img-wrapper'>
                  <img src={item.url} alt={item.title} />
                </div>
                <h2>{item.title}</h2>
                <ul>
                  {item.steps.map((step) => {
                    return <li key={step.key}>{step.step}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className='process-section'>
        <h1>The Process</h1>
      <div className='process'>{process}</div>
    </section>
  );
};

export default Process;
