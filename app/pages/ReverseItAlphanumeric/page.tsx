"use client";

import { TextInput } from 'flowbite-react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ReverseItAlphanumeric = () => {
  const [userString, setUserString] = useState("");
  const [reversed, setReversed] = useState("");

  useEffect(() => {
    const FetchAndSetData = async () => {
      try {
        const FetchData = async () => {
          const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/ReverseItAlphanumeric/Alphanumeric/${userString}`);
          const data = response.text();
          return data;
        };
        const result = await FetchData();

        setReversed(result);

      } catch (error) {
        console.log("Error Fetching data", error);
      }
    };
    if(userString){
      FetchAndSetData();
    }
  }, [userString])

  return (
    <div>
      <main className='min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 pt-10'>
        <h1 className="grid place-items-center text-5xl md:text-6xl font-[silkscreen] text-[#a1d5ed] drop-shadow-[0_2px_2px_rgba(0,0,0,2)] text-center">Reverse It Alphanumeric</h1>
        <div className="grid place-items-center">
          <p className="text-white bg-gray-600 px-3 mt-5 py-1 text-center w-[80%] mx-auto">Let's reverse some strings. Input a series of characters and numbers into the input field and hit enter. Once you hit enter, you will be shown your input reversed and returned back to you below.</p>
          {/* <input id="userInputField" type="text" placeholder="Enter here" className="bg-white mt-5"> */}
          <TextInput className='mt-5' placeholder='Enter letters/numbers' value={userString} onChange={(event) => setUserString(event.target.value)}></TextInput>
          <p id="userInputReversedOutput" className="bg-white text-black mt-5 px-2">Reversed: {reversed}</p>
          <Link href="/"><button type="button" className="text-white border-2 border-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-10">Back to Home</button></Link>
        </div>
      </main>
    </div>
  )
}

export default ReverseItAlphanumeric