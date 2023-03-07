import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";

const FormLib = () => {
    const formik = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validationSchema: Yup.object({
          // name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string()
            .max(20, 'Must be 20 characters or less').min(7, "Too short")
            .required('Required').min(7, 'Too short'),
      }),
      onSubmit: values => {
        console.log(values); // Here play with Values
      },
      
    });
    
    const registerFormik =  useFormik({
      initialValues: {
        name: '',
        email: '',
        password: ''
      },
      validationSchema: Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string()
            .max(20, 'Must be 20 characters or less').min(7, "Too short")
            .required('Required').min(7, 'Too short'),
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2)); // Here play with Values
      },
    });

      return (
      <>
      <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <label htmlFor='password'>Password</label>
          <input name='password' type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            />

          {formik.touched.password && formik.errors.password &&
            <div>{formik.errors.password}</div>
          }

          <button type="submit">Submit</button>
        </form>
        
          <br />
        <h1>Register</h1>
          <form onSubmit={registerFormik.handleSubmit}>

          <label htmlFor='name'>name</label>
          <input name='name' type="name"
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.name}
            />

          {registerFormik.touched.name && registerFormik.errors.name &&
            <div>{registerFormik.errors.name}</div>
          }

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.email}
          />
          {registerFormik.touched.email && registerFormik.errors.email ? (
            <div>{registerFormik.errors.email}</div>
          ) : null}

          <label htmlFor='password'>Password</label>
          <input name='password' type="password"
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.password}
            />

          {registerFormik.touched.password && registerFormik.errors.password &&
            <div>{registerFormik.errors.password}</div>
          }

          <button type="submit">Submit</button>
        </form>
      </>
      );
}

export default FormLib
