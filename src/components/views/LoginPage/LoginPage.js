
// import axios from 'axios';
import React,{useState} from 'react'
import {useDispatch} from 'react-redux' //dispatch를 이용해서 action을 취할 것임 
import {loginUser} from '../../../_actions/user_action';

function LoginPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)// event를 발생 시킬 수 있도록 함 --> input을 발생시킬 수 있도록 한 것임
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();// page refresh가 되지 않도록 해주는 것(그래야 밑에 해야할 일들을 할 수가 있음)

        console.log('Email', Email);
        console.log('Password', Password);
        //가져온 Email과 Password들을 서버에 보내야함 --> axios라는 것을 이용할 것임 
        let body = {
            email: Email,
            password: Password
        }
        //리덕스를 사용하지 않았다면 바로 하면 되는 부분임.... 하지만 우리는 리덕스를 사용해야함 ㅜㅜ
        // axios.post('/api/users/login', body)
        // .then(response => {
        //     //처리하고 싶은 것들을 처리하면 되는 것임
        // })

//action을 취할 것임(바뀌는 부분???) 
        dispatch(loginUser(body)) //user_action 내에서 우리는 서버로 보낼 것임??// 
        .then(response => {
            if(response.payload.loginSuccess){ // loginSuccess는 서버에서 받아온 값... 즉 서버에서 로그인이 성공하면 true를 반환하기 때문임 
                props.history.push('/')
            }else{
                alert('Error')
            }
        })
    }


    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'
                       ,width: '100%', height: '100vh'             
        }}>
        <form style={{display:'flex', flexDirection:'column'}}
            onSubmit={onSubmitHandler} //form에 submit event를 발생시켜 주어야 함    
        >
            <label>Email</label>
            <input type="email" value = {Email} onChange={onEmailHandler}/> 
            {/* event가 발생을 하면 onChange 발생 */}
            <label>Password</label>
            <input type="password" value = {Password} onChange={onPasswordHandler}/>

            <br />

            <button type="submit">
                Login
            </button>
        </form>
        </div>
    )
}

export default LoginPage
