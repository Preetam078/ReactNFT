import React, { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Main.css";

function Main({ selectedPunk, punkListData }) {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name}</div>
          <span className="itemNumber">*#{activePunk.token_id}</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} alt="" />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div className="ownerAddress">{activePunk.owner.address}</div>
              <div className="ownerHandle">@preetammondal78</div>
            </div>
            <div className="ownerLink">
              <InstagramIcon style={{ color: "white" }} />
            </div>
            <div className="ownerLink">
              <TwitterIcon style={{ color: "white" }} />
            </div>
            <div className="ownerLink">
              <MoreHorizIcon style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
