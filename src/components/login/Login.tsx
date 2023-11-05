import React, {useState} from "react";
import "./Login.css";
import { Button, TextField } from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {LoginPayload} from "../../payloads/Payloads.ts";
import { useDispatch } from "react-redux";
import { LoginResponse } from "../../store/features/user/Users.ts";
import { loginUser } from "../../store/features/user/UserSlice.ts";
const Login: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const navigateToHome =  () => {
      navigate('/home');
  }


    const [email,setEmail]  = useState("");
    const [password,setPassword] = useState("");
    // const baseUrl = process.env.BASE_UR;

    const payload:LoginPayload = {
        email: email,
        password:password
    };
    const login = async () => {
        // console.log(baseUrl)
        await axios.post("http://192.168.0.132:3000/user/login",payload).then((result) => {
            if (result.status == 200){
                console.log(result.data);
                const loginResponse: LoginResponse = {
                  message: result.data.message,
                  token:result.data.token
                }

                dispatch(loginUser(loginResponse));
                navigateToHome();
                
            }else {
              console.log("not found");
            }
        } ).catch((err) => {
            console.log(err);
        } );
    }

   
  
  return (
    <>
      <div className="flex flex-col items-center justify-center h-96 w-96 rounde-3xl gap-3">
        <h1 className="text-black text-4xl font-bold">Welocome</h1>
        <TextField label="email" variant="outlined" style={{width: '100%'}} onChange={(event) => {
            setEmail(event.target.value)
        }}/>
        <TextField label="password" variant="outlined" type="password" style={{width: '100%'}} onChange={(event) => {
            setPassword(event.target.value)
        }}/>
        <Button variant="contained" style={{width: '100%'}} onClick={login}>Login</Button>
      </div>
    </>
  );
};

export default Login;
