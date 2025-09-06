import { type FC, useEffect, useMemo, useRef, useState } from 'react';
import './asset/TodoList.css';

interface TodoProps {
  id: string;
  title: string;
  finished: boolean;
  handleDelete?: (id: string) => void;
  handlePublish?: (id: string) => void;
}

const TodoList: FC = () => {
  const [todos, setTodos] = useState([
    { id: '1', title: '学习 Java', finished: true },
    { id: '2', title: '学习 golang', finished: true },
    { id: '3', title: '学习 react', finished: false },
    { id: '4', title: 'react 实战', finished: false },
  ]);

  const [count, setCount] = useState(5);

  useEffect(() => {
    console.log('ajax request ...');
  }, [count]);

  const inputRef = useRef<HTMLInputElement>(null);

  const sum = useMemo(() => {
    console.log('useMemo hook 被执行了 ...');
    return count;
  }, [count, todos]);

  function handleAdd() {
    const inputElement: HTMLInputElement | null = inputRef.current;
    setTodos(
      todos.concat({
        id: `${count}`,
        title: inputElement !== null && inputElement.value ? inputElement.value : `任务${count}`,
        finished: false,
      }),
    );
    setCount(count + 1);
    if (inputElement) {
      inputElement.value = '';
    }
  }

  function handleDelete(id: string) {
    setTodos(
      todos.filter((q) => {
        return q.id !== id;
      }),
    );
  }

  function handlePublish(id: string) {
    setTodos(
      todos.map((q) => {
        return q.id === id ? { ...q, finished: !q.finished } : q;
      }),
    );
  }

  return (
    <>
      <h1>待办列表，数量：{sum - 1}</h1>
      <input
        ref={inputRef}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            // 阻止默认的表单提交行为（如果是在表单中）
            event.preventDefault();
            handleAdd();
          }
        }}
        placeholder="place enter todo"
      />
      <button onClick={handleAdd}>Insert</button>
      {todos.length === 0 && <h2>无待办</h2>}

      {todos.map((item) => (
        <TodoCard
          key={item.id}
          id={item.id}
          title={item.title}
          finished={item.finished}
          handleDelete={handleDelete}
          handlePublish={handlePublish}
        />
      ))}
    </>
  );
};

const TodoCard: FC<TodoProps> = ({ id, title, finished, handlePublish, handleDelete }) => {
  useEffect(() => {
    console.log(`todo card ${id} mounted ...`);
    return () => {
      console.log(`todo card ${id} unmounted ... `);
    };
  }, []);

  return (
    <div key={id} className="list-item">
      <input
        type="checkbox"
        checked={finished}
        onChange={() => {
          if (handlePublish) {
            handlePublish(id);
          }
        }}
      />
      {<span style={{ color: finished ? 'green' : 'black' }}> {title} </span>}
      <button
        onClick={() => {
          if (handlePublish) {
            handlePublish(id);
          }
        }}
      >
        {finished ? 'Cancel' : ' Finish'}
      </button>
      {!finished && (
        <button
          onClick={() => {
            if (handleDelete) {
              handleDelete(id);
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default TodoList;
