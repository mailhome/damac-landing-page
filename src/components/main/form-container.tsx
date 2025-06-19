"use client"

import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import 'react-phone-input-2/lib/style.css'
import PhoneInputComponent from './phone-input-component';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const options = [
        { value: "mr",  label: "Mr"},
        { value: "ms",  label: "Ms"},
        { value: "mrs",  label: "Mrs"},
    ]

export default function FormContainer() {
    const [selectedOption, setSelectedOption] = useState("");
    const  [phone, setPhone] = useState("");
    

    const handleChange = (value) => {
        setSelectedOption(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOption);
    }

  return (
    <div className='py-10 w-full'>
      <div className="flex lg:items-start items-center flex-col justify-center w-full mx-auto gap-2 text-center">
        <h1 className='lg:text-2xl text-3xl w-10/12 mx-auto font-semibold uppercase text-center'>
            Discover your next address
        </h1>
        <p className='text-center text-lg w-full italic'>
            <span className='text-red-500 text-lg'>*</span>All fields are compulsory
        </p>

        <form 
        onSubmit={handleSubmit}
        className='space-y-3 w-full mt-2'>
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
                    <Separator className='bg-black h-2' />
                </Select>
            </div>

            <div className="w-full mt-2">
                <Input 
                className='w-full border-none h-12 placeholder:text-md'
                type='text'
                placeholder='First Name*' 
                 />
                 <Separator className='bg-black h-2' />
            </div>

            <div className="w-full mt-2">
                <Input 
                type='text'
                className='w-full border-none h-12 placeholder:text-md'
                placeholder='Last Name*' 
                 />
                 <Separator className='bg-black h-2' />
            </div>

            <div className="w-full mt-2">
                <Input 
                type='email'
                className='w-full border-none h-12 placeholder:text-md'
                placeholder='Email*' 
                 />
                 <Separator className='bg-black h-2' />
            </div>

            <div className="w-full mt-2">
                <PhoneInputComponent
                value={phone} 
                onChange={(value) => setPhone(value)} />
                <Separator className='bg-black/50 h-2' />
            </div>

            <div className="w-full mt-4 relative">
                <Textarea
                className='w-full placeholder:text-md word-wrap h-28'
                placeholder='Comments*' 
                 />
            </div>

            <Button 
            type='submit'
            variant="secondary"
            className='w-full bg-[#132521] hover:bg-emerald-950 text-white text-xl h-12 mt-2'>
                Submit
            </Button>            
        </form>
      </div>
    </div>
  )
}
