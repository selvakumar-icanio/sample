import React from "react";
import "../style/CompanyDetails.css";
import { Demo } from "../config/validation";
export default class CompanyDetails extends React.Component{
    constructor(){
        super();
        this.state={
            companyName : "",
            registeredCompanyAddress : "",
            contactPersonFirstName : "",
            contactPersonLastName : "",
            contactPersonPhoneNumber : "",
            contactPersonEmailId : "",
            companyWebsite : "",
            companyLogo : "",
          
            errors :{
            textError : "",
            numberError : "",
            emailError : ""
            }
        }
         
    }
    changeHandler=(event)=>{
       
        var validation = Demo(event.target.value, event.target.type)
        if(validation){
            this.setState({[event.target.name]: event.target.value})
        }  
       }
       submit = (event) =>{
           console.log(this.state)
       }
    render(){
        return(
            <div className="container-fluid">
                <form>
                    <div className="content w-75">
                <div className="company">      
                <small className="text-primary">COMPANY DETAILS -</small>
                <br />
                <label>Company Name</label>
                <input type="text" autoComplete="off" name="companyName" placeholder="Company Name" onChange={this.changeHandler} value={this.state.companyName} className="form-control"></input>
                <label>Company Address</label>
                <textarea class="form-control" autoComplete="off" placeholder="Company Address" onChange={this.changeHandler} name="registeredCompanyAddress" value={this.state.registeredCompanyAddress} id="exampleFormControlTextarea1" rows="3"></textarea>
                 <label>Company Website</label>
                <input type="text" autoComplete="off" placeholder="Company Website" name="companyWebsite" onChange={this.changeHandler} value={this.state.companyWebsite} className="form-control"></input>
                 <label>Company logo</label> 
                 <input type="text" name="companyLogo" onChange={this.changeHandler} value={this.state.companyLogo} className="form-control"/><br />    
           
                </div>
                <div className="person">
                <small className="text-primary">CONTACT PERSON DETAILS -</small>
                <br />
                <div className="row">
                <div className="col-md-6">
                    <label>First name</label>
                <input type="text" autoComplete="off" placeholder="First Name" name="contactPersonFirstName" onChange={this.changeHandler} value={this.state.contactPersonFirstName} className="form-control"></input>              
                    </div>      
                    <div className="col-md-6">             
                    <label>Last name</label>
                    <input type="text" autoComplete="off" placeholder="Last Name" name="contactPersonLastName" onChange={this.changeHandler} value={this.state.contactPersonLastName} className="form-control"></input>
                    </div>
                    </div>
                    <label>Phone number</label>
                    <input type="number" autoComplete="off" placeholder="Phone Number" name="contactPersonPhoneNumber" onChange={this.changeHandler} value={this.state.contactPersonPhoneNumber} className="form-control"></input>
                    <label>E-Mail</label>
                    <input type="email" autoComplete="off" placeholder="Enter your E-Mail" name="contactPersonEmailId" onChange={this.changeHandler} value={this.state.contactPersonEmailId} className="form-control"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    <br />
                <input type="button" onClick={this.submit} className="btn btn-outline-primary w-100" value="SUBMIT"></input>
                </div>
                </div>
                </form>
                
            </div>
        )
    }
}