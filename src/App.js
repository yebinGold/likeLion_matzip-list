//import logo from './logo.svg';
import { MainContainer } from "./styledComponents";
import Header from "./components/Header";
import Categories from "./components/Categories";
import MatzipList from "./components/MatzipList";
import { Routes, Route } from "react-router-dom";
import MyList from "./components/MyList";
import { useState } from "react";

const dark = {
  id: 'dark',
  textColor: "whitesmoke",
  backgroundColor: "#212529",
};
const light = {
  id: 'light',
  textColor: "#212529",
  backgroundColor: "whitesmoke",
};

function App() {
  // 다크 / 라이트 테마
  const [theme, setTheme] = useState(dark);
  const toggleTheme = () => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };

  // todos 배열 state
  const [todos, setTodos] = useState([]);

  // onAdd 배열에 항목 추가하는 함수 - newElem 객체 가져다가 todos 업데이트 -> newElem 초기화
  const onAdd = (newElem) => {
    if (todos.findIndex((todo) => todo.name === newElem) !== -1) {
      alert("이미 추가한 맛집입니다!");
      return;
    }
    const newTodo = {
      name: newElem,
      checked: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    alert("추가되었습니다!");
  };
  // onRemove 제거할 항목 이름 받아와서 삭제하는 함수 (filter)
  const onRemove = (name) => {
    const remainTodos = todos.filter((todo) => todo.name !== name);
    setTodos(remainTodos);
    alert("삭제되었습니다!");
  };
  // onToggle checked 상태 토글 함수
  const onToggle = (name) => {
    const idx = todos.findIndex((todo) => todo.name === name);
    const selected = todos[idx]; // 선택된 객체

    const nextTodos = [...todos]; // 배열 복사
    nextTodos[idx] = {
      ...selected, // 상태 복사
      checked: !selected.checked, // 체크 상태만 토글
    };

    setTodos(nextTodos); // 상태 업데이트
  };

  return (
    <MainContainer theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Categories />
      <Routes>
        <Route path="/" element={<MatzipList onAdd={onAdd} />} />
        <Route
          path="/mypage"
          element={
            <MyList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          }
        />
        <Route path="/:category" element={<MatzipList onAdd={onAdd} />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
