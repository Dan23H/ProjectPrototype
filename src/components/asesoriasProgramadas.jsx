import React from 'react';
import CalendarioAsesorias from './calendarioAsesorias';
import '../../styles/asesorias.css'

export const eventos = [
  {
    id: 1,
    title: 'Asesoría de Matemáticas',
    start: new Date(2023, 4, 15, 10, 0),
    end: new Date(2023, 4, 15, 11, 0),
  },
  {
    id: 2,
    title: 'Asesoría de Física',
    start: new Date(2023, 4, 16, 14, 0),
    end: new Date(2023, 4, 16, 15, 0),
  },
  {
    id: 3,
    title: 'Asesoría de Química',
    start: new Date(2023, 4, 18, 16, 0),
    end: new Date(2023, 4, 18, 17, 0),
  },
];

export const AsesoriasProgramadas = () => {
  return (
    <div>
      <h2 className='red-label' style={{paddingTop:'1%', paddingBottom:'1%'}}>Asesorías programadas</h2>
      <CalendarioAsesorias  eventos={eventos} />
    </div>
  );
};

