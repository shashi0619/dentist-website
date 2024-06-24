import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
    return (
      <>
        <section className='hero'>
          <div className='container'>
            <Heading title='Book local Dentists' subtitle='who take your insurance' />
  
            <form className='flex'>
              <div className='box'>
                <span>City/Street</span>
                <input type='text' placeholder='Location' />
              </div>
              <div className='box'>
                <span>Find</span>
                <input type='text' placeholder='Condition, procedure, doctor..' />
              </div>
              <div className='box'>
                <span>Go With</span>
                <input type='text' placeholder='Choose insurance' />
              </div>
              <div className='box'>
                <h4>Advance Filter</h4>
              </div>
              <button className='btn1'>
                <i className='fa fa-search'></i>
              </button>
            </form>
          </div>
        </section>
      </>
    )
  }
  
  export default Hero
