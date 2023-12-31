import React from "react";
import GithubIcon from "./footerIcons/githubIcon";
import LinkedinIcon from "./footerIcons/linkedinIcon";
import EmailIcon from "./footerIcons/emailIcon";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  ul {
    display: flex;
    gap: 7px;

    li {
      cursor: pointer;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media (min-width: 1024px) {
    ul {
      gap: 10px;
      li {
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

export default function Contact() {
  return (
    <Container>
      <ul>
        <li>
          <Link target="_blank" href={"https://github.com/kdimsan"}>
            <GithubIcon />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href={"https://linkedin.com/in/ricardo-adame-santana"}
          >
            <LinkedinIcon />
          </Link>
        </li>
        <li>
          <Link target="_blank" href={"mailto:ricardo.adame.santana@gmail.com"}>
            <EmailIcon />
          </Link>
        </li>
      </ul>
    </Container>
  );
}
