import React from 'react';
import depo from'./depo.jpg';
import ty from './ty.png';
import { Link} from 'react-router-dom';
import './Demo.css';

const Demo=()=>{
   
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
                <Link className="nav-link btn-outline-warning"   ><i className="fa fa-search"></i>Search</Link>
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
        <div className="row justify-content-around">
            <div className="col-4 mt-5">
                <div className="card" style={{width: "200px"}}>
                    <Link to={{pathname:'/Loan',hash:'#Loan'}}>
                    <img className="card-img-top" src={ty} alt="card" style={{width:"100%"}}/>
                   
                        <h4 className="card-title text-center">Loan</h4></Link>

                    
                </div>
            </div>
            <div className="col-4 mt-5">
                <div className="card" style={{width:"200px"}}>
                <Link to={{pathname:'/Depoist',hash:'#Depoist'}}>
                    <img className="card-img-top" src={depo} alt="card" style={{width:"100%"}}></img>
                    
                        <h4 className="card-title">Depoist</h4>
 
                  </Link>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
}
export default Demo