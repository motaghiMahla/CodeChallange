import {CustomButton} from "@/components";

const Index = () => {
  return (
    <div className={"flex gap-1 md:gap-2"}>
      <CustomButton type="tertiary" variant="button3" className="rounded-lg">
        Login
      </CustomButton>
      <CustomButton type="primary" variant="button3" className="rounded-lg">
        Register
      </CustomButton>
    </div>
  );
};
export default Index;
