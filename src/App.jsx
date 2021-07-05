import { useState } from 'react';
import './styles.css';

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(['aaaaa', 'bbbbb']);
  const [completeTodos, setCompleteTodos] = useState(['cccc', 'dddd']);

  return (
    <>
      <h1 className="main-title">TODO LIST</h1>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <div>
                  <span>{todo}</span>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <h2 className="title">完了のTODO</h2>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <div>
                  <span>{todo}</span>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
