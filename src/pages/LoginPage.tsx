import MainLayout from '../views/MainLayout';

const LoginPage = () => {
  return (
    <MainLayout>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>
      <h2>Login Page Works!</h2>
    </MainLayout>
  );
};

export default LoginPage;
