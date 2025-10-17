import React from "react";

interface ReferralDisplayProps {
  name: string;
  joinDate: string;
  isOnline: boolean;
  imageUrl: string;
}

const ReferralDisplay: React.FC<ReferralDisplayProps> = ({
  name,
  joinDate,
  isOnline,
  imageUrl,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "25px",
        marginBottom: "0px",
        marginTop: "20px",
      }}
      className="referrals"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{
            width: "60px",
            height: "60px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
          src={imageUrl}
          alt={`${name}'s profile`}
        />
        <div
          style={{
            flexDirection: "column",
            margin: "8px",
            marginLeft: "10px",
          }}
        >
          <h5 style={{ fontSize: "15px" }}>{name}</h5>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "10px",
              color: "GrayText",
            }}
          >
            Joined {joinDate}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          marginRight: "0px",
          fontSize: "12px",
          letterSpacing: "-0.5px",
        }}
      >
        <p
          style={{ margin: "auto", marginLeft: "6px" }}
          className={isOnline ? "active" : "inactive"}
        >
          {isOnline ? "Active" : "Inactive"}
        </p>
      </div>
    </div>
  );
};
export default ReferralDisplay;
