import AuthHeader from "../components/headers/AuthHeader";
import AuthInput from "../components/inputs/AuthInput";
import { useNavigate } from "react-router-dom";
import authServices from "../services/authServices";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const { login } = authServices();
  return (
    <section className="login auth">
      <form
        action="post"
        className="form-container"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => login(e)}
      >
        <AuthHeader title="Se connecter" />
        <AuthInput
          label="Email"
          name="email"
          placeholder="example@gmail.com"
          type="email"
        />
        <AuthInput
          label="Mot de passe"
          name="password"
          placeholder="••••••••••"
          type="password"
        />
        <div className="options">
          <div className="save">
            <input type="checkbox" name="" id="" /> Se souvenir de moi
          </div>
          <p className="forgot-password">Mot de passe oublié</p>
        </div>
        <div className="button">
          <button className="btn" type="submit">
            Se connecter
          </button>
        </div>
        <p className="signup-link">
          Nouveau ici?
          <span onClick={() => navigate("/signup")}> Créer un compte</span>
        </p>
      </form>
    </section>
  );
};

export default Login;
