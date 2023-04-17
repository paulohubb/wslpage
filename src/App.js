import  styled  from "styled-components";
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import Global from './Styles/global';



function App() {

  const times = [
    { 
    nome: 'Masculino',
    corPrimaria: '#6278f7',
    corSecundaria: '#FFF'
  },
  {
    nome: 'Feminino',
    corPrimaria: '#ff3535',
    corSecundaria: '#f76262'
  }
]



  const [colaboradores, setColaboradores] = useState ( [] )

  const novoColaborador = (colaborador) => {
    console.log (colaborador)
    setColaboradores ([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Global />
      <Banner />
      <Formulario aoNovoColaborador ={colaborador => novoColaborador (colaborador)}/>

     {times.map(time => <Time 
      key={time.nome}
      nome={time.nome} 
      categorias={time.categorias}
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.categorias === time.nome)} 
      />
       )}
       <Rodape />
    </div>
  );
}

export default App;
