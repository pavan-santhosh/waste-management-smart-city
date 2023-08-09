import React from 'react'
import './Styles.css';

function Login () {
  return (
    <div className='Login_dashboard'>
       <p className='Sign_in'>Sign-in</p>
       <p className='l1'>Sign in and start managing the wastes to the next level!</p>
       <div className='placement'>
            <input type='text' className='Input' placeholder='Username'></input>
            
            <input type='text' className='Input' placeholder='password'></input>

            <div className="checkbox-wrapper">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a>
                forgot password?
              </a>
            </div>

            <button className='green_button'>Login</button>
            
       </div>
       <svg width="1479" height="247" viewBox="0 0 1479 247" fill="none" xmlns="http://www.w3.org/2000/svg" className='design'>
         <g id="Vectors">
            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M-22 0L50.4609 9.28035C124.289 18.5607 269.211 37.1214 415.5 68.5318C561.789 100.656 706.711 146.344 853 155.624C999.289 164.905 1144.21 137.064 1290.5 128.497C1436.79 119.217 1581.71 128.497 1655.54 132.78L1728 137.064V247H1655.54C1581.71 247 1436.79 247 1290.5 247C1144.21 247 999.289 247 853 247C706.711 247 561.789 247 415.5 247C269.211 247 124.289 247 50.4609 247H-22V0Z" fill="#20DF7F" fill-opacity="0.8"/>
            <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M-22 98.8L36.3333 118.56C94.6667 138.32 211.333 177.84 328 167.96C444.667 158.08 561.333 98.8 678 59.28C794.667 19.76 911.333 0 1028 0C1144.67 0 1261.33 19.76 1378 54.34C1494.67 88.92 1611.33 138.32 1669.67 163.02L1728 187.72V247H1669.67C1611.33 247 1494.67 247 1378 247C1261.33 247 1144.67 247 1028 247C911.333 247 794.667 247 678 247C561.333 247 444.667 247 328 247C211.333 247 94.6667 247 36.3333 247H-22V98.8Z" fill="#224957" fill-opacity="0.8"/>
         </g>
        </svg>
    </div>
  )
}

export default Login
