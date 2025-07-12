
import React from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


type PhoneInputComponentProps = {
    value: string;
    onChange: ( 
        value: string, 
        data: unknown, 
        event: unknown, 
        formattedValue: string,
    ) => void;
}

export default function PhoneInputComponent ({
  value,
  onChange
}: PhoneInputComponentProps) {
  return (
    <div className="w-full">
      <PhoneInput 
      country="ng" 
      inputClass='w-full text-base h-4 rounded-xl' 
      buttonClass='bg-rose-500'
      containerClass='bg-white items-center justify-start w-full'  
      containerStyle={{ backgroundColor: "#EDEDED", height: 40, }}
      inputStyle={{ height: "100%", border: "none", width: "100%", fontSize: 12, backgroundColor: "#EDEDED"}}
      buttonStyle={{ height: "100%", backgroundColor: "#EDEDED"}}
      searchStyle={{ width: "18vw", height: 40 }}
      dropdownStyle={{ width: "20vw", flex: "left", flexDirection: "column", justifyItems: "left", position: "relative",marginTop: 4}}
      enableSearch 
      disableSearchIcon
      disableDropdown={false}
      dropdownClass='z-50'
       />
       
       </div>
  )
}

