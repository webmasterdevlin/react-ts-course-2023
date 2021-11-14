import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import * as S from "../pages/Pages.style";

type Props = {
  save: (values: any) => void;
};

const FormSubmission = ({ save }: Props) => {
  return (
    <Formik
      initialValues={{ id: "", title: "", completed: false }}
      validationSchema={yup.object({
        title: yup.string().label("Title").min(2).required(),
      })}
      onSubmit={(values, actions) => {
        save(values);
        actions.resetForm();
      }}
    >
      {(formikProps) => (
        <section>
          <ErrorMessage name="title" />
          <S.Form>
            <S.Field
              label="title"
              id="title"
              type="text"
              name="title"
              data-testid="todo-input"
            />
            <S.Button
              disabled={!formikProps.dirty || !!formikProps.errors.title}
              type="submit"
              data-testid="save-todo"
            >
              + ADD
            </S.Button>
          </S.Form>
        </section>
      )}
    </Formik>
  );
};

export default FormSubmission;
