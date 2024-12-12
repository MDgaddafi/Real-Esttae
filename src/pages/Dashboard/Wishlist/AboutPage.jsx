import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Real Estate</h2>
          <p className="text-lg text-gray-600">
            At Real Estate, we are passionate about helping you find the perfect property. Whether you're buying, selling,
            or renting, our expert team is committed to making the process easy, seamless, and enjoyable.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            Our mission is to be the leading real estate service provider, offering personalized solutions to clients
            looking to invest, buy, or rent properties. We aim to deliver exceptional customer service and a stress-free
            experience.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
          <div className="flex justify-between gap-8">
            <div className="text-center">
              <img
                src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/313348864_3272187959687722_8982498661004308025_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHPmPU0je1LR85MupbNrF16MAfqhZ14bBwwB-qFnXhsHCDN_4VOmMevcgc8kjyKHwrY8cX-Qn1xyzngHDfJphQP&_nc_ohc=gP76WuS5Nq8Q7kNvgFgG6GP&_nc_zt=23&_nc_ht=scontent.fdac31-1.fna&_nc_gid=AAxDDk4Ae31x-twgx7Ouigj&oh=00_AYDyfFEo3WkyPIvYRrIdrmVhKrNRmlnOkABBho4ON_DM8A&oe=676103F8"
                alt="Team Member 1"
                className="w-36 h-36 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-500">
                John has over 20 years of experience in the real estate industry and is passionate about helping clients find their dream properties.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://gaddafi-sarker-react.web.app/assets/babuya-w9jcUBys.png"
                alt="Team Member 2"
                className="w-36 h-36 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Property Specialist</p>
              <p className="text-gray-500">
                Jane is an expert in residential and commercial properties, dedicated to offering personalized recommendations to clients.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            If you have any questions or need assistance, feel free to reach out to us. We're here to help!
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
