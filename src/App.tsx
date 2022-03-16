import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { Npc, ImportantNpc } from './components/Npc';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter('Player');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
        break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
        break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
        break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
        break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} />

        {/* Npcs */}
        <ImportantNpc x={1} y={2} side={'down'} name={'Hirel'}/>
        <ImportantNpc x={5} y={6} side={'right'} name={'Arey'}/>
        <ImportantNpc x={14} y={2} side={'down'} name={'Zeke'}/>
        <ImportantNpc x={0} y={14} side={'right'} name={'Jack'}/>
        <ImportantNpc x={1} y={14} side={'left'} name={'Mai'}/>

        {/* Guards */}
        <Npc x={5} y={13} side={'down'} name={'Guard'}/>
        <Npc x={10} y={13} side={'down'} name={'Guard'}/>
      </C.Map>
    </C.Container>
  )
}

export default App;