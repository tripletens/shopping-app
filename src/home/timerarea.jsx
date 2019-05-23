import React from 'react';

function TimerArea() {
  return (
    <react-fragment> 
        <section class="timer_area">
            <div class="container">
                <div class="main_title">
                    <h2>Exclusive Hot Deal Ends Soon!</h2>
                    <p>Who are in extremely love with eco friendly system.</p>
                    <a class="main_btn" href="#">Shop Now</a>
                </div>
                <div class="timer_inner">
                    <div id="timer" class="timer" style={{opacity: "1"}}>
                        <div class="timer__section days">
                            <div class="timer__number">09</div>
                            <div class="timer__label">days</div>
                        </div>
                        <div class="timer__section hours">
                            <div class="timer__number">17</div>
                            <div class="timer__label">hours</div>
                        </div>
                        <div class="timer__section minutes">
                            <div class="timer__number">13</div>
                            <div class="timer__label">Minutes</div>
                        </div>
                        <div class="timer__section seconds">
                            <div class="timer__number">11</div>
                            <div class="timer__label">seconds</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </react-fragment>
  );
}

export default TimerArea;
