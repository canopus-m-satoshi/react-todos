export const IncompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <h2 className="title">未完了のTODO</h2>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <div>
                <span>{todo}</span>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
