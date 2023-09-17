import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/login-logo.svg"
import styles from "./login.module.css"
import img from "../../assets/images/login-hero.svg"
import google from "../../assets/images/google.svg"
const Login = () => {
    return (
        <>
            <section className={`${styles.loginSec}`}>
                <Container>
                    <Nav className={`${styles.nav}`}>
                        <Link to="/"><img alt="" src={logo} className={`${styles.logo}`} /></Link>
                        <div className={`${styles.btns}`}>
                            <Link className={`${styles.join}`}>Join now</Link>
                            <Link className={`${styles.signin}`}>Sign in</Link>
                        </div>
                    </Nav>
                    <Row className={`${styles.row}`}>
                        <Col md='6'>
                            <h1 className={`${styles.title}`} >Welcome to your professional community</h1>
                            <button className={`${styles.google__btn}`}><img alt="" src={google} /> sign in with google</button>
                        </Col>
                        <Col md='6'>
                            <img alt="" src={img} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Login
