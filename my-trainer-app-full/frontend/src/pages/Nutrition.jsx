import React, { useEffect, useState } from 'react';
import api from '../utils/api.js';

export default function Nutrition(){
  const [plans, setPlans] = useState([]);
  useEffect(()=>{
    api.get('/nutrition/student/2').then(r=> setPlans(r.data)).catch(()=>{});
  },[]);
  return (
    <div>
      <h2 style={{fontSize:20}}>Nutrición</h2>
      {plans.length === 0 && <div style={{marginTop:12}}>No hay planes aún (demo)</div>}
      {plans.map(p=> (
        <div key={p.id} style={{padding:12, background:'white', borderRadius:10, marginTop:8}}>
          <div style={{fontWeight:700}}>{p.title}</div>
          <div style={{fontSize:13, color:'#6b7280'}}>{new Date(p.createdAt).toLocaleDateString()}</div>
        </div>
      ))}
    </div>
  );
}
