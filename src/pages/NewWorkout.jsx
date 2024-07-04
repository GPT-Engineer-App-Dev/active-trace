import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const NewWorkout = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-center">New Workout</h1>
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle>Workout Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input {...register("type")} placeholder="Type of Workout" />
            <Input {...register("duration")} placeholder="Duration (mins)" />
            <Input {...register("calories")} placeholder="Calories Burned" />
            <Button type="submit" className="w-full">Save Workout</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewWorkout;