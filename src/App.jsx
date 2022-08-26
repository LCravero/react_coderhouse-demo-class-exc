import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Title from "./components/commons/Title";
import Subtitle from "./components/commons/Subtitle";
// import Position from "./components/Positon";
// import Position from "./components/ProfilePhoto";
// import Background from "./components/Background";
// import Location from "./components/Location";
// import Contacts from "./components/Contacts";
// import Button from "./components/commons/Button";
// import User from "./components/User";

const academicBackground = ["Universidad Nacional de La Matanza", "ITBA"];

function App() {
  return (
    <div className="App">
      <div className="profile__container">
        {/* TODO: ProfilePhoto */}
        <div className="profile-image__container">
          <div className="profile-image">
            <img src="" alt="profile-image" />
          </div>
        </div>
        <div className="profile__user-data">
          <span className="title user-name">Lucas Cravero</span>
          {/* TODO: User */}
          <div className="user-data__container">
            {/* TODO: Position */}
            <span className="user__current-position">
              Frontend Engineer at Mercado Libre
            </span>
            {/* TODO: Background */}
            <div className="user__academic-background">
              <ul className="academic-background">
                <li>Universidad Nacional de La Matanza</li>
                <li>ITBA</li>
              </ul>
            </div>
          </div>
          {/* TODO: Location */}
          <address>Buenos Aires, Argentina</address>
          {/* TODO: Contacts */}
          <div className="user__followers-connections">
            <a href="#" className="followers">
              587 followers
            </a>
            <a href="#" className="connections">
              500+ connections
            </a>
          </div>
          <div className="profile__action-buttons-section">
            {/* TODO: Button */}
            <button className="button button--primary open-to-action">
              Open To
            </button>
            <button className="button button--secondary add-profile-section-action">
              Add Profile Section
            </button>
            <button className="button button--tertiary do-more-action">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// TODO: ProfilePhoto
{
  /* <ProfilePhoto /> */
}

// TODO: User
{
  /* <User name="Lucas Cravero" /> */
}

// TODO: Position
{
  /* <Position role="Frontend Engineer" workingIn="Mercado Libre" /> */
}

// TODO: Background
{
  /* <Background academic={academicBackground} /> */
}

// TODO:
{
  /* <Location place="Buenos Aires, Argentina" /> */
}

// TODO: Contacts
{
  /* <Contacts followers={565} connections={500} /> */
}

// TODO: Button
{
  /* <Button className="open-to-action">Open To</Button> */
}
{
  /* <Button className="add-profile-section-action" variant="secondary">
              Add Profile Section
            </Button> */
}
{
  /* <Button className="do-more-action" variant="tertiary">
              More
            </Button> */
}
