    "use client"

import React, { ReactElement, useEffect, useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Form, FormControl, FormField, FormItem,  FormMessage } from '../ui/form';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { formSchema } from '@/lib/schema';
import { send } from '@/lib/email';
 
const options = [
        { value: "mr",  label: "Mr"},
        { value: "ms",  label: "Ms"},
        { value: "mrs",  label: "Mrs"},
    ]

    interface DialogModuleProps {
        triggerContent: ReactElement;
    }

    

    export default function DialogModule({
        triggerContent, 
    }: DialogModuleProps) {
        const [open, setOpen] = useState(false);
        const [hasScrolled, setHasScrolled] = useState(false);
        const [selectedOption, setSelectedOption] = useState("");
        

        useEffect(() => {
            const handScrolled = () => {
                if (!hasScrolled && window.scrollY > 100) {
                    setOpen(true);
                    setHasScrolled(true);
                }
            };

            window.addEventListener("scroll", handScrolled);
            return () => window.removeEventListener("scroll", handScrolled);
        }, [hasScrolled]) 

        
        const handleChange = (value: string) => {
                setSelectedOption(value);
            }
        
        

         const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                firstName: "",
                lastName: "",
                email: "",
                message: "",
                phoneNumber: "",
            },
        })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    send(values);
    console.log(values)
  }


        
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='w-full'>
                {triggerContent}
            </DialogTrigger>
            <DialogContent className='w-10/12 lg:w-11/12 mx-auto'>
                <DialogHeader className='text-2xl w-full flex items-center justify-center uppercase'>
                    Register your interest
                </DialogHeader>
                <DialogDescription>
                    <div className="flex items-center bg-neutral-500 text-white justify-center text-center xl:w-10/12 lg:w-10/12 md:w-10/12 mx-auto text-lg rounded-md xl:px-10 py-2">
                        Non-UAE Residents are eligible for complimentary round-trip flights to Dubai
                    </div>
                </DialogDescription>
                <div className="w-7/12 mx-auto flex items-center justify-center">
                    <div className='py-10 w-full'>
                          <div className="flex lg:items-start items-center flex-col justify-center w-full mx-auto gap-2 text-center">
                            <p className='text-center text-lg w-full italic'>
                                <span className='text-red-500 text-lg'>*</span>All fields are compulsory
                            </p>

                            <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full"> 
                                <div className="">
                                    <Select 
                                    value={selectedOption}
                                    onValueChange={handleChange}>
                                        <SelectTrigger className='w-full'>
                                            <SelectValue placeholder="Title*" className='' />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {options.map((option) => (
                                                <SelectItem 
                                                key={option.value}
                                                value={option.value}
                                                className='hover:bg-blue-600'
                                                >
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                        <Separator className='bg-neutral-400 h-[1px]' />
                                    </Select>
                                </div>
                                <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormControl>
                                         <Input 
                                        className='w-full border-none h-8 placeholder:text-md'
                                        type='text'
                                        placeholder='First Name*'
                                        {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage className='flex items-center justify-start lg:text-sm md:text-xs text-[12px] ' />
                                    <Separator className='bg-neutral-400 h-2' />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormControl>
                                         <Input 
                                        className='w-full border-none h-8 placeholder:text-md'
                                        type='text'
                                        placeholder='Last Name*'
                                        {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage className='flex items-center justify-start'  />
                                    <Separator className='bg-neutral-400 h-2' />
                                    </FormItem>
                                )}
                                />
                                
                                <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormControl>
                                         <Input 
                                        className='w-full border-none h-8 placeholder:text-md'
                                        type='email'
                                        placeholder='Email'
                                        {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage className='flex items-center justify-start'  />
                                    <Separator className='bg-neutral-400 h-2' />
                                    </FormItem>
                                )}
                                />

                                 <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormControl>
                                       <PhoneInput {...field} 
                                       defaultCountrycountry='NG'  
                                       className='w-full py-1 px-2 '
                                       international />
                                    </FormControl>
                                    <FormMessage className='flex items-center justify-start'  />
                                    <Separator className='bg-neutral-400 h-2' />
                                    </FormItem>
                                )}
                                />
                                <Button 
                                type='submit'
                                variant="secondary"
                                className='w-full cursor-pointer bg-[#132521] hover:bg-emerald-950 text-white text-lg h-12 rounded-xs mt-2'>
                                    Submit
                                </Button>   
                            </form>
                            </Form>
                          </div>
                        </div>
                </div>
            </DialogContent>
        </Dialog>
    );
    }
