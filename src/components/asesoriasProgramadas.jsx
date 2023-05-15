import React, { useContext } from 'react';
import CalendarioAsesorias from './calendarioAsesorias';
import '../../styles/asesorias.css'
import { eventos } from '../assets/fakedata';
import { agendaContext } from '../context/agendaContext';


export const AsesoriasProgramadas = () => {
  const {info} = useContext(agendaContext)
  return (
    <div>
      <h2 className='red-label' style={{paddingTop:'1%', paddingBottom:'1%'}}>Asesorías programadas</h2>
      <CalendarioAsesorias eventos={info} />
    </div>
  );
};

