import React from 'react'
import Link from 'next/link'

export default function BottomNavigation() {

    return (
        <footer
            className="fixed h-16 bg-gray-200 w-full bottom-0 flex items-center justify-center"
        >
            <div className="flex justify-center w-full grid grid-cols-3 divide-x divide-gray-400">
                <div className="justify-center">
                    <Link href="/">
                        <button className="w-full">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-1/3 h-16 focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                                aria-hidden="true"
                                focusable="false"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 512 512">
                                <path d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"
                                    fill="black" /><rect x="0" y="0" width="512" height="512" fill="rgba(0, 0, 0, 0)" /></svg>
                        </button>
                    </Link >
                </div>
                <div className="justify-center">
                    <Link href="/upload">
                        <button className="w-full">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-1/3 h-16 focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                                aria-hidden="true"
                                focusable="false"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24">
                                <path d="M11 15h2V9h3l-4-5l-4 5h3z" fill="black" /><path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" fill="#626262" /><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
                        </button>
                    </Link >
                </div>

                <div className="justify-center">
                    <Link href="/profile">
                        <button className="w-full">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-1/3 h-16 focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                                aria-hidden="true"
                                focusable="false"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24">
                                <g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" fill="#626262" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21z" fill="#626262" /></g><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
                        </button>
                    </Link >
                </div>
            </div>
        </footer>
    )
}
