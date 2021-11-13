import { useLocation, useNavigate } from "react-router";
import { pathNames } from "../LazyRoutes";
import * as S from "./NavigationBar.style";

const NavigationBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div data-testid="navigation">
      <S.NavButton
        data-testid="work-button"
        active={pathNames.work === pathname}
        onClick={() => navigate(pathNames.work)}
      >
        WORK TODOS
      </S.NavButton>
      <S.NavButton
        data-testid="shop-button"
        active={pathNames.shoppingList === pathname}
        onClick={() => navigate(pathNames.shoppingList)}
      >
        SHOPPING LIST
      </S.NavButton>
      <S.NavButton
        active={pathNames.auth === pathname}
        onClick={() => navigate(pathNames.auth)}
      >
        LOGIN
      </S.NavButton>
    </div>
  );
};

export default NavigationBar;
