
import "./LoginForm.style.css";

function LoginForm() {



  return (
    <div class="Auth">
      <form>
        <div className="Input">
          <label className="Label"></label>
          <input
            type="email"
            className="InputElement"
            placeholder="E-mail Address"
            //value=""
          />
        </div>
        <div className="Input">
          <label className="Label"></label>
          <input
            type="password"
            className="InputElement"
            placeholder="Password"
            //value=""
          />
        </div>
        <button className="Button Success">SUBMIT</button>
        <div>
          <button class="Button Danger">SIGNIN</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
