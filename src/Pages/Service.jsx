import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and interactive websites using modern technologies.",
    icon: "🌐",
  },
  {
    title: "Mobile Development",
    description:
      "Creating mobile applications for both Android and iOS platforms.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces and experiences.",
    icon: "🎨",
  },
  {
    title: "Power Bi Dashboard",
    description:
      "This Power BI Dashboard provides a comprehensive overview of our sales performance, highlighting key  and customer acquisition rates. The dashboard is designed with a clean and intuitive layout, making it easy for users to navigate and extract valuable insights at a glance.",
    icon: "📊",
  },
  {
    title: "Excel Dashboard",
    description:
      " This Excel Dashboard offers a detailed and interactive overview of our sales performance. With a focus on clarity and usability, the dashboard presents data in a visually appealing format that facilitates informed decision-making.",
    icon: "📈",
  },
];

const Service = () => {
  return (
    <div
      id="service"
      className="w-full min-h-screen p-6 py-10 mx-auto  bg-gray-100"
    >
      <h2 className="mb-8 text-3xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 transition-transform duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            <div className="mb-4 text-4xl">{service.icon}</div>
            <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
