import React from 'react'
import './Navbar.css';
import CountUp from 'react-countup';

function Body() {

    return (
        <>
            <div className='hello'>
                <div className='bod'>
                    <div className='text'>
                        <h1>Let's Take Your<br /> <mark>Business</mark> to the Next<br />Level</h1>
                    </div>
                    <div>
                        <p1>Lorem ipsum dolor sit amet,consectetur<br />adipiscing,sed do..</p1>
                    </div>
                    <div id='btn'>
                        <button className='btn2'>Get Start</button>
                        <button className='btn3'>Learn More</button>
                    </div>
                </div>

                <div className='ph' >
                    <img  className='photo' src="./image/Rocket.jpg" />
                </div>
            </div>

            <footer class='last'>
                <div id='la1'>
                    <div class='num'>
                        <CountUp start={0} end={5209}>+</CountUp>
                        <CountUp start={0} end={2456}>+</CountUp>
                        <CountUp start={0} end={3678}>+</CountUp>
                        <CountUp start={0} end={2895}>+</CountUp>
                    </div>
                    <div class='nmm'>
                        <p1 class='nam'>Link Optimized</p1>
                        <p1 class='nam'>Happy Customers</p1>
                        <p1 class='nam'>Websites Improved</p1>
                        <p1 class='nam'>Active Account </p1>

                    </div>
                </div>
            </footer>
        </>


    );
}

export default Body