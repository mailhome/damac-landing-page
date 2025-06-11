"use client"

import React from 'react'

import WidthContainer from '../width-container'
import Logo from '../main/logo'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Separator } from '../ui/separator'

import { LucideIcon, Phone } from 'lucide-react'
import Link from 'next/link'
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin,
  FaYoutube
 } from "react-icons/fa6"
import { IconType } from 'react-icons/lib'


const topItem = [
  {
    branch: "DAMAC PARK TOWERS -SALES OFFICE",
    address: "Trade Centre - DIFC676H+2G2 - Dubai",
    callhref: "/damac-main",
    label: "Call Now",
    callIcon: Phone,

  },
  {
    branch: "SAUDI ARABIA – RIYADH",
    address: "DAMAC Towers Riyadh South Tower Olaya District King Fahd Road, Riyadh, Saudi Arabia",
    callhref: "/damac-saudi",
    label: "Call Now",
    callIcon: Phone,
  },
  {
    branch: "QATAR – DOHA",
    address: "Building #90-820 Zone 40 Ali bin Talib Street New Salata, Doha, Qatar",
    callhref: "/damac-qatar",
    label: "Call Now",
    callIcon: Phone,
  },
  {
    branch: "BEIRUT - LEBANON",
    address: "DAMAC Properties Lebanon SAL Unit 1801, 18th Floor DAMAC Tower Omar Daouk Street Mina El Hosn, Beirut Central District",
    callhref: "/damac-beirut",
    label: "Call Now",
    callIcon: Phone,
  },

]

const lowerItem = [
  {
    branch: "CHINA - BEIJING",
    address: "Unit 403, 4th Floor, East Tower No.1 East Middle 3rd Road Beijing",
  },

  {
    branch: "CHINA - HONG KONG",
    address: "Suite 1511, 15/F, ICBC Tower, Three Garden Road, Central, Hong Kong",
  },

  {
    branch: "LONDON - UK",
    address: "63-71 Bondway, London SW8 1SQ",
    callhref: "/london-uk",
    label: "Call Now",
    callIcon: Phone,
  },
  {
    branch: "SINGAPORE",
    address: "Unit 11-06 (DAMAC), 11th Floor Asia Square Tower 1, Marina view Marina Bay Singapore 018960",
    agencies: "Our Agencies: Propnex, SRI, Huttons, Sotheby, Century21 C&H, Ripton, AIB",
  },

  {
    branch: "CHINA - SHANGHAI",
    address: "Unit 2510-2511, 25th Floor, Infinitus tower NO.168 Hubin Road, HuangPu District, Shanghai",
  },
]

const socialItem = [
  {
    icon: FaFacebook,
    href:"https://www.facebook.com/DAMACPropertiesOfficial?utm_source=google&utm_medium=paid-search&utm_campaign=AEI-Performance-Multiple-Mix-CK.Dig-Search-Goog-Glbl-ENG-Jan1&channelcluster=pull&bidtype=cpc&goal=project&campaign_id=a12TY000004tv1l&keyword=emaar%20properties&digital_source=search-gsn&gad_source=1&gad_campaignid=22152772936&gbraid=0AAAAADnwM7VYog6DdtxudUAcmvU12jKrq&gclid=CjwKCAjw3MXBBhAzEiwA0vLXQTi3RG5BkN7Gj2mSnTMkbaFJMGraFeWJ9rHuWk76Uv97F_hCoMVqfhoCAL4QAvD_BwE"
  },
  {
    icon: FaXTwitter,
    href:"https://x.com/DAMACOfficial?utm_source=google&utm_medium=paid-search&utm_campaign=AEI-Performance-Multiple-Mix-CK.Dig-Search-Goog-Glbl-ENG-Jan1&channelcluster=pull&bidtype=cpc&goal=project&campaign_id=a12TY000004tv1l&keyword=emaar+properties&digital_source=search-gsn&gad_source=1&gad_campaignid=22152772936&gbraid=0AAAAADnwM7VYog6DdtxudUAcmvU12jKrq&gclid=CjwKCAjw3MXBBhAzEiwA0vLXQTi3RG5BkN7Gj2mSnTMkbaFJMGraFeWJ9rHuWk76Uv97F_hCoMVqfhoCAL4QAvD_BwE"
  },
  {
    icon: FaInstagram,
    href:"https://www.instagram.com/damacofficial/?utm_source=google&utm_medium=paid-search&utm_campaign=AEI-Performance-Multiple-Mix-CK.Dig-Search-Goog-Glbl-ENG-Jan1&channelcluster=pull&bidtype=cpc&goal=project&campaign_id=a12TY000004tv1l&keyword=emaar+properties&digital_source=search-gsn&gad_source=1&gad_campaignid=22152772936&gbraid=0AAAAADnwM7VYog6DdtxudUAcmvU12jKrq&gclid=CjwKCAjw3MXBBhAzEiwA0vLXQTi3RG5BkN7Gj2mSnTMkbaFJMGraFeWJ9rHuWk76Uv97F_hCoMVqfhoCAL4QAvD_BwE"
  },
  {
    icon: FaLinkedin,
    href:"https://www.linkedin.com/company/damac-properties/?utm_source=google&utm_medium=paid-search&utm_campaign=AEI-Performance-Multiple-Mix-CK.Dig-Search-Goog-Glbl-ENG-Jan1&channelcluster=pull&bidtype=cpc&goal=project&campaign_id=a12TY000004tv1l&keyword=emaar+properties&digital_source=search-gsn&gad_source=1&gad_campaignid=22152772936&gbraid=0AAAAADnwM7VYog6DdtxudUAcmvU12jKrq&gclid=CjwKCAjw3MXBBhAzEiwA0vLXQTi3RG5BkN7Gj2mSnTMkbaFJMGraFeWJ9rHuWk76Uv97F_hCoMVqfhoCAL4QAvD_BwE"
  },
  {
    icon: FaYoutube,
    href:"https://www.youtube.com/@DAMACOFFICIAL?utm_source=google&utm_medium=paid-search&utm_campaign=AEI-Performance-Multiple-Mix-CK.Dig-Search-Goog-Glbl-ENG-Jan1&channelcluster=pull&bidtype=cpc&goal=project&campaign_id=a12TY000004tv1l&keyword=emaar+properties&digital_source=search-gsn&gad_source=1&gad_campaignid=22152772936&gbraid=0AAAAADnwM7VYog6DdtxudUAcmvU12jKrq&gclid=CjwKCAjw3MXBBhAzEiwA0vLXQTi3RG5BkN7Gj2mSnTMkbaFJMGraFeWJ9rHuWk76Uv97F_hCoMVqfhoCAL4QAvD_BwE"
  },
]

export default function Footer() {
  
  return (
    <div className="bg-[url('/bg-about.avif')] bg-center bg-cover w-full h-auto">
      <div className="bg-[rgb(4,23,16)] opacity-90 h-full w-full py-10 md:py-16 xl:py-10">
          <div className="w-full width-container">
            <Logo />
            <div className="w-full grid grid-cols-1 xl:grid-cols-4 justify-evenly xl:gap-10 gap-6 2xl:mt-10 py-6">
                  {topItem.map((item) => (
                    <FooterTop 
                    key={item.callhref} 
                    branch={item.branch} 
                    address={item.address} 
                    label={item.label} 
                    callIcon={item.callIcon} 
                    callHref={item.callhref}
                   />
                  )) }
            </div> 
            <Separator  />
            <div className="w-full grid grid-cols-1 xl:grid-cols-4 justify-evenly xl:gap-10 gap-6 2xl:mt-10 my-8">
                  {lowerItem.map((item) => (
                    <FooterBottom 
                    key={item.address}
                    address={item.address} 
                    branch={item.branch} />
                  ))}
            </div>
            <Separator  />
            <div className="2xl:py-6 py-2">
              <div className="flex gap-2 items-center justify-start xl:gap-8">
                <span className='text-amber-400 text-sm xl:text-2xl'>Follow Us On:</span>
                <div className="flex justify-start xl: gap-2 lg:gap-6 items-center">
                  {socialItem.map((item) => (
                    <SocialItem 
                    key={item.href} 
                    href={item.href} 
                    icon={item.icon}/>
                  ))}
                </div>
              </div>
            </div>
            <Separator  />
            <div className='pt-4 text-white text-[10px] w-11/12 mx-auto text-center'>
              <p>This site&apos;s security is ensured by reCAPTCHA. Furthermore, the DAMAC Privacy Policy, Terms of Service, and Cookie Policy are also relevant and applicable.</p>
              <p>&copy;DAMAC Copyright 2025 All rights reserved.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

type Props = {
  branch: string;
  address: string;
  label: string;
  callIcon: LucideIcon;
  callHref: string;  
}

const FooterTop = ({
  branch,
  address,
  label,
  callIcon: Icon,
  callHref
}: Props) => {
  ;
  return (
    <>
    <div className='flex flex-col items-start justify-start text-white gap-3 xl:gap-4'>
        <h2 className='text-sm xl:text-xl 2xl:text-2xl font-medium'>
          {branch}
        </h2>
        <p className='text-xs md:text-xs'>
          {address}
        </p>
        <Link 
        href={callHref}
        className={cn('flex items-center justify-center xl:py-2 gap-2 xl:mt-4', 
        callHref === "/damac-main" && "2xl:mt-10", callHref === "/damac-beirut" && "2xl:-mt-2")}>
          <Button 
          variant="ghost"
          className='border rounded-md xl:py-2 h-8 lg:h-10 border-emerald-100/50 xl:px-16 hover:text-emerald-900 hover:bg-white'>
              <Icon className='size-3 xl:size-4 2xl:size-4' />
              <p className='text-sm 2xl:text-lg' >{label}</p>
          </Button>
        </Link>
    </div>
    </>
  )
}

interface FooterBottomProps  {
  branch: string;
  address: string;
}

const FooterBottom = (
 { branch,
  address,
  
}: FooterBottomProps ) => (
  <div className='flex flex-col items-start justify-start text-white gap-1 xl:gap-4'>
        <h2 className='text-sm xl:text-xl 2xl:text-2xl font-medium'>
          {branch}
        </h2>
        <p className='text-xs md:text-xs'>
          {address}
        </p>
    </div>
)

interface SocialItemProps {
  icon: IconType,
  href: string;
}

const SocialItem = ({
  icon: Icon,
  href
}: SocialItemProps) => {
  return (
    <div className="lg:h-10 lg:w-10 lg:bg-yellow-600 p-1 lg:p-4 rounded-full flex justify-center items-center">x
      <Link href={href} 
      className='cursor-pointer.'
      passHref>
        <Icon className='text-white/80 size-4 lg::size-8 lg:p-1.5' />
      </Link>
    </div>
  )
}



