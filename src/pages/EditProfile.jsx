import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-center">Edit Profile</h1>
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle>Edit Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input {...register("name")} placeholder="Name" />
            <Input {...register("age")} placeholder="Age" />
            <Input {...register("weight")} placeholder="Weight (kg)" />
            <Input {...register("height")} placeholder="Height (cm)" />
            <Button type="submit" className="w-full">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProfile;