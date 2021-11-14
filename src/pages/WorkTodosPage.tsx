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
      <div style={{ margin: "6rem 0" }}>
        <h1>Work Todos Page Works! {todos.length}</h1>
        {todos.map((t) => (
          <S.ItemWrapper key={t.id}>
            <div>
              {t.completed ? (
                <S.IconWrapper>
                  <CheckIcon onClick={() => {}} />
                </S.IconWrapper>
              ) : (
                <S.IconWrapper>
                  <CircleIcon onClick={() => {}} />
                </S.IconWrapper>
              )}
            </div>
            <S.ItemName done={t.completed} onClick={() => {}}>
              {t.title}
            </S.ItemName>
          </S.ItemWrapper>
        ))}
      </div>
      <h3>{loading ? "Loading..." : "You have " + todos.length + " todos"}</h3>
    </MainLayout>
  );
};

export default WorkTodosPage;
