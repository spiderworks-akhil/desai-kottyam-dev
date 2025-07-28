import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import axiosInstance from "../../../axios/baseUrl"
import axios from "axios"
import loaderImg from "../assets/icons8-loading-circle.gif"
const Form = () => {
  const [utmSource, setUtmSource] = useState("")
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
      data.requirement = `project:${data.project}`
      data.price_range = data.price_range
      ;(data.location = data.location), (data.message = data.message)
      const postResponse = await axiosInstance.post("/store", data)
      if (postResponse.data.status === "success") {
        document.cookie = "formSubmitted=true; max-age=" + 365 * 24 * 60 * 60
        const DataFields = `project_id:${
          data.project === "DD Majestic Mount (Starts from 59Lakh)"
            ? 17
            : data.project === "DD Legacy Heights (Starts from 52.5Lakh)"
            ? 15
            : data.project === "DD City Gate (Starts from 44Lakh)"
            ? 16
            : null
        }||crm_status:1||crm_lead_type_id:1||source_url:'https://desaihomes.com/campaigns/flats-in-kottayam||source:campaign||email:${
          data.email
        }||name:${data.name}||city:city||campaign_name:${
          data.project
        }||phone_number:${
          data.phone_number
        }||message:message||ip_address:${ipAddress}||utm_source:${utmSource} ||price_range:${
          data.price_range
        }||location:${data.location} ||price_range:${
          data.price_range
        }||message:${data.message}`

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
      className="banner-top-form-v2  py-8 px-8 rounded-sm "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="banner-btm-fotm-block-item">
        {/* <div className="banner-top-form-title">
          <h3 className="text-[20px] lg:text-[25px] text-[#fff] font-[700] leading-[30px] m-[0px_0px_20px_0px]">
            2BHK & 3BHK Flats in Kottayam for Sale
          </h3>
          <p className="text-[16px] lg:text-[16px] text-[#fff] font-[500] leading-[20px] m-[0px_0px_10px_0px]">
            At Price 43 Lakhs Onwards*
          </p>
        </div> */}
        <div className="form-input-block w-full">
          <label> Name</label>
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
        </div>
        <div className=" w-full">
          <div className="relative w-full form-input-block">
            <label>Select the Project</label>
            <select
              className="select-arrow w-full text-[#fff] p-2.5 form-input  outline-none appearance-none focus:border-indigo-600"
              {...register("project", {
                required: "Flat is required",
              })}
              onChange={handleSelectChange}
              placeholder="Select Flat"
            >
              <option value="" disabled selected>
                Select Flat
              </option>
              <option>DD Majestic Mount (Starts from 59Lakh)</option>
              <option>DD Legacy Heights (Starts from 52.5Lakh)</option>
              <option>DD City Gate (Starts from 44Lakh)</option>
            </select>
            <p className="text-red-500 mt-1 text-[12px]">
              {errors.project?.message}
            </p>
          </div>
        </div>
        <div className="form-input-block  w-full">
          <label>Phone Number</label>
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
        </div>
        <div className="form-input-block  w-full">
          <label htmlFor="">Email</label>
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
        </div>
        <div className="form-input-block  w-full">
          <label htmlFor="">Location</label>
          <input
            className="form-input"
            {...register("location")}
            placeholder="Location"
          />
        </div>
        <div className="form-input-block   w-full">
          <label htmlFor="">Message</label>
          <textarea
            className="form-input h-[42px]"
            {...register("message")}
            placeholder="Message"
          />
        </div>{" "}
        {/* <div className=" w-full">
          <div className="relative w-full form-input-block">
            <label>Select the Price Range</label>
            <select
              className="select-arrow w-full text-[#fff] p-2.5 form-input  outline-none appearance-none focus:border-indigo-600"
              {...register("price_range", {
                required: "Please select a price range",
              })}
              onChange={handlePriceRangeChange}
              placeholder="Price Range"
            >
              <option selected disabled value={""}>
                {" "}
                Select Price Range
              </option>
              <option>43-50 Lakhs</option>
              <option>50-60 Lakhs</option>
              <option>60-70 Lakhs</option>
              <option>70+ Lakhs</option>
            </select>
            <p className="text-red-500 mt-1 text-[12px]">
              {errors.price_range?.message}
            </p>
          </div>
        </div> */}
        <button
          className="submit-btn v2 text-[18px] font-[700] p-3 w-full"
          disabled={loading}
        >
          {loading ? (
            <>
              <i class="fa fa-spinner fa-spin"></i>Loading
            </>
          ) : (
            "Get A CallBack"
          )}
        </button>
      </div>
    </form>
  )
}

export default Form
