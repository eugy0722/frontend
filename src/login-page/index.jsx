import { Field, Form, Formik } from "formik";

const handleSubmitLogin = (values) =>
  console.log(JSON.stringify(values, null, 2));

function LoginPage() {
  return (
    <div className="parent">
      <div className="child">
        <h1>LOGIN</h1>
        <div className="grandchild">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmitLogin}
          >
            <Form>
              <Field type="email" name="email" placeholder="Email" />
              <Field type="password" name="password" placeholder="Password" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
