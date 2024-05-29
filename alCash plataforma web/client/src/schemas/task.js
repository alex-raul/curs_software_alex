import { z } from "zod";

export const taskSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  price: z.number({
    required_error: "Price is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  phoneNumber: z.string({
    required_error: "Phone number is required",
  }),
  city: z.string({
    required_error: "City is required",
  }),
});
