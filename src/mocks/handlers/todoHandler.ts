import { rest } from "msw";
import { Todo } from "../../models/todoType";

const baseUrl = "http://localhost/api";

export const todosFixture: Todo[] = [
  {
    id: "32guigfejlagd",
    title: "delectus aut autem",
    completed: true,
  },
  {
    id: "7fguyfh",
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
];

export const todoHandler = [
  rest.get(`${baseUrl}/todos`, (req, res, ctx) => {
    return res(ctx.json(todosFixture));
  }),
];
