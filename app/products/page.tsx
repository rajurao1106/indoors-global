import React from 'react'
import Products from './Products'
import CTA from '@/components/homepage/CTA'
import Features from '../about/Features'

export default function page() {
  return (
    <div className='pt-[4rem]'>
      <Products/>
      <Features/>
      <CTA/>
    </div>
  )
}
