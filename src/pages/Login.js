import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const [userObj, setUserObj] = useState({});

  const onSubmit = (data) => {
    console.log(data);
    setUserObj(data);
  };

  useEffect(() => {
    if (userObj.email) {
      loginUser(userObj)
        .then((res) => {
          localStorage.setItem("token", res.access);
        })
        .then(() => {
          navigate("/shop");
        });
    }
  }, [userObj]);

  return (
    <div>
      <div className={"cColumns cColumns2 jI-center "}>
        <img
          className="img30 b-radius-S mar-top3"
          src={`https://i.imgur.com/nEKOmcU.jpg`}
          alt=""
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mar cColumns cColumns2R vw2 vh2"
        >
          <label className="marR " htmlFor="email">
            Email
          </label>
          <input
            id="email"
            placeholder="example@example.com"
            type="email"
            {...register("email")}
          />
          <label className="marR " htmlFor="password">
            Password
          </label>
          <input
            id="password"
            placeholder="Your password"
            type="password"
            {...register("password")}
          />
          <input type="submit" className="" />
        </form>
      </div>
    </div>
  );
};

export default Login;
