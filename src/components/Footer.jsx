import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-white py-8">
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-600">
                © 2024 Stephen Adjei Kwofie. All rights reserved.
            </div>
            <div class="flex space-x-6 mt-4 md:mt-0">
                <a href="#about" class="text-gray-600 hover:text-custom">About</a>
                <a href="#skills" class="text-gray-600 hover:text-custom">Skills</a>
                <a href="#projects" class="text-gray-600 hover:text-custom">Projects</a>
                <a href="#contact" class="text-gray-600 hover:text-custom">Contact</a>
            </div>
        </div>
    </div>
</footer>
  )
}
