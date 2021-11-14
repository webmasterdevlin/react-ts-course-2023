import { useEffect, useState } from "react";
import { Check as CheckIcon, Circle as CircleIcon } from "react-feather";

import { EndPoints } from "../api/axiosConfig";
import { getAxios } from "../api/genericApiCalls";
import { Todo } from "../models/todoType";
import MainLayout from "../views/MainLayout";
import * as S from "./Pages.style";

const WorkTodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTodosAsync();
  }, []);

  const getTodosAsync = async () => {
    setLoading(true);
    try {
      const { data } = await getAxios<Todo[]>(EndPoints.todos);
      setTodos(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <MainLayout>
      <h1>Work Todos Page Works! {todos.length}</h1>
      {todos.map((t) => (
        <S.IconWrapper key={t.id}>
          <div>{t.title}</div>
        </S.IconWrapper>
      ))}
    </MainLayout>
  );
};

export default WorkTodosPage;
