import React from 'react'
import './style.css'

function ComingSoon() {
  return (
   <>
 <div class="gradient-wrapper swing-ocean-gradient-animate">
      <div class="container">
        <img class="logo" src="assets/image/logo.png" alt="Logo" />

        <form class="email-form" id="email-form">
          <div class="notification-text">We'll notify you when we're live!</div>
          <input
            type="email"
            id="email"
            class="email-input"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" class="subscribe-btn">Notify Me</button>
          <div id="success-message" class="success-message">
            Thanks! We'll notify you when SwingUI launches.
          </div>
        </form>

        <div class="launching-soon">LAUNCHING ON 20TH APRIL, 8PM! 😊</div>
        <div class="countdown-container" id="countdown">
          <div class="countdown-box">
            <span id="days">00</span><span class="countdown-label">Days</span>
          </div>
          <div class="countdown-box">
            <span id="hours">00</span><span class="countdown-label">Hours</span>
          </div>
          <div class="countdown-box">
            <span id="minutes">00</span><span class="countdown-label">Min</span>
          </div>
          <div class="countdown-box">
            <span id="seconds">00</span><span class="countdown-label">Sec</span>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default ComingSoon