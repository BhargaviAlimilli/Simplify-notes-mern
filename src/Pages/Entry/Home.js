import React from 'react'
import "./Home.css"
import {Container, Row} from 'react-bootstrap'

function Home(){
  
    return(
        <div className='origin'>
        <Container>
            <Row>
            <div className="intro-text">
            <div>
              <h1 className="title">You are on Board !!</h1>
              <p className="subtitle">Happy to have you in our community.<br/>
                    Go to MyNotes to ceate notes and to check your notes, you can explore to profile settings              
              </p>
            </div>
          </div>
            </Row>
        </Container>
        </div>
    )
}


export default Home