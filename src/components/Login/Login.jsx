import {Form, Field} from "react-final-form";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/authSlice";
import {Navigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();

    const isLogged = useSelector(state => state.auth.isLogged)
    const id = useSelector(state => state.auth.id)
    if (isLogged) {
        return <Navigate to={"/profile/" + id}/>
    }

    const onSubmit = (values) => {
        dispatch(login(values.email, values.password, values.rememberMe))
    }

    return (
        <div>
            {!isLogged
                ? <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '50px 0 0 50px'
                }}>
                    <h1>Login</h1>
                    <Form onSubmit={onSubmit}
                          render={({handleSubmit, form, submitting, pristine, values}) => (
                              <form onSubmit={handleSubmit}>
                                  <Field name={"email"}>
                                      {({input, meta}) => (
                                          <div>
                                              <label>Email</label>
                                              <input {...input} type={"email"} placeholder={"email@gmail.com"}/>
                                              {meta.error && meta.touched && <span>{meta.error}</span>}
                                          </div>
                                      )}
                                  </Field>
                                  <Field name={"password"}>
                                      {({input, meta}) => (
                                          <div>
                                              <label>Password</label>
                                              <input {...input} type={"password"} placeholder={""}/>
                                              {meta.error && meta.touched && <span>{meta.error}</span>}
                                          </div>
                                      )}
                                  </Field>
                                  <Field name={"rememberMe"} type="checkbox">
                                      {({input, meta}) => (
                                          <div>
                                              <label>Remember me</label>
                                              <input {...input} type="checkbox"/>
                                          </div>
                                      )}
                                  </Field>
                                  <button type={"submit"}> Submit</button>
                              </form>)}
                    />
                </div>
                : <div> Loading... </div>}
        </div>
    )
}

export default Login;