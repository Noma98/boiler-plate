import React, { useEffect } from 'react'
import axios from 'axios';

function LandingPage() {
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/api/hello');
            console.log(res);
        }
        fetchData();
    }, [])
    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage
