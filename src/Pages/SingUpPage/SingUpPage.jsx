<<<<<<< HEAD
import { useState } from 'react';
=======
import  { useState, useEffect } from 'react';
>>>>>>> parent of d4438f0 (add fix)
import { NavLink } from 'react-router-dom';
import '../LoginPage/Login.scss';
import s from './SingUpPage.module.scss';
import { useDispatch } from 'react-redux';
import { registerAuth } from '../../Redux/Operations/authOperation';
<<<<<<< HEAD
=======
import { CSSTransition } from 'react-transition-group';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
>>>>>>> parent of bb15132 (add spinner for all pages)
import bgMobile from '../../Images/bg-mobile.png';
import bgMobile2 from '../../Images/bg-mobile2.png';
import pic1 from '../../Images/pic1.png';
import pic2 from '../../Images/pic2.png';
<<<<<<< HEAD


const SingUpPage = () => {
  const dispatch = useDispatch();

<<<<<<< HEAD
=======
  useEffect(() => {
    setTimeout(() => {
      dispatch(hideSpinner());
    }, 1500);
    return () => {
      dispatch(showSpinner());
    };
  }, []);
=======
import Spinner from '../../Components/Spinner/Spinner';

const SingUpPage = () => {
  const dispatch = useDispatch();
>>>>>>> parent of bb15132 (add spinner for all pages)
  const wait = useSelector(getWaiting);
>>>>>>> parent of d4438f0 (add fix)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameFunc = e => setName(e.target.value);
  const emailFunc = e => setEmail(e.target.value);
  const passwordFunc = e => setPassword(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    dispatch(registerAuth({ name, email, password }));
    setName('');
    setPassword('');
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <section className={s.registr_section}>
=======

    <>
      {isVisibleLoader ? (
        <Spinner />
      ) : (
        <section className={s.registr_section}>
>>>>>>> parent of d4438f0 (add fix)
=======
    <section className={s.registr_section}>
      <CSSTransition
        in={wait}
        classNames="waitingMessage"
        timeout={250}
        unmountOnExit
      >
        <Spinner />
        {/* <Loader
          className={s.waitingMessage}
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
        /> */}
      </CSSTransition>
>>>>>>> parent of bb15132 (add spinner for all pages)
      <div className={s.registr_container}>
        <h1 className={s.registr_title}>Questify</h1>
        <h2 className={s.registr_caption}>Registration</h2>
        <p className={s.registr_text}>
          Back to{' '}
<<<<<<< HEAD
          <NavLink
            exact
            to="/"
            className={s.registr_link}
            // activeClassName={s}
          >
=======
          <NavLink exact to="/" className={s.registr_link} activeClassName={s}>
>>>>>>> parent of bb15132 (add spinner for all pages)
            log in
          </NavLink>
        </p>
        <form onSubmit={btnClick}>
          <div className={s.registr_inputContainer}>
            <input
              required
              id="name"
              className={s.registr_input}
              type="text"
              value={name}
              onChange={nameFunc}
            />
            {!name && (
              <label htmlFor="name" className={s.registr_label}>
                Name
              </label>
            )}
          </div>
          <div className={s.registr_inputContainer}>
            <input
              required
              id="email"
              className={s.registr_input}
              type="text"
              value={email}
              onChange={emailFunc}
            />
            {!email && (
              <label htmlFor="email" className={s.registr_label}>
                Email
              </label>
            )}
          </div>

          <div className={s.registr_inputContainer}>
            <input
              required
              id="password"
              className={s.registr_input}
              type="password"
              value={password}
              onChange={passwordFunc}
            />
            {/* <label htmlFor="password" className={s.registr_label}>
          Password
        </label> */}
            {!password && (
              <label htmlFor="password" className={s.registr_label}>
                Password
              </label>
            )}
          </div>
          <button type="submit">Go</button>
        </form>
      </div>
      <img src={pic1} alt="background" className={s.registr_loginPic} />
      <img src={pic2} alt="background" className={s.registr_loginPicture} />
      <img src={bgMobile} alt="background" className={s.registr_bgMobile} />
      <img src={bgMobile2} alt="background" className={s.registr_bgMobile} />
    </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      )}
    </>
>>>>>>> parent of d4438f0 (add fix)
=======
>>>>>>> parent of bb15132 (add spinner for all pages)
  );
};
export default SingUpPage;
