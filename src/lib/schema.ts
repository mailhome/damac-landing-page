import z from "zod";

export const formSchema = z.object({
        firstName: z.string().min(2,{
            message: "First Name must be at least 2 characters",
        }),
        lastName: z.string().min(2, 
            {
            message: "First Name must be at least 2 characters",
        }),
        email: z.string().email({
            message: "Invalid Email"
        }),
        message: z.string().min(2),
        phoneNumber: z.string().min(1),
    })