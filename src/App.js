import React from 'react';
import Hero from './components/Hero/hero';
import Section from './components/Section/section';
import Navbar from './components/Navbar/navbar';

function App() {
  return (    
    <div className='main'>
      <Navbar />
      <Hero title='Start a new journey' content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.'/>
      <div className='content-container'> 
        <Section title='Företag vi har jobbat med' 
        content='THRIVE, Iplay, Akademiska Hus, Filter
        Faktum' />
        <Section title='Samarbeten' 
        content='Hack-A-Horseathon på EuroHorse, Django Girls' />
        <Section title='Om oss' content='bla bl böafnskfn' />
      </div>
    </div>
  );
}

export default App;
