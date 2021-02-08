import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL,USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS,USER_UPDATE_FAIL  } from "../constants/userConstants";
import Axios from "axios";
import Cookie from 'js-cookie';
const signin = (userName, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { userName, password } });
    try {
     // const { data } = await Axios.get('http://localhost:3000/Users?userName='+userName+'&password='+password, { userName, password });
     
     const dataa=Axios.get('http://localhost:3000/Users?userName='+userName+'&password='+password).then(Response=>{
                if(Response.data.length==1){
                  localStorage.setItem('userName',Response.data[0].userName);
                 localStorage.setItem('accountType',Response.data[0].account);
            localStorage.setItem('idm',Response.data[0].idm);
            localStorage.setItem('id',Response.data[0].id);
                   console.log(Response.data);
                }
                else{
                    alert('invalid credentials');
                }
            })
           .catch(err=>{
               alert('invalid')
               console.log(err)
           }
           )

     dispatch({ type: USER_SIGNIN_SUCCESS, payload: dataa });
      Cookie.set('userInfo', JSON.stringify(dataa));
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
}

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await Axios.post("/api/users/register", { name, email, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}
 
  
  export { signin, register };