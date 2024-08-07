// // import the useFormik hook
// import { useFormik, Formik, Form } from "formik";
// import * as Yup from "yup";

// export default function UseFormikExample() {
//   // define the initial values and validation using useFormik
//   const formik = useFormik({
//     initialValues: {
//       radioGroup: ""
//     },
//     validationSchema: Yup.object({
//       radioGroup: Yup.string().required("Required")
//     }),
//     onSubmit: (values) => {
//       console.log(values);
//     }
//   });

//   return (
//     <div className="App">
//       <h3> useFormik() Example </h3>
//       {/* use a refular formik and form tag  */}
//       <Formik>
//         <Form onSubmit={formik.handleSubmit}>
//           {/* wrap your radio buttons in a fieldset tag
//         the validation will be working with the fieldset tag */}
//           <fieldset
//             id="radioGroup"
//             label="One of these please"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.radioGroup}
//             error={formik.errors.radioGroup}
//           >
            
//             {/* of course, add the id in fieldset as name in the input tags  */}
//             <input
//               type="radio"
//               name="radioGroup"
//               id="radioOption1"
//               label="Choose this option"
//               value="Male"
//             />
//             Male
//             <input
//               type="radio"
//               name="radioGroup"
//               id="radioOption2"
//               label="Or choose this one"
//               value="Female"
//             />
//             Female
//           </fieldset>
//           {/* Now render the errror when none is checked  */}
//           {formik.touched.radioGroup && formik.errors.radioGroup ? (
//               <div>{formik.errors.radioGroup}</div>
//             ) : null}
//           <button type="submit">Submit </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }