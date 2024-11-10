import Togglable  from "./Togglable"
import PropTypes from 'prop-types'


export const LoginForm = ({ handleLogin,username,  onChangeUsername,password, onChangePassword }) => {


  return (
<>
<div>
  {/* <Togglable buttonLabel='Show Login' > */}
    <form  onSubmit={handleLogin}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          data-testid='username'
          value={username}
          name="username"
          onChange={onChangeUsername}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          data-testid='password'
          type="password"
          value={password}
          name="password"
          onChange={onChangePassword}
        />
      </div>
      <button id="form-login-button">Login</button>
    </form>
    {/* </Togglable> */}
    
    </div>

    </>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

