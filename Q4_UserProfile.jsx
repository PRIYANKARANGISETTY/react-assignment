import Q4_UserInfo from "./Q4_UserInfo";

function Q4_UserProfile() {
  const user = {
    name: "Alekhya",
    age: 19,
  };

  return (
    <div>
      <h3>User Profile</h3>
      <Q4_UserInfo name={user.name} age={user.age} />
    </div>
  );
}

export default Q4_UserProfile;

