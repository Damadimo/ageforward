"use client"

import {
  Heart,
  Shield,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ShipWheelIcon as Wheelchair,
  Home,
  Lightbulb,
  Target,
  Star,
  Calendar,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    specialty: "Accessibility Consultant",
    experience: "15+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former occupational therapist turned real estate expert, Sarah founded Age Forward after witnessing the challenges her clients faced finding accessible housing.",
    certifications: ["CAPS Certified", "OT License", "Real Estate License"],
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    specialty: "Adaptive Technology",
    experience: "12+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Technology specialist focused on smart home solutions and adaptive technologies for aging in place.",
    certifications: ["CAPS Certified", "Smart Home Expert", "Real Estate License"],
  },
  {
    name: "Lisa Rodriguez",
    role: "Senior Accessibility Specialist",
    specialty: "Universal Design",
    experience: "10+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Architect and accessibility expert specializing in universal design principles and barrier-free living solutions.",
    certifications: ["CAPS Certified", "Licensed Architect", "Universal Design Expert"],
  },
  {
    name: "David Thompson",
    role: "Community Outreach Director",
    specialty: "Disability Advocacy",
    experience: "8+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Disability rights advocate and community connector, helping families navigate accessible housing options.",
    certifications: ["Disability Advocate", "Community Relations", "Real Estate License"],
  },
]

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "We understand the emotional journey of finding accessible housing and provide empathetic support throughout the process.",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "Every property listing is verified for accessibility features, ensuring you can trust the information we provide.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Building a supportive community where everyone can find their perfect accessible home and age with dignity.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Leveraging the latest technology and design principles to create better accessible housing solutions.",
  },
]

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Age Forward was established with a mission to transform accessible real estate in Canada.",
  },
  {
    year: "2020",
    title: "First 100 Homes",
    description: "Successfully helped 100 families find accessible housing solutions across Ontario.",
  },
  {
    year: "2021",
    title: "Provincial Expansion",
    description: "Expanded services to serve clients across all Canadian provinces.",
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Received the Canadian Accessibility Excellence Award for innovative real estate services.",
  },
  {
    year: "2023",
    title: "Technology Innovation",
    description: "Launched advanced virtual accessibility assessment tools and 3D property tours.",
  },
  {
    year: "2024",
    title: "1,000+ Families Served",
    description: "Reached milestone of helping over 1,000 families find their perfect accessible homes.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="rounded-lg shadow-sm">
                <Image
                  src="/logo.png"
                  alt="AGE FORWARD Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <Link href="/" className="text-2xl font-bold text-neutral-900 tracking-tight hover:text-brand-600 transition-colors">
                  AGE FORWARD
                </Link>
                <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Accessible Real Estate
                </div>
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-neutral-700 hover:text-brand-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="#" className="text-neutral-700 hover:text-brand-600 font-medium transition-colors">
                Buy
              </Link>
              <Link href="#" className="text-neutral-700 hover:text-brand-600 font-medium transition-colors">
                Sell
              </Link>
              <Link href="#" className="text-brand-600 font-medium">
                About Us
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 font-medium bg-transparent"
              >
                Sign In
              </Button>
              <Button className="bg-brand-600 hover:bg-brand-700 text-white font-medium shadow-sm">
                Contact Agent
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-50 via-white to-brand-50/30 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
              Transforming <span className="text-brand-600">Accessible Living</span> <br />
              One Home at a Time
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Founded in 2019, Age Forward has become Canada's most trusted partner for accessible real estate, 
              helping over 1,000 families find homes that support their independence and dignity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-600 hover:bg-brand-700 text-white font-medium shadow-sm rounded-xl px-8 py-4"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-600 text-brand-600 hover:bg-brand-50 font-medium rounded-xl bg-transparent px-8 py-4"
              >
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
                  Our Mission
                </h2>
                <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                  To ensure every Canadian has access to housing that supports their independence, dignity, and quality of life, 
                  regardless of age or ability.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="h-4 w-4 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Accessibility First</h3>
                      <p className="text-neutral-600">Every property we represent is thoroughly assessed for accessibility features and modification potential.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="h-4 w-4 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Dignity in Aging</h3>
                      <p className="text-neutral-600">We believe everyone deserves to age in place with comfort, safety, and independence.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Home className="h-4 w-4 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Community Building</h3>
                      <p className="text-neutral-600">Creating inclusive communities where accessibility is the standard, not the exception.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-600 mb-2">1,000+</div>
                      <div className="text-sm text-neutral-600">Families Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-600 mb-2">95%</div>
                      <div className="text-sm text-neutral-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-600 mb-2">50+</div>
                      <div className="text-sm text-neutral-600">Certified Agents</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-600 mb-2">24/7</div>
                      <div className="text-sm text-neutral-600">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-brand-50/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
                Our Core Values
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                The principles that guide everything we do at Age Forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl bg-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-4 font-bold text-neutral-900">{value.title}</CardTitle>
                  <CardDescription className="text-neutral-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
                Meet Our Expert Team
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Certified accessibility specialists dedicated to helping you find the perfect accessible home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl bg-white">
                  <div className="relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {member.experience}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-neutral-900 mb-1">{member.name}</h3>
                    <p className="text-brand-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-neutral-600 mb-4">{member.specialty}</p>
                    <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{member.bio}</p>
                    <div className="space-y-2">
                      {member.certifications.map((cert, certIndex) => (
                        <Badge
                          key={certIndex}
                          variant="outline"
                          className="text-xs border-neutral-300 text-neutral-700 rounded-full px-3 py-1 mr-2"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
                Our Journey
              </h2>
              <p className="text-xl text-neutral-600">
                Key milestones in our mission to transform accessible real estate
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-200"></div>
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200">
                        <div className="text-2xl font-bold text-brand-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">{milestone.title}</h3>
                        <p className="text-neutral-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-brand-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to Work with Canada's Accessibility Experts?</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Let our certified specialists help you find the perfect accessible home for your needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-sm rounded-2xl">
                <CardContent className="text-center p-0">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">Call Us</h3>
                  <p className="text-white/90">1-800-AGE-HOME</p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-sm rounded-2xl">
                <CardContent className="text-center p-0">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">Email Us</h3>
                  <p className="text-white/90">info@ageforward.ca</p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-sm rounded-2xl">
                <CardContent className="text-center p-0">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">Visit Us</h3>
                  <p className="text-white/90">Toronto, ON</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-600 hover:bg-neutral-100 text-lg px-8 py-4 font-semibold rounded-xl shadow-lg"
              >
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 font-semibold rounded-xl bg-transparent"
              >
                Browse Properties
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white p-3 rounded-xl">
                  <Image
                    src="/logo.png"
                    alt="AGE FORWARD Logo"
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold">AGE FORWARD</span>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider">Accessible Real Estate</div>
                </div>
              </div>
              <p className="text-neutral-400 leading-relaxed mb-6 text-lg">
                Canada's premier accessible real estate network, connecting buyers and sellers with
                accessibility-focused properties and certified specialists.
              </p>
              <div className="text-sm text-neutral-500">
                <p className="mb-1">Licensed Real Estate Brokerage</p>
                <p>RECO License #12345678</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Buy & Sell</h3>
              <ul className="space-y-3 text-neutral-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Search Homes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Recently Sold
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Market Reports
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Home Valuation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">About</h3>
              <ul className="space-y-3 text-neutral-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Accessibility</h3>
              <ul className="space-y-3 text-neutral-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Accessibility Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Home Modifications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Grants & Financing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Universal Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-neutral-400">
              <p>&copy; 2024 Age Forward Real Estate. All rights reserved.</p>
              <div className="flex space-x-8 mt-4 md:mt-0">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 