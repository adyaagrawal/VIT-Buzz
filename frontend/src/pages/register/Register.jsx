import "./register.css"

export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." required />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." required/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..."required />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">Login</button>
    </div>
    )
}
