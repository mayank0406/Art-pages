import React from 'react'

function ArtContent() {
    return (
        <div className='main-div w-3/5 h-auto border flex justify-center align-center flex-wrap absolute top-3/5 left-3/5 -translate-y-1/2 -translate-x-1/2'>
            <div className='border-green-600 w-96 p-4 '>
                <img className='border h-96 w-90 bg-cover bg-center ' src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="image" />
            </div>
            <div className='p-6 w-96 '>
                <div className=''>
                    <h1 className='font-bold text-xl  m-2'>"Corporate Theme" Foliage... Conceptual Thematic Painting</h1>
                </div>
                <div className=' m-2'><p>Sold By Augustine Devotta</p></div>
                <div className=' m-2'><h2>Rs. 15,000.00</h2></div><hr />
                <div className=' m-2'><p>Shipping calculated at checkout.</p></div>
                <div className=' m-2'><p>👁 5 People are viewing this right now</p></div>
                <div className=' m-2 text-center'><button className='h-8 bg-red-500 w-72 border rounded-2xl'>ADD TO CART <span><i className=' bg-transparent text-white bx bx-heart' ></i> </span></button></div>
                <div className=' m-2 text-center'><button className=' h-8 bg-green-500 w-72 border rounded-2xl'>BUY IT NOW</button></div>
                <div className=' m-2'>
                    <div className='border'>
                        <span className='inline-block pl-8 pr-8 pt-4 pb-4 hover:bg-slate-400'>Details</span>
                        <span className='inline-block pl-8 pr-8 pt-4 pb-4 hover:bg-slate-400'>Description</span>
                    </div>
                    <div className='border m-2'>
                        <p className='p-2'>Size: 24x18 Inches, hand painted Acrylic on Canvas To be delivered as: Stretched and framed. Description: "Corporate Theme" foliage... conceptual thematic painting, showing leaves entangled with geometrical figure. this Acrylic painting is Ideal for corporate office, board rooms, reception and living room too, Enhances the ambience... especially in corporate offices.</p>
                    </div>
                    <div className=''>
                        <span><i className='font-bold text-3xl pl-2 cursor-pointer bx bxl-facebook-square'></i></span>
                        <span><i className='font-bold text-3xl pl-2 cursor-pointer bx bxl-gmail' ></i></span>
                        <span><i className='font-bold text-3xl pl-2 cursor-pointer bx bxl-instagram' ></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtContent
