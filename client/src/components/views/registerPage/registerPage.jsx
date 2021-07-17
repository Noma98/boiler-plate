import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { useHistory } from 'react-router-dom';
import withAuth from '../../../hoc/withAuth';

function RegisterPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
        }
        const body = {
            email,
            name,
            password,
        }
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.joinSuccess) {
                    history.push("/login");
                } else {
                    alert(`⛔회원가입 실패 : ${response.payload.message}`);
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
                <label>Name</label>
                <input type="text" value={name} onChange={handleName} />
                <label>Password
                    <br />
                    <small>특수문자를 포함한 5자 이상</small>
                </label>
                <input type="password" minLength="5" value={password} onChange={handlePassword} />
                <label>Confirm Password</label>
                <input type="password" minLength="5" value={confirmPassword} onChange={handleConfirmPassword} />
                <br />
                <button>회원가입</button>
            </form>
        </div>
    )
}

export default withAuth(RegisterPage, false);
