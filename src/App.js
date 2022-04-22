import style from './App.module.scss';

/** @type {IPost} */
const object = {
    a: 123,
};

console.log(object);

function App() {
  return (
    <div className="App">
        <div className={style.element1}>element 1</div>
        <div className={style.element1__2}>element 2</div>
    </div>
  );
}

export default App;
