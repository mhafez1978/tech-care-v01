"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";

export default function Home() {
  const [patientArray, setPatientArray] = useState([]);
  useEffect(() => {
    const getPatientData = async () => {
      try {
        const response = await fetch("/api/get-patients");
        const myData = await response.json();
        setPatientArray(myData);
        console.log(myData);
      } catch (err) {
        console.log(err);
      }
    };
    getPatientData();
  }, []);
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-row gap-4 text-black mt-[2vh] py-4 jusifty-between">
        <div className="w-[367px] bg-white rounded-2xl flex flex-col gap-6 py-4 px-4">
          <div className="w-full flex flex-row justify-between items-center">
            <h2 className="font-bold text-2xl">Patients</h2>
            <img src="/search.png" alt="" />
          </div>
          <div className="patientList">
            <ul>
              {patientArray.map((e, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center justify-between py-4 hover:bg-[#D8FCF7]"
                >
                  <div className="flex flex-row items-center gap-4">
                    <span>
                      <img
                        src={e.profile_picture}
                        alt=""
                        width={36}
                        height={36}
                      />
                    </span>
                    <div className="flex flex-col justify-center">
                      <span className="text-md font-bold">{e.name}</span>
                      <span className="text-base">
                        {e.gender}, {e.age}
                      </span>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3.714"
                    height="18"
                    viewBox="0 0 3.714 18"
                  >
                    <path
                      id="more_vert_FILL0_wght300_GRAD0_opsz24"
                      d="M421.858-752.767a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.789,1.789,0,0,1,421.858-752.767Zm0-7.143a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.789,1.789,0,0,1,421.858-759.91Zm0-7.143a1.788,1.788,0,0,1-1.312-.546A1.788,1.788,0,0,1,420-768.91a1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.545,1.788,1.788,0,0,1,1.312.545,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,421.858-767.053Z"
                      transform="translate(-420.001 770.767)"
                      fill="#072635"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[766px]">
          <div className="flex flex-col gap-4 w-full bg-white rounded-2xl px-4 py-4">
            <h2 className="font-bold text-2xl ">Diagnosis History</h2>
            <div className="w-full bg-[#F4F0FE] min-h-[297px] rounded-xl flex flex-col">
              <div className="mt-[2vh] flex flex-col">
                <div className="w-2/3 pt-2 pl-4">
                  <h4 className="font-bold">Blood Pressure</h4>
                </div>
                <div className=" w-1/3"></div>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between">
              <div className="w-[228px] h-[225px] bg-[#E0F3FA] p-2 rounded-xl">
                Resporatory Rate
              </div>
              <div className="w-[228px] h-[225px] bg-[#FFE6E9] p-2 rounded-xl">
                Tempreture
              </div>
              <div className="w-[228px] h-[225px] bg-[#FFE6F1] p-2 rounded-xl">
                Heart Rate
              </div>
            </div>
          </div>
        </div>
        <div className="w-[367px] bg-white min-h-full rounded-2xl py-4 flex flex-col items-center">
          <img src="/bigAvatar.png" alt="" />
          <h3 className="font-black mt-6">Jessica Taylor</h3>
        </div>
      </div>
    </>
  );
}
