import { ArrowUpRight, Link2 } from "lucide-react";
import { siteConfig } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="page-width footer-main">
        <a
          className="brand footer-brand"
          href="#top"
          aria-label={`${siteConfig.companyName} home`}
        >
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>
            {siteConfig.companyName}
            <small>TECHNOLOGY PARTNERS</small>
          </span>
        </a>
        <p>
          {siteConfig.descriptor}
          <br />
          People and technology, moving forward.
        </p>
        <div className="footer-links">
          <span>Explore</span>
          <a href="#capabilities">Capabilities</a>
          <a href="#expertise">Expertise</a>
          <a href="#engagements">Engagement models</a>
          <a href="#why-us">About us</a>
        </div>
        <div className="footer-links">
          <span>Get in touch</span>
          <a href="#contact">Contact</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}>
            {siteConfig.phone}
          </a>
          <a href={siteConfig.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn <Link2 size={13} />
          </a>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <span>
          © {new Date().getFullYear()} {siteConfig.companyName}. All rights
          reserved.
        </span>
        <div>
          <a href="#contact">
            Privacy policy <ArrowUpRight size={12} />
          </a>
          <a href="#contact">
            Terms <ArrowUpRight size={12} />
          </a>
        </div>
        <a href="#top" className="back-top">
          Back to top
        </a>
      </div>
    </footer>
  );
}
