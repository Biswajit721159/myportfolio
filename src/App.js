import React from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-black-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <nav>
            <Button color="inherit" href="#about">About</Button>
            <Button color="inherit" href="#projects">Projects</Button>
            <Button color="inherit" href="#contact">Contact</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-hero-pattern bg-cover bg-center min-h-[50vh] flex items-center justify-center text-center text-white">
        <div className="bg-black bg-opacity-40 p-10 rounded-lg">
          <Typography variant="h3" className="font-bold">Hello, I'm a Developer</Typography>
          <Typography variant="body1" className="my-4">
            I specialize in creating stunning and user-friendly web applications.
          </Typography>
          <Button variant="contained" color="primary" href="#projects">View My Work</Button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto my-10 p-6 text-center">
        <Typography variant="h4" className="font-bold">About Me</Typography>
        <Typography variant="body1" className="my-4">
          I am a passionate web developer skilled in React, JavaScript, and UI design. I love creating user-friendly and dynamic web applications.
        </Typography>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto my-10 p-6 text-center">
        <Typography variant="h4" className="font-bold">Projects</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <motion.div
              key={project}
              whileHover={{ scale: 1.05 }}
              className="shadow-lg rounded-lg overflow-hidden"
            >
              <Card>
                <CardContent>
                  <Typography variant="h5" className="font-semibold">Project {project}</Typography>
                  <Typography variant="body2" className="my-2">
                    A brief description of the project goes here. This is where you can summarize the project details.
                  </Typography>
                  <Button variant="outlined" color="primary">View More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-200 py-10">
        <div className="container mx-auto p-6 text-center">
          <Typography variant="h4" className="font-bold">Get in Touch</Typography>
          <form className="max-w-md mx-auto mt-8 space-y-4">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-6 text-center mt-auto">
        <Typography variant="body2">&copy; {new Date().getFullYear()} My Portfolio - All rights reserved.</Typography>
      </footer>
    </div>
  );
}

export default App;
