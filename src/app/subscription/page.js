"use client"
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
export default function Subscription() {
    const [total, setTotal] = useState(0);
    function setAmount(amt) {
        const newtotal = total+amt;
        setTotal(newtotal);
    }
    return (
        <div className="subcription-body p-16">
            <div className="upper-subcription flex">
                <button className="subcription-back text-5xl text-red-700"> <a href="/"> <IoMdArrowBack /></a></button>
                <div className="heading text-5xl mx-4">Subscription Calculator</div>
            </div>

            <div className="subcription-form m-16 flex">







                <div className="subcription-selectors w-1/2">
                    <div>
                        <div className="platform text-2xl mb-4">
                            Platforms:
                        </div>
                        <div className="flex items-center items-start mb-4">
                            <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" className="bg-red-700 border-red-300 focus:ring-3 focus:ring-red-700 h-4 w-4 rounded" defaultChecked />
                            <label htmlFor="checkbox-1" className="text-lg ml-3 font-medium text-white">Netflix</label>
                        </div>
                        <div className="flex items-center items-start mb-4">
                            <input id="checkbox-2" aria-describedby="checkbox-1" type="checkbox" className="bg-red-700 border-red-300 focus:ring-3 focus:ring-red-700 h-4 w-4 rounded" />
                            <label htmlFor="checkbox-2" className="text-lg ml-3 font-medium text-white">Amazon Prime</label>
                        </div>
                        <div className="flex items-center items-start mb-4">
                            <input id="checkbox-3" aria-describedby="checkbox-1" type="checkbox" className="bg-red-700 border-red-300 focus:ring-3 focus:ring-red-700 h-4 w-4 rounded"  />
                            <label htmlFor="checkbox-3" className="text-lg ml-3 font-medium text-white">Disney + Hotstar</label>
                        </div>
                        <div className="flex items-center items-start mb-4">
                            <input id="checkbox-4" aria-describedby="checkbox-1" type="checkbox" className="bg-red-700 border-red-300 focus:ring-3 focus:ring-red-700 h-4 w-4 rounded"  />
                            <label htmlFor="checkbox-4" className="text-lg ml-3 font-medium text-white">Sony Liv</label>
                        </div>
                        <div className="flex items-center items-start mb-4">
                            <input id="checkbox-5" aria-describedby="checkbox-1" type="checkbox" className="bg-red-700 border-red-300 focus:ring-3 focus:ring-red-700 h-4 w-4 rounded" />
                            <label htmlFor="checkbox-5" className="text-lg ml-3 font-medium text-white">Zee5</label>
                        </div>
                        <div className="flex items-center items-start mb-4">
                            <input id="checkbox-6" aria-describedby="checkbox-1" type="checkbox" className="bg-red-700 border-red-300 focus:ring-3 focus:ring-red-700 h-4 w-4 rounded" />
                            <label htmlFor="checkbox-6" className="text-lg ml-3 font-medium text-white">Voot</label>
                        </div>

                        
                    </div>
                </div>











                <div className="subcription-calculator w-1/2 m-4 border rounded-lg pt-16 pb-16">
                    <div className="subs-unit m-4">
                        <div className="unit text-xl flex justify-between mt-2 mb-2">
                            <div className="cal-title">
                                Total Platforms:
                            </div>
                            <div >
                                3
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="subs-unit m-4">
                        <div className="unit text-xl flex justify-between mt-2 mb-2">
                            <div className="cal-title">
                                Duration:
                            </div>
                            <div >
                                3 months
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="subs-unit m-4">
                        <div className="unit text-3xl text-red-700 flex justify-between mt-16 mb-2">
                            <div className="cal-title">
                                Total Cost:
                            </div>
                            <div >
                                Rs: {total}
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>



        </div>
    );
}