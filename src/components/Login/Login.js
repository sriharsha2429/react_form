import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../../actions/userActions';


const Login=(props)=>{
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
   
    const [userNameErr,setUserNameErr]=useState({});
    const [passwordErr,setPasswordErr]=useState({});
    const [submitVal,setSubmitVal]=useState();
    const userSignin = useSelector(state => state.userSignin);
    const {  userInfo } = userSignin;
    const dispatch = useDispatch();

    const submitHandler=(e)=>{
         e.preventDefault();
        const isValid=formValidation();
        if(isValid){
            setSubmitVal(true)
            dispatch(signin(userName, password));
        }
        else{
           setSubmitVal(false) 
        }
    }
        useEffect(() => {
            if (userInfo) {
             
              props.history.push("/");
            }
            return () => {
              //
            };
          }, [userInfo]);
    
    const formValidation=()=>{
        let isValid=true;
        const userNameErr={};
        const passwordErr={};

        if(!userName){
            userNameErr.noName="Name not mentioned";
            isValid=false;
        }
        //password validation
        if(!password){
            passwordErr.noPassword="password not mentioned";
        }
        setUserNameErr(userNameErr);
        setPasswordErr(passwordErr);
        return isValid
    }

    return <div className="bgclr">
       

          <div className="container">
        <div className="row">
            <div className="col-3"></div>
            <div className="card m-3 col-6" style={{backgroundColor:"#d0c9c3",borderRadius:"1.5rem"}}>
                <br/>
                <h3 className="card-header text-center" style={{backgroundColor:"#414654",color:"whitesmoke",borderRadius:"1.5rem"}}>Login Form</h3>
           
            <div className="card-body">
    <form onSubmit={submitHandler}>
    <div className="offset-2">
    <div className="form-group">
   
            <label htmlFor="userName">UserName</label>
            <input type="userName" className="form-control" name="userName" id="userName" onChange={(e)=>setUserName(e.target.value)}></input>
            {Object.keys(userNameErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{userNameErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}></input>
            {Object.keys(passwordErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{passwordErr[key]}</div>
            })}
            </div>
            <div className="text-center">
                
                {submitVal===true?
                    <Link to={{pathname:'/Demo'}}>
            <button type="submit" className="btn btn-primary mr-1">Submit</button>
            </Link>:<button type="submit" className="btn btn-primary mr-1">Submit</button>}
        </div>
        <div className="text-center">
                    <Link to={{pathname:'/Registration'}}>  <small>New User create account</small></Link>
        </div>
        </div>
    </form>
    </div>
    </div>
  
    </div>
    </div>
</div>
}

export default Login;