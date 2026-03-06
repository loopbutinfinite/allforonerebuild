import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return ( 
    <div className="">
      <main className="min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 pt-10">
        <h1 className="grid place-items-center text-6xl md:text-8xl font-[silkscreen] text-[#34BCFB] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2)]">All-For-One</h1>
        <h3 className="grid place-items-center text-5xl md:text-6xl mt-3 mb-5 font-[silkscreen] text-[#35E8B0] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2)]">
          Arcade</h3>
        <div className="grid place-items-center">
          <Link href="pages/HelloWorld"><button type="button"
            className="text-gray-900 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2">Hello
            World!</button></Link>
          <Link href="pages/AskingQuestions"><button type="button"
            className="text-gray-900 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2">Asking
            Questions</button></Link>
          <Link href="pages/AddingTwoNumbers"><button type="button"
            className="text-gray-900 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2">Adding
            Two Numbers</button></Link>
          <Link href="pages/MadLib"><button type="button"
            className="text-gray-900 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2">MadLib</button></Link>
          <Link href="pages/OddOrEven"><button type="button"
            className="text-gray-900 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2">Odd
            or Even</button></Link>
          <Link href="pages/ReverseItAlphanumeric"><button type="button"
            className="text-gray-900 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2">Reverse
            It (Alphanumberic)</button></Link>
          <Link href="pages/ReverseItNumbersOnly"><button type="button"
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2">Reverse
            It (Numbers Only)</button></Link>
          <Link href="pages/GreaterThanLessThan"><button type="button"
            className="text-black bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2">Greater
            Than Less Than</button></Link>
          <Link href="pages/Magic8Ball"><button type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2">Magic
            8 Ball</button></Link>
          <Link href="pages/RestaurantPicker"><button type="button"
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2">Restaurant
            Picker</button></Link>
        </div>
      </main>
    </div>
  );
}
