import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

const programOptions = [
  "Data Science",
  "Product Management",
  "Business Analytics",
  "Digital Transformation",
  "Business Management",
  "Project Management",
  "Strategy & Leadership",
  "Senior Management",
  "Fintech",
] as const;

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  referralName: z.string().min(2).max(50),
  referralEmail: z.string().email(),
  program: z.enum(programOptions),
  message: z.string().min(2).max(500),
});

const ReferForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      referralName: "",
      referralEmail: "",
      program: "Data Science",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Your Name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Full Name" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Your Email <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Email" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="referralName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Referral Name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter Referral's Full Name" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="referralEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Referral Email <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter Referral's Email" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="program"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Program <span className="text-red-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {programOptions.map((option, i) => (
                    <SelectItem key={i} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  placeholder="Enter Your Message"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button className="bg-blue px-8" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ReferForm;
