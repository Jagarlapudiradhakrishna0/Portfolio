import React from 'react'

interface LogoProps {
  name: string
  className?: string
  size?: number
}

export const TechLogo: React.FC<LogoProps> = ({ name, className = '', size = 48 }) => {
  const norm = name.toLowerCase().trim()

  // Python
  if (norm.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M63.5 12C41.2 12 42.6 21.7 42.6 21.7l.1 10.1h21.2v3.1H32.7S19 33.4 19 55.6c0 22.2 11.9 21.4 11.9 21.4h7.1v-10s-.4-12 11.9-12h20.5s11.5-.2 11.5-11.2V23.5S83.2 12 63.5 12zm-12 6.8a3.7 3.7 0 110 7.4 3.7 3.7 0 010-7.4z"
          fill="url(#py-grad-blue)"
        />
        <path
          d="M64.5 116c22.3 0 20.9-9.7 20.9-9.7l-.1-10.1H64.1v-3.1h31.2s13.7 1.5 13.7-20.7c0-22.2-11.9-21.4-11.9-21.4h-7.1v10s.4 12-11.9 12H57.6s-11.5.2-11.5 11.2v20.4s-1.3 11.4 18.4 11.4zm12-6.8a3.7 3.7 0 110-7.4 3.7 3.7 0 010-7.4z"
          fill="url(#py-grad-yellow)"
        />
        <defs>
          <linearGradient id="py-grad-blue" x1="19" y1="12" x2="83" y2="77" gradientUnits="userSpaceOnUse">
            <stop stopColor="#387eb8" />
            <stop offset="1" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="py-grad-yellow" x1="46" y1="52" x2="109" y2="116" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffe873" />
            <stop offset="1" stopColor="#ffd43b" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  // Java
  if (norm.includes('java') && !norm.includes('javascript')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M48.2 88.5c11.5 1.5 23.3 1.7 34.6-.3 3.6-.6 7.2-1.6 10.4-3.2.7-.4 1.4-.7 1.8-.3.4.4.1 1-.3 1.5-6.8 7.4-16.8 11-26.7 11.2-8.3.2-16.7-1.8-23.7-6.2-1.3-.8-2.5-1.7-3.7-2.6-.6-.5-.6-1.1-.1-1.5.6-.4 1.2-.1 1.7.3 4.6 3.1 10.4 4.8 16 5.3v-4.2z"
          fill="#5382a1"
        />
        <path
          d="M44.4 72.8c13 2.1 26.5 2 39.3-.5 4.3-.8 8.6-2.2 12.3-4.4.8-.5 1.6-.9 2.1-.4.5.5.1 1.2-.3 1.7-8.1 8.8-19.8 13-31.5 13.2-9.8.2-19.6-2.1-27.9-7.3-1.6-1-3-2-4.4-3.1-.7-.6-.7-1.3-.1-1.8.7-.5 1.4-.1 2 .4 5.3 3.7 12 5.7 18.5 6.4v-4.2z"
          fill="#e76f00"
        />
        <path
          d="M62.6 18.8c4.2 4.8 1.4 10.4-.9 15.2-2.9 6-6.4 11.7-8.1 18.2-2.3 8.8.8 17.5 7.9 22.8.9.7 1.8 1.2 2.3 2.1.6 1.1-.1 2.2-1.1 2.5-1.2.3-2.3-.3-3.2-1-8.2-6.5-11.8-16.6-9.5-26.8 1.9-8.4 6.7-15.6 10.6-23.2 1.3-2.6 2.6-5.3 2-8.3 0-.5 0-1.1 0-1.5z"
          fill="#5382a1"
        />
        <path
          d="M74.1 32.7c3.4 3.6 1.1 7.8-.7 11.4-2.3 4.5-5.1 8.8-6.5 13.7-1.8 6.6.6 13.2 6.3 17.2.7.5 1.4.9 1.8 1.6.5.8-.1 1.7-.9 1.9-1 .2-1.8-.2-2.5-.8-6.6-4.9-9.4-12.5-7.6-20.2 1.5-6.3 5.3-11.7 8.5-17.4 1-2 2.1-4 1.6-6.3 0-.4 0-.8 0-1.1z"
          fill="#e76f00"
        />
        <path
          d="M36.2 104.3c16.3 4.2 33.6 4.4 50.1.7 4.9-1.1 9.7-2.7 14.2-5.1.7-.4 1.3-.8 1.7-.4.5.5.1 1.2-.3 1.7-10.2 9.7-24.2 14.6-38 14.7-11.3.1-22.8-2.9-32.3-9-1.7-1.1-3.3-2.3-4.8-3.6-.6-.5-.6-1.2-.1-1.7.6-.5 1.3-.2 1.9.3 6.1 4.4 13.7 6.8 21.3 7.8v-5.4z"
          fill="#5382a1"
        />
      </svg>
    )
  }

  // JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <rect width="128" height="128" rx="20" fill="#F7DF1E" />
        <path
          d="M37.5 106.3c3.8 2.3 8.3 3.8 13.3 3.8 12.3 0 20.2-6.1 20.2-20.8V44.2h-15v45.1c0 7.4-3.4 10.3-9 10.3-3.8 0-6.8-1.5-8.8-3l-.7 9.7zm43.1 3.5c5.3 2.6 12.3 4.2 19.3 4.2 17.6 0 28.1-8.8 28.1-24.6 0-14.3-8.8-20.4-20.9-25.6-8.1-3.6-12.7-6.7-12.7-12.7 0-5.1 4-9.3 11-9.3 6.2 0 10.8 2.1 14 4.4l4.2-10.4c-4.4-2.6-10.8-4.2-18.4-4.2-16.7 0-26.6 9.5-26.6 23.3 0 14.7 9.5 21.1 22.2 26.5 8.1 3.6 11.6 7.4 11.6 13.1 0 6.6-5.3 10.7-13.3 10.7-7.7 0-13.6-2.8-17.8-6.1l-4.7 10.7z"
          fill="#000000"
        />
      </svg>
    )
  }

  // TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path
          d="M20.5 45.4h42.2v11.8H48.4v48.6H34.8V57.2H20.5V45.4zm54.3 40.5c3.8 3.5 9.3 5.9 15.6 5.9 7.4 0 11.6-3.8 11.6-9.1 0-5.4-3.8-8.2-13.4-12-12.8-4.9-19-10.8-19-21.7 0-12.5 10.1-22.1 26.2-22.1 8.5 0 15.6 2.7 20.3 6.4l-4.4 10.9c-4.1-2.9-9.1-4.7-14.8-4.7-7.2 0-11 3.4-11 8.2 0 5 3.7 7.3 13.8 11.5 13.4 5.3 18.6 11.4 18.6 22.3 0 13.6-10.6 23.3-27.8 23.3-9.5 0-18.4-3.5-23.7-8.3l4.6-11.2z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // React
  if (norm.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <ellipse cx="64" cy="64" rx="14" ry="14" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="5.5" fill="none">
          <ellipse cx="64" cy="64" rx="54" ry="20" />
          <ellipse cx="64" cy="64" rx="54" ry="20" transform="rotate(60 64 64)" />
          <ellipse cx="64" cy="64" rx="54" ry="20" transform="rotate(120 64 64)" />
        </g>
      </svg>
    )
  }

  // HTML5
  if (norm.includes('html')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <path d="M19.4 13.6L29 114.4 64 124l35-9.6 9.6-100.8H19.4z" fill="#E34F26" />
        <path d="M64 22.4v91.7l26.2-7.3 7.8-84.4H64z" fill="#EF652A" />
        <path
          d="M64 45.4h-19l1.3 14.8H64v14.7H47.6l1.3 15.3 15.1 4.1v15.2l-28.7-8-3.4-38.3h32.1V45.4zm0-23v14.7H34.2L32.9 22.4H64z"
          fill="#EBEBEB"
        />
        <path
          d="M64 45.4h19l-1.8 20.3H64v14.7h16l-1.5 17.1-10.5 2.8v15.2l25.8-7.1 3.5-39.7H64V45.4zm0-23h31.2l-1.3 14.7H64V22.4z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // CSS3
  if (norm.includes('css')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <path d="M19.4 13.6L29 114.4 64 124l35-9.6 9.6-100.8H19.4z" fill="#1572B6" />
        <path d="M64 22.4v91.7l26.2-7.3 7.8-84.4H64z" fill="#33A9DC" />
        <path
          d="M64 45.4h-19l1.3 14.8H64v14.7H47.6l1.3 15.3 15.1 4.1v15.2l-28.7-8-3.4-38.3h32.1V45.4zm0-23v14.7H34.2L32.9 22.4H64z"
          fill="#EBEBEB"
        />
        <path
          d="M64 45.4h19l-1.8 20.3H64v14.7h16l-1.5 17.1-10.5 2.8v15.2l25.8-7.1 3.5-39.7H64V45.4zm0-23h31.2l-1.3 14.7H64V22.4z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // Node.js
  if (norm.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M64 14.5L18.5 40.8v52.6L64 119.5l45.5-26.1V40.8L64 14.5z"
          fill="#339933"
        />
        <path
          d="M64 24.3l37.2 21.4v42.8L64 109.9 26.8 88.5V45.7L64 24.3z"
          fill="#215732"
        />
        <path
          d="M64 36.2l26.9 15.5v31l-26.9 15.5-26.9-15.5v-31L64 36.2z"
          fill="#5FA04E"
        />
        <path
          d="M58.5 73.2c-4.8 0-8.2-2.8-8.2-8.2V52h6.5v12.7c0 2.2 1.4 3.3 3.3 3.3 2 0 3.3-1.1 3.3-3.3V52h6.5v13c0 5.4-3.4 8.2-11.4 8.2zm19.8-7.2c2.5 1.5 5.8 2.2 8.7 2.2 4.1 0 6.2-1.6 6.2-4.1 0-2.4-1.8-3.5-5.6-4.6-5.8-1.7-9.5-3.8-9.5-8.7 0-4.8 4.2-8.4 10.6-8.4 3.2 0 6.2.7 8.5 2.1l-2.2 4.3c-1.8-1-4.2-1.6-6.3-1.6-3.1 0-4.9 1.4-4.9 3.5 0 2.1 1.7 3.1 5.3 4.1 6.1 1.7 9.8 3.9 9.8 9.2 0 5.3-4.3 8.8-12 8.8-3.7 0-7.3-.9-10.2-2.5l1.6-4.3z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // Express.js
  if (norm.includes('express')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <rect width="128" height="128" rx="20" fill="#181822" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <path
          d="M32 74c2-8 8-18 20-18 10 0 16 6 18 13h-38zm38-2c0-12-8-22-22-22-16 0-26 12-26 26 0 15 10 26 27 26 12 0 20-6 24-14h-10c-3 5-8 8-14 8-9 0-16-6-17-15h38v-9zM76 43l13 22 13-22h12L96 68l18 26h-13l-12-22-12 22H64l18-26-17-25h11z"
          fill="#60A5FA"
        />
      </svg>
    )
  }

  // MongoDB
  if (norm.includes('mongo')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M62.6 13.8s-3.5 3.3-7.5 8.7C46.3 34.3 32 57.5 32 77.2c0 23.3 17.5 37.6 30.7 41.5.7.2 1.3-.3 1.3-1V14.8c0-.7-.9-1.3-1.4-1z"
          fill="#47A248"
        />
        <path
          d="M65.4 13.8s3.5 3.3 7.5 8.7c8.8 11.8 23.1 35 23.1 54.7 0 23.3-17.5 37.6-30.7 41.5-.7.2-1.3-.3-1.3-1V14.8c0-.7.9-1.3 1.4-1z"
          fill="#499D4A"
        />
        <path
          d="M64.2 119.8c-.3 0-.6-.2-.7-.5-.9-2.3-2.1-5.1-3.2-8.3-.3-.8.2-1.6 1-1.8.8-.3 1.6.2 1.8 1 1 3 2.1 5.7 2.9 7.8.3.8-.2 1.6-1 1.8h-.8z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // AWS Cloud
  if (norm.includes('aws')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M44.2 60.8c0 4.1-1.1 7.2-3.4 9.4-2.3 2.2-5.7 3.3-10.2 3.3-3.6 0-6.8-.7-9.5-2.2v-7.1c2.7 1.9 5.6 2.8 8.8 2.8 2.2 0 3.9-.5 5-1.5 1.1-1 1.7-2.6 1.7-4.6V39.2h7.6v21.6zm23.2 12.1h-7.6V39.2h7.6v33.7zm28.7-2.7c-2.4 2-5.8 3-10.3 3-4.5 0-7.9-1-10.3-3.1-2.4-2.1-3.6-5.1-3.6-9.1V39.2h7.6v19.8c0 2.3.5 4 1.6 5.1 1.1 1.1 2.6 1.6 4.7 1.6 2 0 3.6-.5 4.7-1.6 1.1-1.1 1.6-2.8 1.6-5.1V39.2h7.6v21.9c0 4-1.2 7-3.6 9z"
          fill="#FFFFFF"
        />
        <path
          d="M24 87.2c26.5 14.5 58.2 13.8 80-.4.8-.5 1.7.3 1.3 1.1-3.6 7.4-29.2 18.5-54.8 14.7-12.7-1.9-24.8-7.9-27.8-14-.3-.6.4-1.8 1.3-1.4z"
          fill="#FF9900"
        />
        <path
          d="M106.8 85.3l-10.6-2.5c-.8-.2-1.2.6-.7 1.3 2.1 2.8 5.7 7.7 5.7 7.7s-5.8 1.7-9.6 2.4c-.8.1-1 .9-.4 1.4 3.7 3.2 17.5 4.3 17.5 4.3s-1-13.3-1.9-14.6z"
          fill="#FF9900"
        />
      </svg>
    )
  }

  // Git / GitHub
  if (norm.includes('git') && !norm.includes('github') && !norm.includes('copilot')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M121.5 56.6L71.4 6.5c-4.4-4.4-11.5-4.4-15.9 0L42.8 19.2l18.4 18.4c4.1-1.4 8.9-.4 12.1 2.8 3.3 3.3 4.2 8.2 2.6 12.4l17.8 17.8c4.2-1.6 9.1-.7 12.4 2.6 4.7 4.7 4.7 12.3 0 17-4.7 4.7-12.3 4.7-17 0-3.5-3.5-4.3-8.7-2.5-13l-16.6-16.6v34.8c1.3.8 2.5 1.8 3.5 2.8 4.7 4.7 4.7 12.3 0 17-4.7 4.7-12.3 4.7-17 0-4.7-4.7-4.7-12.3 0-17 1.3-1.3 2.8-2.3 4.5-3v-35.8c-1.7-.7-3.2-1.7-4.5-3-3.5-3.5-4.3-8.8-2.3-13.2L36 26 6.5 55.5c-4.4 4.4-4.4 11.5 0 15.9l50.1 50.1c4.4 4.4 11.5 4.4 15.9 0l49-49c4.4-4.4 4.4-11.5 0-15.9z"
          fill="#F05032"
        />
      </svg>
    )
  }

  // GitHub
  if (norm.includes('github') && !norm.includes('copilot')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64 8C32.8 8 7.5 33.3 7.5 64.5c0 24.9 16.2 46.1 38.6 53.6 2.8.5 3.9-1.2 3.9-2.7v-10.5c-15.7 3.4-19-6.7-19-6.7-2.6-6.5-6.3-8.3-6.3-8.3-5.1-3.5.4-3.4.4-3.4 5.7.4 8.6 5.8 8.6 5.8 5 8.6 13.2 6.1 16.4 4.7.5-3.6 2-6.1 3.6-7.5-12.5-1.4-25.7-6.3-25.7-27.9 0-6.2 2.2-11.2 5.8-15.1-.6-1.4-2.5-7.2.6-14.9 0 0 4.7-1.5 15.5 5.8 4.5-1.3 9.4-1.9 14.2-1.9 4.8 0 9.7.6 14.2 1.9 10.7-7.3 15.4-5.8 15.4-5.8 3.1 7.7 1.2 13.5.6 14.9 3.6 3.9 5.8 8.9 5.8 15.1 0 21.7-13.2 26.4-25.8 27.8 2 1.8 3.9 5.2 3.9 10.4v15.5c0 1.5 1 3.3 3.9 2.7 22.4-7.5 38.5-28.7 38.5-53.6C120.5 33.3 95.2 8 64 8z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // Linux / Unix
  if (norm.includes('linux') || norm.includes('unix')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M63.7 14c-17.5 0-24 16.3-24 30.6 0 7.8 1.4 20.3-4.5 27.1-5.1 5.9-13.6 8.9-13.6 18 0 10.7 10.2 17.5 21.8 19.3 6.9 1.1 13.5 1.5 20.3 1.5 6.8 0 13.4-.4 20.3-1.5 11.6-1.8 21.8-8.6 21.8-19.3 0-9.1-8.5-12.1-13.6-18-5.9-6.8-4.5-19.3-4.5-27.1 0-14.3-6.5-30.6-24-30.6z"
          fill="#000000"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="3"
        />
        <path
          d="M64 42c-12 0-18 10-18 24 0 14 6 28 18 28s18-14 18-28c0-14-6-24-18-24z"
          fill="#FFFFFF"
        />
        <ellipse cx="56" cy="36" rx="3.5" ry="5.5" fill="#000000" />
        <ellipse cx="72" cy="36" rx="3.5" ry="5.5" fill="#000000" />
        <ellipse cx="57" cy="35" rx="1.2" ry="2" fill="#FFFFFF" />
        <ellipse cx="73" cy="35" rx="1.2" ry="2" fill="#FFFFFF" />
        <path
          d="M57 43c2.5 3 11.5 3 14 0 3.5 4-1.5 9-7 9s-10.5-5-7-9z"
          fill="#FFA500"
        />
        <path
          d="M32 104c-8 0-14 4-14 9 0 4 8 7 19 6 7-.6 13-4 13-8s-8-7-18-7zm64 0c8 0 14 4 14 9 0 4-8 7-19 6-7-.6-13-4-13-8s8-7 18-7z"
          fill="#FFA500"
        />
      </svg>
    )
  }

  // GitHub Copilot
  if (norm.includes('copilot')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <rect width="128" height="128" rx="28" fill="#171B21" stroke="rgba(96,165,250,0.4)" strokeWidth="2.5" />
        <path
          d="M38 52c0-14.4 11.6-26 26-26s26 11.6 26 26v24c0 14.4-11.6 26-26 26s-26-11.6-26-26V52z"
          fill="url(#copilot-grad)"
        />
        <ellipse cx="52" cy="58" rx="5.5" ry="7.5" fill="#000000" />
        <ellipse cx="76" cy="58" rx="5.5" ry="7.5" fill="#000000" />
        <path
          d="M53 76c3.5 3.5 18.5 3.5 22 0"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="copilot-grad" x1="38" y1="26" x2="90" y2="102" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  // Machine Learning
  if (norm.includes('machine learning') || norm === 'ml') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <circle cx="64" cy="64" r="54" fill="rgba(59,130,246,0.08)" stroke="rgba(96,165,250,0.35)" strokeWidth="2" />
        {/* Nodes */}
        <line x1="32" y1="42" x2="64" y2="28" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="4 2" />
        <line x1="32" y1="42" x2="64" y2="64" stroke="#3B82F6" strokeWidth="2.5" />
        <line x1="32" y1="86" x2="64" y2="64" stroke="#3B82F6" strokeWidth="2.5" />
        <line x1="32" y1="86" x2="64" y2="100" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="4 2" />
        <line x1="64" y1="28" x2="96" y2="64" stroke="#60A5FA" strokeWidth="2.5" />
        <line x1="64" y1="64" x2="96" y2="64" stroke="#60A5FA" strokeWidth="3" />
        <line x1="64" y1="100" x2="96" y2="64" stroke="#60A5FA" strokeWidth="2.5" />

        <circle cx="32" cy="42" r="8" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="2" />
        <circle cx="32" cy="86" r="8" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="2" />
        <circle cx="64" cy="28" r="9" fill="#2563EB" stroke="#93C5FD" strokeWidth="2.5" />
        <circle cx="64" cy="64" r="11" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="3" />
        <circle cx="64" cy="100" r="9" fill="#2563EB" stroke="#93C5FD" strokeWidth="2.5" />
        <circle cx="96" cy="64" r="10" fill="#60A5FA" stroke="#FFFFFF" strokeWidth="3" />
      </svg>
    )
  }

  // Deep Learning
  if (norm.includes('deep learning') || norm === 'dl') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <rect width="128" height="128" rx="24" fill="rgba(30,58,138,0.15)" stroke="rgba(96,165,250,0.3)" strokeWidth="2" />
        {/* Layer connections */}
        <g stroke="#3B82F6" strokeWidth="1.8" opacity="0.65">
          <line x1="28" y1="38" x2="52" y2="28" />
          <line x1="28" y1="38" x2="52" y2="52" />
          <line x1="28" y1="38" x2="52" y2="76" />
          <line x1="28" y1="64" x2="52" y2="52" />
          <line x1="28" y1="64" x2="52" y2="76" />
          <line x1="28" y1="90" x2="52" y2="76" />
          <line x1="28" y1="90" x2="52" y2="100" />
          <line x1="52" y1="28" x2="76" y2="44" />
          <line x1="52" y1="52" x2="76" y2="44" />
          <line x1="52" y1="76" x2="76" y2="84" />
          <line x1="52" y1="100" x2="76" y2="84" />
          <line x1="76" y1="44" x2="100" y2="64" />
          <line x1="76" y1="84" x2="100" y2="64" />
        </g>
        {/* Layer 1 */}
        <circle cx="28" cy="38" r="6" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2" />
        <circle cx="28" cy="64" r="6" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2" />
        <circle cx="28" cy="90" r="6" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2" />
        {/* Layer 2 */}
        <circle cx="52" cy="28" r="6.5" fill="#2563EB" stroke="#93C5FD" strokeWidth="2" />
        <circle cx="52" cy="52" r="6.5" fill="#2563EB" stroke="#93C5FD" strokeWidth="2" />
        <circle cx="52" cy="76" r="6.5" fill="#2563EB" stroke="#93C5FD" strokeWidth="2" />
        <circle cx="52" cy="100" r="6.5" fill="#2563EB" stroke="#93C5FD" strokeWidth="2" />
        {/* Layer 3 */}
        <circle cx="76" cy="44" r="7" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="76" cy="84" r="7" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
        {/* Output */}
        <circle cx="100" cy="64" r="8.5" fill="#60A5FA" stroke="#FFFFFF" strokeWidth="2.5" />
      </svg>
    )
  }

  // Computer Vision
  if (norm.includes('computer vision') || norm.includes('vision') || norm.includes('opencv')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <rect width="128" height="128" rx="24" fill="rgba(30,58,138,0.12)" stroke="rgba(96,165,250,0.3)" strokeWidth="2" />
        {/* Corner Reticle Bounds */}
        <path d="M26 40V26h14" stroke="#60A5FA" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M102 40V26H88" stroke="#60A5FA" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M26 88v14h14" stroke="#60A5FA" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M102 88v14H88" stroke="#60A5FA" strokeWidth="3.5" strokeLinecap="round" />
        {/* Eye Aperture */}
        <path
          d="M28 64s14-22 36-22 36 22 36 22-14 22-36 22-36-22-36-22z"
          stroke="#93C5FD"
          strokeWidth="3.5"
          fill="rgba(59,130,246,0.15)"
        />
        <circle cx="64" cy="64" r="14" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="3" />
        <circle cx="64" cy="64" r="6" fill="#FFFFFF" />
        <line x1="64" y1="36" x2="64" y2="44" stroke="#60A5FA" strokeWidth="2.5" />
        <line x1="64" y1="84" x2="64" y2="92" stroke="#60A5FA" strokeWidth="2.5" />
        <line x1="36" y1="64" x2="44" y2="64" stroke="#60A5FA" strokeWidth="2.5" />
        <line x1="84" y1="64" x2="92" y2="64" stroke="#60A5FA" strokeWidth="2.5" />
      </svg>
    )
  }

  // NLP
  if (norm.includes('nlp') || norm.includes('natural language')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <rect width="128" height="128" rx="24" fill="rgba(30,58,138,0.15)" stroke="rgba(96,165,250,0.3)" strokeWidth="2" />
        {/* Speech Matrix / Soundwave AI */}
        <path
          d="M24 38c0-7.7 6.3-14 14-14h52c7.7 0 14 6.3 14 14v40c0 7.7-6.3 14-14 14H54L34 104V92h-4c-7.7 0-14-6.3-14-14V38z"
          fill="rgba(29,78,216,0.25)"
          stroke="#60A5FA"
          strokeWidth="2.5"
        />
        {/* AI Audio Spectrogram bars */}
        <line x1="42" y1="58" x2="42" y2="62" stroke="#93C5FD" strokeWidth="4" strokeLinecap="round" />
        <line x1="52" y1="48" x2="52" y2="72" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
        <line x1="62" y1="40" x2="62" y2="80" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        <line x1="72" y1="44" x2="72" y2="76" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
        <line x1="82" y1="52" x2="82" y2="68" stroke="#93C5FD" strokeWidth="4" strokeLinecap="round" />
        <line x1="92" y1="58" x2="92" y2="62" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }

  // RPA / Robotics Process Automation
  if (norm.includes('rpa') || norm.includes('robotic') || norm.includes('automation')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
        <rect width="128" height="128" rx="24" fill="rgba(30,58,138,0.15)" stroke="rgba(96,165,250,0.3)" strokeWidth="2" />
        {/* Gear / Automation cog */}
        <path
          d="M64 44a20 20 0 100 40 20 20 0 000-40zm0 30a10 10 0 110-20 10 10 0 010 20z"
          fill="#60A5FA"
        />
        {/* Circuit arms */}
        <path
          d="M64 22v14M64 92v14M22 64h14M92 64h14M34 34l10 10M84 84l10 10M34 94l10-10M84 44l10-10"
          stroke="#93C5FD"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="64" cy="18" r="4" fill="#FFFFFF" />
        <circle cx="64" cy="110" r="4" fill="#FFFFFF" />
        <circle cx="18" cy="64" r="4" fill="#FFFFFF" />
        <circle cx="110" cy="64" r="4" fill="#FFFFFF" />
      </svg>
    )
  }

  // Fallback tech icon
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <rect width="128" height="128" rx="24" fill="rgba(59,130,246,0.15)" stroke="#3B82F6" strokeWidth="2" />
      <path d="M42 46l-18 18 18 18M86 46l18 18-18 18M70 38L58 90" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export default TechLogo
