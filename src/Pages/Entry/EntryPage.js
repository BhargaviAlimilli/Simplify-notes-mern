import React from 'react'
import "./Entry.css"
import {Container, Row,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Entry(){
  
    return(
        <div className='main'>
        <Container>
            <Row>
            <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Simplify Notes !!</h1>
              <p className="subtitle">Now get explore to all our features.</p>
            </div>
            <div className="buttonContainer">
              <Link to="/signin">
                <Button size="lg" className="landingbutton" >
                  SignIn
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
            </Row>
        </Container>
        </div>
    )
}


export default Entry