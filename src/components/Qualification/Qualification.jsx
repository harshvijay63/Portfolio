import React, { useState } from 'react'
import './Qualification.css'

const Qualification = () => {

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={toggleState === 1
              ? 'qualification__button qualification__active button--flex'
              : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className={toggleState === 2
            ? 'qualification__button qualification__active button--flex'
            : 'qualification__button button--flex'}
               onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        {/*CONTAINER OF CARDS*/}
        <div className="qualification__sections">
          <div className={toggleState === 1
            ? 'qualification__content qualification__content-active'
            : 'qualification__content'}>
            {/*DATA 1 EDUCATION*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Master's Of Computer Application(M.C.A)</h3>
                <span className="qualification__subtitle">Vellore Institute Of Technology</span>

                <div className="qualification__calendar-alt">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*DATA 2 EDUCATION*/}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Bachelor's Of Computer Application(B.C.A)</h3>
                <span className="qualification__subtitle">University Of Rajasthan</span>

                <div className="qualification__calendar-alt">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>
            </div>

          </div>

          <div className={toggleState === 2
            ? 'qualification__content qualification__content-active'
            : 'qualification__content'}>
            {/*DATA 1 Experience*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">HacktoberFest'22 </h3>
                <span className="qualification__subtitle">Open Source Contributor</span>

                <div className="qualification__calendar-alt">
                  <i className="uil uil-calendar-alt"></i> Oct 2022 - Oct 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*DATA 2 Experience*/}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Virtual Internship</h3>
                <span className="qualification__subtitle">SmartInternz - Google Supported</span>

                <div className="qualification__calendar-alt">
                  <i className="uil uil-calendar-alt"></i> Aug 2022 - Sep 2022
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Qualification