import React from "react";
import DmartSaleProject from "../assets/DmartSaleProject.gif";
import EStore from "../assets/EStore.gif";
import Sale from "../assets/Sale.png";
import Saleandpurchase from "../assets/Saleandpurchase.png";
import { useParams } from "react-router-dom";
const projects = [
  {
    title: "D Mart Sale Project",
    description:
      "In this dashboard i have get inside of ship mode wise sale , segment wise sale Region wise sale and also i have get inside of category wise sale and profit. In this dashboard i have create in Power Bi Software.",
    imageUrl: DmartSaleProject,
  },
  {
    title: "E Store Project",
    description:
      "In this dashboard i have create a card in sum of sales, average of sales, sum of profit, and sum of discount. Column chart is create a Categary and month wise sum of Sales and Pie Chart is include in Resign wise sales. in line chart is using for month and day wise sales. and matrics.",
    imageUrl: EStore,
  },
  {
    title: "Sale Dashboard",
    description:
      "In this dashboard i have created in segment by total sale, ship mode totol sale. region by total sale sub category by total sale .",
    imageUrl: Sale,
  },
  {
    title: "Sale and Purchase",
    description: "This is a brief description of Project Four.",
    imageUrl: Saleandpurchase,
  },
];

const Project = () => {
  const {id} = useParams()
  return (
    <div id="project" className="w-full p-6 mx-auto bg-gray-100">
       
      <h2 className="mb-8 text-3xl font-bold text-center">My Projects</h2>
      <div className="grid grid-cols-1 gap-8 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 transition-transform duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="mb-4 rounded-lg"
            />
            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
