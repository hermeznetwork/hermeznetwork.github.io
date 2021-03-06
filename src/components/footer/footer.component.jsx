import React from 'react'
import { Link } from 'gatsby'

import { useFooterStyles } from './footer.styles'
import Logo from '../../assets/images/logo-black-and-white.inline.svg'

export const Footer = ({ routes }) => {
  const classes = useFooterStyles()

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.topSection}>
          <div className={classes.col3}>
            <div className={classes.head}>
              <p>Start your integration</p>
              <p>Contact us to learn more about Hermez network.</p>
              <a
                className={classes.emailLink}
                href='mailto:hello@hermez.network?&subject=Contact%20from%20the%20website'
                target='_blank'
                rel='noopener noreferrer'
              >
                hello@hermez.network
              </a>
            </div>
          </div>
          <div className={classes.listCol}>
            <ul className={classes.list}>
              <li className={`${classes.listItem} ${classes.listItemHead}`}>
                Hermez
              </li>
              <li className={classes.listItem}>
                {/* Routes are passed from layout component
              {
                id: 1,
                label: 'Hermez',
                to: '/'
              },
              {
                id: 2,
                label: 'Payment Network',
                to: '/payment-network'
              },
              {
                id: 3,
                label: 'Technology',
                to: '/technology'
              },
              {
                id: 4,
                label: 'Project',
                to: '/project'
              }
              */}
                <Link to={routes.find(el => el.id === 2).to}>
                  {routes.find(el => el.id === 2).label}
                </Link>
              </li>
              {/* TODO show Wallet link, once Wallet is published */}
              {/* <li className={classes.listItem}>
                <Link to={routes.find(el => el.label === "Hermez Wallet").to}>
                  {routes.find(el => el.label === "Hermez Wallet").label}
                </Link>
              </li> */}
              {/* TODO show Network explorer link, once Network explorer is published */}
              {/* <li className={classes.listItem}>
                <Link to={routes.find(el => el.label === "Network explorer").to}>
                  {routes.find(el => el.label === "Network explorer").label}
                </Link>
              </li> */}
            </ul>
            <ul className={classes.list}>
              <li className={`${classes.listItem} ${classes.listItemHead}`}>
                Project
              </li>
              <li className={classes.listItem}>
                <Link to='/project'>
                  About us
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link to='/media-inquiries'>
                  Mediakit
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link to='/tokenomics'>
                  Hez token
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.listCol}>
            <ul className={classes.list}>
              <li className={`${classes.listItem} ${classes.listItemHead}`}>Specification</li>
              <li className={classes.listItem}>
                <a
                  href='/hermez-whitepaper.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Whitepaper
                </a>
              </li>
              <li className={classes.listItem}>
                <a
                  href='https://docs.hermez.io/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Documentation
                </a>
              </li>
              <li className={classes.listItem}>
                <a
                  href='https://github.com/hermeznetwork/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </a>
              </li>
            </ul>
            <ul className={classes.list}>
              <li className={`${classes.listItem} ${classes.listItemHead}`}>Social</li>
              <li className={classes.listItem}>
                <a
                  href='https://blog.hermez.io/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Blog
                </a>
              </li>
              <li className={classes.listItem}>
                <a
                  href='https://t.me/hermez_network'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Telegram
                </a>
              </li>
              <li className={classes.listItem}>
                <a
                  href='https://discord.com/invite/AczuUXDA2N'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Discord
                </a>
              </li>
              <li className={classes.listItem}>
                <a
                  href='https://twitter.com/hermez_network'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.bottomSection}>
          <p className={classes.logoAndText}>
            <Logo />
            <span className={classes.text}>
              <a
                href='https://iden3.io/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Powered by Iden3
              </a>
            </span>
          </p>
          <Link to='/legal-disclaimer' className={classes.legalLink}>
            Legal Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  )
}
