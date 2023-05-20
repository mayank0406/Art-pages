import React from 'react'
import Accordion from './Accordion'


function Headingtwo() {

    const faqs = [
        {
          "id": 1,
          "question": "Register with us",
          "answer": "Register with us by filling the basic information."
        },
        {
          "id": 2,
          "question": "Upload your Artworks",
          "answer": "Once you register and pay registration fee, click on 'Upload Product'. Upload all your artworks one by one, with filling up the necessary information. Our commission of 25% is inclusive of price you quote for each artwork."
        },
        {
          "id": 3,
          "question": "Order placed by buyer",
          "answer": "Once you receive an order, you just need to pack the painting & courier to us. After quality verification, we will courier painting to the buyer."
        },
        {
          "id": 4,
          "question": "Payment to artist",
          "answer": "Once we confirm delivery to buyer, you will receive your payment within 10 to 15 days, in the bank account mentioned by you in your profile. We charge 25% + GST over & above the price you quote."
        }
    ];

  return (
   <div className='w-full shadow-lg border rounded dark:border-slate-700'>
    <div>
        <h1 className='text-center text-xl p-2 border bg-slate-100'>Get paid within 15 days | 3,000+ Artworks Sold | Sell your Paintings, Drawings & Handicrafts!</h1>
    </div>
    <div className='flex flex-col md:flex-row  flex-wrap'>
        
        <div className='w-full md:w-1/2 h-96 md:h-auto  border-b-2 md:border-none'>
            <div className='m-auto'>
                <h2 className='text-center font-bold text-2xl mt-8'>Sell Your Art</h2>
           <div className='pt-20 text-center'>
             <button className=' text-xl w-96 h-16 font-bold bg-slate-400 border rounded-lg'>Register Now</button>
             <p className='p-1'>* Terms and conditions</p>
             <p className='p-1'>* Registration fee, Valid for 2 Years - ₹ 799 (Including Taxes)</p>
           </div>
        </div>
        </div>

        <div className='w-full md:w-1/2 p-4'>
          <h1 className='text-center font-semibold text-xl'>How to sell Paintings, Drawings and Handicrafts Online?</h1>
          { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
              <p className='p-2 m-4'> Join our Telegram group for Tips,Tricks on how to Sell your Artwork fast on our Website</p>
              <button className='bg-emerald-200 font-bold text-lg rounded-lg w-full h-12'>Join us on telegram</button>
        </div>
        
    </div>
   <div>
    <p className='p-4'>Start with registration and get ready to sell your paintings online. An artist can sell Paintings, Drawings and Handicrafts with the freedom of putting up the price he/she wants. Artist can upload 1 to as many artworks.
       We support Artists to sell art online by various promotional methods like social media, Google search marketing, ads etc. We wish to create the best online place for Artists to sell & equally best place for Art lovers to buy.</p>
   </div>
    </div>
  )
}

export default Headingtwo
