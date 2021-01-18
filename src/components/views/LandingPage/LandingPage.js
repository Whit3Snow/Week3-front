import React,{useEffect} from 'react'
import axios from 'axios';

function LandingPage(props) {
    
    
    //return을 한 이후에 useEffect를 함 
    useEffect(()=>{//LandingPage에 들어오자마자 useEffect 실행
        //server에 보내고 난 후에, (get으로 보낸다) response로 응답을 받음  
        axios.get('http://192.249.18.247:5000/api/hello')//sever에 보냄
        .then(response => console.log(response.data))//응답을 받음
    },[])

    const onClickHandler = () => [
        axios.get('http://192.249.18.247:5000/api/users/logout')
        .then(response => {
            console.log(response.data)
            if(response.data.success){
                props.history.push("/login")
            }else{
                alert('로그아웃하는데 실패했습니다.')
            }
        })
    ]

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'
                       ,width: '100%', height: '100vh'             
        }}>
            <h2>시작페이지</h2>

            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default LandingPage
