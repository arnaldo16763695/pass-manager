import { Checkbox } from "@/components/ui/checkbox";
import {PasswordGeneratorProps} from "./passwordGenerator.type";

const PasswordGenerator = (props: PasswordGeneratorProps) => {


  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLengthPassword(Number(event.target.value));
  };

  const {
    lengthPassword,
    IsMayusSelected,
    isMinusSelected,
    isSpecialCharacters,
    isNumberSelected,

    setLengthPassword,
    setIsMayusSelected,
    setIsMinusSelected,
    setIsSpecialCharacters,
    setIsNumberSelected,
  } = props;
  return (
    <div>
      <>
        <div className="w-full p-4 bg-slate-100 rounded-md shadow-md flex gap-2 items-center">
          <label
            htmlFor="range"
            className="block text-sm font-medium text-gray-700 min-w-32"
          >
            Long {lengthPassword}
          </label>
          <input
            type="range"
            id="range"
            min={8}
            max="50"
            className="w-full h-2 bg-gray-200 rounded-md appearance-none cursor-pointer"
            value={lengthPassword}
            onChange={handleRangeChange}
          />
        </div>
        <div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox
              id="mayus"
              checked={IsMayusSelected}
              onCheckedChange={() => setIsMayusSelected((prev) => !prev)}
            />
            
            <label
              htmlFor="mayus"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >Capital letters A-Z</label>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox
              id="minus"
              checked={isMinusSelected}
              onCheckedChange={() => setIsMinusSelected((prev) => !prev)}
            />
            
            <label
              htmlFor="minus"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >Lowercase letters a-z</label>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox
              id="numbers"
              checked={isNumberSelected}
              onCheckedChange={() => setIsNumberSelected((prev) => !prev)}
            />
            
            <label
              htmlFor="numbers"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >Numbers 0-9</label>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox
              id="characters"
              checked={isSpecialCharacters}
              onCheckedChange={() => setIsSpecialCharacters((prev) => !prev)}
            />
            
            <label
              htmlFor="characters"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >Characters !@?¿=-·%&</label>
          </div>
        </div>
      </>
    </div>
  );
};

export default PasswordGenerator;
