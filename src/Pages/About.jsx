import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section with enhanced styling */}
      <div className="relative pt-24 pb-20 text-center bg-gray-100">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Bachaoo</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Empowering communities through innovative disaster response and recovery solutions
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Mission Section with enhanced card design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mb-16 border-0 shadow-xl bg-gray-900 text-white">
            <CardHeader className="space-y-1">
              <CardTitle className="text-3xl text-blue-300">Our Mission</CardTitle>
              <CardDescription className="text-xl text-gray-300">
                Making disaster response more efficient and accessible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-100 leading-relaxed text-lg">
                Bachaoo is dedicated to revolutionizing disaster response and management. Our platform connects
                those in need with immediate assistance, coordinates relief efforts, and facilitates donations to
                support affected communities.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features Grid with enhanced styling */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Real-time Response",
              description:
                "Immediate disaster reporting and response coordination through our advanced dashboard system",
              delay: 0.3,
            },
            {
              title: "Community Support",
              description: "Direct connection between affected communities and relief providers",
              delay: 0.4,
            },
            {
              title: "Transparent Donations",
              description: "Secure and transparent donation system ensuring resources reach those in need",
              delay: 0.5,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-900 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-100 text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gray-900 text-white rounded-2xl p-12 shadow-xl"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-6">Join Us in Making a Difference</h2>
          <p className="text-gray-100 mb-10 max-w-2xl mx-auto text-lg">
            Whether you're looking to volunteer, donate, or need assistance, Bachaoo is here to help create a more
            resilient community.
          </p>
          <div className="flex gap-6 justify-center">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 text-lg font-semibold rounded-lg"
              asChild
            >
              <Link to="/register">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-300 text-blue-300 hover:bg-blue-900 px-10 py-3 text-lg font-semibold rounded-lg"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

