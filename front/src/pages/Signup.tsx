import AuthHeader from "../components/headers/AuthHeader";
import AuthInput from "../components/inputs/AuthInput";
import authServices from "../services/authServices";

const Signup = () => {
  const { signup } = authServices();
  return (
    <section className="login auth">
      <form
        action="post"
        className="form-container"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => signup(e)}
      >
        <AuthHeader title="Créer un compte" />
        <AuthInput
          label="Nom"
          name="fullname"
          placeholder="Votre nom"
          type="text"
        />
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
        <div className="button">
          <button className="btn" type="submit">
            S 'inscrire
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
