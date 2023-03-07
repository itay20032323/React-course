// import React from 'react'
// import { Formik, Field, ErrorMessage } from 'formik'
// import * as Yup from "yup";

// const RegisterAndLogin = () => {
    
//     const loginSchema = Yup.object().shape({
//         email: Yup.string().required("This is required Field").email("Please provide a valid email"),
//         password: Yup.string().required("Required").min(7, "The Password is too shrot").max(20, "The password is too long")       
//     })
//   return (
//     <div>
//       <h1>Login</h1>
//       <Formik
//         initialValues={{email: "", password: ""}}
//         validationSchema={loginSchema}
//         onSubmit={(values, {setSubmitting}) => {
//             console.log(values);
//             setSubmitting(false);
//         }}>

//         {({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             isSubmitting
//         }) => {
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email</label>
//                     <Field type="email" name="email" placeholder="Enter your email" value={values.email} onChange={handleChange} onBlur={handleBlur} />

//                 </div>
//             </form>
//         }}

//       </Formik>
//     </div>
//   )
// }

// export default RegisterAndLogin
