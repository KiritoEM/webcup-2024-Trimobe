import { IauthHeader } from "../../utils/interfaces";

const AuthHeader = ({ title }: IauthHeader): JSX.Element => {
  return (
    <header className="auth-header">
      <div className="logo">
        <img src="/logo.webp" alt="" />
      </div>
      <div className="title">
        <h2>{title}</h2>
      </div>
    </header>
  );
};

export default AuthHeader;
