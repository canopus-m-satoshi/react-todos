export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div className="complete-area">
      <h2 className="title">完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <div>
                <span>{todo}</span>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
