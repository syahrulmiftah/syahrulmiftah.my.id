import React from "react";
import "./style.css";

import arrowRightSlantBlack from "./arrow-right-slant-black.svg";
import arrowRightSlantWhite from "./arrow-right-slant-white.svg";

import dribbbleIcon from "./dribbble-icon.svg";
import figmaIcon from "./figma-icon.svg";

import iconPlus from "./icon-2.svg";
import iconMinus from "./icon-3.svg";
import iconPlus from "./icon-4.svg";
import iconUp from "./icon-8.svg";

import imgAbout from "./img-about.png";
import imgHero from "./img-hero.png";

import imgCrashGame from "./img-crash-game.png";
import imgGraphql from "./img-graphql.png";
import imgMidgard from "./img-midgard.png";
import imgRexswap from "./img-rexswap.png";
import imgSquirrel from "./img-squirrel.png";

import dribbbleBlackSharp from "./dribbble-black-sharp.svg";
import figmaBlackSharp from "./figma-black-sharp.svg";
import instagramBlackSharp from "./instagram-black-sharp.svg";
import telegramBlackSharp from "./telegram-black-sharp.svg";
import xBlackSharp from "./x-black-sharp.svg";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="section-hero">
        <header className="header">
          <div className="div">
            <div className="text-wrapper">Syahrul Miftah</div>

            <div className="text-wrapper-2">UI / UX Designer</div>
          </div>

          <div className="bt-header">
            <div className="text-wrapper-3">Contact Me</div>

            <div className="arrow-icon">
              <img
                className="arrow-right-slant"
                alt="Arrow right slant"
                src={arrowRightSlantBlack}
              />
            </div>
          </div>
        </header>

        <div className="container">
          <div className="div-2">
            <div className="text-title">
              <div className="sub-title">
                <div className="text-wrapper-4">Hi there,</div>

                <div className="green-box-title">
                  <div className="text-wrapper-5">I’m Syahrul</div>
                </div>
              </div>

              <div className="div-3">
                <div className="top-title">
                  <div className="text-wrapper-6">I DESIGN</div>
                </div>

                <div className="bot-title">
                  <div className="text-wrapper-6">INTERFACES</div>
                </div>
              </div>
            </div>

            <img className="img-hero" alt="Img hero" src={imgHero} />
          </div>
        </div>
      </div>

      <div className="section-text">
        <div className="texts">
          <div className="desktop-wrapper">
            <div className="text-wrapper-7">“Syahrul is a</div>
          </div>

          <div className="txt">
            <div className="text-wrapper-8">Self Taught</div>
          </div>

          <div className="desktop-wrapper">
            <div className="text-wrapper-7">UI/UX Designer</div>
          </div>

          <div className="desktop-wrapper">
            <div className="text-wrapper-7">who is</div>
          </div>

          <div className="word">
            <div className="text-wrapper-8">Creative,</div>
          </div>

          <div className="div-wrapper">
            <div className="text-wrapper-8">Committed</div>
          </div>

          <div className="desktop-wrapper">
            <div className="text-wrapper-7">and</div>
          </div>

          <div className="word-2">
            <div className="text-wrapper-8">Passionate</div>
          </div>

          <div className="desktop-wrapper">
            <div className="text-wrapper-7">about his craft.</div>
          </div>

          <div className="desktop-wrapper">
            <div className="text-wrapper-7">He is</div>
          </div>

          <div className="word-3">
            <div className="text-wrapper-8">Adaptable,</div>
          </div>

          <div className="word-4">
            <div className="text-wrapper-8">Reliable,</div>
          </div>

          <div className="word-5">
            <div className="text-wrapper-8">Empathetic</div>
          </div>

          <div className="desktop-wrapper">
            <div className="text-wrapper-7">and</div>
          </div>

          <div className="word-6">
            <div className="word-7">
              <div className="text-wrapper-8">Easy to work with</div>
            </div>

            <div className="desktop-wrapper">
              <div className="text-wrapper-9">.”</div>
            </div>
          </div>
        </div>

        <div className="text-wrapper-10">- My Mom (probably)</div>
      </div>

      <div className="section-featured">
        <div className="container-title">
          <div className="green-box">
            <div className="text-wrapper-11">Portfolio</div>
          </div>

          <div className="div">
            <div className="featured-projects">FEATURED PROJECTS</div>

            <p className="p">Here are some of the best project i’ve made.</p>
          </div>
        </div>

        <div className="container-content">
          <div className="div-4">
            <div className="div-5">
              <div className="div-6">
                <div className="title">
                  <div className="text-wrapper-12">Crypto Dashboard</div>
                </div>

                <p className="text-wrapper-13">
                  A dashboard for a crypto swapping website using a futuristic
                  glow style. Made with consistent styling across the design.
                </p>
              </div>

              <div className="div-6">
                <div className="project-info">PROJECT INFO</div>

                <div className="div-3">
                  <div className="year">
                    <div className="text-wrapper-14">Year</div>

                    <div className="text-wrapper-15">2023</div>
                  </div>

                  <div className="role">
                    <div className="text-wrapper-14">Role</div>

                    <div className="text-wrapper-15">Lead UI Designer</div>
                  </div>
                </div>
              </div>

              <div className="CTA">
                <div className="bt-dribbble">
                  <div className="container-2">
                    <img
                      className="img-2"
                      alt="Dribbble icon"
                      src={dribbbleIcon}
                    />

                    <div className="text-wrapper-16">Dribbble</div>
                  </div>

                  <img
                    className="arrow-right-slant"
                    alt="Arrow right slant"
                    src={arrowRightSlantWhite}
                  />
                </div>

                <div className="bt-project">
                  <div className="container-2">
                    <img className="img-2" alt="Figma icon" src={figmaIcon} />

                    <div className="text-wrapper-16">Figma</div>
                  </div>

                  <img
                    className="arrow-right-slant"
                    alt="Arrow right slant"
                    src={arrowRightSlantWhite}
                  />
                </div>
              </div>
            </div>

            <div className="img-wrapper">
              <img className="img-rexswap" alt="Img rexswap" src={imgRexswap} />
            </div>
          </div>

          <div className="div-4">
            <div className="div-5">
              <div className="div-6">
                <div className="title-2">
                  <div className="text-wrapper-12">Crash Game Interface</div>
                </div>

                <p className="text-wrapper-13">
                  A crash game is a gambling game where players bet on the
                  rising value of a multiplier, aiming to cash out before it
                  &#34;crashes&#34; at a random point, losing their wager if
                  they don&#39;t exit in time.
                </p>
              </div>

              <div className="div-6">
                <div className="project-info">PROJECT INFO</div>

                <div className="div-3">
                  <div className="year">
                    <div className="text-wrapper-14">Year</div>

                    <div className="text-wrapper-15">2023</div>
                  </div>

                  <div className="role">
                    <div className="text-wrapper-14">Role</div>

                    <div className="text-wrapper-15">Lead UI Designer</div>
                  </div>
                </div>
              </div>

              <div className="CTA">
                <div className="bt-dribbble">
                  <div className="container-2">
                    <img
                      className="img-2"
                      alt="Dribbble icon"
                      src={dribbbleIcon}
                    />

                    <div className="text-wrapper-16">Dribbble</div>
                  </div>

                  <img
                    className="arrow-right-slant"
                    alt="Arrow right slant"
                    src={arrowRightSlantWhite}
                  />
                </div>

                <div className="bt-project">
                  <div className="container-2">
                    <img className="img-2" alt="Figma icon" src={figmaIcon} />

                    <div className="text-wrapper-16">Figma</div>
                  </div>

                  <img
                    className="arrow-right-slant"
                    alt="Arrow right slant"
                    src={arrowRightSlantWhite}
                  />
                </div>
              </div>
            </div>

            <div className="img-wrapper">
              <img className="img-3" alt="Img crash game" src={imgCrashGame} />
            </div>
          </div>

          <div className="div-4">
            <div className="div-5">
              <div className="div-6">
                <div className="title-3">
                  <div className="text-wrapper-12">Graph-QL Admin Panel</div>
                </div>

                <p className="text-wrapper-13">
                  A GraphQL admin panel website is a web-based interface that
                  allows administrators to manage data and perform tasks by
                  interacting with a server through GraphQL queries and
                  mutations for efficient and flexible data fetching.
                </p>
              </div>

              <div className="div-6">
                <div className="project-info">PROJECT INFO</div>

                <div className="div-3">
                  <div className="year">
                    <div className="text-wrapper-14">Year</div>

                    <div className="text-wrapper-15">2023</div>
                  </div>

                  <div className="role">
                    <div className="text-wrapper-14">Role</div>

                    <div className="text-wrapper-15">Assistant Designer</div>
                  </div>
                </div>
              </div>

              <div className="CTA">
                <div className="bt-dribbble">
                  <div className="container-2">
                    <img
                      className="img-2"
                      alt="Dribbble icon"
                      src={dribbbleIcon}
                    />

                    <div className="text-wrapper-16">Dribbble</div>
                  </div>

                  <img
                    className="arrow-right-slant"
                    alt="Arrow right slant"
                    src={arrowRightSlantWhite}
                  />
                </div>

                <div className="bt-project">
                  <div className="container-2">
                    <img className="img-2" alt="Figma icon" src={figmaIcon} />

                    <div className="text-wrapper-16">Figma</div>
                  </div>

                  <img
                    className="arrow-right-slant"
                    alt="Arrow right slant"
                    src={arrowRightSlantWhite}
                  />
                </div>
              </div>
            </div>

            <div className="img-wrapper">
              <img className="img-3" alt="Img graphql" src={imgGraphql} />
            </div>
          </div>

          <div className="div-4">
            <div className="div-5">
              <div className="div-6">
                <div className="title-4">
                  <div className="text-wrapper-12">Rune Game UI</div>
                </div>

                <p className="text-wrapper-13">
                  Rune is a game where players collect, upgrade, and
                  strategically use runes to battle opponents, solve puzzles, or
                  unlock new abilities in a fantasy-themed world.
                </p>
              </div>

              <div className="div-6">
                <div className="project-info">PROJECT INFO</div>

                <div className="div-3">
                  <div className="year">
                    <div className="text-wrapper-14">Year</div>

                    <div className="text-wrapper-15">2023</div>
                  </div>

                  <div className="role">
                    <div className="text-wrapper-14">Role</div>

                    <div className="text-wrapper-15">Assistant Designer</div>
                  </div>
                </div>
              </div>

              <div className="CTA">
                <div className="bt-dribbble">
                  <div className="container-2">
                    <img
                      className="img-2"
                      alt="Dribbble icon"
                      src={dribbbleIcon}
                    />

                    <div className="text-wrapper-16">Dribbble</div>
                  </div>

                  <img
                    className="arrow-right-slant"
                    alt="Arrow right slant"
                    src={arrowRightSlantWhite}
                  />
                </div>

                <div className="bt-project">
                  <div className="container-2">
                    <img className="img-2" alt="Figma icon" src={figmaIcon} />

                    <div className="text-wrapper-16">Figma</div>
                  </div>

                  <img
                    className="arrow-right-slant"
                    alt="Arrow right slant"
                    src={arrowRightSlantWhite}
                  />
                </div>
              </div>
            </div>

            <div className="img-wrapper">
              <img className="img-3" alt="Img midgard" src={imgMidgard} />
            </div>
          </div>

          <div className="div-4">
            <div className="div-5">
              <div className="div-6">
                <div className="title-5">
                  <div className="text-wrapper-12">Crypto Dashboard</div>
                </div>

                <p className="text-wrapper-13">
                  A Layer 1 blockchain website offers tools and information to
                  interact with a core blockchain network for transactions and
                  decentralized applications.
                </p>
              </div>

              <div className="div-6">
                <div className="project-info">PROJECT INFO</div>

                <div className="div-3">
                  <div className="year">
                    <div className="text-wrapper-14">Year</div>

                    <div className="text-wrapper-15">2023</div>
                  </div>

                  <div className="role">
                    <div className="text-wrapper-14">Role</div>

                    <div className="text-wrapper-15">Lead UI Designer</div>
                  </div>
                </div>
              </div>

              <div className="CTA">
                <div className="bt-dribbble">
                  <div className="container-2">
                    <img
                      className="img-2"
                      alt="Dribbble icon"
                      src={dribbbleIcon}
                    />

                    <div className="text-wrapper-16">Dribbble</div>
                  </div>

                  <img
                    className="arrow-right-slant"
                    alt="Arrow right slant"
                    src={arrowRightSlantWhite}
                  />
                </div>

                <div className="bt-project">
                  <div className="container-2">
                    <img className="img-2" alt="Figma icon" src={figmaIcon} />

                    <div className="text-wrapper-16">Figma</div>
                  </div>

                  <img
                    className="arrow-right-slant"
                    alt="Arrow right slant"
                    src={arrowRightSlantWhite}
                  />
                </div>
              </div>
            </div>

            <div className="img-wrapper">
              <img className="img-3" alt="Img squirrel" src={imgSquirrel} />
            </div>
          </div>
        </div>
      </div>

      <div className="div-7">
        <div className="div-6">
          <div className="green-box">
            <div className="text-wrapper-11">About</div>
          </div>

          <div className="nice-to-meet-you">NICE TO MEET YOU</div>
        </div>

        <div className="container-content-2">
          <img className="img-about" alt="Img about" src={imgAbout} />

          <div className="container-3">
            <div className="container-p">
              <p className="i-m-a-UI-UX-designer">
                I&#39;m a UI/UX designer based in Indonesia. I began my design
                journey in 2023 as an apprentice to a talented designer. Since
                then, I&#39;ve been developing my own approach, focusing on
                creating functional and user-centered designs.
              </p>

              <div className="div-6">
                <p className="text-wrapper-17">
                  I come from an engineering background and later transitioned
                  into design, with some experience in front-end programming.
                  This unique combination shapes my design philosophy, where I
                  prioritize functionality over aesthetics. After all, design is
                  ultimately about serving the user, not just the design itself.
                </p>

                <p className="text-wrapper-18">
                  I love reading books, especially those on psychology. Learning
                  psychology helps me understand how people think and behave.
                  This insight is invaluable in UX design, as it allows me to
                  create experiences that connect with users on a deeper level,
                  thereby increasing user satisfaction.
                </p>

                <p className="text-wrapper-18">
                  I’m also interested in philosophy, particularly ethics. That’s
                  why I always try to be ethical when implementing my designs. I
                  believe honesty is a fundamental part of creating trust and
                  achieving long-term success.
                </p>
              </div>
            </div>

            <div className="container-skills">
              <div className="div-6">
                <div className="text-wrapper-19">HARD SKILLS</div>

                <div className="container-4">
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">UI Design</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">UX Research</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">Figma</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">Python</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">Wireframing</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">HTML</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">CSS</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">Ethical Design</div>
                  </div>
                </div>
              </div>

              <div className="div-6">
                <div className="text-wrapper-19">SOFT SKILLS</div>

                <div className="container-4">
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">Empathy</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">Critical Thinking</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">Adaptability</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">Problem-Solving</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">Curiosity</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-20">Resilience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-email">
        <div className="div-6">
          <div className="green-box">
            <div className="text-wrapper-11">Connects</div>
          </div>

          <div className="div-3">
            <div className="text-wrapper-21">LET’S HAVE A CHAT</div>

            <p className="text-wrapper-18">
              Have an interesting project? Let’s discuss! <br />
              You can use the template below.
            </p>
          </div>
        </div>

        <div className="container-content-3">
          <div className="text-wrapper-22">Hello,</div>

          <div className="container-5">
            <div className="line">
              <div className="text-wrapper-23">My Name is</div>

              <input className="input" />

              <p className="text-wrapper-23">. I work for a/an</p>
            </div>

            <div className="line">
              <input className="input" />

              <div className="text-wrapper-23">&amp; need help with</div>
            </div>

            <div className="line">
              <input className="input" id="input-1" />

              <label className="text-wrapper-23" htmlFor="input-1">
                . You can email me
              </label>
            </div>

            <div className="line">
              <div className="text-wrapper-23">at</div>

              <input className="input" />

              <div className="text-wrapper-23">.</div>
            </div>
          </div>
        </div>

        <div className="CTA-2">
          <div className="bt-email-primary">
            <div className="text-wrapper-24">Submit</div>

            <img className="img" alt="Icon" src={arrowRightSlantBlack} />
          </div>

          <div className="text-wrapper-3">Or</div>

          <div className="bt-email-secondary">
            <div className="text-wrapper-25">Write your own</div>

            <img className="img" alt="Icon" src={arrowRightSlantWhite} />
          </div>
        </div>
      </div>

      <div className="div-7">
        <div className="div-6">
          <div className="green-box">
            <div className="text-wrapper-11">FAQ</div>
          </div>

          <div className="div-3">
            <div className="text-wrapper-21">FREQUENTLY ASKED QUESTION</div>

            <p className="text-wrapper-18">
              Hope this clear out some of your concern
            </p>
          </div>
        </div>

        <div className="div-3">
          <div className="row">
            <div className="text-wrapper-26">Pricing</div>

            <div className="content">
              <div className="faq">
                <p className="text-wrapper-27">What is your hourly rate?</p>

                <img className="icon" alt="Icon" src={iconPlus} />
              </div>

              <div className="faq-2">
                <div className="div-8">
                  <p className="text-wrapper-27">
                    I have a tight budget, would you still accept my projects?
                  </p>

                  <img className="icon-2" alt="Icon" src={iconMinus} />
                </div>

                <div className="div-2">
                  <p className="text-wrapper-28">
                    I’m a simple man, if you are willing to spend at least $10 ,
                    then we’re good to proceed.
                  </p>

                  <div className="rectangle" />
                </div>
              </div>

              <div className="faq">
                <p className="text-wrapper-27">
                  How much it cost to make a landing page?
                </p>

                <img className="icon" alt="Icon" src={iconPlus} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="div-8">
          <div className="email">
            <div className="text-wrapper-29">Email Me</div>

            <div className="text-wrapper-30">syahrulmiftahfarid@gmail.com</div>
          </div>

          <div className="socials">
            <div className="div-9">
              <img
                className="img-4"
                alt="Instagram black"
                src={instagramBlackSharp}
              />

              <div className="text-wrapper-25">Instagram</div>
            </div>

            <div className="div-9">
              <img
                className="img-4"
                alt="Telegram black sharp"
                src={telegramBlackSharp}
              />

              <div className="text-wrapper-25">Telegram</div>
            </div>

            <div className="div-9">
              <img
                className="img-4"
                alt="Dribbble black sharp"
                src={dribbbleBlackSharp}
              />

              <div className="text-wrapper-25">Dribbble</div>
            </div>

            <div className="div-9">
              <img className="img-4" alt="X black sharp" src={xBlackSharp} />

              <div className="text-wrapper-25">Twitter</div>
            </div>

            <div className="div-9">
              <img
                className="img-4"
                alt="Figma black sharp"
                src={figmaBlackSharp}
              />

              <div className="text-wrapper-25">Figma</div>
            </div>
          </div>
        </div>

        <div className="div-2">
          <div className="text-wrapper-31">@syahrulmiftah 2024</div>

          <div className="bt">
            <div className="text-wrapper-3">Back to Top</div>

            <img className="img" alt="Icon" src={iconUp} />
          </div>
        </div>
      </footer>
    </div>
  );
};
