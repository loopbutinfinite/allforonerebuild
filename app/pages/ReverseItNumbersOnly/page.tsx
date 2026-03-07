"use client";

import { TextInput } from 'flowbite-react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FetchReverseItNumbersOnly } from '@/app/utils/DataService';

const ReverseItNumbersOnly = () => {
    const [userNum, setUserNum] = useState("");
    const [numReversed, setNumReversed] = useState("");

    useEffect(() => {
        const FetchAndSetData = async () => {
            const result = await FetchReverseItNumbersOnly(userNum);
            setNumReversed(result);
        };
        if (userNum) {
            FetchAndSetData();
        }
    }, [userNum])

    return (
        <div>
            <main className='min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 pt-10'>
                <h1 className="grid place-items-center text-5xl md;text-6xl font-[silkscreen] text-[#a1d5ed] drop-shadow-[0_2px_2px_rgba(0,0,0,2)] text-center">Reverse It Numbers Only</h1>
                <div className="grid place-items-center">
                    <p className="text-white bg-gray-600 px-3 mt-5 py-1 text-center w-[80%] mx-auto">Let's reverse some numbers. As with the other game, once you input your response (digits only) and hit enter. You will see your input in reverse populate below.</p>
                    {/* <input id="userDigitInputField" type="text" placeholder="Enter digits here" className="bg-white mt-5"> */}
                    <TextInput className='mt-5' placeholder='Enter integer values' value={userNum} onChange={(event) => setUserNum(event.target.value)}></TextInput>
                    <p id="numbersReversedOutput" className="bg-gray-200 text-black mt-5 px-2">{numReversed}</p>
                    <Link href="/"><button type="button" className="text-white border-2 border-black mt-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back to Home</button></Link>
                </div>
            </main>
        </div>
    )
}

export default ReverseItNumbersOnly