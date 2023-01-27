import React, { render } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaFacebook, FaGithub, FaLinkedin, FaVoicemail } from 'react-icons/fa';
import { HiArchive, HiArrowCircleDown, HiArrowLeft, HiArrowNarrowRight, HiArrowSmDown, HiCode, HiOutlineMail, HiShare } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import Navbar from './Component/Navbar';
// import Home from './Component/Home';
import Image from '../src/image/image1.png'
import Image2 from '../src/image/image2.png'
import Image3 from '../src/image/image3.png'
import Image4 from '../src/image/image4.png'
import Image5 from '../src/image/image5.png'
import Image6 from '../src/image/image6.png'
import Image7 from '../src/image/image7.png'
import Image8 from '../src/image/image8.png'
import Image9 from '../src/image/image9.png'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar></Navbar>
     <Home></Home> */}
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-800 text-white text-center'>
      <ul className='hidden md:flex'>
        <li className='text-blue-200'>Home</li>
        <li className='text-yellow-100'>About</li>
        <li className='text-blue-200'>My works</li>
        <li className='text-yellow-100'>Contact</li>
      </ul>
    </div>
    <div className='w-full h-screen bg-slate-500'>
      <div className='max-w-[1000] mx-auto px-20 flex flex-col justify-center h-full'>
        <p className='text-yellow-100 sm:text-2xl'>Hi,my name</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-blue-200'>Taha kouar</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-yellow-100'>I'm a Full Stack Developer</h2>
        <p className='py-3 text-3xl sm:text-3xl font-bold text-blue-100 '>I'm a full-stack developer specializing- in building and occasionally
          designing.Currently,I'm focused on building full-stack web application
        </p><div>
          <button className=' group text-white border-2 px-6 py-3 my-2  flex items-center hover:bg-yellow-100 hover:text-gray-900 hover:border-yellow-100'> View Work
            <span className='group-hover:rotate-90'><HiArrowNarrowRight className='ml-2 mt-1 ' /></span>
          </button>
        </div>
      </div>
    </div>

    <div className='flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-800 px-4'>
          <a className='flex justify-between items-center w-full text-blue-400' href='https://www.linkedin.com/home/?originalSubdomain=ca'>
            Linkedin<FaLinkedin size={30} />
          </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-800 px-4'>
          <a className='flex justify-between items-center w-full text-gray-400' href='https://github.com/tahgak'>
            Github<FaGithub size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-800 px-4'>
          <a className='flex justify-between items-center w-full text-green-400' href='https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&ifkv=AWnogHfCm021td8wl2fSXC6CoVv1EWGWwngDY7GPjBjs-5nplADpbDLYmtCX9C_L6YfvD0x1EdecQQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin'>
            Email<HiOutlineMail size={30} />
          </a>
        </li>
      </ul>
    </div>
    <div name='about' className="w-full h-screen bg-slate-800  text-blue-200">
      <div className="flex flex-col justify-center  w-full h-full">
        <div className='flex justify-center'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-5xl font-bold inline border-b-4 border-yellow-100 px-20'> About:</p>
          </div>
          <div>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full px-20">
            <div>
              <p className='text-4xl font-bold text-yellow-100'>
                Hi,I'm taha I learn the frontend and backend in the <span className='text-orange-400'>3WA academy</span> and this website
                reunit all my works with the academy</p>
              <p className='text-4xl font-bold text-blue-200'>
                I learn a lot of new somethings in this Environment of development a full website with some technologies
              </p>
            </div>
            <div>
              <p className='text-3xl text-slate-400 font bold'>
                I'm passionate about building sofware.
                I specialize in creating software for clients
                from individuals and small-businesses
                all the way to large entreprise corporations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div name='Skills' className="w-full h-screen bg-slate-500  text-blue-200">
      <div className="flex flex-col justify-center  w-full h-full">
        <div className='flex justify-center'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-5xl font-bold inline border-b-4 border-yellow-100 px-20'> Skills:</p>
          </div>
          <div>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full px-20">
            <div>
              <p className='text-5xl font-bold text-yellow-100'>
                These are some technologies I've worked with:</p>
              <ul className='text-3xl font-bold '>
                <li className='text-orange-400 py-3'>HTML</li>
                <li className='text-blue-500 py-3'>CSS</li>
                <li className='text-yellow-300 py-3'>JAVASCRIPT</li>
                <li className='text-purple-400 py-3'>Boostrap</li>
                <li className='text-blue-300 py-3'>Reactjs</li>
                <li className='text-green-200 py-3'>taildwind</li>
                <li className='text-purple-300 py-3'>Php</li>
                <li className='text-red-600 py-3'>Laravel</li>
              </ul>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div name='works' className='w-full md:h-screen bg-slate-800'>
      <div>
        <div>
          <p className='text-5xl font-bold inline border-b-4 border-blue-200 px-20 text-yellow-100'>
            work:
          </p>
          <p className=' text-4xl font-bold text-blue-200 flex py-9 px-20'>
            Check some my recent work <HiArrowSmDown className='mt-2'></HiArrowSmDown>
          </p>
          <div className='bg-slate-800 '>
            <p className='text-4xl mb-5 px-20 text-yellow-100 font-bold '>Fish Menu:</p>
            <div className='bg-slate-800 flex'>
              <img src={Image} className='w-80 mb-10 ml-20'></img>
              <ul className=''>
                <li className='text-orange-400 font-bold text-3xl '>HTML</li>
                <li className='text-blue-500 font-bold text-3xl '>CSS</li>
                <li className='text-3xl text-blue-200'>Menu of a restaurant that specializes in very varied dishes based on fish.</li></ul></div>
            <p className='text-4xl mb-5 px-20 text-blue-200 font-bold'>Guessing game:</p>
            <div className='bg-slate-800 flex'>
              <img src={Image2} className='w-80 mb-10 ml-20'></img>
              <ul>
                <li className='text-orange-400 font-bold text-3xl'>HTML</li>
                <li className='text-blue-500 font-bold text-3xl'>CSS</li>
                <li className='text-yellow-300 font-bold text-3xl'>JAVASCRIPT</li>
                <li className='text-3xl text-slate-300'>Game based on luck and hazard, guess the number with three levels of difficulty Easy (0 to 10), medium (0 to 100), difficult (0 to 1000).</li></ul></div>
            <p className='text-4xl mb-5 px-20 text-yellow-100 font-bold'>Accordian:</p>
            <div className='bg-slate-800 flex'>
              <img src={Image4} className='w-80 mb-10 ml-20'></img>
              <ul>
                <li className='text-orange-400 font-bold text-3xl'>HTML</li>
                <li className='text-blue-500 font-bold text-3xl'>CSS</li>
                <li className='text-yellow-300 font-bold text-3xl'>JAVASCRIPT</li>
                <li className='text-3xl text-yellow-100'>Accordian a list that allows you to read the opinions of several people on a subject.</li></ul></div>
            <p className='text-4xl mb-5 px-20 text-blue-200 font-bold'>To do list: </p>
            <div className='bg-slate-800 flex'>
              <img src={Image5} className='w-80 mb-10 ml-20'></img>
              <ul>
                <li className='text-orange-400 font-bold text-3xl'>HTML</li>
                <li className='text-blue-500 font-bold text-3xl'>CSS</li>
                <li className='text-yellow-300 font-bold text-3xl'>JAVASCRIPT</li>
                <li className='text-3xl text-blue-200'>List your tasks for the future.</li></ul></div>
            <p className='text-4xl mb-5 px-20 text-yellow-100 font-bold '>BANK:</p>
            <div className='bg-slate-800 flex'>
              <img src={Image6} className='w-80 mb-10 ml-20' ></img>
              <ul>
                <li className='text-orange-400 font-bold text-3xl'>HTML</li>
                <li className='text-blue-500 font-bold text-3xl'>CSS</li>
                <li className='text-yellow-300 font-bold text-3xl'>JAVASCRIPT</li>
                <li className='text-3xl text-slate-300'>A Fictitious bank that gives the simulation of managing funds (with draw or add).</li></ul></div>
            <p className='text-4xl mb-5 px-20 text-blue-200 font-bold'>Coach:</p>
            <div className='bg-slate-800 flex'>
              <img src={Image7} className='w-80 mb-10 ml-20'></img>
              <ul>
                <li className='text-orange-400 font-bold text-3xl'>HTML</li>
                <li className='text-blue-500 font-bold text-3xl'>CSS</li>
                <li className='text-purple-400 font-bold text-3xl'>Boostrap:</li>
                <li className='text-3xl text-yellow-100'>A site that coaches you and guides you in various social topics.</li></ul></div>
            <p className='text-4xl mb-5 px-20 text-yellow-100 font-bold '>Frontend Bootcamp:</p>
            <div className='bg-slate-800 flex'>
              <img src={Image8} className='w-80 mb-10 ml-20' ></img>
              <ul>
                <li className='text-orange-400 font-bold text-3xl'>HTML</li>
                <li className='text-blue-500 font-bold text-3xl'>CSS</li>
                <li className='text-purple-400 font-bold text-3xl'>Boostrap</li>
                <li className='text-3xl text-blue-200'>A mock-up that presents you a bootcamp based on learning and developing a web page in Accelerate training.</li></ul></div>
            <p className='text-4xl mb-5 px-20 text-blue-200 font-bold'>Calcul:</p>
            <div className='bg-slate-800 flex'>
              <img src={Image9} className='w-80 mb-10 ml-20'></img>
              <ul>
                <li className='text-orange-400 font-bold text-3xl'>HTML</li>
                <li className='text-blue-500 font-bold text-3xl'>CSS</li>
                <li className='text-yellow-300 font-bold text-3xl'>JAVASCRIPT</li>
                <li className='text-3xl text-slate-300'>A virtual calculator that allows you to add, subtract, multiply, divide, in a few seconds without having it physical</li>
                </ul></div>
            <div className='bg-slate-500'>
              <ul>
                <li>
              <div name='Contact' className='w-full md:h-screen flex justify-center items-center p-4'>
                <form action="" className='flex flex-col max-w-[600px] w-full'>
                  <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 border-yellow-100 text-blue-200 text-5xl p-5'>Contact:</p>
                    <p className='text-slate-200 font-bold text-4xl p-2'>Contact me or send me a Email:<span className='text-green-400'> tahakouar@gmail.com</span></p>
                    
                  </div>
                  <input type='text' placeholder='Name' className='p-4 bg-yellow-100' />
                  <input type='Email' placeholder='Email' className='my-4 p-4 bg-blue-200' />
                  <textarea className='p-4 bg-slate-800 text-white' placeholder='Message' ></textarea>
                  <button className='text-white border-2 px-6 py-3 my-2  flex justify-center items-center hover:bg-blue-100 hover:text-gray-900 hover:border-blue-200 text-xl'>Submit
                  </button>
                </form>
              </div></li></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </React.StrictMode>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

