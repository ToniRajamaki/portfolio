import React, { useEffect, useState } from 'react'
import { projectsData } from './DataWork'
import { projectsNav } from './DataWork'
import WorkItems from './WorkItems'
import "../styles/work.css";

const Works = ({ theme }) => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, i) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(i);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, i) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, i);
              }}
              key={i}
              className={`${active === i ? "active-work" : ""}
            work__item `}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works