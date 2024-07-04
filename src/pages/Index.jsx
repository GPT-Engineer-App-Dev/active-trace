import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Welcome to FitTrack</h1>
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Workouts: 10</p>
          <p>Total Calories Burned: 5000</p>
        </CardContent>
      </Card>
      <Button onClick={() => navigate("/new-workout")}>Start New Workout</Button>
    </div>
  );
};

export default Index;