"use client";

import { TextInput } from 'flowbite-react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FetchHelloWorld } from '@/app/utils/DataService';

const HelloWorld = () => {
    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
        const FetchAndSetData = async () => {
            const result = await FetchHelloWorld(name);
            setDisplayName(result);

        };
        if (name) {
            FetchAndSetData();
        }
    }, [name]);

    return (
        <div>
            <main className='bg-linear-to-r from-cyan-500 to-blue-500 min-h-screen pt-10'>
                <h1 className="grid place-items-center text-6xl font-[silkscreen] text-[#a1d5ed] drop-shadow-[0_2px_2px_rgba(0,0,0,2)]">Hello World</h1>
                <div className="grid place-items-center my-5">
                    <p className="text-white bg-gray-600 px-3 mx-auto w-[80%] text-center py-1 text-xl">Type your name into the input field below and see it displayed below in a greeting.</p>
                    <p className="text-black bg-white mt-5">Greeting: {displayName}</p>
                </div>
                <div className="grid place-items-center">
                    {/* <input className="bg-white mt-5" type="text" placeholder="Enter your name"> */}
                    <TextInput placeholder='Enter your name' className='mt-5' value={name} onChange={(event) => setName(event.target.value)}></TextInput>
                    <Link className="mt-5" href="/"><button type="button" className="text-white border-2 border-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back to Home</button></Link>
                </div>
            </main>
        </div>
    )
}

export default HelloWorld