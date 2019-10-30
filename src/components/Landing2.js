import React ,{Component} from 'react'
import auth from '../auth'


const  Landing2 = (props) => {
        return (
            <div>
                <h1>LANDING PAGE 2</h1>
                <button onClick={
                    () =>{
                        auth.logout(()=>{
                            props.history.push("/");
                        })
                    }
                }>Log Out</button>
            </div>
        )

}

export default Landing2