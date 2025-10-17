import React, { useState, useEffect } from "react";
import DefaultMessage from "./Components/NoRefMessg.js";
import ReferralDisplay from "./Components/Referral.js";

// Define the Referral interface
interface Referral {
  id: string;
  name: string;
  joinDate: string;
  isOnline: boolean;
  imageUrl: string;
}

const RefInfo: React.FC = () => {
  // Mock user ID (replace with auth)
  const userId = `user-${Math.random().toString(36).substring(2, 8)}`;

  // Mock referral data (replace with API)
  const [referrals, setReferrals] = useState<Referral[]>([
    // Uncomment for testing with referrals
    /*
    {
      id: '1',
      name: 'John Doe',
      joinDate: '2025-10-15',
      isOnline: true,
      imageUrl: 'https://via.placeholder.com/50',
    },
    {
      id: '2',
      name: 'Jane Smith',
      joinDate: '2025-10-10',
      isOnline: false,
      imageUrl: 'https://via.placeholder.com/50',
    },
    */
  ]);

  // Placeholder for API fetch
  /*
  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await fetch(`https://your-api.com/referrals?userId=${userId}`);
        if (!response.ok) throw new Error('Failed to fetch referrals');
        const data: Referral[] = await response.json();
        setReferrals(data);
      } catch (error) {
        console.error('Error fetching referrals:', error);
      }
    };
    fetchReferrals();
  }, [userId]);
  */

  return (
    <div className="RefInfo">
      {referrals.length === 0 ? (
        <DefaultMessage />
      ) : (
        referrals.map((referral) => (
          <ReferralDisplay
            key={referral.id}
            name={referral.name}
            joinDate={referral.joinDate}
            isOnline={referral.isOnline}
            imageUrl={referral.imageUrl}
          />
        ))
      )}
    </div>
  );
};

export default RefInfo;
