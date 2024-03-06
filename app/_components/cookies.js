'use client'
import {useState, useEffect, useRef} from 'react';
import {IoIosCloseCircle} from "react-icons/io";
import { motion } from "framer-motion"
import {cn} from "@/lib/utils";
function Cookies(props) {
  const descripRef = useRef();
  const [cookiessettings, setCookiessettings] = useState(false);
  const [funcCookies, setFuncCookies] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedState = localStorage.getItem('funcCookies');
      return storedState !== null ? JSON.parse(storedState) : true;
    }
    return true;
  });
  const [performCookies, setPerformCookies] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedState = localStorage.getItem('performCookies');
      return storedState !== null ? JSON.parse(storedState) : true;
    }
    return true;
  });
  const [personCookies, setPersonCookies] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedState = localStorage.getItem('personCookies');
      return storedState !== null ? JSON.parse(storedState) : true;
    }
    return true;
  });
  const [closed, setClosed] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedState = localStorage.getItem('closed');
      return storedState !== null ? JSON.parse(storedState) : false;
    }
    return false;
  });
  useEffect(() => {
    let handler = (e) => {
      if(!descripRef.current?.contains(e.target)) {
        setCookiessettings(false)
      }
    }
    document.addEventListener("mousedown", handler)
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedState = localStorage.getItem('closed');
      const storedFuncState = localStorage.getItem('funcCookies');
      const storedPerformState = localStorage.getItem('performCookies');
      const storedPersonState = localStorage.getItem('personCookies');
      if (storedState) {
        setClosed(JSON.parse(storedState));
      }
      if (storedFuncState) {
        setFuncCookies(JSON.parse(storedFuncState))
      }
      if (storedPerformState) {
        setPerformCookies(JSON.parse(storedPerformState))
      }
      if (storedPersonState) {
        setPersonCookies(JSON.parse(storedPersonState))
      }
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('closed', JSON.stringify(closed));
    localStorage.setItem('funcCookies', JSON.stringify(funcCookies))
    localStorage.setItem('personCookies', JSON.stringify(personCookies))
    localStorage.setItem('performCookies', JSON.stringify(performCookies))
  }, [closed]);
  return (
    <>
    <motion.div
      id={`cookies`}
      initial={{x: `-200%`}}
      transition={closed === false ? { delay: 2, duration: 0.3 } : {delay: 0, duration: 0.3}}
      animate={closed === false ? {x: 0} : {x: `-200%`}}
      className={cn(`absolute z-30 bottom-14 overflow-hidden left-10 right-10 bg-white text-black px-5 py-2 lg:flex lg:justify-between lg:items-center duration-300`, closed === true ? `` : ``)}>
      <div className={`pr-5 lg:pr-0`}>By clicking Accept All Cookies, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. <span onClick={() => setCookiessettings(!cookiessettings)} className={`text-sky-500 underline hover:cursor-pointer`}>Cookies Privacy Policy</span></div>
      <div className={`flex gap-2 lg:mr-32 lg:ml-0 lg:w-1/3`}>
        {/*<button className={`underline text-green-500 w-[200px]`}>Cookies Settings</button>*/}
        <button onClick={() => setClosed(!closed)} className={`bg-black text-white px-5 py-2 w-[200px] hover:text-red-800 duration-300 hover:bg-white/50 border-2 hover:border-red-500`}>Accept All Cookies</button>
      </div>
      <div className={`absolute right-0 top-0 px-2`}>
        <button onClick={() => setClosed(!closed)} ><IoIosCloseCircle className={`w-8 h-8 hover:rotate-180 duration-300`} /></button>
      </div>
    </motion.div>

  <div className={cn(` top-0 r-0 w-full h-full bg-black/80`, cookiessettings === false ? `hidden` : `absolute z-40`)}>
    <div className={`flex justify-center items-center h-full`}>
      <div ref={descripRef} className={` w-full lg:w-2/3 px-5 py-3 h-2/3 text-sm overflow-auto overflow-x-hidden bg-white text-black mx-5`}>
        <div onClick={() => setCookiessettings(!cookiessettings)} className={`float-end p-5`}><IoIosCloseCircle className={`fixed right-10 lg:right-[20%] w-7 h-7 hover:rotate-180 duration-300 cursor-pointer -mt-5`} /></div>
        <span className={`text-lg`}>YOU CHOOSE WHAT HAPPENS TO YOUR DATA</span> <br/><br/>
        <p className={`tracking-wider`}>Our Website uses cookies, which represent information about your preferences or your device and is used to make the site work as your
          expectations are. The information does not usually directly identify you, but it can give you a more personalized web experience. We respect your
          right to privacy. Thus you can choose not to allow some types of cookies. </p><br/>

        <span className={`text-lg`}>IF YOU ACCEPT ALL COOKIES</span><br/><br/>
          <ul className={`list-decimal`}>
            <li className={`mb-5 ml-6 tracking-wider`}>We can improve our website according to your interests</li>
            <li className={`mb-5 ml-6 tracking-wider`}>Your preferences may be stored for when you are back to our website</li>
            <li className={`mb-5 ml-6 tracking-wider`}>You may see advertising that is adjusted to your needs</li>
          </ul>
        <span className={`text-lg`}>ESSENTIAL COOKIES</span> <br/><br/>
        <p className={`tracking-wider`}>These cookies are required secure the functionality of our website and for necessary activities like fraud protection. These cookies do not store
          any personally identifiable information and can’t be switched off.</p> <br/>
        <input onClick={() => setFuncCookies(!funcCookies)} type="checkbox" checked={funcCookies}/> <span className={`text-lg`}>FUNCTIONAL COOKIES</span> <br/><br/>
        <p className={`tracking-wider`}>
          These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose
          services we have added to our pages. If you do not allow these cookies then, disable them, but be aware, that some or all of these services may
          not function properly.
        </p> <br/>
        <input onClick={() => setPerformCookies(!performCookies)} type="checkbox" checked={performCookies}/> <span className={`text-lg`}>PERFORMANCE MEASURING COOKIES</span> <br/><br/>
        <p className={`tracking-wider`}>
          These cookies give us a picture of your interaction with our site and what types of content are interesting to you. All information these cookies
          collect is anonymous and aggregated. By disabling these cookies we will not be aware when you have visited our site, what will make monitoring
          of its performance not possible.
        </p> <br/>

        <input onClick={() => setPersonCookies(!personCookies)} type="checkbox" checked={personCookies}/> <span className={`text-lg`}>PERSONALIZED MARKETING</span> <br/><br/>
        <p className={`tracking-wider`}>These cookies are used to provide ads by our advertising partners and other sites with marketing communications according to your interests. Our
          partners could build a profile of your interests and show you relevant adverts on other sites. They do not store directly your personal information,
          but are based on uniquely identifying your browser and internet device. To experience less ta</p>
      </div>
    </div>
  </div>
  </>
  );
}

export default Cookies;