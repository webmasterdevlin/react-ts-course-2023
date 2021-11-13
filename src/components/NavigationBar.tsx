import { useNavigate } from "react-router";
import { pathNames } from "../LazyRoutes";

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(pathNames.work)}>WORK TODOS</button>
      <button onClick={() => navigate(pathNames.shoppingList)}>
        SHOPPING LIST
      </button>
      <button onClick={() => navigate(pathNames.auth)}>LOGIN</button>
    </div>
  );
};

export default NavigationBar;
