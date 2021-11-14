import { useCallback, useEffect, useState } from "react";
import { Check as CheckIcon, Circle as CircleIcon } from "react-feather";

import { EndPoints } from "../api/axiosConfig";
import { deleteAxios, getAxios } from "../api/genericApiCalls";
import { Todo } from "../models/todoType";
import MainLayout from "../views/MainLayout";
import * as S from "./Pages.style";
import useBudget from "../hooks/useBudget";

const WorkTodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  const { randomValues, createRandomBudget } = useBudget();

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

  const deleteWorkTodoAsync = async (id: string) => {
    setLoading(true);
    try {
      await deleteAxios(EndPoints.todos, id);
      // remove the selected item from the todos
      const filteredTodos = todos.filter((t) => t.id !== id);

      // update the UI
      setTodos(filteredTodos);
    } catch (e) {}
    setLoading(false);
  };

  return (
    <MainLayout>
      <div style={{ margin: "6rem 0" }}>
        <h2>
          Budget for the day: $<span>{randomValues}</span>
        </h2>
        <S.Button
          backgroundColor={"dodgerblue"}
          type={"button"}
          onClick={createRandomBudget}
        >
          GET RANDOM
        </S.Button>
        {todos.map((t) => {
          console.log(t.id);

          return (
            <S.ItemWrapper key={t.id} data-testid="todo-item">
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
              <S.ItemName
                done={t.completed}
                onClick={async () => {
                  // delete if todo id done or completed
                  if (t.completed) await deleteWorkTodoAsync(t.id);
                }}
              >
                {t.title}
              </S.ItemName>
            </S.ItemWrapper>
          );
        })}
      </div>
      <h3>{loading ? "Loading..." : "You have " + todos.length + " todos"}</h3>
    </MainLayout>
  );
};

export default WorkTodosPage;
