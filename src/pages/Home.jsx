import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="flex">
        <header className="w-full border-b dark:border-gray-700/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              
              <div className="flex items-center gap-3">
                <svg class="text-blue-600 h-8 w-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path><path clip-rule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                
                <h1 className="text-xl font-bold text-gray-900 dark:text-dark">QueueEase</h1>
              </div>

              <nav className="hidden md:flex items-center space-x-8">
                <a className="text-sm font-medium text-gray-600 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors" href="#">Features</a>
                <a className="text-sm font-medium text-gray-600 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors" href="#">Pricing</a>
                <a className="text-sm font-medium text-gray-600 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors" href="#">Support</a>
              </nav>

              <div className="flex items-center gap-2">
                <Link to="/signin">
                <button className="px-4 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-400 transition-colors">Sign In</button>
                </Link>
                <Link to="/signin">
                <button className="px-4 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-400 transition-colors">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="flex items-center justify-center min-h-[80vh] w-full bg-center bg-cover bg-[url('queue.png')] relative">
        <div className="container w-full h-full mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl flex flex-col items-center justify-center text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Streamline Your Customer Flow with QueueEase</h1>
          <p className="text-base md:text-lg mb-8 max-w-2xl">QueueEase is the ultimate solution for managing customer queues efficiently. Reduce wait times, enhance customer satisfaction, and optimize your business operations.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 text-base font-bold bg-blue-600 text-white rounded-lg transition-all">Get Started</button>
            <button className="px-6 py-3 text-base font-bold bg-white/20 text-white rounded-lg">Learn More</button>
          </div>
        </div>
      </div>

      <section class="py-16 sm:py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-12">
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">Key Features</h2>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">QueueEase offers a range of features designed to improve queue management for businesses and customers alike.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-700/50 p-6 rounded-xl flex flex-col items-start text-left">
              <div class="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg mb-4">
                <svg className="text-blue-600" fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-dark mb-2">Real-Time Queue Tracking</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Provide customers with up-to-the-minute queue status updates, reducing perceived wait times and improving their experience.</p>
            </div>
            <div class="bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-700/50 p-6 rounded-xl flex flex-col items-start text-left">
              <div class="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg mb-4">
                <svg class="text-blue-600" fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-dark mb-2">Customer Notifications</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Send automated SMS or email notifications to customers when their turn is approaching, allowing them to wait comfortably.</p>
            </div>
            <div class="bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-700/50 p-6 rounded-xl flex flex-col items-start text-left">
              <div class="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg mb-4">
                <svg class="text-blue-600" fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-dark mb-2">Performance Analytics</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Gain valuable insights into queue performance with detailed analytics, helping you optimize staffing and service delivery.</p>
            </div>
            
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-background-dark/50 py-16 sm:py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-dark tracking-tight">Ready to Transform Your Queue Management?</h2>
          <div class="mt-8">
            <button class="px-8 py-4 text-lg font-bold bg-blue-600 text-white rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-all">Sign Up Now</button>
          </div>
        </div>
      </section>

      <footer className='bg-background-light dark:bg-background-dark border-t border-gray-200'>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            <div class="flex justify-center md:justify-start space-x-6">
              <a class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Contact Us</a>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">© 2024 QueueEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home