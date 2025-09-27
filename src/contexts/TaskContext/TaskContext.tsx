import type { TaskStateModel } from "../../models/TaskStateModel";
import { createContext } from "react";
import { initialTaskState } from "./InitialTaskState";


type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue ={ state: initialTaskState, setState: () => {}
};


export const TaskContext = createContext<TaskContextProps>(initialContextValue);