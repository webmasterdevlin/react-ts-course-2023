// Formik with Yup validation

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

type Props = {
  save: (values: any) => void;
};

const FormSubmission = ({ save }: Props) => {
  return (
    <Formik
      initialValues={{ id: '', title: '', completed: false }}
      validationSchema={yup.object({
        title: yup.string().label('Title').min(2).required(),
      })}
      onSubmit={(values, actions) => {
        save(values);
        actions.resetForm();
      }}
    >
      {formikProps => {
        return (
          <section>
            <ErrorMessage name="title" />
            <Form>
              <Field label="title" id="title" type="text" name="title" data-testid={'todo-input'} />
              <div className={'flex justify-center space-x-2'}>
                <button
                  className={'btn btn--primary'}
                  disabled={!formikProps.dirty || !!formikProps.errors.title}
                  type="submit"
                  data-testid={'save-todo'}
                >
                  + ADD
                </button>
              </div>
            </Form>
          </section>
        );
      }}
    </Formik>
  );
};

export default FormSubmission;
