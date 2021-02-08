import React,{ useEffect, useState } from 'react';
import {CountryDropdown,RegionDropdown} from 'react-country-region-selector';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './Registration.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {register} from '../../actions/userActions';
const Registration=(props)=>{
    const [name,setName]=useState('');
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [address,setAddress]=useState('');
    const [country,setCountry]=useState('');
    const [state,setState]=useState('');
    const [email,setEmail]=useState('');
    const [contact,setContact]=useState('');
    const [dob,setDob]=useState('');
    const [account,setAccount]=useState('');
    const [branch, setBranch]=useState('');
    const [idm,setIdm]=useState('');
    const [ipt,setIpt]=useState('');
    const [idn,setIdn]=useState('');
    const [nameErr,setNameErr]=useState({});
    const [userNameErr,setUserNameErr]=useState({});
    const [passwordErr,setPasswordErr]=useState({});
    const [confirmPasswordErr,setConfirmPasswordErr]=useState({});
    const [addressErr,setAddressErr]=useState({});
    const [countryErr,setCountryErr]=useState({});
    const [stateErr,setStateErr]=useState({});
    const [contactErr,setContactErr]=useState({});
    const [emailErr,setEmailErr]=useState({});
    const [dobErr,setDobErr]=useState({});
    const [accountErr,setAccountErr]=useState({});
    const [branchErr,setBranchErr]=useState({});
    const [idmErr,setIdmErr]=useState({});
    const [iptErr,setIptErr]=useState({});
    const [idnErr,setIdnErr]=useState({});
    const [age,setAge]=useState('');
    const dispatch=useDispatch();
    const userRegister=useSelector(state=>state.userRegister);
    const {userInfo}=userRegister;

    const array={
        name,
        userName,
        password,
        address,
        country,
        state,
        contact,
        email,
        dob,
        account,
        branch,
        idm,
        ipt,
        idn
        
    }

    useEffect(() => {
        if (userInfo) {
          
          props.history.push("/");
        }
        return () => {
          //
        };
      }, [userInfo]);

    const [submitVal,setSubmitVal]=useState();
    //function for submit button
    const submitHandler=(e)=>{
        e.preventDefault();
        const isValid=formValidation();
        if(isValid){
            setSubmitVal(true);
            alert('success');
            console.log("submitted");
            setSubmitVal(true);
            dispatch(register(array))
        }
        else{
            alert('invalid');
            console.log("not submitted");
        }
    }

    //function for dob
    const dateChange=(dob)=>{
        setDob(dob);
        let now=new Date().getFullYear();
        let birth=dob.getFullYear();
        let dif=now-birth;
        if(dif<18)
        setAge(false);
        else
        setAge(true);
        
    }
    
    console.log(age)
    //function for select country
    const selectCountry=(val)=>{
        setCountry(val);
    }
    //function for select state
    const selectRegion=(val)=>{
        setState(val);
    }
    //function for form validation
    const formValidation=()=>{
        let isValid=true;
        const nameErr={};
        const userNameErr={};
        const passwordErr={};
        const confirmPasswordErr={};
        const addressErr={};
        const countryErr={};
        const stateErr={};
        const emailErr={};
        const contactErr={};
        const dobErr={};
        const accountErr={};
        const branchErr={};
        const idmErr={};
        const iptErr={};
        const idnErr={};
        //name validation
        if(!name){
            nameErr.noName="Name not mentioned";
            isValid=false;
        }
        if(typeof name!=='undefined'){
            var regExpression=/^[a-zA-Z\s]*$/;
            if(!regExpression.test(name)){
                nameErr.notValid="Name should contain alphabets and space only";
                isValid=false;
            }
        }
        //username validation
        if(!userName){
            userNameErr.noName="Name not mentioned";
            isValid=false;
        }
        //password validation
        if(!password){
            passwordErr.noPassword="password not mentioned";
        }
        if(!confirmPassword){
            confirmPasswordErr.noPassword="password not mentioned";
        }

        //confirm password Validation
        if (typeof password !== "undefined" && typeof confirmPassword!== "undefined") {
             if (password != confirmPassword) {
                isValid = false;
                 confirmPasswordErr.passwordNoMatch= "Passwords don't match.";
              }   
        }
        //Address validation
        if(!address){
            addressErr.noAddress="address not mentioned";
        }
        //country validation
        if(!country){
            countryErr.noCountry="country not mentioned";
        }
        //state validation
        if(!state){
            stateErr.noState="state not mentioned";
        }
        //dob 
        if(!dob){
            dobErr.noDob="dob not mentioned";
        }
        //account type
        if(!account){
            accountErr.noAccount="Account not mentioned";
        }
        //branch
        if(!branch){
            branchErr.noBranch="branch name is not mentioned";
        }
        //ipt
        if(!ipt){
            iptErr.noIpt="ipt is not mentioned";
        }
        //idn
        if(!idn){
            idnErr.noIdn="idn not mentioned";
        }
        //contact validation
        if(!contact){
            contactErr.noNumber="mobile num is not mentioned";
            isValid=false;
        }
        if(typeof contact!=='undefined'){
        var phoneno=/^[6-9][0-9]{9}$/;
            if(!phoneno.test(contact)){
                contactErr.notValid="mobile number must be 10 digits";
                isValid=false;
            }
        }
        //email validation
        if(!email){
            isValid=false;
            emailErr.noName="cannot be empty";
        }
        if(typeof email!=='undefined'){
            let lastAtPos=email.lastIndexOf('@');
            let lastDotPos=email.lastIndexOf('.');

            if(!(lastAtPos<lastDotPos && lastAtPos>0 && email.indexOf('@@')===-1 && lastDotPos>2 &&(email.length - lastDotPos)>2)) {
                isValid=false;
                emailErr.mailError="Email is not valid";
            }
        }

        //idm validation
        if(!idm){
            isValid=false;
            idmErr.noIdm="cannot be empty";
        }
        if(typeof idm!=='undefined'){
            var reg=new RegExp('^[0-9]+$');
            if(idm<500||!(reg.test(idm)))
            {
                isValid=false;
                idmErr.noIdm="amount should not be less than 0 and greather than 500";
            }
        }
        setNameErr(nameErr);
        setUserNameErr(userNameErr);
        setPasswordErr(passwordErr);
        setConfirmPasswordErr(confirmPasswordErr);
        setAddressErr(addressErr);
        setCountryErr(countryErr);
        setStateErr(stateErr);
        setContactErr(contactErr);
        setEmailErr(emailErr);
        setDobErr(dobErr);
        setAccountErr(accountErr);
        setBranchErr(branchErr);
        setIptErr(iptErr);
        setIdmErr(idmErr);
        setIdnErr(idnErr);
        return isValid
    }
    
return <div>
    <div className="bgclr">
    <div className="container">
        <div className="row">
            <div className="col-3"></div>
            <div className="card m-3 col-6" style={{backgroundColor:"#d0c9c3",borderRadius:"1.5rem"}}>
               <br/>
                <h3 className="card-header text-center" style={{backgroundColor:"#414654",color:"whitesmoke",borderRadius:"1.5rem"}}>Register Form</h3>
            <div className="card-body">
    <form>
        <div className="offset-2">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="name" className="form-control" name="name" id="name" onChange={(e)=>setName(e.target.value)}></input>
            {Object.keys(nameErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{nameErr[key]}</div>
            })}
        </div>
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
        <div className="form-group">
            <label htmlFor="Confirmpassword">Confirm Password</label>
            <input type="password" className="form-control" name="confirmpassword" id="confirmpassword" onChange={(e)=>setConfirmPassword(e.target.value)}></input>
            {Object.keys(confirmPasswordErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{confirmPasswordErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="address" className="form-control" name="address" id="address" onChange={(e)=>setAddress(e.target.value)}></input>
            {Object.keys(addressErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{addressErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="country">Country</label>
           <CountryDropdown type="country" value={country} className="form-control" name="country" id="country" onChange={(val)=>selectCountry(val)} />
            {Object.keys(countryErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{countryErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="state">State</label>
           <RegionDropdown country={country} value={state} type="state" className="form-control" name="state" id="state" onChange={(val)=>selectRegion(val)} />
            {Object.keys(stateErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{stateErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>
            {Object.keys(emailErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{emailErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="contact">Contact No</label>
            <input type="contact" className="form-control" maxLength={10} name="contact" id="contact" onChange={(e)=>setContact(e.target.value)}></input>
            {Object.keys(contactErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{contactErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="dob">DOB</label>
            <DatePicker type="dob" className="form-control" name="dob" id="dob" selected={dob} onChange={dateChange} maxDate={new Date()}/>
            {Object.keys(dobErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{dobErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="account">Account Type</label>
            {
          age === true ? <select onChange={(e)=>setAccount(e.target.value)}>
                <option value=""></option>
                <option value="Savings">Savings</option>
                <option value="Salary">Salary</option>
            </select>:<select onChange={(e)=>setAccount(e.target.value)}>
                <option value=""></option>
                <option value="Savings">Savings</option></select>
}
            {Object.keys(accountErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{accountErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="branch">Branch Name</label>
            <input type="branch" className="form-control" name="branch" id="branch" onChange={(e)=>setBranch(e.target.value)}></input>
            {Object.keys(branchErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{branchErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="idm">Initial Depoist Amount</label>
            <input type="idm" className="form-control" name="idm" id="idm" onChange={(e)=>setIdm(e.target.value)}></input>
            {Object.keys(idmErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{idmErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="ipt">Identification Proof Type</label>
            <input type="ipt" className="form-control" name="ipt" id="ipt" onChange={(e)=>setIpt(e.target.value)}></input>
            {Object.keys(iptErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{iptErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="idn">Identification Document number</label>
            <input type="idn" className="form-control" name="idn" id="idn" onChange={(e)=>setIdn(e.target.value)}></input>
            {Object.keys(idnErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{idnErr[key]}</div>
            })}
        </div>
        <div className="text-center">
            <button  className="btn btn-primary mr-1" onClick={(e)=>submitHandler(e)}>Submit</button>
            {submitVal===true?<Link to={{pathname:'/Login',hash:'#submit'}}>
                <button className="btn btn-primary mr-1">Login</button>
            </Link>:null}
       
        </div>
        <div className="text-center">
        <Link to={{pathname:'/Login'}}> <small>Already have a account </small></Link>
        </div>
</div>
    </form>
    </div>
    </div>
   </div>
    </div>
    </div>
</div>
    
}
export default Registration;
