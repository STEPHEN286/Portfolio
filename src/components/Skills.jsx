import React from 'react'

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Programming Languages</h3>
                <div className="space-y-3">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-gray-600">JavaScript</span>
                            <span className="text-custom">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-custom h-2 rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-gray-600">C#</span>
                            <span className="text-custom">62%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-custom h-2 rounded-full" ></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-gray-600">Java</span>
                            <span className="text-custom">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-custom h-2 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Frontend Development</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                        <i className="fab fa-react text-custom text-xl"></i>
                        <span>React</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fab fa-vuejs text-custom text-xl"></i>
                        <span>Vue.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fab fa-angular text-custom text-xl"></i>
                        <span>Angular</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fab fa-sass text-custom text-xl"></i>
                        <span>Sass</span>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Backend & Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                        <i className="fab fa-node text-custom text-xl"></i>
                        <span>Node.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fab fa-docker text-custom text-xl"></i>
                        <span>Docker</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fab fa-aws text-custom text-xl"></i>
                        <span>AWS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fab fa-git-alt text-custom text-xl"></i>
                        <span>Git</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
