import React, { useContext } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { motion } from "framer-motion"
import { PhoneCall, Mail, MapPin, Loader2 } from "lucide-react"
import ContactContext from "../components/context/contact/contactContext.jsx"

const Contact = () => {
  const {
    formData,
    isLoading,
    sendMessage,
    resetForm,
    setFormData
  } = useContext(ContactContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await sendMessage(formData);
    if (success) {
      resetForm();
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-20 text-center bg-gray-100">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Get in touch with our team for support, inquiries, or collaboration
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-0 shadow-xl bg-gray-900 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
                <CardDescription className="text-lg text-gray-400">
                  We're here to help and answer any questions you might have
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <PhoneCall className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">+977-9800000000</p>
                    <p className="text-gray-400">Available 24/7 for emergency</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">support@disasterwatch.com</p>
                    <p className="text-gray-400">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-gray-400">Global Headquarters</p>
                    <p className="text-gray-400">Central Office</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 shadow-xl bg-gray-900 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
                <CardDescription className="text-lg text-gray-400">
                  Fill out the form below and we'll get back to you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-blue-500 rounded-lg"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-blue-500 rounded-lg"
                      required
                      disabled={isLoading}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-blue-500 rounded-lg"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here"
                      className="min-h-[120px] bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-blue-500 rounded-lg"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-lg disabled:opacity-50"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
