import React, { useState, useEffect } from "react";

const ReferralCode: React.FC = () => {
  // Mock user ID (replace with auth system later)
  const userId = `user-${Math.random().toString(36).substring(2, 8)}`;
  // Mock referral code (replace with API)
  const [referralCode, setReferralCode] = useState<string>(
    `${userId}-ref-${Math.random().toString(36).substring(2, 8)}`
  );
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setError("Failed to copy code.");
    }
  };

  // Placeholder for API fetch
  /*
  useEffect(() => {
    const fetchReferralCode = async () => {
      try {
        const response = await fetch(`https://your-api.com/referral-code?userId=${userId}`);
        const data = await response.json();
        setReferralCode(data.code);
      } catch (error) {
        console.error('Error fetching referral code:', error);
        setError('Failed to load referral code.');
      }
    };
    fetchReferralCode();
  }, []);
  */

  if (error) {
    return <div className="error">{error}</div>;
  }

  // SVG path: Use /img/copy.svg for /public/img/copy.svg
  // If SVG is in /src/img/copy.svg, use relative path or configure asset bundling
  const copyIconSrc = "../Img/SVG/copy.svg"; // Adjust based on actual path

  return (
    <div className="hold" onClick={handleCopy}>
      <p>{referralCode}</p>
      <img src={copyIconSrc} alt="Copy referral code" className="copy" />
      {copied && (
        <span style={{ marginLeft: "10px" }} className="copy-feedback">
          Copied!
        </span>
      )}
    </div>
  );
};

export default ReferralCode;
