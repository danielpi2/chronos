import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import React, { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

//ciclos

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('DEU CERTO');

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      taskName: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle, // Conferir
        secondsRemaining, // Conferir
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), // Conferir
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <form action="" onSubmit={handleCreateNewTask} className="form">
        <div className="formRow">
            <DefaultInput labelText='Task' id='meuInput' type='text' placeholder='Digite algo...' ref={taskNameInput} disabled={!!state.activeTask} />
        </div>
        <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        {state.currentCycle > 0 && (
        <div className="formRow">
            <Cycles />
        </div>
        )}
        {!state.activeTask ? (
            <div className="formRow">
            <DefaultButton type='submit' icon={<PlayCircleIcon />} color='red' aria-label='Iniciar nova tarefa' title='Iniciar nova tarefa' />
        </div>) :(
          <DefaultButton type='button' icon={<StopCircleIcon />} color='red' aria-label='Interromper tarefa atual' title='Interromper tarefa atual' />
        ) }

    </form>
  );
}