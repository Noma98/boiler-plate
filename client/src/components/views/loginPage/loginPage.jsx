import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useHistory } from 'react-router-dom';

function LoginPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            email,
            password,
        }
        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    history.push("/");
                } else {
                    alert(`⛔로그인 실패: ${response.payload.message}`);
                }
            })

    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
        }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Email</label>
                <input type="email" value={email} onChange={handleEmail} />
                <label>Password</label>
                <input type="password" minLength="5" value={password} onChange={handlePassword} />
                <br />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
