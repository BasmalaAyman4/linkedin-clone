import React from 'react'
import styles from './HomeContent.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../../../assets/images/photo.svg'
import connection from '../../../assets/images/widget-icon.svg'
import item from '../../../assets/images/item-icon.svg'
import plus from '../../../assets/images/plus-icon.svg'
import feed from '../../../assets/images/feed-icon.svg'
import next from '../../../assets/images/right-icon.svg'
const HomeContent = () => {
    return (
        <>
            <section className={`${styles.content}`}>
                <Container>
                    <div className={`${styles.title}`}>
                        <Link to='' >Hiring in a hurry? - </Link>
                        <span>Find talend pros in record time with Upwork and keep business moving.</span>
                    </div>
                    <Row className={`${styles.sides}`}>
                        <Col lg='3' >
                            <div className={`${styles.left}`}>
                                <div className={`${styles.header}`}>
                                    <img alt='' src={img} className={`${styles.photo}`} />
                                </div>
                                <div className={`${styles.user}`}>
                                    <h5>welcome , basmala ayman</h5>
                                    <p className={`${styles.add}`}>Add a photo</p>
                                </div>
                                <div className={`${styles.connect}`}>
                                    <div>
                                        <p className={`${styles.connect__para}`}>Connections</p>
                                        <p>Grow your network</p>
                                    </div>
                                    <div><img alt='' src={connection} className={`${styles.connect__img}`} /></div>
                                </div>
                                <div className={`${styles.items}`}>
                                    <img alt='' src={item} /> <span>My Items</span>
                                </div>
                            </div>
                            <div className={`${styles.left} ${styles.second}`}>
                                <p className={`${styles.group}`}>Group</p>
                                <div className={`${styles.event}`}>
                                    <p>Event</p>
                                    <img alt='' src={plus} />
                                </div>
                                <p className={`${styles.follow}`}>Follows Hashtags</p>
                                <hr />
                                <div className={`${styles.discover} ${styles.follow}`}>
                                    <p className={` ${styles.disc}`}>Discover more</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' className={`${styles.main}`}>
                            jyhn,
                        </Col>
                        <Col lg='3'  >
                            <div className={`${styles.right}`}>
                                <div className={`${styles.right__body}`} >
                                    <p>Add to your feed</p>
                                    <img alt='' src={feed} />
                                </div>
                                <div className={`${styles.hash}`}>
                                    <img alt='' src='https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs' />
                                    <div>
                                        <p className={`${styles.hash__para}`}># Linkedin</p>
                                        <button className={`${styles.hash__btn}`}>Follow</button>
                                    </div>
                                </div>
                                <div className={`${styles.hash}`}>
                                    <img alt='' src='https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs' />
                                    <div>
                                        <p className={`${styles.hash__para}`}># Video</p>
                                        <button className={`${styles.hash__btn}`}>Follow</button>
                                    </div>
                                </div>
                                <div className={`${styles.recommand}`}>
                                    <p >View all recommendations</p>
                                    <img alt='' src={next} className={`${styles.next}`} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HomeContent
