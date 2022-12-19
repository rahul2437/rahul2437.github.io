import { about, contact } from "../../portfolio";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Contact.css";
import { Button } from "@mui/material";

const Contact = () => {
  const { photo, name, role, description, resume, social } = about;

  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="btn">Mobile: +917760946848</span>
      <span className="btn">Email: rahulsheelavantar@gmail.com</span>
      <div className="center">
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <Button variant="outlined">
                  <GitHubIcon />
                </Button>
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <Button variant="outlined">
                  <LinkedInIcon />
                </Button>
              </a>
            )}
          </>
        )}
      </div>
      <a href={`mailto:${contact.email}`}>
        <span type="button" className="btn btn--outline">
          Email me
        </span>
      </a>
    </section>
  );
};

export default Contact;
