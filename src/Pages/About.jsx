import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section with enhanced styling */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
        <div className="relative pt-20 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Bachao
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Empowering communities through innovative disaster response and recovery solutions
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Mission Section with enhanced card design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mb-12 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Mission
              </CardTitle>
              <CardDescription className="text-lg">
                Making disaster response more efficient and accessible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Bachao is dedicated to revolutionizing disaster response and management. Our platform connects those in need with immediate assistance, coordinates relief efforts, and facilitates donations to support affected communities.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features Grid with enhanced styling */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Real-time Response",
              description: "Immediate disaster reporting and response coordination through our advanced dashboard system",
              delay: 0.3
            },
            {
              title: "Community Support",
              description: "Direct connection between affected communities and relief providers",
              delay: 0.4
            },
            {
              title: "Transparent Donations",
              description: "Secure and transparent donation system ensuring resources reach those in need",
              delay: 0.5
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
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
          className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking to volunteer, donate, or need assistance, Bachao is here to help create a more resilient community.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
              asChild
            >
              <Link to="/register">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8"
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