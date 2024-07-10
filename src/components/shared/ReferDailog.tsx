import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import ReferForm from "./ReferForm";

const ReferDailog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue w-36 shadow-lg mx-auto md:mx-0">
          Refer Now
        </Button>
      </DialogTrigger>
      <DialogContent className="font-roboto max-h-96 overflow-y-scroll custom-scrollbar">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Refer and <span className="text-blue">Earn!</span>
          </DialogTitle>
          <DialogDescription>
            Refer a friend and earn rewards! Fill in your details and your
            friend's details below.
          </DialogDescription>
        </DialogHeader>
        <ReferForm />
      </DialogContent>
    </Dialog>
  );
};

export default ReferDailog;
