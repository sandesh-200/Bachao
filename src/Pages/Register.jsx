import React, { useState } from "react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { UserCircle, Smartphone, Mail, ShieldCheck } from "lucide-react"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast'

const RegistrationForm = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [stage, setStage] = useState("registration")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    otp: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSendOTP = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) {
      toast.error('Please fill in all required fields')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        }),
      })

      const data = await response.json()
      
      if (response.ok) {
        toast.success('OTP sent successfully')
        setStage("verify-otp")
      } else {
        throw new Error(data.message || 'Failed to send OTP')
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOTP = async (e) => {
    e.preventDefault()
    if (!formData.otp) {
      toast.error('Please enter the OTP')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: formData.phone,
          otp: formData.otp,
        }),
      })

      const data = await response.json()
      
      if (response.ok) {
        toast.success('Registration successful!')
        setStage("success")
        setTimeout(() => {
          navigate('/login')
        }, 2000)
      } else {
        throw new Error(data.message || 'Failed to verify OTP')
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const renderContent = () => {
    switch (stage) {
      case "registration":
        return (
          <>
            <div>
              <Label className="flex items-center mb-2 text-gray-300">
                <UserCircle className="mr-2 text-blue-300" />
                Full Name
              </Label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-blue-500 rounded-lg"
                required
              />
            </div>
            <div>
              <Label className="flex items-center mb-2 text-gray-300">
                <Smartphone className="mr-2 text-blue-300" />
                Phone Number
              </Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+977 98XXXXXXXX"
                className="bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-blue-500 rounded-lg"
                required
              />
            </div>
            <div>
              <Label className="flex items-center mb-2 text-gray-300">
                <Mail className="mr-2 text-blue-300" />
                Email (Optional)
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-blue-500 rounded-lg"
              />
            </div>
            <Button
              onClick={handleSendOTP}
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white transition-all duration-300 rounded-lg py-3 text-lg font-semibold"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </Button>
          </>
        )

      case "verify-otp":
        return (
          <>
            <div className="text-center mb-6">
              <ShieldCheck className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Verify Your Phone</h2>
              <p className="text-gray-400">
                We've sent a verification code to {formData.phone}
              </p>
            </div>
            <div>
              <Label className="flex items-center mb-2 text-gray-300">
                Enter OTP
              </Label>
              <Input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter 6-digit OTP"
                className="bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-blue-500 rounded-lg text-center text-xl tracking-wider"
                maxLength={6}
                required
              />
            </div>
            <Button
              onClick={handleVerifyOTP}
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white transition-all duration-300 rounded-lg py-3 text-lg font-semibold"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </Button>
          </>
        )

      case "success":
        return (
          <div className="text-center">
            <ShieldCheck className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">Registration Successful!</h2>
            <p className="text-gray-400">
              Redirecting you to login...
            </p>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Toaster position="top-right" />
      <div className="max-w-md w-full space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg">
        {stage === "registration" && (
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white">Create Account</h2>
            <p className="text-gray-400">Join Bachao to help and get help</p>
          </div>
        )}
        <form className="space-y-6">
          {renderContent()}
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm
