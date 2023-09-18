import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import homeheader from '../../../assets/images/home-logo.svg'
import styles from './HomeHeader.module.css'
import search from '../../../assets/images/search-icon.svg'
import './home.css'
import { NavLink } from 'react-router-dom'
import home from '../../../assets/images/nav-home.svg'
import network from '../../../assets/images/nav-network.svg'
import jobs from '../../../assets/images/nav-jobs.svg'
import msg from '../../../assets/images/nav-messaging.svg'
import notification from '../../../assets/images/nav-notifications.svg'
import user from '../../../assets/images/user.svg'
import down from '../../../assets/images/down-icon.svg'
import work from "../../../assets/images/nav-work.svg"
import { signOut } from "firebase/auth"
import { auth } from '../../../firebase';
import useAuth from '../../../custom-Hook/useAuth';
const Home = () => {
    const { currentUser } = useAuth()
    const logout = () => {
        signOut(auth).then(() => {
            console.log('Logged out')
        }).catch(err => {
            console.log(err.message)
        })

    }

    return (
        <>
            <header className={`${styles.header}`}>
                <Container>
                    <Nav className={`${styles.nav}`}>
                        <div className={`${styles.all}`}>
                            <img alt="" src={homeheader} />
                            <input placeholder='Search' type='text' className={`${styles.input}`} />
                            <img alt='' src={search} className={`${styles.search}`} />
                        </div>
                        <div className={`${styles.all__link}`}>
                            <NavLink to='/home' className={`${styles.nav__link}`}>
                                <img alt='' src={home} className={`${styles.user}`} fill='#fff' />
                                <p>Home</p>
                            </NavLink>
                            <NavLink to='/network' className={`${styles.nav__link}`}>
                                <img alt='' src={network} className={`${styles.user}`} />
                                <p>my network</p>
                            </NavLink>
                            <NavLink to='/jobs' className={`${styles.nav__link}`}>
                                <img alt='' src={jobs} className={`${styles.user}`} />
                                <p>jobs</p>
                            </NavLink>
                            <NavLink to='/message' className={`${styles.nav__link}`}>
                                <img alt='' src={msg} className={`${styles.user}`} />
                                <p>messaging</p>
                            </NavLink>
                            <NavLink to='/notification' className={`${styles.nav__link}`}>
                                <img alt='' src={notification} className={`${styles.user}`} />
                                <p>notification</p>
                            </NavLink>
                            <NavLink to='/' className={`${styles.nav__link} ${styles.me}`}>
                                <img alt='' src={currentUser ? currentUser.photoURL : user} className={`${styles.user}`} />
                                <p>Me <span><img alt='' src={down} /></span></p>
                                <p className={`${styles.out}`} onClick={logout}>Sign out</p>
                            </NavLink>

                            <NavLink to='/work' className={`${styles.nav__link} ${styles.work}`}>
                                <img alt='' src={work} className={`${styles.user}`} />
                                <p>work<span><img alt='' src={down} /></span></p>
                            </NavLink>
                        </div>
                    </Nav>
                </Container>

            </header>
        </>
    )
}

export default Home
