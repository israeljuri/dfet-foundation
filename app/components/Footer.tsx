import React from 'react';
import Container from './Container';
import Image from 'next/image';
import logo from '@/app/assests/dfet-foundation-logo.png';
import { contacts, navItems } from '../utils/data';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-primary">
      <Container>
        <footer className="footer py-10 bg-base-200 bg-transparent text-white">
          <aside className="grid gap-4">
            <figure className="w-[12rem] bg-white px-3 py-1 rounded-full">
              <Image className="w-[80%]" src={logo} alt="logo" />
            </figure>
            <p className="max-w-[35ch]">
              DFET Foundation is the first African decentralised organization
              giving back to the community using blockchain technology.
            </p>
          </aside>

          <nav>
            <h6 className="footer-title">Company</h6>
            {navItems.map((item) => (
              <Link key={item.id} href={item.path} className="link link-hover">
                {item.label}
              </Link>
            ))}
          </nav>

          <nav>
            <h6 className="footer-title">Legal</h6>
            <Link href="/" className="link link-hover">
              Terms of use
            </Link>
            <Link href="/" className="link link-hover">
              Privacy policy
            </Link>
          </nav>

          <nav>
            <h6 className="footer-title">Contact</h6>
            {contacts.map((contact) => (
              <Link
                href={contact.path ? contact.path : ''}
                key={contact.id}
                className="link link-hover"
              >
                {contact.label}
              </Link>
            ))}
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
