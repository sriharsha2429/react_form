class Deposits extends Component {
    state = { 
        accountType:'',
        depoistAmount:'',
        availableBalance:localStorage.getItem('idm'),
        depoistAmountErr:'',
        availableBalanceErr:''
     }
     DisplayBalance=()=>{
        //setAvailableBalance(parseInt(availableBalance)+parseInt(depoistAmount));
        this.availableBalance=parseInt(this.state.availableBalance)+parseInt(this.state.depoistAmount);
        this.setState({
            availableBalance
        });
       // return this.availableBalance;
        //localStorage.getItem('idm',availableBalance)
        console.log(this.availableBalance);
        //alert(availableBalance);
    }

     submitHandler=(e)=>{
        e.preventDefault();
        const isValid=formValidation();
        if(isValid){
            alert('your availabe balance is '+availableBalance);
            console.log("submitted");      
        }
        else
        alert('invalid');
    }

     formValidation=()=>{
        var isValid=true;
       // const accountType={};
        const depoistAmountErr={};
        const availableBalance={};
        console.log(depoistAmount)
        if(!this.state.depoistAmount){
            isValid=false;
            this.depoistAmountErr.nodata="cannot be empty";
        }
        if(typeof this.state.depoistAmount!=='undefined'){
            var reg=new RegExp('^[0-9]+$');
            if(depoistAmount<=0||!(reg.test(depoistAmount))){
                isValid=false;
                depoistAmountErr.nodata="amount should be greather than zero";
            }
        }
       this.setState({
           depoistAmountErr
       })
        return isValid;

    }
    accountType=localStorage.getItem('accountType');

     Logout=()=>{
        localStorage.clear();
    }
    render() { 
        return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
<div className="col">
   <ul className="nav row nav pills">
       <li className="col-sm-3 nav-item text-center">
          <Link to={{pathname:'/Demo'}} className="nav-link btn-outline-warning"  > <i className="fa fa-fw fa-home"></i>Home</Link>
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
           <h3 className="card-header text-center" style={{backgroundColor:"#414654",color:"whitesmoke",borderRadius:"1.5rem"}}>Deposit Form</h3>
      
       <div className="card-body">
    <form onSubmit={submitHandler}>
        <div className="offset-2">
   <div className="form-group">
       <label htmlFor="accountType">Account Type</label>
      <input type="accountType" className="form-control" value={accountType} onChange={(e)=>setAccountType(e.target.value)}></input>
   </div>
   <div className="form-group">
       <label htmlFor="depoistAmount">Deposit Amount</label>
       <input type="depoistAmount" className="form-control" name="depoistAmount" id="depoistAmount" onChange={(e)=>setDepoistAmount(e.target.value)}></input>
       {Object.keys(depoistAmountErr).map((key)=>{
           return <div key={key} style={{color:"red"}}>{depoistAmountErr[key]}</div>
       })}
   </div>
   </div>
   <div className="text-center">
   <button type="submit" className="btn btn-primary mr-1" onClick={DisplayBalance} >Submit</button>
   </div>
  

   </form>
   </div>
   </div>
   </div>
   </div>
   </div>
</div>
}
}
 
export default Deposits ;