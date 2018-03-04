/* <------------MODULES------------> */
import React, { Component } from "react";
import { connect } from "react-redux";
/* <------------COMPONENTS------------> */
import Hero2 from "../../components/Hero/Hero2";
/* <------------STYLES------------> */
import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          title: "profile",
          text: `Currently nearing the end of my
        Music and Sound Production
        degree. My love for music has no
        bounds and my passion has seen
        me produce my own content under
        the name SH£RIF, and DJ as part of
        a collective known as PHONO. I also
        host two shows on Bournemouth
        University’s Nerve Radio`
        },
        {
          title: "work experience",
          text: [
            `RADIO PRESENTER, NERVE RADIO | Bournemouth | September 2017 - present
      I host two weekly shows on Bournemouth University’s student run radio station:
      Cloud 9, a Hip-Hop/Grime/RnB orientated show, presenting the best in up and coming talent from the
      underground scene. I frequently invite guests to perform live in the studio, this is then filmed and edited by myself.
      PHONO Fridays, a show all about events happening in the electronic and dance music scene. Myself and my
      co-host play our favourite current tracks and then we each showcase our weekly mix.`,
            `DJ, VARIOUS | Bournemouth | March 2016 - present
      I am proficient with CDJ’s and DJ multiple genres at various venues around Bournemouth.`,
            `DJ & ORGANISER, PHONO| Bournemouth | February 2017 - present
      I am part of a DJ collective called PHONO. We have hosted regular successful events around
      Bournemouth. I have been heavily involved with contacting venue managers, sourcing graphic
      designers, as well as organising promotion through posters, flyering and social media.`,
            `COMPOSER & RUNNER, AT DAWN | Bournemouth| March - May 2017
      I composed the soundtrack for student fifilm ‘At Dawn’, a historic war fifilm. I was also a runner on set and
      performed various tasks including setting up scenes, operating the clapper board, and organising the
      transport of equipment, cast and crew.`,
            `STUDIO INTERN, 360 GLOBAL MEDIA | Madrid | July - August 2017
      I was tasked with responsibility for the maintenance of all studios, including the setting up and packing
      down of equipment for different clients, as well as organising the equipment cupboard. I also assisted
      in the daily news broadcast at a nearby TV studio, which involved micing up guests and presenters,
      working the mixer during broadcast (learning to follow live instructions in Spanish), editing sound for
      pre-recorded shows (levels, appropriate fades, mastering for TV) and adding sound effects and Foley
      for foreign films being translated to Spanish.`,
            `STOCK MANAGER, LIGHTWATER MANAGEMENT | Windlesham| July - August 2015
      In this role I had responsibility for the running and organisation of the stock room, in which I
      implemented a computerised method of inventory. Other tasks included filling in order forms and
      preparing the daily delivery of stock to clients.`
          ]
        },
        {
          title: "skills",
          text: [
            "Audio Recording",
            "Music Producing",
            "Mixing",
            "DJing",
            "Audio Editing",
            "Arduino Coding",
            "Electric Guitar",
            "Bass",
            "Video Editing",
            "Bilingual - English & Farsi"
          ]
        },
        {
          title: "education",
          text: [
            `BOURNEMOUTH UNIVERSITY, BA MUSIC & SOUND PRODUCTION | September 2014 - June 2018
  Passed Second Year with High 2:1
  Units: Composition and Arrangement, Creative Business Awareness, Media Devices and Networks, Production Techniques 1, Studio
  Techniques 1, Synthesis and Effects, Commercial Business Environment, Group Project, Studio Techniques 2, Synthesisers and
  Sequencing Systems, Composing Using Technology, Production Techniques 2, Advanced Recording and Production, Creative Music
  Technology, Individual Project, Innovation and Business Development`,
            `LICENSED VICTUALLERS’ SCHOOL | Ascot | September 2012 - June 2014
  A Level Music Technology (B), Maths (B), Media Studies (C)`,
            `LICENSED VICTUALLERS’ SCHOOL | Ascot | September 2006 - June 2012
  10 GCSEs (A-C)`
          ]
        },
        {
          title: "software",
          text: [
            "Cubase",
            "Avid Pro Tools",
            "Ableton Live",
            "Vienna Ensemble",
            "Native Instruments Komplete",
            "Waves",
            "Max/MSP",
            "Cecilia 5",
            "Adobe Premiere Pro",
            "Microsoft Office"
          ]
        },
        {
          title: "other achievements",
          text: [
            `MUSIC PRODUCER: I produce my own music and mixes under the name SH£RIF.`,
            `STUDENT REP: I am a student representative for my course. I attend monthly meetings in which
        collected feedback and complaints from my peers are discussed and solutions are created.`,
            `GUITAR: Played guitar and sung in a band from 2008-2014 and participated in various Battle of the
        Bands competitions, winning one in 2013.`,
            `SCHOOL RADIO/STAGE PRODUCTIONS: Joined the school radio and produced two shows, as well as
        doing sound and simple lighting jobs for yearly stage and music productions.`
          ]
        },
        {
          title: "links",
          text: [
            "www.shrifian.com",
            "linkedin.com/in/abrahamshrifian",
            "soundcloud.com/sherifofficial",
            "mixcloud.com/sherifofficial/"
          ]
        },
        {
          title: "interests",
          text: `As a passionate consumer of music I actively listen to many varied genres, continually expanding my
        knowledge whilst recognising new trends and discovering up and coming artists. I attend many gigs
        and live performances, as well as annually travelling to music festivals around the country. Aside from
        music, I am a avid cook and since becoming vegetarian in 2017, I have loved challenging my culinary
        skills in finding new and interesting ways to create meals.`
        },
        {
          title: "contact",
          text: [
            `1 White House Cottages
          Westwood Road
          Surrey
          GU20 6LR`,
            `shrifian@gmail.com`,
            `07584 138102`
          ]
        }
      ]
    };
  }

  render() {
    const { activeItem } = this.props;
    let menuItemsJSX = this.state.menuItems.map((e, i, a) => {
      return (
        <section
          className={`Page-Section ${
            activeItem == e.title ? "active" : "inactive"
          }`}
        >
          <h2>{e.title}</h2>
          <p>{e.text}</p>
        </section>
      );
    });

    return (
      <div className={`Page-Wrapper`}>
        <div className={`Page-Container`}>
          <section
            className={`Page-Section ${!activeItem ? "active" : "inactive"}`}
          >
            <h1>ABRAHAM SHRIFIAN</h1>
          </section>
          <section
            className={`Page-Section ${
              activeItem == "profile" ? "active" : "inactive"
            }`}
          >
            <h2>profile</h2>
            <p>
              Currently nearing the end of my Music and Sound Production degree.
              My love for music has no bounds and my passion has seen me produce
              my own content under the name SH£RIF, and DJ as part of a
              collective known as PHONO. I also host two shows on Bournemouth
              University’s Nerve Radio
            </p>
          </section>
          <section
            className={`Page-Section ${
              activeItem == "work experience" ? "active" : "inactive"
            }`}
          >
            <h2>work experience</h2>
            <p>
              <b>
                RADIO PRESENTER, NERVE RADIO | Bournemouth | September 2017 -
                present
              </b>{" "}
              I host two weekly shows on Bournemouth University’s student run
              radio station: Cloud 9, a Hip-Hop/Grime/RnB orientated show,
              presenting the best in up and coming talent from the underground
              scene. I frequently invite guests to perform live in the studio,
              this is then filmed and edited by myself. PHONO Fridays, a show
              all about events happening in the electronic and dance music
              scene. Myself and my co-host play our favourite current tracks and
              then we each showcase our weekly mix.
            </p>
            <br />
            <p>
              <b>DJ, VARIOUS | Bournemouth | March 2016 - present</b> I am
              proficient with CDJ’s and DJ multiple genres at various venues
              around Bournemouth.
            </p>{" "}
            <br />
            <p>
              <b>
                DJ & ORGANISER, PHONO| Bournemouth | February 2017 - present
              </b>{" "}
              I am part of a DJ collective called PHONO. We have hosted regular
              successful events around Bournemouth. I have been heavily involved
              with contacting venue managers, sourcing graphic designers, as
              well as organising promotion through posters, flyering and social
              media.
            </p>{" "}
            <br />
            <p>
              <b>COMPOSER & RUNNER, AT DAWN | Bournemouth| March - May 2017</b>{" "}
              I composed the soundtrack for student fifilm ‘At Dawn’, a historic
              war fifilm. I was also a runner on set and performed various tasks
              including setting up scenes, operating the clapper board, and
              organising the transport of equipment, cast and crew.
            </p>{" "}
            <br />
            <p>
              <b>
                STUDIO INTERN, 360 GLOBAL MEDIA | Madrid | July - August 2017
              </b>{" "}
              I was tasked with responsibility for the maintenance of all
              studios, including the setting up and packing down of equipment
              for different clients, as well as organising the equipment
              cupboard. I also assisted in the daily news broadcast at a nearby
              TV studio, which involved micing up guests and presenters, working
              the mixer during broadcast (learning to follow live instructions
              in Spanish), editing sound for pre-recorded shows (levels,
              appropriate fades, mastering for TV) and adding sound effects and
              Foley for foreign films being translated to Spanish.
            </p>{" "}
            <br />
            <p>
              <b>
                STOCK MANAGER, LIGHTWATER MANAGEMENT | Windlesham| July - August
                2015
              </b>{" "}
              In this role I had responsibility for the running and organisation
              of the stock room, in which I implemented a computerised method of
              inventory. Other tasks included filling in order forms and
              preparing the daily delivery of stock to clients.
            </p>
          </section>
          <section
            className={`Page-Section ${
              activeItem == "skills" ? "active" : "inactive"
            }`}
          >
            <h2>skills</h2>
            <h4>Audio Recording</h4>
            <h4>Music Producing</h4>
            <h4>Mixing</h4>
            <h4>DJing</h4>
            <h4>Audio Editing</h4>
            <h4>Arduino Coding</h4>
            <h4>Electric Guitar</h4>
            <h4>Bass</h4>
            <h4>Video Editing</h4>
            <h4>Bilingual - English & Farsi</h4>
          </section>
          <section
            className={`Page-Section ${
              activeItem == "education" ? "active" : "inactive"
            }`}
          >
            <h2>education</h2>
            <p>test</p>
          </section>
          <section
            className={`Page-Section ${
              activeItem == "software" ? "active" : "inactive"
            }`}
          >
            <h2>software</h2>
            <p>test</p>
          </section>
          <section
            className={`Page-Section ${
              activeItem == "other achievements" ? "active" : "inactive"
            }`}
          >
            <h2>other achievements</h2>
            <p>test</p>
          </section>
          <section
            className={`Page-Section ${
              activeItem == "links" ? "active" : "inactive"
            }`}
          >
            <h2>links</h2>
            <p>test</p>
          </section>
          <section
            className={`Page-Section ${
              activeItem == "interests" ? "active" : "inactive"
            }`}
          >
            <h2>interests</h2>
            <p>test</p>
          </section>
          <section
            className={`Page-Section ${
              activeItem == "contact" ? "active" : "inactive"
            }`}
          >
            <h2>contact</h2>
            <p>test</p>
          </section>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    activeItem: state.app.activeItem
  };
}

export default connect(mapStateToProps, {})(HomePage);
