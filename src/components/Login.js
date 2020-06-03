import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="ButtonContainer">
                    <div className="Buttons">
                        <Button variant="primary" size="lg">Login</Button> {' '}
                        <Button variant="primary" size="lg">Sign Up</Button> {' '}
                    </div>
                </div>
            </div>
        )
    }
}

export default Login