import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="flex justify-center">
    <div className="text-3xl max-w-screen-sm gap-4">
      <h3 className="border-b-2 border-white">Good day {user.username}!</h3>
      <p>
        Are you ready to start another day, another opportunity to improve,
        another opportunity to grow, to increase your positive habits and
        decrease the negative ones?<br/> Come on, complete, add what you have to add
        and run off to live the day, stop wasting any more time here.<br/> Go out and
        take the world ahead!
      </p>
    </div></div>
  );
}

export default ProfilePage;
