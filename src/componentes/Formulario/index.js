import CampoTexto from '../CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'


const Formulario = (props) => {

  const times = [ 
          'Masculino',
    'Feminino'
  ]

  const [nome, setNome] = useState (' ')
  const [pais, setPais] = useState (' ')
  const [imagem, setImagem] = useState (' ')
  const [categorias, setCategorias] = useState (' ')


  const aoSalvar = (evento) => {
    console.log(evento)
    evento.preventDefault ()
    props.aoNovoColaborador ({
      nome,
      pais,
      imagem,
      categorias
    })
    setNome('')
    setPais ('')
    setImagem ('')
    
  }


  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar seu surfista</h2>
        <CampoTexto 
        obrigatorio={true} 
        label="Nome" 
        placeholder="Digite o nome" 
        valor={nome}
        aoAlterado={valor => setNome(valor)}
        />

        
        <CampoTexto
         obrigatorio={true}
          label="Categoria" 
          placeholder="Digite a Categoria do Atleta"
          valor={categorias}
          aoAlterado={valor => setCategorias(valor)} 
          />

        <CampoTexto
         obrigatorio={true}
          label="País" 
          placeholder="Digite o Páis do Atleta"
          valor={pais}
          aoAlterado={valor => setPais(valor)} 
          />
        <CampoTexto 
        label="Imagem"
         placeholder="URL da imagem"
         valor={imagem}
         aoAlterado={valor => setImagem(valor)}
          />


        <ListaSuspensa 
        obrigatorio={true} 
        label='Categorias' itens={times}
        valor={categorias}
        aoAlterado={valor => setCategorias(valor)} 
        />

        <Botao> 
        Criar Card
        </Botao>
      </form>
    </section>

  )

}

export default Formulario