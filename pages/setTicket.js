import React, { useState } from "react";
import { addVideo } from "../utils/CTS3";
import { TextField, Slider, Typography, Button } from "@material-ui/core";
import { Icon, InlineIcon } from '@iconify/react';
import data from "../data/Data"
import Converter from "../components/tokenConverter2"
import Link from 'next/link'

import LoadingOverlay from '../components/LoadingOverlay';

function setTicket() {

    return (
        <div>

            <div className="flex justify-center">
                <hr className="bg-gray-400 h-1 border-transparent w-1/2 m-8"></hr>
            </div>
            <br />
            <div className="shadow-xl group container  rounded-md bg-white max-w-lg mx-auto content-div">
                <div className="flex justify-center">
                    {/*Ticket icon*/}
                    <svg className="justify-center align-middle h-12 w-12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                        <path d="M2 7v7h1c1.191 0 2 .809 2 2c0 1.191-.809 2-2 2H2v7h28v-7h-1c-1.191 0-2-.809-2-2c0-1.191.809-2 2-2h1V7zm2 2h24v3.188c-1.715.449-3 1.957-3 3.812c0 1.855 1.285 3.363 3 3.813V23H4v-3.188c1.715-.449 3-1.957 3-3.812c0-1.855-1.285-3.363-3-3.813z" fill="#626262" />
                    </svg>
                </div>

                <div className="justify-center">
                    <div className="flex items-center">
                    </div>
                    <h1 className="mt-3 mb-8 text-center font-extrabold text-2xl underline text-gray-900 text-opacity-100" >
                        Set Ticket Price
            </h1>
                </div>

                <div className="mt-10 flex justify-center">
                    <Converter />
                </div>


                {/*Checkmark icon*/}
                <Link href="/player">
                    <div className="flex justify-center">
                        <button>
                            <svg className="h-12 w-12 my-4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="black" /></svg>
                        </button>

                    </div>
                </Link>
            </div >
        </div>
    )
}

export default setTicket;