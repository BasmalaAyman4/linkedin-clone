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
import user from '../../../assets/images/user.svg'
import photo from '../../../assets/images/download.png'
import event from '../../../assets/images/download (1).png'
import video from '../../../assets/images/viseo.png'
import artical from '../../../assets/images/artical.png'
import dot from '../../../assets/images/dot.png'
import post from '../../../assets/images/1500x500.jpg'
import like from '../../../assets/images/like.png'
import comment from '../../../assets/images/comment.png'
import share from '../../../assets/images/share.png'
import send from '../../../assets/images/send.png'
import useAuth from '../../../custom-Hook/useAuth';
const HomeContent = () => {
    const { currentUser } = useAuth()
    return (
        <>
            <section className={`${styles.content}`}>
                <Container>
                    <div className={`${styles.title}`}>
                        <Link to='' >Hiring in a hurry? - </Link>
                        <span>Find talend pros in record time with Upwork and keep business moving.</span>
                    </div>
                    <Row className={`${styles.sides}`}>
                        <Col lg='3' className='mb-3' >
                            <div className={`${styles.left}`}>
                                <div className={`${styles.header}`}>
                                    <img alt='' src={img} className={`${styles.photo}`} />
                                </div>
                                <div className={`${styles.user}`}>
                                    {currentUser ? <h5>welcome , {currentUser.displayName} </h5> : <h5>welcome , user </h5>}
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
                        <Col lg='6' className='mb-3' >
                            <div className={`${styles.main}`}>
                                <div className={`${styles.post}`}>
                                    <img alt='' src={currentUser ? currentUser.photoURL : user} className={`${styles.userimg}`} />
                                    <button className={`${styles.post__btn}`}>Start a post</button>
                                </div>
                                <div className={`${styles.social__btn}`}>
                                    <button className={`${styles.btns}`}>
                                        <img alt='' src={photo} className={`${styles.social__img}`} />
                                        <span className={`${styles.social__para}`}>Photo</span>
                                    </button>
                                    <button className={`${styles.btns}`}>
                                        <img alt='' src={video} className={`${styles.social__img}`} />
                                        <span className={`${styles.social__para}`}>Video</span>
                                    </button>
                                    <button className={`${styles.btns}`}>
                                        <img alt='' src={event} className={`${styles.social__img}`} />
                                        <span className={`${styles.social__para}`}>Event</span>
                                    </button>
                                    <button className={`${styles.btns}`}>
                                        <img alt='' src={artical} className={`${styles.social__img}`} />
                                        <span className={`${styles.social__para}`}>Artical</span>
                                    </button>
                                </div>
                            </div>
                            <div className={`${styles.main} ${styles.sec}`}>
                                <div className={`${styles.info}`}>
                                    <div className={`${styles.info__details}`}>
                                        <img alt='' src={currentUser ? currentUser.photoURL : user} className={`${styles.img}`} />
                                        <div className={`${styles.user__info}`}>
                                            <p>{currentUser.displayName}</p>
                                            <p>{currentUser.email}</p>
                                            <p>4/1/2002</p>
                                        </div>
                                    </div>
                                    <button className={`${styles.dot__btn}`}><img alt='' src={dot} className={`${styles.dot}`} /></button>
                                </div>
                                <p className={`${styles.post__para}`}>blablablablablabla</p>
                                <img alt='' src={post} className={`${styles.postimg}`} />
                                <button className={`${styles.reacts}`}>
                                    <img alt='' src='https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb' />
                                    <img alt='' src='https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f' />
                                    <span>75</span>
                                </button>
                                <Link to='' className={`${styles.comments}`}>2 Comments</Link>
                                <div>
                                    <button className={`${styles.reacts} ${styles.reacts__icon}`}>
                                        <img alt='' src={like} className={`${styles.social__img}`} />
                                        <span>Like</span>
                                    </button>
                                    <button className={`${styles.reacts} ${styles.reacts__icon}`}>
                                        <img alt='' src={comment} className={`${styles.social__img} ${styles.width__img}`} />
                                        <span>Comment</span>
                                    </button>
                                    <button className={`${styles.reacts} ${styles.reacts__icon}`}>
                                        <img alt='' src={share} className={`${styles.social__img} ${styles.width__img}`} />
                                        <span>Share</span>
                                    </button>
                                    <button className={`${styles.reacts} ${styles.reacts__icon}`}>
                                        <img alt='' src={send} className={`${styles.social__img} ${styles.width__img}`} />
                                        <span>Send</span>
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' className='mb-3' >
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
