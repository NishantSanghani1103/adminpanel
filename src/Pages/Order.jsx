import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
export default function Order() {

    let [viewOrder, setviewOrder] = useState(false)
    return (
        <>

            <section className={`w-[1320px] mx-auto bg-white shadow-2xl rounded-xl h-[300px] fixed top-2 left-10 ${viewOrder ? '' : 'hidden'}`}>
                <div className='' >
                    <div className='w-full flex items-center justify-between p-5 border-b-1 border-gray-400' id='orderHeading'>
                        <h3 className='text-xl font-semibold'>Product Image's & Price</h3>
                        <span className='text-5xl cursor-pointer text-gray-500  hover:text-black rounded-[50%] flex items-center justify-center' onClick={() => setviewOrder(false)}>&times;</span>
                    </div>
                </div>
            </section>

            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='orders'>
                <div className=' bg-slate-100  p-4  form-heading'>
                    <div className=''>
                        <h3 className='text-[26px] font-semibold'>Order's List</h3>
                    </div>

                </div>
                <div className='form px-4 '>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='w-full text-xs h-[40px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr className=''>
                                {/* <th className='w-[3%]'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' />
                                    </div>
                                </th> */}

                                <th className='w-[12%] py-3'>
                                    <button className=" px-5 py-3 rounded-sm text-white font-semibold bg-gradient-to-br from-purple-600 to-blue-500">
                                        Delete
                                    </button>
                                </th>
                                <th className='w-[10%]'>S. No.</th>
                                <th className='w-[12%]'>Order ID</th>
                                <th className='w-[18%]'>Name</th>
                                <th className='w-[12%]' >Quantity</th>
                                <th className='w-[10%]' >Price</th>
                                <th className='w-[12%]' >Date</th>
                                <th className='w-[12%]' >Status</th>
                                <th className='w-[15%]'>View</th>

                            </tr>
                        </thead>
                        <tbody>


                            <tr className='bg-white  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                <td className='w-[3%] py-7'>
                                    <input type="checkbox" className='w-4 h-4' name="" id="" />
                                </td>
                                <td className='text-base font-bold  '>1</td>
                                <td className='text-base  '>Frank01</td>
                                <td className='text-base font-semibold'>Roshan Chaurasia</td>
                                <td className='text-start' >2</td>
                                <td className='text-start'>₹ 3500</td>
                                <td className='text-start'>10/06/2024</td>
                                <td className='text-start'>Processing...</td>
                                <td><button className='rounded-3xl border-1 border-gray-400 cursor-pointer hover:text-blue-500 px-4 text-black py-2' onClick={() => setviewOrder(true)}>View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
