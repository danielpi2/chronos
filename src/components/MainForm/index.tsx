import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
    
export function MainForm() {
    return (
            <form action="" className="form">
                <div className="formRow">
                    <DefaultInput labelText='Qualquer coisa' id='meuInput' type='text' placeholder='Digite algo...' />
                </div>
                <div className="formRow">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="formRow">
                    <Cycles />
                </div>
                <div className="formRow">
                    <DefaultButton icon={<PlayCircleIcon />} color='blue' />
                </div>
            </form>
    );
}