import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-center">Profile</h1>
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Name: John Doe</p>
          <p>Age: 30</p>
          <p>Weight: 70kg</p>
          <p>Height: 175cm</p>
        </CardContent>
      </Card>
      <Button onClick={() => navigate("/edit-profile")} className="mx-auto block">
        Edit Profile
      </Button>
    </div>
  );
};

export default Profile;