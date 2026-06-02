import FileArrowDownIcon from '@/components/icon/file-arrow-down-icon'
import PaperPlaneIcon from '@/components/icon/paper-plane-icon'
import { SparklesText } from '@/components/magicui/sparkles-text'
import { WordRotate } from '@/components/magicui/word-rotate'
import { Button } from '@/components/ui/button'
import { SOCIAL_LINKS, MAIN_SKILLS, CV_URL } from '@/lib/constants'
import { Spotlight } from '@/components/ui/spotlight'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AuroraText } from '@/components/magicui/aurora-text'
import ChevronRightIcon from '@/components/icon/chevron-right-icon'
import { ScratchToReveal } from '@/components/magicui/scratch-to-reveal'

const AboutSection = () => {
  return (
    <section id='about'>
      {/* Background */}
      <Spotlight className='-top-40 left-0 md:-top-20 md:left-60' fill='white' />

      {/* I - Introduction */}
      <div id='about-introduction' className='container flex flex-col-reverse xl:flex-row gap-10'>
        {/* Left: Content */}
        <div className='flex-1 flex flex-col text-center xl:text-left items-center xl:items-start justify-center gap-4'>
          <div className='flex items-center gap-2 text-2xl sm:text-3xl xl:text-4xl font-lobster'>
            <h3>Hello, I&apos;m</h3>
            <WordRotate duration={5000} className='text-primary pr-1' words={['Kaito Hoshizora']} />
          </div>

          <div className='flex items-center gap-0 sm:gap-2 text-2xl sm:text-3xl xl:text-5xl'>
            <h1 className='mr-2'>I&apos;m a</h1>
            <SparklesText
              className='text-2xl sm:text-3xl xl:text-5xl font-medium'
              colors={{ first: '#FFA001', second: '#FE8FB5' }}
            >
              Ecommerce Full-stack Engineer
            </SparklesText>
          </div>

          <p className='text-sm sm:text-xl xl:text-2xl text-balance leading-relaxed'>
            with 8+ years of experience building scalable Shopify Plus, Shopify, WooCommerce, and headless 
            commerce platforms. Expertise in React, Next.js, TypeScript, Node.js, PHP, and API integrations. 
            Proven ability to improve site performance, conversions, and customer experience through modern 
            architecture, automation, and data-driven optimization. Experienced with cloud platforms, CI/CD, 
            and Agile development, delivering end-to-end solutions that align technology with business growth objectives.          
          </p>

          {/* Main Skill Icons */}
          {/* <div className='flex flex-col gap-2 mt-6'>
            <p className='text-md xl:text-lg font-medium mb-2'>My Main Skills:</p>
            <div className='flex items-center gap-6 text-lg'>
              {MAIN_SKILLS.map(({ icon: Icon, name }) => (
                <div key={name} className='flex items-center gap-2'>
                  <Icon width={32} height={32} />
                  <p className='hidden md:block'>{name}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Buttons */}
          <div className='flex flex-col md:flex-row items-center gap-6 mt-12 w-3/4 xl:w-full'>
            <Link href={CV_URL} target='_blank' className='w-full'>
              <Button variant={'default'} className='w-full text-xl sm:text-2xl py-8'>
                <FileArrowDownIcon width={24} height={24} /> Download CV
              </Button>
            </Link>
            <Link href='#contact' className='w-full'>
              <Button variant={'outline'} className='w-full text-xl sm:text-2xl py-8'>
                <PaperPlaneIcon width={24} height={24} /> Contact Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Image & Social Media */}
      </div>

      {/* II - Achievements  */}
    </section>
  )
}

export default AboutSection
