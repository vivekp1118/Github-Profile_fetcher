import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");

  const fetchUser = async (userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setUser(data);
  }
  
  const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0];

  }
  return (
    <div className="main-container">
      <div className="header">
        <p className="header-text">Enter UseName</p>
        <span className="header-btn-find"
          onClick={() => fetchUser(userName)}
        >Find</span>
      </div>
      <input
        type="text"
        className="input-field"
        placeholder="Enter Github Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {user ? <div className="user-container">
        <div className="user-profile">
          <div className="user-profile-img"><img className='avatar' src={user.avatar_url}/></div>
          <div className="user-profile-username">Username : {user.login}</div>
        </div>
        <div className="user-details">
          <div className="user-details-name">Name : {user.name}</div>
          <div className="user-details-repo">Public repos : {user.public_repos}</div>
          <div className="user-gists"> Public gists : {user.public_gists}</div>
          <div className="user-profile-time">Profile created : {formatDate(user.created_at)}</div>
        </div>
      </div>
        :
        <h1 className='no-current-user'>?</h1>}
    </div>

  );
}

export default App;