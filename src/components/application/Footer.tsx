import { Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ApplicationLogo from "../common/ApplicationLogo"

export default function Footer() {
    return (
        <footer className="bg-muted dark:bg-zinc-900/20 py-12">
            < div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8" >

                {/* Brand / About */}
                < div >
                    <ApplicationLogo />
                    <p className="text-sm leading-6">
                        Building modern, scalable, and user-friendly web applications with
                        expertise in MERN, Laravel, and Next.js.
                    </p>
                </div >

                {/* Quick Links */}
                < div >
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:font-medium">Home</a></li>
                        <li><a href="#" className="hover:font-medium">Services</a></li>
                        <li><a href="#" className="hover:font-medium">Projects</a></li>
                        <li><a href="#" className="hover:font-medium">Contact</a></li>
                    </ul>
                </div >

                {/* Resources */}
                < div >
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:font-medium"> Privacy Policy</a></li>
                        <li><a href="#" className="hover:font-medium"> Terms & Conditions</a></li>
                        <li><a href="#" className="hover:font-medium"> Disclaimer</a></li>
                        <li><a href="#" className="hover:font-medium">FAQs</a></li>
                    </ul>
                </div >

                {/* Newsletter */}
                < div >
                    <h3 className="font-semibold mb-3">Stay Updated</h3>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="text-gray-200"
                        />
                        <Button>Subscribe</Button>
                    </div>
                    <div className="flex space-x-4 mt-5">
                        <a href="#"><Facebook className="w-5 h-5" /></a>
                        <a href="#"><Twitter className="w-5 h-5" /></a>
                        <a href="#"><Instagram className="w-5 h-5" /></a>
                        <a href="#"><Linkedin className="w-5 h-5" /></a>
                        <a href="#"><Github className="w-5 h-5" /></a>
                    </div>
                </div >
            </div >

            {/* Bottom Bar */}
            < div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500" >
                © {new Date().getFullYear()} AceDevHub.All rights reserved.
            </div >
        </footer >
    )
}
