import { useEffect } from "react";
import MainLayout from "../views/MainLayout";

const WorkTodosPage = () => {
  useEffect(() => {
    fetch("/api/todos");
  }, []);

  return (
    <MainLayout>
      <h1>Work Todos Page Works!</h1>
    </MainLayout>
  );
};

export default WorkTodosPage;
