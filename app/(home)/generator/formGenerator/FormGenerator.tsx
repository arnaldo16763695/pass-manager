"use client";
import { Input } from "@/components/ui/input";
import { Copy, Shuffle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import copyClipBoard from "@/lib/copyClipBoard";
import PasswordGenerator from "./passwordGenerator/PasswordGenerator";
import UserGenerator from "../userGenerator/UserGenerator";
import { generateCustomPass } from "@/lib/generateCustomPass";
import { toast } from "@/hooks/use-toast";
import { generateUserRandom } from "@/lib/generateUserRandom";
import { generateRandomEmail } from "@/lib/generateRandomEmail";

const FormGenerator = () => {
  const [itemValueInput, setItemValueInput] = useState("");
  const [selectedValue, setSelectedValue] = useState<
    "password" | "user" | string
  >("password");

  const [userTypeSelected, setUserTypeSelected] = useState("username");
  const [lengthPassword, setLengthPassword] = useState(8);
  const [isMayusSlected, setIsMayusSlected] = useState(true);
  const [isMinusSelected, setIsMinusSelected] = useState(true);
  const [isNumberSelected, setIsNumberSelected] = useState(true);
  const [isSpecialCharacters, setIsSpecialCharacters] = useState(true);

  useEffect(() => {
    if (selectedValue === "password") {
      const newPassword = generateCustomPass(
        lengthPassword,
        isMayusSlected,
        isMinusSelected,
        isNumberSelected,
        isSpecialCharacters
      );
      setItemValueInput(newPassword);
    }
  }, [
    lengthPassword,
    isMayusSlected,
    isMinusSelected,
    isNumberSelected,
    isSpecialCharacters,
    selectedValue,
  ]);

  useEffect(() => {
    if (selectedValue === "user") {
      const newUserGenerated = generateUserRandom();
      setItemValueInput(newUserGenerated);
    }
    if (userTypeSelected === "email") {
      const newEmailGenerated = generateRandomEmail();
      setItemValueInput(newEmailGenerated);
    }
  }, [selectedValue, userTypeSelected]);

  const copyClip = (item: string) => {
    copyClipBoard(item);
    toast({
      title: "Password copied",
    });
  };

  const HandleShufle = () => {
    if (selectedValue === "password") {
      const password = generateCustomPass(
        lengthPassword,
        isMayusSlected,
        isMinusSelected,
        isNumberSelected,
        isSpecialCharacters
      );
      setItemValueInput(password);
    } else if (selectedValue === "user") {
      if (userTypeSelected === "email") {
        const email = generateRandomEmail();
        setItemValueInput(email)
      } else {
        const username = generateUserRandom();
        setItemValueInput(username);
      }
    }
  };

  return (
    <div className="mt-5 max-w-2xl">
      <div className="relative w-full">
        <Input
          placeholder="Input..."
          onChange={() => {
            console.log("hola");
          }}
          value={itemValueInput}
        />

        <span title="Copy password">
          <Copy
            className="absolute top-3 right-12 cursor-pointer h-5 w-5"
            onClick={() => copyClip(itemValueInput)}
          />
        </span>
        <span title="Generate password">
          <Shuffle
            className="absolute top-3 right-2 cursor-pointer h-5 w-5"
            onClick={HandleShufle}
          />
        </span>
      </div>
      <div className="bg-slate-100 rounded-md shadow-md my-4 p-4">
        <p className="mb-4 text-slate-500">What do you want generate ?</p>
        <RadioGroup
          defaultValue="password"
          onValueChange={(value) => setSelectedValue(value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="password" id="password" />
            <Label htmlFor="password">Password</Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="user" id="user" />
            <Label htmlFor="user">User</Label>
          </div>
        </RadioGroup>
      </div>
      {selectedValue === "password" ? (
        <PasswordGenerator
          lengthPassword={lengthPassword}
          setLengthPassword={setLengthPassword}
          IsMayusSelected={isMayusSlected}
          setIsMayusSelected={setIsMayusSlected}
          isMinusSelected={isMinusSelected}
          setIsMinusSelected={setIsMinusSelected}
          isNumberSelected={isNumberSelected}
          setIsNumberSelected={setIsNumberSelected}
          isSpecialCharacters={isSpecialCharacters}
          setIsSpecialCharacters={setIsSpecialCharacters}
        />
      ) : (
        <UserGenerator setUserTypeSelected={setUserTypeSelected} />
      )}
    </div>
  );
};

export default FormGenerator;
