import { IauthInput } from "../../utils/interfaces";

const AuthInput = ({
  label,
  name,
  placeholder,
  type,
}: IauthInput): JSX.Element => {
  return (
    <div className="auth-input">
      <label htmlFor="auth-input">{label}</label>
      <input
        type={type}
        id="auth-input"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AuthInput;
