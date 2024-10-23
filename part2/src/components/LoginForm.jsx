import { Togglable } from "./Togglable"

export const LoginForm = ({ handleLogin, username, onChangeUsername, password, onChangePassword, buttonLabel }) => {


  



  return (
<>
<div>
  <Togglable buttonLabel='Show Login'>
    <form onSubmit={handleLogin}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          name="username"
          onChange={onChangeUsername}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChangePassword}
        />
      </div>
      <button type="submit">Login</button>
    </form>
    </Togglable>
    
    </div>

    </>
  )
}

