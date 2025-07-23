"use client"

import {
  Search,
  Heart,
  MapPin,
  Bed,
  Bath,
  Square,
  ShipWheelIcon as Wheelchair,
  Phone,
  Mail,
  Star,
  TrendingUp,
  Calculator,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Filter,
  Camera,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Accessible Bungalow",
    price: "$485,000",
    originalPrice: "$510,000",
    location: "Oakville, ON",
    beds: 3,
    baths: 2,
    sqft: "1,850",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Wheelchair Accessible", "Grab Bars", "Ramp Access", "Wide Doorways"],
    rating: 4.8,
    agent: "Sarah Johnson",
    agentImage: "/placeholder.svg?height=50&width=50",
    mls: "W5847392",
    daysOnMarket: 12,
    status: "New Listing",
    virtualTour: true,
    photos: 24,
  },
  {
    id: 2,
    title: "Executive Accessible Condo",
    price: "$320,000",
    location: "Burlington, ON",
    beds: 2,
    baths: 2,
    sqft: "1,200",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Elevator Access", "Walk-in Shower", "Emergency System", "Low Maintenance"],
    rating: 4.9,
    agent: "Michael Chen",
    agentImage: "/placeholder.svg?height=50&width=50",
    mls: "W5847393",
    daysOnMarket: 5,
    status: "Hot Property",
    virtualTour: true,
    photos: 18,
  },
  {
    id: 3,
    title: "Premium Ranch Home",
    price: "$425,000",
    location: "Hamilton, ON",
    beds: 2,
    baths: 2,
    sqft: "1,650",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Single Level", "Accessible Kitchen", "Roll-in Shower", "Paved Pathways"],
    rating: 4.7,
    agent: "Lisa Rodriguez",
    agentImage: "/placeholder.svg?height=50&width=50",
    mls: "W5847394",
    daysOnMarket: 8,
    status: "Price Reduced",
    virtualTour: false,
    photos: 15,
  },
]



const accessibilityFeatures = [
  "Wheelchair Accessible",
  "Grab Bars",
  "Ramp Access",
  'Wide Doorways (36")',
  "Walk-in Shower",
  "Single Level Living",
  "Elevator Access",
  "Accessible Kitchen",
]

export default function HomePage() {
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
                <span className="text-2xl font-bold text-neutral-900 tracking-tight">AGE FORWARD</span>
                <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Accessible Real Estate
                </div>
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#" className="text-neutral-700 hover:text-brand-600 font-medium transition-colors">
                Buy
              </Link>
              <Link href="#" className="text-neutral-700 hover:text-brand-600 font-medium transition-colors">
                Sell
              </Link>
              <Link href="/about" className="text-neutral-700 hover:text-brand-600 font-medium transition-colors">
                About Us
              </Link>
              <Link href="#" className="text-neutral-700 hover:text-brand-600 font-medium transition-colors">
                Accessibility Guide
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
                Canada's Premier <br />
                <span className="text-brand-600">Accessible Real Estate</span> Network
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover wheelchair accessible homes, age-in-place properties, and barrier-free living solutions with
                Canada's most trusted accessibility specialists.
              </p>
            </div>

            {/* Advanced Search */}
            <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8">
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-neutral-100 p-1 rounded-xl">
                  <TabsTrigger
                    value="buy"
                    className="text-base font-medium py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Buy
                  </TabsTrigger>
                  <TabsTrigger
                    value="rent"
                    className="text-base font-medium py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Rent
                  </TabsTrigger>
                  <TabsTrigger
                    value="sold"
                    className="text-base font-medium py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Recently Sold
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="buy">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                    <div className="md:col-span-2">
                      <Input
                        placeholder="City, neighborhood, postal code, or MLS®"
                        className="h-14 text-base border-neutral-300 focus:border-brand-500 focus:ring-brand-500/20 rounded-xl"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="h-14 border-neutral-300 focus:border-brand-500 focus:ring-brand-500/20 rounded-xl">
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="any">Any Type</SelectItem>
                        <SelectItem value="bungalow">Bungalow</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="detached">Detached</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="h-14 border-neutral-300 focus:border-brand-500 focus:ring-brand-500/20 rounded-xl">
                        <SelectValue placeholder="Price Range" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="any">Any Price</SelectItem>
                        <SelectItem value="0-300k">Under $300K</SelectItem>
                        <SelectItem value="300k-500k">$300K - $500K</SelectItem>
                        <SelectItem value="500k-750k">$500K - $750K</SelectItem>
                        <SelectItem value="750k+">$750K+</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="h-14 bg-brand-600 hover:bg-brand-700 text-white font-medium shadow-sm rounded-xl">
                      <Search className="mr-2 h-5 w-5" />
                      Search MLS®
                    </Button>
                  </div>

                  {/* Accessibility Filters */}
                  <div className="border-t border-neutral-200 pt-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-neutral-900 flex items-center">
                        <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center mr-3">
                          <Wheelchair className="h-4 w-4 text-brand-600" />
                        </div>
                        Accessibility Features
                      </h3>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 rounded-lg bg-transparent"
                      >
                        <Filter className="mr-2 h-4 w-4" />
                        Advanced Filters
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {accessibilityFeatures.slice(0, 8).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                        >
                          <Checkbox
                            id={feature}
                            className="border-neutral-300 data-[state=checked]:bg-brand-600 data-[state=checked]:border-brand-600"
                          />
                          <label htmlFor={feature} className="text-sm font-medium text-neutral-700 cursor-pointer">
                            {feature}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="rent">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                    <div className="md:col-span-2">
                      <Input
                        placeholder="City, neighborhood, postal code, or MLS®"
                        className="h-14 text-base border-neutral-300 focus:border-brand-500 focus:ring-brand-500/20 rounded-xl"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="h-14 border-neutral-300 focus:border-brand-500 focus:ring-brand-500/20 rounded-xl">
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="any">Any Type</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="bungalow">Bungalow</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="h-14 border-neutral-300 focus:border-brand-500 focus:ring-brand-500/20 rounded-xl">
                        <SelectValue placeholder="Monthly Rent" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="any">Any Rent</SelectItem>
                        <SelectItem value="0-1500">Under $1,500</SelectItem>
                        <SelectItem value="1500-2500">$1,500 - $2,500</SelectItem>
                        <SelectItem value="2500-3500">$2,500 - $3,500</SelectItem>
                        <SelectItem value="3500+">$3,500+</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="h-14 bg-brand-600 hover:bg-brand-700 text-white font-medium shadow-sm rounded-xl">
                      <Search className="mr-2 h-5 w-5" />
                      Search Rentals
                    </Button>
                  </div>

                  {/* Accessibility Filters */}
                  <div className="border-t border-neutral-200 pt-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-neutral-900 flex items-center">
                        <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center mr-3">
                          <Wheelchair className="h-4 w-4 text-brand-600" />
                        </div>
                        Accessibility Features
                      </h3>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 rounded-lg bg-transparent"
                      >
                        <Filter className="mr-2 h-4 w-4" />
                        Advanced Filters
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {accessibilityFeatures.slice(0, 8).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                        >
                          <Checkbox
                            id={`rent-${feature}`}
                            className="border-neutral-300 data-[state=checked]:bg-brand-600 data-[state=checked]:border-brand-600"
                          />
                          <label htmlFor={`rent-${feature}`} className="text-sm font-medium text-neutral-700 cursor-pointer">
                            {feature}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="sold">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                    <div className="md:col-span-2">
                      <Input
                        placeholder="City, neighborhood, postal code, or MLS®"
                        className="h-14 text-base border-neutral-300 focus:border-brand-500 focus:ring-brand-500/20 rounded-xl"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="h-14 border-neutral-300 focus:border-brand-500 focus:ring-brand-500/20 rounded-xl">
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="any">Any Type</SelectItem>
                        <SelectItem value="bungalow">Bungalow</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="detached">Detached</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="h-14 border-neutral-300 focus:border-brand-500 focus:ring-brand-500/20 rounded-xl">
                        <SelectValue placeholder="Sold Date" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="7days">Last 7 days</SelectItem>
                        <SelectItem value="30days">Last 30 days</SelectItem>
                        <SelectItem value="90days">Last 3 months</SelectItem>
                        <SelectItem value="6months">Last 6 months</SelectItem>
                        <SelectItem value="1year">Last year</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="h-14 bg-brand-600 hover:bg-brand-700 text-white font-medium shadow-sm rounded-xl">
                      <Search className="mr-2 h-5 w-5" />
                      Search Sold
                    </Button>
                  </div>

                  {/* Accessibility Filters */}
                  <div className="border-t border-neutral-200 pt-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-neutral-900 flex items-center">
                        <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center mr-3">
                          <Wheelchair className="h-4 w-4 text-brand-600" />
                        </div>
                        Accessibility Features
                      </h3>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 rounded-lg bg-transparent"
                      >
                        <Filter className="mr-2 h-4 w-4" />
                        Advanced Filters
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {accessibilityFeatures.slice(0, 8).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                        >
                          <Checkbox
                            id={`sold-${feature}`}
                            className="border-neutral-300 data-[state=checked]:bg-brand-600 data-[state=checked]:border-brand-600"
                          />
                          <label htmlFor={`sold-${feature}`} className="text-sm font-medium text-neutral-700 cursor-pointer">
                            {feature}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-brand-50/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-neutral-900">
                The Growing Need for <span className="text-brand-600">Accessible Housing</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Canada's aging population faces significant challenges in finding suitable, accessible housing options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Statistic 1 */}
              <div className="text-center group">
                <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-brand-300 transition-all duration-300 hover:shadow-xl shadow-lg">
                  <div className="text-6xl lg:text-7xl font-bold text-brand-600 mb-4 group-hover:scale-105 transition-transform duration-300">
                    6.2M
                  </div>
                  <div className="text-2xl font-semibold text-neutral-900 mb-3">
                    Canadians with Disabilities
                  </div>
                  <div className="text-neutral-600 text-lg leading-relaxed">
                    Nearly 1 in 5 Canadians live with a disability, with accessibility needs growing as our population ages
                  </div>
                </div>
              </div>

              {/* Statistic 2 */}
              <div className="text-center group">
                <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl shadow-lg">
                  <div className="text-6xl lg:text-7xl font-bold text-emerald-600 mb-4 group-hover:scale-105 transition-transform duration-300">
                    $15K
                  </div>
                  <div className="text-2xl font-semibold text-neutral-900 mb-3">
                    Average Modification Cost
                  </div>
                  <div className="text-neutral-600 text-lg leading-relaxed">
                    The typical cost to retrofit a home for accessibility - far less than assisted living facilities
                  </div>
                </div>
              </div>

              {/* Statistic 3 */}
              <div className="text-center group">
                <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl shadow-lg">
                  <div className="text-6xl lg:text-7xl font-bold text-red-600 mb-4 group-hover:scale-105 transition-transform duration-300">
                    28%
                  </div>
                  <div className="text-2xl font-semibold text-neutral-900 mb-3">
                    Seniors Fall Annually
                  </div>
                  <div className="text-neutral-600 text-lg leading-relaxed">
                    Over 1 in 4 seniors fall each year, highlighting the critical need for accessible, safe housing
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  The Solution: Proactive Accessible Housing
                </h3>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  By choosing accessible housing now, you can age in place comfortably, avoid costly emergency modifications, 
                  and maintain your independence for years to come.
                </p>
                <Button 
                  size="lg"
                  className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Find Your Accessible Home
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-3 tracking-tight">
                Featured Accessible Properties
              </h2>
              <p className="text-lg text-neutral-600">Hand-selected homes with verified accessibility features</p>
            </div>
            <Button
              variant="outline"
              className="border-brand-600 text-brand-600 hover:bg-brand-50 font-medium rounded-xl bg-transparent"
            >
              View All Listings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl bg-white"
              >
                <div className="relative">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    width={400}
                    height={280}
                    className="w-full h-64 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full shadow-sm"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge
                      className={`${
                        property.status === "New Listing"
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : property.status === "Hot Property"
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-orange-600 hover:bg-orange-700"
                      } text-white text-xs font-medium px-3 py-1 rounded-full`}
                    >
                      {property.status}
                    </Badge>
                    <Badge className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                      <Wheelchair className="w-3 h-3 mr-1" />
                      Accessible
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    {property.virtualTour && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-black/70 text-white border-0 rounded-full px-3 py-1"
                      >
                        Virtual Tour
                      </Badge>
                    )}
                    <Badge
                      variant="secondary"
                      className="text-xs bg-black/70 text-white border-0 rounded-full px-3 py-1"
                    >
                      <Camera className="w-3 h-3 mr-1" />
                      {property.photos}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-bold text-neutral-900">{property.price}</div>
                      {property.originalPrice && (
                        <div className="text-sm text-neutral-500 line-through">{property.originalPrice}</div>
                      )}
                    </div>
                    <div className="text-right text-xs text-neutral-500">
                      <div className="font-medium">MLS® {property.mls}</div>
                      <div className="flex items-center mt-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {property.daysOnMarket} days
                      </div>
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">{property.title}</h3>
                  <p className="flex items-center text-neutral-600 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-2 text-neutral-400" />
                    {property.location}
                  </p>

                  <div className="flex items-center space-x-6 mb-4 text-sm text-neutral-600">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-2 text-neutral-400" />
                      <span className="font-medium">{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-2 text-neutral-400" />
                      <span className="font-medium">{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-2 text-neutral-400" />
                      <span className="font-medium">{property.sqft} sqft</span>
                    </div>
                    <div className="flex items-center ml-auto">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{property.rating}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {property.features.slice(0, 2).map((feature) => (
                        <Badge
                          key={feature}
                          variant="outline"
                          className="text-xs border-neutral-300 text-neutral-700 rounded-full px-3 py-1"
                        >
                          {feature}
                        </Badge>
                      ))}
                      {property.features.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-neutral-300 text-neutral-700 rounded-full px-3 py-1"
                        >
                          +{property.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={property.agentImage || "/placeholder.svg"}
                        alt={property.agent}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border-2 border-neutral-200"
                      />
                      <div className="text-sm">
                        <div className="font-semibold text-neutral-900">{property.agent}</div>
                        <div className="text-neutral-500">Accessibility Specialist</div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg px-4"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
              Complete Accessible Real Estate Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From finding your perfect accessible home to selling with accessibility in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Search className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-4 font-bold text-neutral-900">Buy Accessible</CardTitle>
              <CardDescription className="text-neutral-600 mb-6 leading-relaxed">
                Browse verified accessible properties with detailed accessibility reports and expert guidance.
              </CardDescription>
              <Button
                variant="outline"
                size="sm"
                className="border-brand-600 text-brand-600 hover:bg-brand-50 font-medium rounded-lg bg-transparent"
              >
                Start Searching
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-4 font-bold text-neutral-900">Sell Smart</CardTitle>
              <CardDescription className="text-neutral-600 mb-6 leading-relaxed">
                Market your home's accessibility features to the right buyers with our specialized approach.
              </CardDescription>
              <Button
                variant="outline"
                size="sm"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium rounded-lg bg-transparent"
              >
                Get Home Value
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-4 font-bold text-neutral-900">Expert Agents</CardTitle>
              <CardDescription className="text-neutral-600 mb-6 leading-relaxed">
                Work with certified accessibility real estate specialists who understand your unique needs.
              </CardDescription>
              <Button
                variant="outline"
                size="sm"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 font-medium rounded-lg bg-transparent"
              >
                Find an Agent
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-4 font-bold text-neutral-900">Financing Help</CardTitle>
              <CardDescription className="text-neutral-600 mb-6 leading-relaxed">
                Access grants and financing options for accessible home modifications and purchases.
              </CardDescription>
              <Button
                variant="outline"
                size="sm"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 font-medium rounded-lg bg-transparent"
              >
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-brand-50/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
              Why Choose Age Forward Real Estate?
            </h2>
            <p className="text-xl text-neutral-600">
              Canada's most trusted network for accessible real estate transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Certified Specialists</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                Our agents are certified in accessibility standards and universal design principles, ensuring expert
                guidance for your accessible home needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Verified Listings</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                Every property undergoes professional accessibility assessment, providing detailed reports on mobility
                features and modification potential.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Full-Service Support</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                From home search to closing, plus connections to contractors, occupational therapists, and financing
                specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to Find Your Accessible Dream Home?</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Connect with Canada's leading accessible real estate specialists today
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 bg-white/10 border-white/20 backdrop-blur-sm rounded-2xl">
                <CardContent className="flex items-center space-x-4 p-0">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-white text-xl mb-1">Call Now</h3>
                    <p className="text-white/90 text-lg">1-800-AGE-HOME</p>
                    <p className="text-white/70 text-sm">(1-800-243-4663)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/10 border-white/20 backdrop-blur-sm rounded-2xl">
                <CardContent className="flex items-center space-x-4 p-0">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-white text-xl mb-1">Email Us</h3>
                    <p className="text-white/90 text-lg">info@ageforward.ca</p>
                    <p className="text-white/70 text-sm">We respond within 2 hours</p>
                  </div>
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
                  <Link href="#" className="hover:text-white transition-colors">
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
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mortgage Calculator
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
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Aging in Place
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-neutral-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Agents
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
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Press
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
