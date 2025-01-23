import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

interface SocialLinksProps {
  twitter?: string;
  linkedin?: string;
  github?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ twitter, linkedin, github }) => {
  const links = [
    { icon: Twitter, url: 'https://x.com/1dericknguyen', label: 'Twitter' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/1derick-nguyen/', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/derickcnguyen/', label: 'GitHub' },
  ].filter(link => link.url);

  if (links.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 flex gap-3">
      {links.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}