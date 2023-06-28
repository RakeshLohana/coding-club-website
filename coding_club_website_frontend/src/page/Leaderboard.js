import React from "react";

const Leaderboard = () => {
  const winners = [
    {
      name: "John Doe",
      event: "Speed Programming",
      score: 100,
      teamImage: "https://via.placeholder.com/50",
      profileImage: "https://via.placeholder.com/50",
    },
    {
      name: "Jane Smith",
      event: "Game Jam",
      score: 95,
      teamImage: "https://via.placeholder.com/50",
      profileImage: "https://via.placeholder.com/50",
    },
    {
      name: "Bob Johnson",
      event: "WebKode'23",
      score: 90,
      teamImage: "https://via.placeholder.com/50",
      profileImage: "https://via.placeholder.com/50",
    },
    {
      name: "Sarah Lee",
      event: "Kodez Kombat",
      score: 85,
      teamImage: "https://via.placeholder.com/50",
      profileImage: "https://via.placeholder.com/50",
    },
    {
      name: "Tom Brown",
      event: "Coding Fest",
      score: 80,
      teamImage: "https://via.placeholder.com/50",
      profileImage: "https://via.placeholder.com/50",
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
