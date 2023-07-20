import React from 'react';
import img1 from '../images/ironhack-logo-xs.jpg';
import img2 from '../images/menu-top-xs.jpg';
import img3 from '../images/icon1.jpg';
import img4 from '../images/icon2.jpg';
import img5 from '../images/icon3.jpg';
import img6 from '../images/icon4.jpg';



function MainPage(){
    return (
        <main>

            <div class= "color_main">
                <img alt='logo' src={img1}></img>
                <img alt='menu' src={img2}></img>
            </div>

            <h2>Say hello to ReactJS</h2>
            <h5>You will learn how to use
            the most popular frontend library,
            and become a super Ninja developer.</h5>

            <button> Awesome! </button>

            <section>
            <div>
                <img alt='img1' src={img3}></img>
                <h4>Declarative</h4>
                <h6>React makes it painless to create interactive UIs.</h6>
            </div>
            
            <div>
                <img alt='img2' src={img4}></img>
                <h4>Components</h4>
                <h6>Build encapsulated components that manage their state</h6>
            </div>

            <div>
                <img alt='img3' src={img5}></img>
                <h4>Single-Way</h4>
                <h6>A set of immutable values are passed to the component's.</h6>
            </div>

            <div>
                <img alt='img4' src={img6}></img>
                <h4>JSX</h4>
                <h6>Statically-typed, designed to run on modern browsers.</h6>
            </div>
            </section>

        </main>
    )
}

export default MainPage;