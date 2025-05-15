import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import axiosInstance from "../../../axios/baseUrl"
import axios from "axios"

const Form = () => {
  const [utmSource, setUtmSource] = useState("")
  const [utmCamp, setutmCamp] = useState("")
  const [ipAddress, setIpAddress] = useState("")
  const [loading, setLoading] = useState(false)
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      lead_types_id: "desaihomes_kottayam",
      ip_address: "",
      utm_source: "",
      source_url: "",
      requirement: "",
      company_name: "desaihomes",
      message: "",
    },
    mode: "all",
  })

  // get utm_source

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const source = searchParams.get("utm_source")
    const utmCamp = searchParams.get("utm_campaign")
    setutmCamp(utmCamp)
    setUtmSource(source)
  }, [])

  // ip address

  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        setIpAddress(response.data.ip)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      data.ip_address = ipAddress
      data.utm_source = utmSource
      data.source_url = window.location.href
      data.utm_campaign = utmCamp
      data.requirement = `project:${data.project}`
      data.price_range = data.price_range
      ;(data.location = data.location), (data.message = data.message)
      const postResponse = await axiosInstance.post("/store", data)
      if (postResponse.data.status === "success") {
        document.cookie = "formSubmitted=true; max-age=" + 365 * 24 * 60 * 60
        const DataFields = `project_id:${
          data.project === "DD Majestic Mount (Starts from 59Lakh)"
            ? 17
            : data.project === "DD Legacy Heights (Starts from 49.5Lakh)"
            ? 15
            : data.project === "DD City Gate (Starts from 44Lakh)"
            ? 16
            : null
        }||crm_status:1||crm_lead_type_id:1||source_url:'https://desaihomes.com/campaigns/flats-in-kottayam||source:campaign||email:${
          data.email
        }||name:${data.name}||city:city||campaign_name:${
          utmCamp || data.project
        }||phone_number:${
          data.phone_number
        }||message:message||ip_address:${ipAddress}||utm_source:${utmSource} ||price_range:${
          data.price_range
        }||location:${data.location} ||price_range:${
          data.price_range
        } ||message:${data.message} `

        let config = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            "Content-Type": "application/json",
          },
        }
        const webhookRes = await axios.get(
          "https://desaihomes.com/api/webhook",
          {
            params: {
              DataFields: DataFields,
              passcode: process.env.NEXT_PUBLIC_WEBHOOK_PASSCODE,
            },
          },
          config
        )
        const DownlodBrochure = `${
          data.project === "DD Majestic Mount (Starts from 59Lakh)"
            ? window.open(
                "https://www.desaihomes.com/uploads/media/DD-Majestic_Mount_0063e0824698291.pdf"
              )
            : data.project === "DD Legacy Heights (Starts from 48Lakh)"
            ? window.open(
                "https://www.desaihomes.com/uploads/media/DD_Legacy_Heights63ddddab88571.pdf"
              )
            : data.project === "DD City Gate (Starts from 44Lakh)"
            ? window.open(
                "https://www.desaihomes.com/uploads/media/DD-City_Gate_0063de1e6d25c35.pdf"
              )
            : null
        } `

        window.location.replace(
          "https://desaihomes.com/campaigns/flats-in-kottayam/thankyou.html"
        )
      }
    } catch (error) {
      console.log(error.message)
    }
    setLoading(false)
  }

  const handleSelectChange = (e) => {
    setValue("project", e.target.value)
  }
  const handlePriceRangeChange = (e) => {
    setValue("price_range", e.target.value)
  }
  return (
    <form
      className="banner-top-form bg-[#10375C] py-8 px-8 rounded-sm "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="">
        <div className="banner-top-form-title">
          <h3 className="text-[20px] lg:text-[25px] text-[#fff] font-[700] leading-[30px] m-[0px_0px_20px_0px]">
            2BHK & 3BHK Flats in Kottayam for Sale
          </h3>
          <p className="text-[16px] lg:text-[16px] text-[#fff] font-[600] leading-[20px] m-[0px_0px_10px_0px]">
            *Get 1 Lakh Discount on Spot Booking*
          </p>
        </div>
        <div className="form-input-block w-full">
          <input
            className="form-input"
            {...register("name", {
              required: "Name is requried",
              pattern: {
                value: /^[a-zA-Z\s.]*$/,
                message: "Please enter a valid name",
              },
            })}
            placeholder="Name"
          />
          <p className="text-red-500 mt-1 text-[12px]">
            {errors.name?.message}
          </p>
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="3.2"
              cy="3.2"
              r="3.2"
              transform="matrix(-1 0 0 1 9.80005 1)"
              fill="#16CC70"
              stroke="#16CC70"
              stroke-width="1.5"
            />
            <path
              d="M1 12.1477C1 11.4595 1.43268 10.8455 2.08087 10.614C5.00323 9.57027 8.19677 9.57027 11.1191 10.614C11.7673 10.8455 12.2 11.4595 12.2 12.1477V13.2001C12.2 14.1501 11.3586 14.8798 10.4182 14.7455L10.1047 14.7007C7.78003 14.3686 5.41997 14.3686 3.0953 14.7007L2.78177 14.7455C1.84136 14.8798 1 14.1501 1 13.2001V12.1477Z"
              fill="#16CC70"
              stroke="#16CC70"
              stroke-width="1.5"
            />
          </svg>
        </div>
        <div className="form-input-block">
          <div className="relative w-full bg-[#0D2C4A]">
            <span className="text-[#ffffff88] p-[10px_0px_0px_10px] block">
              Project Name
            </span>
            <select
              className={`select-arrow w-full text-[#fff] p-2.5 bg-[#0D2C4A] outline-none appearance-none focus:border-indigo-600 `}
              {...register("project", {
                required: "Flat is requried",
              })}
              onChange={handleSelectChange}
            >
              <option selected>DD City Gate (Starts from 44Lakh)</option>{" "}
              <option>DD Legacy Heights (Starts from 49.5Lakh)</option>
              <option>DD Majestic Mount (Starts from 59Lakh)</option>{" "}
            </select>
          </div>
          <p className="text-red-500 mt-1 text-[12px]">
            {errors.project?.message}
          </p>
        </div>
        <div className="form-input-block">
          <input
            className="form-input"
            {...register("phone_number", {
              required: "Phone Number is required",
              pattern: {
                value: /^[\d+\-]+$/,
                message: "Please enter a valid phone number",
              },
            })}
            placeholder="Phone Number"
          />

          <p className="text-red-500 mt-1 text-[12px]">
            {errors.phone_number?.message}
          </p>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.01444 14.0144C5.7851 14.0144 4.58469 13.6962 3.51445 13.0743L0.780988 14.0144L1.34503 11.1219C0.462807 9.92145 0 8.5041 0 6.99998C0 3.13842 3.13842 0 6.99997 0C10.8615 0 13.9999 3.13842 13.9999 6.99998C14.0144 10.876 10.876 14.0144 7.01444 14.0144ZM3.64462 11.9318L3.86156 12.0619C4.8161 12.6549 5.90081 12.9731 7.01444 12.9731C10.2975 12.9731 12.9731 10.2975 12.9731 7.01444C12.9731 3.73139 10.2975 1.05578 7.01444 1.05578C3.73139 1.05578 1.05578 3.73139 1.05578 7.01444C1.05578 8.34501 1.48967 9.61774 2.32851 10.6735L2.47313 10.8615L2.16941 12.438L3.64462 11.9318Z"
              fill="#16CC70"
            />
            <path
              d="M3.64722 4.24481C3.64722 4.24481 4.0204 3.52499 4.34027 3.4818C4.6468 3.43861 5.04663 3.43861 5.15326 3.65456C5.25988 3.8705 5.73968 5.1374 5.73968 5.1374C5.73968 5.1374 5.81964 5.35335 5.69969 5.5693C5.57974 5.78524 5.28653 6.08757 5.28653 6.08757C5.28653 6.08757 5.1266 6.30352 5.28653 6.53386C5.44647 6.76421 5.68637 7.1961 6.19282 7.74317C6.69928 8.29024 7.67221 8.67895 7.67221 8.67895C7.67221 8.67895 7.80548 8.69335 7.89878 8.60697C7.99207 8.50619 8.47187 7.85835 8.47187 7.85835C8.47187 7.85835 8.6318 7.6424 8.88503 7.77197C9.13826 7.90153 10.2445 8.49179 10.2445 8.49179C10.2445 8.49179 10.3777 8.54938 10.3777 8.75093C10.3777 8.96688 10.2978 9.48516 10.1378 9.65791C9.97791 9.83067 9.49811 10.3777 8.79174 10.3777C8.08537 10.3777 6.39274 9.75869 5.48645 8.77972C4.58016 7.80076 3.7805 6.8218 3.59391 5.91481C3.39399 5.02223 3.42065 4.61912 3.64722 4.24481Z"
              fill="#16CC70"
            />
          </svg>
        </div>
        <div className="form-input-block">
          <input
            className="form-input"
            {...register("location")}
            placeholder="Location"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
          >
            {" "}
            <path
              d="M11.9999 14.1699C9.86988 14.1699 8.12988 12.4399 8.12988 10.2999C8.12988 8.15994 9.86988 6.43994 11.9999 6.43994C14.1299 6.43994 15.8699 8.16994 15.8699 10.3099C15.8699 12.4499 14.1299 14.1699 11.9999 14.1699ZM11.9999 7.93994C10.6999 7.93994 9.62988 8.99994 9.62988 10.3099C9.62988 11.6199 10.6899 12.6799 11.9999 12.6799C13.3099 12.6799 14.3699 11.6199 14.3699 10.3099C14.3699 8.99994 13.2999 7.93994 11.9999 7.93994Z"
              fill="#16CC70"
            ></path>
            <path
              d="M11.9999 22.76C10.5199 22.76 9.02993 22.2 7.86993 21.09C4.91993 18.25 1.65993 13.72 2.88993 8.33C3.99993 3.44 8.26993 1.25 11.9999 1.25C11.9999 1.25 11.9999 1.25 12.0099 1.25C15.7399 1.25 20.0099 3.44 21.1199 8.34C22.3399 13.73 19.0799 18.25 16.1299 21.09C14.9699 22.2 13.4799 22.76 11.9999 22.76ZM11.9999 2.75C9.08993 2.75 5.34993 4.3 4.35993 8.66C3.27993 13.37 6.23993 17.43 8.91993 20C10.6499 21.67 13.3599 21.67 15.0899 20C17.7599 17.43 20.7199 13.37 19.6599 8.66C18.6599 4.3 14.9099 2.75 11.9999 2.75Z"
              fill="#16CC70"
            ></path>
          </svg>
        </div>
        <div className="form-input-block">
          <input
            className="form-input"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="Email"
          />
          <p className="text-red-500 mt-1 text-[12px]">
            {errors.email?.message}
          </p>
          <svg
            width="14"
            height="14"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.48929 0C2.90535 0 0 2.90535 0 6.48929V13.2607C0 16.8446 2.90535 19.75 6.48929 19.75H17.775C21.3589 19.75 24.2643 16.8446 24.2643 13.2607V6.48929C24.2643 2.90535 21.3589 0 17.775 0H6.48929Z"
              fill="#1CC273"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.36072 6.48926L10.9321 10.6678C11.6433 11.2012 12.621 11.2012 13.3321 10.6678L18.9036 6.48926"
              fill="#1CC273"
            ></path>
            <path
              d="M5.36072 6.48926L10.9321 10.6678C11.6433 11.2012 12.621 11.2012 13.3321 10.6678L18.9036 6.48926"
              stroke="#0D2C4A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="form-input-block  w-full">
          <textarea
            className="form-input h-[42px]"
            {...register("message")}
            placeholder="Message"
          />
        </div>

        <button
          className="submit-btn bg-[#1CC273] text-[#fff] text-[18px] font-[700] p-3 w-full mt-5"
          disabled={loading}
        >
          {loading ? (
            <>
              <i class="fa fa-spinner fa-spin"></i>Loading
            </>
          ) : (
            "Enquire Now"
          )}
        </button>
      </div>
    </form>
  )
}

export default Form
