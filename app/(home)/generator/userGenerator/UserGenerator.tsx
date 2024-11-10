import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserGeneratorProps } from "./userGenerator.types";
import { Label } from "@/components/ui/label";

const UserGenerator = (props: UserGeneratorProps) => {
  const { setUserTypeSelected } = props;

  return (
    <div className="p-4 bg-slate-100 rounded-md shadow-md">
      <p className="mb-4 text-slate-500">What do you generate ?</p>
      <RadioGroup
        defaultValue="username"
        onValueChange={(value) => setUserTypeSelected(value)}
      >
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="username" id="user" />
          <Label htmlFor="user">Username</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="email" id="email" />
          <Label htmlFor="email">Email</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default UserGenerator;
