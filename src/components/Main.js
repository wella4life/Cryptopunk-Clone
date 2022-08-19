import React from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "../components/Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              src="https://lh3.googleusercontent.com/Ttw6RhELTlZkh9jXocNZMA7zNpMTSsesF2qUK25iu9SszuMVc5sAG2am2yeFg4ELbOQs_RnCWIVi0PefqS-o-J2GXJp18ufX8D4ddg=s100"
              className="selectedPunk"
              alt=""
            />
            <div className="punkDetails" style={{ color: "#fff" }}>
              <div className="title">Punk Collection</div>
              <span className="itemNumber">.#0</span>
            </div>
          </div>
        </div>

        <div className="owner">
          <div className="ownerImageContainer">
            <img
              src="https://lh3.googleusercontent.com/Ttw6RhELTlZkh9jXocNZMA7zNpMTSsesF2qUK25iu9SszuMVc5sAG2am2yeFg4ELbOQs_RnCWIVi0PefqS-o-J2GXJp18ufX8D4ddg=s100"
              alt=""
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0x58FA7772d697A748137e4801C9037c630541ed23</div>
              <div className="ownerHandle">@Walid-Mostafa</div>
            </div>
            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
