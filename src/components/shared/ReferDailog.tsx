import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import ReferForm from "./ReferForm";
import { useState } from "react";
import { X } from "lucide-react";

const ReferDailog = () => {
  const [formSubmitted, setFormSubmitted] = useState({
    submitted: false,
    success: false,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue w-36 shadow-md  hover:bg-transparent hover:text-blue hover:border hover:border-blue">
          Refer Now
        </Button>
      </DialogTrigger>
      <DialogContent className="font-roboto h-96 overflow-y-scroll custom-scrollbar">
        {formSubmitted.submitted ? (
          <>
            <DialogHeader className="size-full flex flex-col justify-center items-center">
              <DialogTitle className="text-2xl text-center">
                {formSubmitted.success ? "Success" : "Error"}
              </DialogTitle>
              <DialogDescription className="text-center">
                {formSubmitted.success
                  ? "Referral submitted successfully!"
                  : "Failed to submit referral. Please try again."}
              </DialogDescription>
              <DialogClose asChild>
                <Button
                  className="w-36 shadow-lg mx-auto md:mx-0 mt-4"
                  variant={formSubmitted.success ? "default" : "destructive"}
                  onClick={() =>
                    setFormSubmitted({ submitted: false, success: false })
                  }
                >
                  Close
                </Button>
              </DialogClose>
            </DialogHeader>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Refer and <span className="text-blue">Earn!</span>
              </DialogTitle>
              <DialogDescription>
                Refer a friend and earn rewards! Fill in your details and your
                friend's details below.
              </DialogDescription>
            </DialogHeader>
            <ReferForm setFormSubmitted={setFormSubmitted} />
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ReferDailog;
