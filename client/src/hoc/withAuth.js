import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useHistory } from 'react-router';

// 🚩option
// null => 아무나 출입 가능한 페이지
// true => 로그인한 유저만 출입 가능한 페이지
// false => 로그인한 유저는 출입 불가능한 페이지

// 🚩adminRoute => 관리자만 출입 가능할 때 true, 기본값 null
export function withAuth(SpecificComponent, option, adminRoute = null) {
    function AuthCheck(props) {
        const dispatch = useDispatch();
        const history = useHistory();

        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response.payload);
                if (!response.payload.isAuth) {
                    //로그인X 상태
                    if (option) { //로그인한 유저 OK인 페이지
                        history.push('/login');
                    }
                } else { //로그인O 상태
                    if (adminRoute) {//관리자만 OK인 페이지인데 관리자 아닐 경우
                        history.push('/');
                    }
                    if (option === false) {//로그인 안한 유저만 OK인 페이지
                        history.push('/');
                    }
                }
            });
        }, [history, dispatch])
        return (
            <SpecificComponent />
        )
    }
    return AuthCheck;
};
export default withAuth;