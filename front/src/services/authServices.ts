/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function authServices() {
  const navigate = useNavigate();

  const addName = useCallback((name: string) => {
    localStorage.setItem("name", name);
  }, []);

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const password = form["password"].value;
      const email = form["email"].value;

      console.log(email, password);

      const loginResponse = await axios.post(
        `https://trimobe.madagascar.webcup.hodi.host/api/auth/login`,
        {
          password,
          email,
        }
      );
      if (loginResponse.status === 200) {
        addName(loginResponse.data.name);
        navigate("/dashboard/home");
        form["password"].value = "";
        form["email"].value = "";
      } else {
        alert("L' utilisateur existe déja");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const password = form["password"].value;
      const email = form["email"].value;
      const fullname = form["fullname"].value;

      console.log(email, password, fullname);

      const loginResponse = await axios.post(
        `https://trimobe.madagascar.webcup.hodi.host/api/auth/register`,
        {
          password: password,
          email: email,
          fullname: fullname,
        }
      );
      if (loginResponse.status === 201) {
        addName(loginResponse.data.name);
        navigate("/dashboard/home");
        form["password"].value = "";
        form["email"].value = "";
        form["fullname"].value = "";
      } else {
        alert("L' utilisateur existe déja");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { login, signup };
}
