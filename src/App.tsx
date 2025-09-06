import TodoList from './TodoList.tsx';
import useGetInfo from './hooks/useGetInfo.ts';
import useMousePosition from './hooks/useMousePosition.ts';
import { useTitle } from './hooks/useTitle.ts';

function App() {
  const position: { x: number; y: number } = useMousePosition();
  const { loading, info } = useGetInfo();
  useTitle('自定义 hooks');
  return (
    <>
      <p>自定义 hooks</p>
      <p>position: {`x: ${position.x}, y: ${position.y}`}</p>
      <p>{loading ? '加载中...' : info}</p>
      <TodoList />
    </>
  );
}

export default App;
