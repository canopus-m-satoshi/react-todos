import './styles.css';

export const App = () => {
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
          <li className="list-row">
            <div>
              <span>aaaaa</span>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li className="list-row">
            <div>
              <span>bbbb</span>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <h2 className="title">完了のTODO</h2>
        <ul>
          <li className="list-row">
            <div>
              <span>cccc</span>
              <button>戻す</button>
            </div>
          </li>
          <li className="list-row">
            <div>
              <span>dddd</span>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
