import { useEffect, useState } from 'react';
import { Check as CheckIcon, Circle as CircleIcon } from 'react-feather';

import { EndPoints } from '../api/axiosConfig';
import { deleteAxios, getAxios, postAxios, putAxios } from '../api/genericApiCalls';
import Button from '../components/Button';
import FormSubmission from '../components/FormSubmissionV2';
import useBudget from '../custom-hooks/useBudget';
import MainLayout from '../views/MainLayout';
import type { Todo } from '../models/todoType';

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
      const filteredTodos = todos.filter(t => {
        return t.id !== id;
      });

      // update the UI
      setTodos(filteredTodos);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const updateWorkTodoAsync = async (todo: Todo) => {
    try {
      todo.completed = !todo.completed;
      await putAxios<void, Todo>(EndPoints.todos, todo.id, todo);
      // update the UI after sending the request to the server
      const updatedTodos = [...todos];
      setTodos(updatedTodos);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const { data } = await postAxios<Todo>(EndPoints.todos, values);
      const newTodos = [...todos, data];
      setTodos(newTodos);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <MainLayout>
      <h2>
        Budget for the day: $<span>{randomValues}</span>
      </h2>
      <button className="btn btn--secondary" type={'button'} onClick={createRandomBudget}>
        GET RANDOM
      </button>

      <FormSubmission save={handleSubmit} />
      <section className={'mb-10'}>
        {todos.map(t => {
          return (
            <div key={t.id} className={'mb-3 flex flex-row items-center justify-start'} data-testid={'todo-item'}>
              <div className={'mr-2'}>
                {t.completed ? (
                  <CheckIcon
                    onClick={async () => {
                      return await updateWorkTodoAsync(t);
                    }}
                  />
                ) : (
                  <div>
                    <CircleIcon
                      onClick={async () => {
                        return await updateWorkTodoAsync(t);
                      }}
                    />
                  </div>
                )}
              </div>
              <Button
                style={{ color: t.completed ? 'blue' : 'red' }}
                onClick={async () => {
                  // delete if todo id done or completed
                  if (t.completed) await deleteWorkTodoAsync(t.id);
                }}
                data-testid={'delete-button'}
              >
                {t.title}
              </Button>
            </div>
          );
        })}
      </section>
      <h3>{loading ? 'Loading...' : 'You have ' + todos.length + ' todos'}</h3>
    </MainLayout>
  );
};

export default WorkTodosPage;
