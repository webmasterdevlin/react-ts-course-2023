import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils/testing-library-util";
import WorkTodosPage from "../WorkTodosPage";

describe("Work Todos page", () => {
  it("should render todo list", async () => {
    render(<WorkTodosPage />);

    const todos = await screen.findAllByTestId(/todo-item/i);
    expect(todos).toHaveLength(2);
  });
});
