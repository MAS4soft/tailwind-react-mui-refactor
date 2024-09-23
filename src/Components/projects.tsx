// src/data/projects.ts

import Project01 from "../assets/Project01.jpg";
import Project02 from "../assets/Project02.jpg";
import Project03 from "../assets/Project03.jpg";
import Project04 from "../assets/Project04.jpg";
import Project05 from "../assets/Project05.jpg";
import Project06 from "../assets/Project06.jpg";
import Project07 from "../assets/Project07.jpg";
import Project08 from "../assets/Project08.jpg";

export interface ProjectType {
  title: string;
  location: string;
  image: string;
}

export const projects: ProjectType[] = [
  {
    title: "Milnerton Villa",
    location: "Cape Town, South Africa",
    image: Project01,
  },
  {
    title: "SA Heritage villa",
    location: "Giza, Egypt",
    image: Project02,
  },
  {
    title: "Banafsig Villa",
    location: "New Cairo, Egypt",
    image: Project03,
  },
  {
    title: "El-Ahly Club",
    location: "Nasr City, Egypt",
    image: Project04,
  },
  {
    title: "Lake View",
    location: "Garden City, Egypt",
    image: Project05,
  },
  {
    title: "SA Heritage villa",
    location: "Zamalek, Egypt",
    image: Project06,
  },
  {
    title: "Villa Gardens",
    location: "Fifth Settlement, Egypt",
    image: Project07,
  },
  {
    title: "Lake Side building",
    location: "New Capital, Egypt",
    image: Project08,
  },
];
