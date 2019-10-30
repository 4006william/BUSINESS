import React ,{Component} from 'react'
import auth from '../auth'


const  Landing2 = (props) => {
        return (
            <div>
               <nav> <h1>Houston Restaurants</h1> </nav>
                <h1 class="login-title">Welcome To Houston...</h1>
               <form>
                   <div class="fields">
                       <label>Email:</label>
                       <input placeholder="aaaa@aaa.com"></input>
                   </div>
                   <div class="fields">
                       <label>Password:</label>
                       <input placeholder="******"></input>
                   </div>
                <button class="btn2"onClick={() =>{
                        auth.login(()=>{
                            props.history.push("/landing2");
                        })
                    }
                }>Log In</button>

            </form>
            </div>
        )

}

export default Landing2