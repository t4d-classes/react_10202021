import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from './CarForm';


export const CarTool = () => {

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable />
      <CarForm buttonText="Add Car" />
    </>
  );
};