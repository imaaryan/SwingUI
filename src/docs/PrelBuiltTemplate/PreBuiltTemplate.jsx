import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import "../SwingKit/Gradients/style.css"
import comingimg from "./Assets/comingsoon.webp"
import maintenceimg from "./Assets/maintenence.webp"
import BottomFooter from "../../components/BottomFooter";

const TemplateDashboard = () => {
  const { darkMode } = useTheme();

  const containerClass = `min-h-screen ${
    darkMode
      ? "bg-[var(--dark-bg)] text-[var(--color-text-dark)]"
      : "bg-[var(--light-bg)] text-[var(--color-text)]"
  } p-8`;

  const cardClass =
    "relative group border border-gray-600 rounded-xl p-6 hover:border-white hover:shadow-2xl transition duration-300 flex items-center justify-center h-72 w-full text-center";

  const titleClass =
    "text-xl font-semibold mt-4";

  const buttonGroupClass =
    "absolute inset-0 flex flex-col items-center justify-end pb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300";

  const buttonStyle1 =
    "px-5 py-2 rounded-full bg-gradient-radial from-gray-700/40 via-gray-600/10 to-transparent text-white font-medium border border-white/30 hover:bg-white hover:text-black transition-all duration-300 ease-in-out backdrop-blur-sm";
  
  const buttonStyle2 =
    "px-5 py-2 rounded-full swing-ocean-gradient hover:swing-ocean-gradient text-white font-medium hover:bg-gray-200 transition";

  // Function to handle copying code

const [copiedId, setCopiedId] = useState(null);

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1000);
  };

//code for id 1
const comingCode = ` <div class="gradient-wrapper swing-ocean-gradient-animate">
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
    </div>`;

//code for id 2
const maintenanceCode = `<div class="gradient-wrapper swing-peach-gradient-animate">
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
    </div>`

  // Array of template data with unique actions
  const templates = [
    { 
      id: 1, 
      title: "Coming Soon Page", 
      image: comingimg,
      code: comingCode,
      previewLink: "https://comingsoon.swingui.com/" 
    },
    { 
      id: 2, 
      title: "Maintenance Page", 
      image: maintenceimg,
      code: maintenanceCode,
      previewLink: "https://maintenance.swingui.com/"
    },
  ];

  return (
    <div className={containerClass}>
      <main className="rounded-2xl mt-4 p-2 max-w-[1200px] mx-auto min-h-[80dvh]">
        <h2 className="text-3xl font-semibold mb-10 text-center">Pre-Build Templates</h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {templates.map((template) => (
        <div key={template.id} className="flex flex-col">
          <div 
            className={cardClass} 
            style={{
              backgroundImage: `url(${template.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className={buttonGroupClass}>
              <div className="flex space-x-4">
                <button 
                  className={buttonStyle1}
                  onClick={() => handleCopyCode(template.code, template.id)}
                >
                  {copiedId === template.id ? "Copied!" : "Copy Code"}
                </button>
                    <a
                      href={template.previewLink}
                      target="_blank"
                      className={buttonStyle2}
                    >
                      Preview
                    </a>
                  </div>
                </div>
              </div>
              <h3 className={titleClass}>{template.title}</h3>
            </div>
          ))}
        </div>
      </main>
      <BottomFooter/>
    </div>
  );
};

export default TemplateDashboard;