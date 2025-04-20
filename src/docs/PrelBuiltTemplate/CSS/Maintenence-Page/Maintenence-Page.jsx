import React from 'react'
import './style.css'

const MaintenencePage = () => {
  return (
    <>
<div class="gradient-wrapper swing-peach-gradient-animate">
      <div class="container">
        <img class="logo" src="assets/image/logo.png" alt="SwingUI Logo" />

        <h1 class="maintenance-title">We're Making Things Better!</h1>

        <form class="email-form" id="email-form">
          <div class="notification-text">Get notified when we're back online</div>
          <input
            type="email"
            id="email"
            class="email-input"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" class="subscribe-btn">Notify Me</button>
          <div id="success-message" class="success-message">
            Thanks! We'll let you know when we're back.
          </div>
        </form>

        <div class="social-links">
          <a href="#" class="social-link" aria-label="Twitter">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Email">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
</>
  )
}

export default MaintenencePage