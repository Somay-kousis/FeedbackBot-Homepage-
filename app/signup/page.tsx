"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    // Company Info
    companyName: "",
    companySize: "",
    role: "",
    csvFile: null as File | null,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isDragging, setIsDragging] = useState(false)

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required"
    }

    if (!formData.companySize) {
      newErrors.companySize = "Please select company size"
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required"
    }

    if (!formData.csvFile) {
      newErrors.csvFile = "Please upload a feedback CSV file"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateStep2()) {
      console.log("[v0] Form submitted:", formData)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      router.push("/dashboard")
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
        setErrors({ ...errors, csvFile: "Please upload a CSV file" })
        return
      }
      setFormData({ ...formData, csvFile: file })
      setErrors({ ...errors, csvFile: "" })
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
        setErrors({ ...errors, csvFile: "Please upload a CSV file" })
        return
      }
      setFormData({ ...formData, csvFile: file })
      setErrors({ ...errors, csvFile: "" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <span className="font-sans text-xl font-semibold text-foreground">FeedbackIQ</span>
            </Link>
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">
              Already have an account? <span className="text-primary">Log in</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Signup Form */}
      <div className="container mx-auto px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-8 text-center">
              <h1 className="mb-2 font-sans text-4xl font-bold text-foreground">Start your free trial</h1>
              <p className="text-lg text-muted-foreground">Get started with FeedbackIQ in just 2 simple steps</p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold transition-colors ${
                    step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  1
                </div>
                <span className={`text-sm font-medium ${step >= 1 ? "text-foreground" : "text-muted-foreground"}`}>
                  Personal Info
                </span>
              </div>
              <div className={`h-px w-16 ${step >= 2 ? "bg-primary" : "bg-border"}`} />
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold transition-colors ${
                    step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  2
                </div>
                <span className={`text-sm font-medium ${step >= 2 ? "text-foreground" : "text-muted-foreground"}`}>
                  Company Details
                </span>
              </div>
            </div>

            <Card className="border-border/50 bg-card p-8 shadow-xl">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="fullName" className="text-foreground">
                          Full Name
                        </Label>
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={`mt-2 ${errors.fullName ? "border-red-500" : ""}`}
                        />
                        {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-foreground">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`mt-2 ${errors.email ? "border-red-500" : ""}`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>

                      <div>
                        <Label htmlFor="password" className="text-foreground">
                          Password
                        </Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className={`mt-2 ${errors.password ? "border-red-500" : ""}`}
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                      </div>

                      <div>
                        <Label htmlFor="confirmPassword" className="text-foreground">
                          Confirm Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          className={`mt-2 ${errors.confirmPassword ? "border-red-500" : ""}`}
                        />
                        {errors.confirmPassword && (
                          <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                        )}
                      </div>

                      <Button
                        onClick={handleNext}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        size="lg"
                      >
                        Continue
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="companyName" className="text-foreground">
                          Company Name
                        </Label>
                        <Input
                          id="companyName"
                          type="text"
                          placeholder="Acme Inc."
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className={`mt-2 ${errors.companyName ? "border-red-500" : ""}`}
                        />
                        {errors.companyName && <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>}
                      </div>

                      <div>
                        <Label htmlFor="companySize" className="text-foreground">
                          Company Size
                        </Label>
                        <select
                          id="companySize"
                          value={formData.companySize}
                          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                          className={`mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                            errors.companySize ? "border-red-500" : ""
                          }`}
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501+">501+ employees</option>
                        </select>
                        {errors.companySize && <p className="mt-1 text-sm text-red-500">{errors.companySize}</p>}
                      </div>

                      <div>
                        <Label htmlFor="role" className="text-foreground">
                          Your Role
                        </Label>
                        <Input
                          id="role"
                          type="text"
                          placeholder="Product Manager"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className={`mt-2 ${errors.role ? "border-red-500" : ""}`}
                        />
                        {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role}</p>}
                      </div>

                      <div>
                        <Label htmlFor="csvFile" className="text-foreground">
                          Upload Feedback CSV
                        </Label>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Upload your existing feedback data to get started
                        </p>
                        <div className="mt-2">
                          <label
                            htmlFor="csvFile"
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-8 transition-colors ${
                              isDragging
                                ? "border-primary bg-primary/5"
                                : errors.csvFile
                                  ? "border-red-500 bg-red-500/5"
                                  : formData.csvFile
                                    ? "border-accent bg-accent/5"
                                    : "border-border bg-muted/50 hover:border-primary hover:bg-primary/5"
                            }`}
                          >
                            {formData.csvFile ? (
                              <>
                                <svg
                                  className="mb-3 h-12 w-12 text-accent"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <p className="mb-1 text-center font-medium text-foreground">{formData.csvFile.name}</p>
                                <p className="text-center text-sm text-muted-foreground">
                                  Click to change or drag a new file
                                </p>
                              </>
                            ) : (
                              <>
                                <svg
                                  className="mb-3 h-12 w-12 text-muted-foreground"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  />
                                </svg>
                                <p className="mb-1 text-center font-medium text-foreground">Drop your CSV file here</p>
                                <p className="text-center text-sm text-muted-foreground">
                                  or click to browse from your computer
                                </p>
                              </>
                            )}
                          </label>
                          <input
                            id="csvFile"
                            type="file"
                            accept=".csv"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </div>
                        {errors.csvFile && <p className="mt-1 text-sm text-red-500">{errors.csvFile}</p>}
                      </div>

                      <div className="flex gap-4 pt-2">
                        <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1" size="lg">
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                          size="lg"
                        >
                          Start Free Trial
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              By signing up, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
