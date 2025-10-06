import react, { forwardRef } from 'react';

import githubPurple from '../../assets/icons/github-icon.svg';
import githubBlack from '../../assets/icons/github-black.svg';
import githubWhite from '../../assets/icons/github-white.svg';

import linkedinPurple from '../../assets/icons/linkedin-icon.svg';
import linkedinBlack from '../../assets/icons/linkedin-black.svg';
import linkedinWhite from '../../assets/icons/linkedin-white.svg';

import telegramPurple from '../../assets/icons/telegram-icon.svg';
import telegramBlack from '../../assets/icons/telegram-black.svg';
import telegramWhite from '../../assets/icons/telegram-white.svg';

import instagramPurple from '../../assets/icons/instagram-icon.svg';
import instagramBlack from '../../assets/icons/instagram-black.svg';
import instagramWhite from '../../assets/icons/instagram-white.svg';

const icons = [
  {
    id: 1,
    name: 'GitHub',
    href: 'https://github.com/irinaLeonova55',
    purple: githubPurple,
    black: githubBlack,
    white: githubWhite,
  },
  {
    id: 2,
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/irina-leonova-frontend/',
    purple: linkedinPurple,
    black: linkedinBlack,
    white: linkedinWhite,
  },
  {
    id: 3,
    name: 'Telegram',
    href: 'https://t.me/up_to_web',
    purple: telegramPurple,
    black: telegramBlack,
    white: telegramWhite,
  },
  {
    id: 4,
    name: 'Instagram',
    href: 'https://www.instagram.com/lnv_irina/',
    purple: instagramPurple,
    black: instagramBlack,
    white: instagramWhite,
  },
];

const Social = forwardRef(
  ({ styleSocial, heroIcon, style, variant = 'default' }, ref) => {
    return (
      <ul className={styleSocial} ref={ref} style={style}>
        {icons.map((icon) => (
          <li key={icon.id} className={heroIcon}>
            <a href={icon.href} target="_blank" rel="noreferrer">
              <img src={icon[variant]} alt={icon.name} />
            </a>
          </li>
        ))}
      </ul>
    );
  }
);

export default Social;
