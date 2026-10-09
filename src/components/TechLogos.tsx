import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-6 h-6" }) => {
  const iconKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (iconKey) {
    case 'react':
    case 'reactjs':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="React">
          <path d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-9.5c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 15c-4.97 0-9-1.79-9-4s4.03-4 9-4 9 1.79 9 4-4.03 4-9 4z"/>
        </svg>
      );
    case 'nextjs':
    case 'next':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Next.js">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.768 14.77l-4.524-5.836V16H9.77V8.5h1.474l4.524 5.837V8.5h1.474v8.27h-1.474z"/>
        </svg>
      );
    case 'angular':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Angular">
          <path d="M12 2L2 5.5l1.5 13L12 22l8.5-3.5 1.5-13L12 2zm0 3.2l5.3 11.8h-1.8l-1.1-2.7H9.6L8.5 17H6.7L12 5.2zm-1.8 7.3h3.6L12 8.5l-1.8 4z"/>
        </svg>
      );
    case 'vue':
    case 'vuejs':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Vue.js">
          <path d="M2 3h3.5L12 15 18.5 3H22L12 21 2 3zm4.5 0h3L12 7.5 14.5 3h3L12 12.5 6.5 3z"/>
        </svg>
      );
    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="TypeScript">
          <path d="M3 3h18v18H3V3zm10.7 13.5c1.2 0 2.2-.6 2.8-1.5l-1.4-.9c-.3.5-.8.8-1.4.8-.9 0-1.4-.5-1.4-1.2 0-.8.6-1.1 1.8-1.5 1.8-.6 2.6-1.3 2.6-2.6 0-1.5-1.2-2.6-3-2.6-1.4 0-2.4.6-3 1.6l1.3.9c.4-.6.9-.9 1.7-.9.8 0 1.3.4 1.3 1 0 .6-.5.9-1.5 1.3-1.8.6-2.9 1.2-2.9 2.7 0 1.6 1.2 2.9 2.7 2.9zM7.5 16.3h1.8v-7h2.5V7.7H5V9.3h2.5v7z"/>
        </svg>
      );
    case 'nodejs':
    case 'node':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Node.js">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.3l6.5 3.8v7.8L12 19.7l-6.5-3.8V8.1L12 4.3zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Python">
          <path d="M11.9 2c-3.3 0-5.4 1.5-5.4 4.4v2.2h5.5v.8H4.4C2 9.4 0 11.2 0 14.4c0 3.3 2 4.4 4.4 4.4h1.9v-2.5c0-2.5 2.1-4.4 4.6-4.4h5.4v-.8H10.9V8.6h7.6c2.4 0 4.4-1.8 4.4-5 0-3.3-2-4.4-4.4-4.4h-6.6zm-1.8 1.9a.9.9 0 110 1.8.9.9 0 010-1.8zM19.6 5.2v2.5c0 2.5-2.1 4.4-4.6 4.4H9.6v.8h5.4v2.5h-7.6c-2.4 0-4.4 1.8-4.4 5 0 3.3 2 4.4 4.4 4.4h6.6c3.3 0 5.4-1.5 5.4-4.4v-2.2H13.9v-.8h7.6c2.4 0 4.4-1.8 4.4-5 0-3.3-2-4.4-4.4-4.4h-1.9zm-5.7 15a.9.9 0 110-1.8.9.9 0 010 1.8z"/>
        </svg>
      );
    case 'go':
    case 'golang':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Go">
          <path d="M2 12c0 3.5 2.5 6.5 6 6.5 2.8 0 4.8-1.8 5.5-4.2H8.5v-2.3h7.8c.2.6.2 1.3.2 2 0 4.8-3.5 8-8.5 8C3.5 22 0 17.5 0 12S3.5 2 8 2c3.2 0 5.8 1.5 7.2 3.8l-2.2 1.5C12 5.8 10.2 4.5 8 4.5 4.5 4.5 2 7.5 2 12zm16.5-4h3.5v2.5h-3.5V14H16v-3.5h-3.5V8H16V4.5h2.5V8z"/>
        </svg>
      );
    case 'php':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="PHP">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-5 13.5H5.2L6.8 8.5h2.8c1.5 0 2.4.8 2.4 2.1 0 1.8-1.5 2.9-3.2 2.9H7.6l-.6 2zm8.4 0h-1.8l1.6-7h2.8c1.5 0 2.4.8 2.4 2.1 0 1.8-1.5 2.9-3.2 2.9H16l-.6 2zm-5.2-4.5h1.2c.8 0 1.4-.4 1.4-1.1 0-.6-.4-1-1.2-1H9.8l-.6 2.1zm8.4 0h1.2c.8 0 1.4-.4 1.4-1.1 0-.6-.4-1-1.2-1H18.2l-.6 2.1z"/>
        </svg>
      );
    case 'csharp':
    case 'dotnet':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="C# / .NET">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-2 13.5a3.5 3.5 0 01-3.5-3.5 3.5 3.5 0 013.5-3.5c1.2 0 2.2.6 2.8 1.5l-1.5 1c-.3-.5-.7-.8-1.3-.8a1.8 1.8 0 00-1.8 1.8c0 1 .8 1.8 1.8 1.8.6 0 1-.3 1.3-.8l1.5 1c-.6.9-1.6 1.5-2.8 1.5zm5.5-2h1.5v1.5h-1.5v1.5H14V15h-1.5v-1.5H14V12h1.5v1.5zm2.5-3h1.5v1.5H18v1.5h-1.5V11H15V9.5h1.5V8H18v1.5z"/>
        </svg>
      );
    case 'postgresql':
    case 'postgres':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="PostgreSQL">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 15.5c-1.5 0-2.8-.8-3.5-2-1 .8-2.2 1.2-3.5 1.2-2.5 0-4-1.8-4-4.2 0-3 2.5-5 5.5-5 1.2 0 2.3.4 3.2 1V7h2v8.5c0 1.1.2 1.5.3 2h-1.5v-.5zM11 9.5c-1.8 0-3 1.2-3 3 0 1.5 1 2.5 2.5 2.5 1 0 2-.5 2.5-1.5V10c-.6-.3-1.3-.5-2-.5z"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="MongoDB">
          <path d="M12 1.5s5.5 5 5.5 11c0 5-3.5 8.5-5.5 10-2-1.5-5.5-5-5.5-10 0-6 5.5-11 5.5-11zm0 3c-1.5 3-3.5 6.5-3.5 9.5 0 3.5 2 6 3.5 7.5 1.5-1.5 3.5-4 3.5-7.5 0-3-2-6.5-3.5-9.5z"/>
        </svg>
      );
    case 'redis':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Redis">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 8L4.5 6.2 12 2.5l7.5 3.7L12 10zm-9 3.5l9 4.5 9-4.5v3l-9 4.5-9-4.5v-3zm0 5l9 4.5 9-4.5v3l-9 4.5-9-4.5v-3z"/>
        </svg>
      );
    case 'gitlab':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="GitLab">
          <path d="M23.6 9.6L20.8 1H17l-3 9.2H10L7 1H3.2L.4 9.6c-.3.8 0 1.7.6 2.2L12 21.8l11-10c.6-.5.9-1.4.6-2.2zM4.6 3.2h1.3l2.2 6.8H4.2l.4-6.8zm14.8 0h1.3l.4 6.8h-3.9l2.2-6.8z"/>
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Docker">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186m-2.955 0h2.119a.186.186 0 00.186-.186V6.29a.186.186 0 00-.186-.185H5.144a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186m5.884 2.714h2.12a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.082.185.185.185m-2.955 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.144a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.082.185.184.185m18.062 1.373c-.45-.295-1.428-.485-2.45-.195-.145-.733-.59-1.39-1.28-1.78l-.392-.224-.26.368c-.684.97-1.042 2.16-1.042 3.398 0 .428.046.852.138 1.266-.45.228-1.043.432-1.764.555-1.026.175-2.883.255-4.47.255-1.352 0-2.617-.07-3.666-.2-.77-.095-1.725-.29-2.316-.628l-.348-.198-.247.317c-.456.586-.713 1.344-.713 2.158 0 3.344 2.87 6.064 6.398 6.064 4.542 0 8.082-3.13 8.877-7.85.748-.052 1.956-.37 2.45-1.464l.16-.35-.37-.17z" />
        </svg>
      );
    case 'jenkins':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Jenkins">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"/>
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="AWS">
          <path d="M18.8 15.6c-2.3 1.7-5.5 2.6-8.4 2.6-4 0-7.7-1.5-10.4-4-.2-.2-.2-.5 0-.7l1.1-1.1c.2-.2.5-.2.7 0 2.2 2 5.2 3.2 8.6 3.2 2.3 0 4.9-.7 6.8-2 .3-.2.7-.1.9.2l1.1 1.2c.2.2.1.5-.4.6zm1.7-2.1c-.2-.3-.8-.1-1.2 0-.4.1-.9.3-1.4.5-.3.1-.4.4-.3.7.3.7.6 1.4.9 2.1.1.3.4.4.7.2.4-.3.8-.6 1.2-1 .3-.3.3-.6.2-.9-.1-.2-.2-.5-.4-.6zm-12.7-2.4c.1-.8.4-1.5.9-2 .6-.6 1.5-.9 2.6-.9 1.1 0 1.9.3 2.5.8.5.5.8 1.2.9 2v4.2c0 .3.2.5.5.5h1.2c.3 0 .5-.2.5-.5V11c0-1.4-.5-2.6-1.5-3.5-1-.9-2.4-1.4-4.1-1.4-1.7 0-3.1.5-4.1 1.4-1 .9-1.5 2.1-1.5 3.5 0 .3.2.5.5.5h1.2c.3.1.5-.1.5-.4z"/>
        </svg>
      );
    case 'azure':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Microsoft Azure">
          <path d="M13.483 0L3.5 14.654h7.033L2.5 24l18-9.346h-7.017L21.5 0z" />
        </svg>
      );
    case 'kubernetes':
    case 'k8s':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Kubernetes">
          <path d="M12 2L3.5 7.2v10.4L12 22.8l8.5-5.2V7.2L12 2zm0 2.5l6.5 4v7.9L12 20.3l-6.5-3.9V8.5l6.5-4zm0 2.9a4.6 4.6 0 100 9.2 4.6 4.6 0 000-9.2zm0 2a2.6 2.6 0 110 5.2 2.6 2.6 0 010-5.2z"/>
        </svg>
      );
    case 'linux':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Linux">
          <path d="M12.001 2c-2.43 0-4.05 1.83-4.05 4.38 0 1.34.46 2.76 1.05 3.62-.05.29-.12.58-.12.88 0 1.5.75 2.8 1.88 3.5-.96.63-2.76 1.55-2.76 3.62 0 2.37 2.01 4 4 4s4-1.63 4-4c0-2.07-1.8-2.99-2.76-3.62 1.13-.7 1.88-2 1.88-3.5 0-.3-.07-.59-.12-.88.59-.86 1.05-2.28 1.05-3.62C16.051 3.83 14.431 2 12.001 2z" />
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Java">
          <path d="M8.85 17.06c2.47.2 4.64.06 7.07-.46.3.38.52.82.63 1.3-3.14.77-6.51.84-9.67.14.54-.34 1.25-.66 1.97-.98zm-1.25-2.91c2.8.22 5.56.09 8.27-.47.27.42.42.92.48 1.43-3.48.82-7.14.92-10.63.22.51-.4 1.19-.8 1.88-1.18zm8.6-4.54c.7 1.63-.53 3.12-1.84 4.31-1.39-1.24-1.92-2.71-1.34-4.23 1.09.43 2.21.36 3.18-.08zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      );
    case 'sqlserver':
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="SQL Database">
          <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm0 6c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm0 6c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2z"/>
        </svg>
      );
    case 'terraform':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Terraform">
          <path d="M14.667 7.787V2.5L20 5.6v5.287l-5.333-3.1zm-5.334 3.167L4 7.854V2.5l5.333 3.167v5.287zm0 10.546V16.213L4 13.047v5.287l5.333 3.166zm5.334 0v-5.287L20 13.047v5.287l-5.333 3.166zm-5.334-7.466l5.334-3.1v5.286l-5.334 3.1V14.034z"/>
        </svg>
      );
    case 'fortinet':
    case 'vpn':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Fortinet Security">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.11v4.71c0 4.54-3.08 8.79-7 9.88-3.92-1.09-7-5.34-7-9.88V6.29l7-3.11zM11 7v6h2V7h-2zm0 8v2h2v-2h-2z"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Technology">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-10-5v6l10 5 10-5v-6l-10 5zm0 6l-10-5v6l10 5 10-5v-6l-10 5z"/>
        </svg>
      );
  }
};
