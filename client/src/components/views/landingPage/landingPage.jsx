import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LandingPage() {
    const history = useHistory();
    const handleLogout = async () => {
        const res = await axios.get('/api/user/logout');
        if (res.data.success) {
            history.push('/login');
        } else {
            alert("⛔ 로그아웃 실패");
        }
    }
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    )
}

export default LandingPage
