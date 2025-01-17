import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">5+ Years</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i> 
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10+ Projects</span>
        </div>

        <div className="about__box">
            <i class='bx bxs-hot about__icon'></i>
            <h3 className="about__title">Dedication</h3>
            <span className="about__subtitle">To the Moon</span>
        </div>
    </div>
  )
}

export default Info