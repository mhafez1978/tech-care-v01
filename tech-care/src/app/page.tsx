"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";

export default function Home() {
  const [patientArray, setPatientArray] = useState([]);
  const [patientVitals, setPatientVitals] = useState({
    respiratory_rate: 0,
    temperature: 0,
    heart_rate: 0,
    level1: "",
    level2: "",
    level3: "",
    problem: "",
    description: "",
    status: "",
    dob: "",
    gender: "",
    phone: "",
    emphone: "",
    insurance: "",
    picture: "",
    name: "",
    labResults: [],
  });

  interface EachProps {
    respiratory_rate: number;
    temperature: number;
    heart_rate: number;
    level1: string;
    level2: string;
    level3: string;
    problem: string;
    description: string;
    status: string;
    dob: string;
    gender: string;
    phone: string;
    emphone: string;
    insurance: string;
    picture: string;
    name: string;
    labResults: string[];
  }
  const handlePatientClick = (each: EachProps) => {
    setPatientVitals({
      respiratory_rate: each.diagnosis_history[0].respiratory_rate.value,
      temperature: each.diagnosis_history[0].temperature.value,
      heart_rate: each.diagnosis_history[0].heart_rate.value,
      level1: each.diagnosis_history[0].respiratory_rate.levels,
      level2: each.diagnosis_history[0].temperature.levels,
      level3: each.diagnosis_history[0].heart_rate.levels,
      problem: each.diagnostic_list[0].name,
      description: each.diagnostic_list[0].description,
      status: each.diagnostic_list[0].status,
      dob: each.date_of_birth,
      gender: each.gender,
      phone: each.phone_number,
      emphone: each.emrgency_contact,
      insurance: each.insurance_type,
      picture: each.profile_picture,
      name: each.name,
      labResults: each.lab_results,
    });

    console.log("end....");
  };

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
              {patientArray.map((each, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center justify-between py-4 hover:bg-[#D8FCF7]"
                  onClick={(e) => handlePatientClick(each)}
                >
                  <div className="flex flex-row items-center gap-4">
                    <span>
                      <img
                        src={each.profile_picture}
                        alt=""
                        width={36}
                        height={36}
                      />
                    </span>
                    <div className="flex flex-col justify-center">
                      <span className="text-md font-bold">{each.name}</span>
                      <span className="text-base">
                        {each.gender}, {each.age}
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
              <div className="w-[228px] h-[225px] bg-[#E0F3FA] p-2 rounded-xl flex flex-col">
                <img
                  src="/respiratory_rate.png"
                  alt=""
                  width={96}
                  height={96}
                />
                <h4>Resporatory Rate</h4>
                <span className="font-bold text-2xl">
                  {patientVitals.respiratory_rate} bpm
                </span>
                <span>{patientVitals.level1}</span>
              </div>
              <div className="w-[228px] h-[225px] bg-[#FFE6E9] p-2 rounded-xl flex flex-col">
                <img src="/temperature.png" alt="" width={96} height={96} />
                <h4>Temprature</h4>
                <span className="font-bold text-2xl">
                  {patientVitals.temperature} &deg;F
                </span>
                <span>{patientVitals.level2}</span>
              </div>
              <div className="w-[228px] h-[225px] bg-[#FFE6F1] p-2 rounded-xl flex flex-col">
                <img src="/HeartBPM.png" alt="" width={96} height={96} />
                <h4>Heart Rate</h4>
                <span className="font-bold text-2xl">
                  {patientVitals.heart_rate} bpm
                </span>
                <span>{patientVitals.level3}</span>
              </div>
            </div>
            <div className="w-full flex flex-col bg-white">
              <h3 className="text-2xl font-bold">Diagnostic List</h3>
              <table className="mt-4">
                <thead>
                  <tr className="w-full h-[48px] bg-slate-200 p-4 text-black rounded-2xl">
                    <th className="w-1/4 text-left pl-2">Problem/Diagnosis</th>
                    <th className="w-2/4 text-left">Description</th>
                    <th className="w-1/4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="w-full h-[48px] bg-white p-4 text-black rounded-2xl">
                    <td className="w-1/4 pl-2">{patientVitals.problem}</td>
                    <td className="w-2/4">{patientVitals.description}</td>
                    <td className="w-1/4">{patientVitals.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-[367px] bg-white rounded-2xl py-4 flex flex-col items-center">
            <img src={patientVitals.picture} alt="" width={200} height={200} />
            <h3 className="font-black mt-6 mb-8">{patientVitals.name}</h3>
            <ul className="w-full flex flex-col gap-4 text-left px-4 capitalize">
              <li className="flex flex-row gap-2  items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                >
                  <g id="BirthIcon" transform="translate(-1235 -471)">
                    <circle
                      id="Ellipse_9"
                      data-name="Ellipse 9"
                      cx="21"
                      cy="21"
                      r="21"
                      transform="translate(1235 471)"
                      fill="#f6f7f8"
                    />
                    <path
                      id="calendar_today_FILL0_wght300_GRAD0_opsz24"
                      d="M141.892-844.614a1.826,1.826,0,0,1-1.342-.549,1.826,1.826,0,0,1-.549-1.342v-14a1.826,1.826,0,0,1,.549-1.342,1.826,1.826,0,0,1,1.342-.549h1.449v-1.408a.78.78,0,0,1,.23-.574.78.78,0,0,1,.574-.23.779.779,0,0,1,.574.23.779.779,0,0,1,.23.574v1.408h7.928v-1.429a.76.76,0,0,1,.225-.559.759.759,0,0,1,.559-.225.759.759,0,0,1,.559.225.76.76,0,0,1,.225.559v1.429H155.9a1.826,1.826,0,0,1,1.342.549,1.826,1.826,0,0,1,.549,1.342v14a1.826,1.826,0,0,1-.549,1.342,1.826,1.826,0,0,1-1.342.549Zm0-1.569h14a.308.308,0,0,0,.221-.1.308.308,0,0,0,.1-.221v-9.819H141.57v9.819a.308.308,0,0,0,.1.221A.308.308,0,0,0,141.892-846.183Zm-.322-11.71h14.648v-2.616a.308.308,0,0,0-.1-.221.308.308,0,0,0-.221-.1h-14a.308.308,0,0,0-.221.1.308.308,0,0,0-.1.221Zm0,0v0Z"
                      transform="translate(1106.999 1346.614)"
                      fill="#072635"
                    />
                  </g>
                </svg>
                <div className="flex flex-col">
                  <span>date of birth</span>
                  {new Date(patientVitals.dob).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </li>
              <li className="flex flex-row gap-2  items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                >
                  <g id="BirthIcon" transform="translate(-1235 -471)">
                    <circle
                      id="Ellipse_9"
                      data-name="Ellipse 9"
                      cx="21"
                      cy="21"
                      r="21"
                      transform="translate(1235 471)"
                      fill="#f6f7f8"
                    />
                    <path
                      id="calendar_today_FILL0_wght300_GRAD0_opsz24"
                      d="M141.892-844.614a1.826,1.826,0,0,1-1.342-.549,1.826,1.826,0,0,1-.549-1.342v-14a1.826,1.826,0,0,1,.549-1.342,1.826,1.826,0,0,1,1.342-.549h1.449v-1.408a.78.78,0,0,1,.23-.574.78.78,0,0,1,.574-.23.779.779,0,0,1,.574.23.779.779,0,0,1,.23.574v1.408h7.928v-1.429a.76.76,0,0,1,.225-.559.759.759,0,0,1,.559-.225.759.759,0,0,1,.559.225.76.76,0,0,1,.225.559v1.429H155.9a1.826,1.826,0,0,1,1.342.549,1.826,1.826,0,0,1,.549,1.342v14a1.826,1.826,0,0,1-.549,1.342,1.826,1.826,0,0,1-1.342.549Zm0-1.569h14a.308.308,0,0,0,.221-.1.308.308,0,0,0,.1-.221v-9.819H141.57v9.819a.308.308,0,0,0,.1.221A.308.308,0,0,0,141.892-846.183Zm-.322-11.71h14.648v-2.616a.308.308,0,0,0-.1-.221.308.308,0,0,0-.221-.1h-14a.308.308,0,0,0-.221.1.308.308,0,0,0-.1.221Zm0,0v0Z"
                      transform="translate(1106.999 1346.614)"
                      fill="#072635"
                    />
                  </g>
                </svg>
                <div className="flex flex-col">
                  <span>Gender</span>
                  {patientVitals.gender}
                </div>
              </li>
              <li className="flex flex-row gap-2  items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                >
                  <g id="PhoneIcon" transform="translate(-1235 -471)">
                    <circle
                      id="Ellipse_9"
                      data-name="Ellipse 9"
                      cx="21"
                      cy="21"
                      r="21"
                      transform="translate(1235 471)"
                      fill="#f6f7f8"
                    />
                    <path
                      id="call_FILL0_wght300_GRAD0_opsz24"
                      d="M158.754-800a15.86,15.86,0,0,1-6.682-1.546,21.268,21.268,0,0,1-6.167-4.363,21.421,21.421,0,0,1-4.357-6.167A15.823,15.823,0,0,1,140-818.752a1.214,1.214,0,0,1,.353-.89,1.192,1.192,0,0,1,.882-.356h3.837a1.175,1.175,0,0,1,.786.291,1.279,1.279,0,0,1,.433.718l.674,3.462a1.978,1.978,0,0,1-.029.828,1.231,1.231,0,0,1-.357.581l-2.717,2.645a16.322,16.322,0,0,0,1.5,2.273,22.419,22.419,0,0,0,1.825,2.046,20.311,20.311,0,0,0,2.059,1.8,20.68,20.68,0,0,0,2.355,1.545l2.64-2.663a1.494,1.494,0,0,1,.669-.4,1.922,1.922,0,0,1,.816-.057l3.267.665a1.382,1.382,0,0,1,.727.455,1.16,1.16,0,0,1,.282.765v3.814a1.191,1.191,0,0,1-.356.882A1.214,1.214,0,0,1,158.754-800Zm-15.726-13.145,2.1-2.009a.21.21,0,0,0,.074-.124.275.275,0,0,0-.006-.147l-.511-2.629a.242.242,0,0,0-.079-.136.228.228,0,0,0-.147-.045h-2.516a.154.154,0,0,0-.113.045.153.153,0,0,0-.045.113,15.049,15.049,0,0,0,.395,2.45A14.978,14.978,0,0,0,143.028-813.144Zm10.235,10.167a12.1,12.1,0,0,0,2.44.834,13.842,13.842,0,0,0,2.374.343.153.153,0,0,0,.113-.045.153.153,0,0,0,.045-.113v-2.475a.228.228,0,0,0-.045-.147.242.242,0,0,0-.136-.079l-2.471-.5a.186.186,0,0,0-.119-.006.289.289,0,0,0-.107.074ZM143.028-813.144ZM153.263-802.976Z"
                      transform="translate(1105.999 1301.999)"
                      fill="#072635"
                    />
                  </g>
                </svg>
                <div className="flex flex-col">
                  <span> Contact Info</span>
                  {patientVitals.phone}
                </div>
              </li>
              <li className="flex flex-row gap-2  items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                >
                  <g id="PhoneIcon" transform="translate(-1235 -471)">
                    <circle
                      id="Ellipse_9"
                      data-name="Ellipse 9"
                      cx="21"
                      cy="21"
                      r="21"
                      transform="translate(1235 471)"
                      fill="#f6f7f8"
                    />
                    <path
                      id="call_FILL0_wght300_GRAD0_opsz24"
                      d="M158.754-800a15.86,15.86,0,0,1-6.682-1.546,21.268,21.268,0,0,1-6.167-4.363,21.421,21.421,0,0,1-4.357-6.167A15.823,15.823,0,0,1,140-818.752a1.214,1.214,0,0,1,.353-.89,1.192,1.192,0,0,1,.882-.356h3.837a1.175,1.175,0,0,1,.786.291,1.279,1.279,0,0,1,.433.718l.674,3.462a1.978,1.978,0,0,1-.029.828,1.231,1.231,0,0,1-.357.581l-2.717,2.645a16.322,16.322,0,0,0,1.5,2.273,22.419,22.419,0,0,0,1.825,2.046,20.311,20.311,0,0,0,2.059,1.8,20.68,20.68,0,0,0,2.355,1.545l2.64-2.663a1.494,1.494,0,0,1,.669-.4,1.922,1.922,0,0,1,.816-.057l3.267.665a1.382,1.382,0,0,1,.727.455,1.16,1.16,0,0,1,.282.765v3.814a1.191,1.191,0,0,1-.356.882A1.214,1.214,0,0,1,158.754-800Zm-15.726-13.145,2.1-2.009a.21.21,0,0,0,.074-.124.275.275,0,0,0-.006-.147l-.511-2.629a.242.242,0,0,0-.079-.136.228.228,0,0,0-.147-.045h-2.516a.154.154,0,0,0-.113.045.153.153,0,0,0-.045.113,15.049,15.049,0,0,0,.395,2.45A14.978,14.978,0,0,0,143.028-813.144Zm10.235,10.167a12.1,12.1,0,0,0,2.44.834,13.842,13.842,0,0,0,2.374.343.153.153,0,0,0,.113-.045.153.153,0,0,0,.045-.113v-2.475a.228.228,0,0,0-.045-.147.242.242,0,0,0-.136-.079l-2.471-.5a.186.186,0,0,0-.119-.006.289.289,0,0,0-.107.074ZM143.028-813.144ZM153.263-802.976Z"
                      transform="translate(1105.999 1301.999)"
                      fill="#072635"
                    />
                  </g>
                </svg>
                <div className="flex flex-col">
                  <span>Emergency Contact</span>
                  {patientVitals.emphone}
                </div>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                >
                  <g id="InsuranceIcon" transform="translate(-1235 -471)">
                    <circle
                      id="Ellipse_9"
                      data-name="Ellipse 9"
                      cx="21"
                      cy="21"
                      r="21"
                      transform="translate(1235 471)"
                      fill="#f6f7f8"
                    />
                    <path
                      id="verified_user_FILL0_wght300_GRAD0_opsz24"
                      d="M186.9-842.111l-1.7-1.7a.784.784,0,0,0-.558-.244.764.764,0,0,0-.569.244.786.786,0,0,0-.249.572.786.786,0,0,0,.249.572l2.153,2.17a.927.927,0,0,0,.677.29.927.927,0,0,0,.677-.29l4.432-4.432a.793.793,0,0,0,.244-.567.774.774,0,0,0-.244-.577.786.786,0,0,0-.572-.249.786.786,0,0,0-.572.249Zm1.123,8.882a1.986,1.986,0,0,1-.327-.027,1.811,1.811,0,0,1-.311-.08A10.471,10.471,0,0,1,182-837.6a11.865,11.865,0,0,1-2-6.611v-4.816a1.829,1.829,0,0,1,.352-1.1,2.01,2.01,0,0,1,.9-.708l6.087-2.273a1.993,1.993,0,0,1,.677-.123,1.993,1.993,0,0,1,.677.123l6.087,2.273a2.01,2.01,0,0,1,.9.708,1.829,1.829,0,0,1,.352,1.1v4.816a11.865,11.865,0,0,1-2,6.611,10.471,10.471,0,0,1-5.383,4.266,1.811,1.811,0,0,1-.311.08A1.986,1.986,0,0,1,188.022-833.229Zm0-1.573a8.7,8.7,0,0,0,4.6-3.529,10.157,10.157,0,0,0,1.818-5.882v-4.827a.319.319,0,0,0-.057-.185.341.341,0,0,0-.159-.123l-6.087-2.273a.3.3,0,0,0-.113-.021.3.3,0,0,0-.113.021l-6.087,2.273a.341.341,0,0,0-.159.123.319.319,0,0,0-.057.185v4.827a10.157,10.157,0,0,0,1.818,5.882A8.7,8.7,0,0,0,188.022-834.8ZM188.022-843.23Z"
                      transform="translate(1067.999 1335.229)"
                      fill="#072635"
                    />
                  </g>
                </svg>
                <div className="flex flex-col">
                  <span>Insurance Provider</span>
                  {patientVitals.insurance}
                </div>
              </li>
            </ul>
            <button className="capitalize mt-8 bg-[#01F0D0] rounded-2xl py-2 px-6">
              Show all information
            </button>
          </div>
          <div className="w-full flex-flex-col bg-white rounded-2xl py-4 px-4">
            <h3 className="text-2xl font-bold mb-4">Lab Results</h3>
            <ul className="flex flex-col gap-4">
              {patientVitals.labResults.map((each) => (
                <li className="w-full flex flex-row justify-between items-center py-2 px-4 hover:bg-slate-200">
                  <span className="text-sm">{each}</span>
                  <img src="/download.png" alt="" width={20} height={20} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
