import React from 'react';
import { Container, Card, Col, Row, Input, Nav } from 'reactstrap';
import logo from '../img/amlogo.png';
import { AvField, AvForm } from "availity-reactstrap-validation";



class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: false,
            password: false

         };
     } 

     handleValidSubmit = (event, values) => {
        this.setState({ email: values.email });
        console.log(`Login Successful`);
      };
    
      handleInvalidSubmit = (event, errors, values) => {
        this.setState({email: values.email, error: true });
        console.log(`Login failed`);
      };    
      

render() {
    return ( 
        
        <div>
            <Container>
                <Card className="login-card">
                    <Row>
                        <Col>
                            <div className="brand-wrapper mt-3 wow fadeInLeft animated"
                                data-wow-delay="0.3s
                            visibility: visible; animation-name: fadeInLeft; animation-delay: 0.3s;">
                                <img src={logo}  alt="logo" className="logo" />
                            </div>
                            <hr />
                            <p className="login-card-description text-center">Sign in </p>

                    <AvForm 
                            onValidSubmit={this.handleValidSubmit}
                            onInvalidSubmit={this.handleInvalidSubmit}>
                            
                        <div className="form-group">
                        <AvField name="email"  type="email" placeholder="Email address" errorMessage="Enter a valid email"
                            validate={{
                                required: true,
                                email: true
                                }}
                            />                         
                        </div>

                        <div className="form-group">
                            <AvField name="password" type="password" placeholder="Enter password"
                                validate={{
                                required: {value: true, errorMessage: 'Enter a valid password'},
                                // pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'Your password must contain only letter and numbers'},
                                minLength: {value: 6, errorMessage: 'Your password must be between 6 and 10 characters'},
                                maxLength: {value: 10, errorMessage: 'Your password must be between 6 and 10 characters'}
                             }} />
                        </div>
                            <Input name="login" id="login" className="btn btn-block login-btn" type="button" value="Login" />
                                <a href="#!" className="forgot-password-link">Forgot password?</a>
                        <hr />
                            <Nav className="login-card-footer-nav">
                                <a href="#"> Terms of use.</a>
                                <a href="#" className=" ml-2"> Privacy policy</a>
                            </Nav>
                    </ AvForm>
                </Col>
            </Row>
        </Card>
    </Container>
</div>   
                       

    )
  };
}



export default LoginForm;





 