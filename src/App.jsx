
import './App.css'
import addButton from './assets/add.png';
import { useState } from 'react'
import trashIcon from './assets/trash.png';
import editIcon from './assets/edit.png';

function App() {
  //Criamos o gerenciador de estado, novaTarefa guarda o texto, setNovaTarefa atualiza o texto
  //O useState é um texto vazio (""), pois o campo começa em branco
  const [novaTarefa, setNovaTarefa] = useState('')
  //nesse caso o useState é uma lista vazia
  const [tarefas, setTarefas] = useState([])
  //variável para controlar a prioridade com o gerenciador de estado
  const [prioridadeSelecionada, setPrioridade] = useState('Baixa')
  //variável para guardar a edição
  const [tarefaEmEdicao, setTarefaEmEdicao] = useState(null)

  function adicionarTarefa() {
    if (tarefaEmEdicao) {
      // MODO EDIÇÃO ✏️
      const tarefasEditadas = tarefas.map((tarefaAtual) => {
        if (tarefaAtual.id === tarefaEmEdicao.id) {
          return {
            id: tarefaAtual.id,
            nome: novaTarefa,
            prioridade: prioridadeSelecionada,
            concluida: tarefaAtual.concluida
          };
        }
        return tarefaAtual;
      });
      
      setTarefas(tarefasEditadas); // Atualiza a lista oficial do React! 🔄
      
    } else {
      // MODO CRIAÇÃO ➕
      const novaFichaDeTarefa = {
        id: Date.now(),
        nome: novaTarefa,
        prioridade: prioridadeSelecionada,
        concluida: false
      }
      setTarefas([...tarefas, novaFichaDeTarefa])
    }

    // LIMPEZA 🧹 (Roda no final dos dois modos para zerar os campos)
    setNovaTarefa('')
    setPrioridade('Baixa')
    setTarefaEmEdicao(null)
  }

    function deletarTarefa(tarefaParaRemover) {
      const tarefasFiltradas = tarefas.filter((tarefaAtual) => tarefaAtual !== tarefaParaRemover)
      setTarefas(tarefasFiltradas)
    }

    function alternarConclusao(tarefaClicada) {
      const novasTarefa = tarefas.map((tarefaAtual) => {
        if (tarefaAtual.id === tarefaClicada.id) {
          return {
            id: tarefaAtual.id,
            nome: tarefaAtual.nome,
            prioridade: tarefaAtual.prioridade,
            concluida: !tarefaAtual.concluida
          };
        } else {
          return tarefaAtual
        }
      });
      setTarefas(novasTarefa)

    }

    function definirCorDaTag(nivelPrioridade) {
      if (nivelPrioridade === 'Alta') return 'tag-alta';
      if (nivelPrioridade === 'Média') return 'tag-media';
      return 'tag-baixa';
    }

    function iniciarEdicao(tarefaClicada) {
      setTarefaEmEdicao(tarefaClicada)// Guarda a tarefa inteira na memória
      setNovaTarefa(tarefaClicada.nome)// Coloca o texto da tarefa no input
      setPrioridade(tarefaClicada.prioridade)// Muda o select para a prioridade correta

    }

    return (
      <div className='cardPrincipal'>
        <h1>To-do-List</h1>
        {/*A função setNovaTarefa é quem avisa o react que o usuario digitou algo, 
      logo após o react usa a variavel novaTarefa para redesenhar a tela para mostrar essa mudança */}
        <div className='addTask
      '><input className='input-tarefa' type="text" placeholder='Adicione uma nova tarefa...'
            value={novaTarefa}
            onChange={(evento) => setNovaTarefa(evento.target.value)} />
          <select value={prioridadeSelecionada} onChange={(evento) => setPrioridade(evento.target.value)}>
            <option value="Baixa ">🟢Baixa</option>
            <option value="Média ">🟡Média</option>
            <option value="Alta ">🔴Alta</option>
          </select>
          <button className='botao-add' onClick={adicionarTarefa}> <img src={addButton} alt="" /></button>
        </div>
        <ul>
          {/* O .map funciona como uma linha de montagem: ele percorre a nossa lista 'tarefas', pega cada texto 
        (chamado aqui de 'tarefa') e o devolve (return) transformado em uma tag HTML <li> */}
          {tarefas.map((tarefa) => {
            return (

              <li>
                <div className='conteudoLista'>
                  <input className='checkbox' type='checkbox' checked={tarefa.concluida} onChange={() => alternarConclusao(tarefa)} />

                  {/*Caixinha de seleção*/}

                  {/*Texto da Tarefa*/}
                  <span  className={tarefa.concluida ? 'tarefa-riscada' : ''}>{tarefa.nome}</span>



                </div>
                <div className='deleteOrComplete'>
                  {/*Prioridade da Task*/}
                  <span className={`tag-prioridade ${definirCorDaTag(tarefa.prioridade)}`}></span>
                  <button className='editar' onClick={() => iniciarEdicao(tarefa)}> <img className='botaoEditar' src={editIcon} alt='' /></button>
                  <button className='deletar' onClick={() => deletarTarefa(tarefa)}><img className='botaoExcluir' src={trashIcon} alt='' /></button>
                </div>

              </li>
            )

          }
          )}
        </ul>
      </div>
    )
  }


  export default App
