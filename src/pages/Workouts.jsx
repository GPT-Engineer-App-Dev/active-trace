import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Workouts = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-center">Workouts</h1>
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle>Past Workouts</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Workout 1: Running - 30 mins - 300 calories</p>
          <p>Workout 2: Cycling - 45 mins - 450 calories</p>
        </CardContent>
      </Card>
      <Button onClick={() => navigate("/new-workout")} className="mx-auto block">
        Add New Workout
      </Button>
    </div>
  );
};

export default Workouts;