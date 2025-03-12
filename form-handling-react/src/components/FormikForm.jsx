import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
});

const FormikForm = () => {
    return (
        <Formik
            initialValues={{ username: '', email: '', password: '' }} 
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form>
                <Field type="name" name="name" />
                <ErrorMessage name="name" component="div" />

                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />

                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default FormikForm;