import React from "react";

const Leaderboard = () => {
  const winners = [
    {
      name: "Binary Beast",
      event: "Speed Programming",
      score: 100,
      teamImage: "images/Sponsos/image_7.jpg",
      profileImage: "images/Sponsos/image_7.jpg",
    },
    {
      name: "Sparks",
      event: "Game Jam",
      score: 95,
      teamImage: "images/Sponsos/image_8.jpg",
      profileImage: "images/Sponsos/image_8.jpg",
    },
    {
      name: "Unbeatable",
      event: "WebKode'23",
      score: 90,
      teamImage: "images/Sponsos/image_9.jpg",
      profileImage: "images/Sponsos/image_9.jpg",
    },
    {
      name: "Bit Rebels",
      event: "Kodez Kombat",
      score: 85,
      teamImage: "images/Sponsos/image_10.jpg",
      profileImage: "images/Sponsos/image_10.jpg",
    },
    {
      name: "Hugs for Bugs",
      event: "Coding Fest",
      score: 80,
      teamImage: "images/Sponsos/image_11.jpg",
      profileImage: "images/Sponsos/image_11.jpg",
    },
    {
      name: "Byte Hogs",  
      event: "Data Science",
      score: 78,
      teamImage: "images/Sponsos/image_12.jpg",
      profileImage: "images/Sponsos/image_12.jpg",
    },
  ];

  return (
    <div className="container" style={{marginTop:'120px'}}>
        
    <div className="leaderboard row " >
    <h2 >Winners of Past Events</h2>
      <table    >
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Event</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {winners.map((winner, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={winner.teamImage} alt="Team" />
              </td>
              <td>
                <img src={winner.profileImage} alt="Profile" />
              </td>
              <td>{winner.name}</td>
              <td>{winner.event}</td>
              <td>{winner.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Leaderboard;
