import ShoppingListPage from "../../pages/ShoppingListPage";
import WorkTodosPage from "../../pages/WorkTodosPage";
import { render, screen } from "../../test-utils/testing-library-util";
import userEvent from "@testing-library/user-event";

describe("Should navigate properly", () => {
  it("should show navigation bar", async () => {
    render(<ShoppingListPage />);

    const navigation = screen.getByTestId("navigation");
    expect(navigation).toBeInTheDocument();
  });

  it("should have active", async () => {
    render(<WorkTodosPage />);

    const navigation = screen.getByTestId("work-button");
    expect(navigation).toHaveStyle({ backgroundColor: "#342e68" });
  });

  it("should have active", async () => {
    render(<WorkTodosPage />);

    const workButton = screen.getByTestId("work-button");
    expect(workButton).toHaveStyle({ backgroundColor: "#342e68" });

    const shopButton = screen.getByTestId("shop-button");
    userEvent.click(shopButton);

    expect(workButton).toHaveStyle({ backgroundColor: "#4050b5" });
    expect(shopButton).toHaveStyle({ backgroundColor: "#342e68" });
  });
});
