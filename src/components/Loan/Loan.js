import React,{useState} from'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

const Loan=()=>{
    let [accountHolderName,setAccountHolderName]=useState('');
    const [loanType,setLoanType]=useState('');
    const[loanAmount,setLoanAmount]=useState('');
    const [loanApplyDate,setLoanApplyDate]=useState('');
    const[ROI,setROI]=useState('');
    const[duriation,setDuriation]=useState('');
    const[accountHolderNameErr,setAccountHolderNameErr]=useState({});
    const[loanTypeErr,setLoanTypeErr]=useState({});
    const[loanAmountErr,setLoanAmountErr]=useState({});
    const[loanApplyDateErr,setLoanApplyDateErr]=useState({});
    const[ROIErr,setROIErr]=useState({});
    const[duriationErr,setDuriationErr]=useState({})



    const submitHandler=(e)=>{
        e.preventDefault();
        const isValid=formValidation();
        if(isValid){
            alert('success');
            console.log("submitted");
        
        }
        else
        alert('invalid');
    }
        accountHolderName=localStorage.getItem('userName');
        console.log(accountHolderName);
            



        const dateChange=(loanApplyDate)=>{
            setLoanApplyDate(loanApplyDate);
        }
    
        const formValidation=()=>{
            let isValid=true;
           // const accountHolderNameErr={};
            const loanTypeErr={};
            const loanAmountErr={};
            const loanApplyDateErr={};
            const ROIErr={};
            const duriationErr={}
          



            if(!loanType){
                isValid=false;
                loanTypeErr.noloan="please select the type";

            }
            if(!loanAmount){
                loanAmountErr.noamount="amount not mentioned";
            }
            if(typeof loanAmount!=='undefined'){
                var reg=new RegExp('^[0-9]+$');
                if(loanAmount<=0||!(reg.test(loanAmount))){
                    isValid=false;
                    loanAmountErr.nodata="amount should be greather than zero";
                }
            }
           if(!loanApplyDate){
               loanApplyDateErr.nodate="mention date";

           }
           if(!ROI){
               ROIErr.norate="mention it";
           }
           if(!duriation){
               duriationErr.notime="mention";
           }
           setDuriationErr(duriationErr);
           setLoanAmountErr(loanAmountErr);
           setLoanApplyDateErr(loanApplyDateErr);
           setROIErr(ROIErr);
           setLoanTypeErr(loanTypeErr);
           return isValid;

        }
     
        const Logout=()=>{
            localStorage.clear();
        }



    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
    <div className="col">
        <ul className="nav row nav pills">
            <li className="col-sm-3 nav-item text-center">
               <Link className="nav-link btn-outline-warning"  > <i className="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li class="col-sm-3 nav-item text-center">
                <Link class="nav-link btn-outline-warning"   ><i className="fa fa-search"></i>Search</Link>
            </li>
            <li className="col-sm-3 nav-item text-center">
                <Link className="nav-link btn-outline-warning" ><i className="fa fa-fw fa-user "></i>ViewProfile</Link>
            </li>
            <li className="col-sm-3 nav-item text-center">
            <Link to={{pathname:'/Login',hash:'#Login'}}>
                 <button className="btn btn-outline-warning" onClick={Logout}><i className="fa  fa-sign-out"></i>Logout </button> 
               </Link>
            </li>
        </ul>
    </div>
</nav>
<div className="bgclr">
         <div className="container">
        <div className="row">
            <div className="col-3"></div>
            <div className="card m-3 col-6" style={{backgroundColor:"#d0c9c3",borderRadius:"1.5rem"}}>
                <br/>
                <h3 className="card-header text-center" style={{backgroundColor:"#414654",color:"whitesmoke",borderRadius:"1.5rem"}}>Loan Form</h3>
           
            <div className="card-body">
        <form onSubmit={submitHandler}>
            <div className="offset-2">
                     <div className="form-group">
            <label htmlFor="accountHolderName">accountHolderName</label>
            <input type="accountHolderName" className="form-control" name="accountHolderName" id="accountHolderName" value={accountHolderName} onChange={(e)=>setAccountHolderName(e.target.value)}></input>
            {Object.keys(accountHolderNameErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{accountHolderNameErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="loanType">Loan Type</label>
            <select onChange={(e)=>setLoanType(e.target.value)}>
                <option value=""></option>
                <option value="Personal">Personal</option>
                <option value="Education">Education</option>
            </select>
            {Object.keys(loanTypeErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{loanTypeErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="loanAmount">loanAmount</label>
            <input type="loanAmount" className="form-control" name="loanAmount" id="loanAmount" onChange={(e)=>setLoanAmount(e.target.value)}></input>
            {Object.keys(loanAmountErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{loanAmountErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="loanApplyDate">loanApplyDate</label>
            <DatePicker type="loanApplyDate" className="form-control" name="loanApplyDate" id="loanApplyDate" selected={loanApplyDate} onChange={dateChange} minDate={new Date()} maxDate={new Date()}/>
            {Object.keys(loanApplyDateErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{loanApplyDateErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="ROI">ROI</label>
            <input type="ROI" className="form-control" name="ROI" id="ROI" onChange={(e)=>setROI(e.target.value)}></input>
            {Object.keys(ROIErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{ROIErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="duriation">Duriation</label>
            <input type="duriation" className="form-control" name="duriation" id="duriation" onChange={(e)=>setDuriation(e.target.value)}></input>
            {Object.keys(duriationErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{duriationErr[key]}</div>
            })}
        </div>
        <div>
        <button type="submit" className="btn btn-primary mr-1">Submit</button>
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
export default Loan;