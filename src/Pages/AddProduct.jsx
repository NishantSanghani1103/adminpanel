import React from 'react'

export default function AddProduct() {
    return (
        <>
            <section className='mt-5 max-w-full rounded-md  ' id='addProduct'>
                {/* <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
                    <h3 className='text-[26px] font-semibold'>Add Sub Category</h3>
                </div> */}
                <div>
                    <form action="" className='p-2'>
                        <div className='grid grid-cols-3 gap-5'>
                            <div>
                                <div className='h-80' style={{ border: "1px solid red" }}>
                                    <label htmlFor="" className='text-[16px] font-semibold'>Category Image</label>
                                    <input type="file" className='' />

                                </div>
                                <div className='h-80' style={{ border: "1px solid red" }}>
                                    <label htmlFor="" className='text-[16px] font-semibold'>Category Image</label>
                                    <input type="file" className='' />

                                </div>
                                <div className='h-80' style={{ border: "1px solid red" }}>
                                    <label htmlFor="" className='text-[16px] font-semibold'>Category Image</label>
                                    <input type="file" className='' />

                                </div>

                            </div>

                            <div>
                                <label htmlFor="" className='text-[16px] font-semibold'>Product Name</label>
                                <input type="text" placeholder='Product Name' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Category </label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Select Category</option>
                                    <option value="">Mobile Phones</option>
                                    <option value="">Leptops</option>
                                    <option value="">Men's Wear</option>
                                    <option value="">Women's Wear</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Meterial</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Neem</option>
                                    <option value="">Babbul</option>
                                    <option value="">Neem</option>
                                    <option value="">Babbul</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Product Type</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Featured</option>
                                    <option value="">New Arrival</option>
                                    <option value="">OnSale</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Is Top Rated</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>


                                <label htmlFor="" className='text-[16px] font-semibold'>Actual Price</label>
                                <input type="text" placeholder='Actual Price' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Total In Stocks</label>
                                <input type="text" placeholder='Total In Stocks' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                            </div>


                            <div>
                                <label htmlFor="" className='text-[16px] font-semibold'>Select Parent Category</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Mobile Phones</option>
                                    <option value="">Leptops</option>
                                    <option value="">Men's Wear</option>
                                    <option value="">Women's Wear</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Sub Category</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Neem</option>
                                    <option value="">Babbul</option>
                                    <option value="">Neem</option>
                                    <option value="">Babbul</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Color</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Red</option>
                                    <option value="">Green</option>
                                    <option value="">Blue</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Is Best Selling</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Is Upsell</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Sale Price</label>
                                <input type="text" placeholder='Sale Price' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                                <input type="text" placeholder='Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                            </div>
                        </div>


                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
                    </form>

                </div>
            </section>
        </>
    )
}
