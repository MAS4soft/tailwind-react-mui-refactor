// src/data/projects.ts

import Project01 from "../assets/Project01.jpg";
import Project02 from "../assets/Project02.jpg";
import Project03 from "../assets/Project03.jpg";
import Project04 from "../assets/Project04.jpg";
import Project05 from "../assets/Project05.jpg";
import Project06 from "../assets/Project06.jpg";
import Project07 from "../assets/Project07.jpg";
import Project08 from "../assets/Project08.jpg";
import Project09 from "../assets/Project09.jpg";
import Project10 from "../assets/Project10.jpg";
import Project11 from "../assets/Project11.jpg";
import Project12 from "../assets/Project12.jpg";

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
    title: "Crevette Restaurant",
    location: "Jeddah, Saudi Arabia",
    image: Project11,
  },
  {
    title: "ABK, Hotel",
    location: "Muscat, Oman",
    image: Project10,
  },
  {
    title: "SA Heritage Palace",
    location: "Giza, Egypt",
    image: Project02,
  },
  {
    title: "The White Palace",
    location: "Cape Town, South Africa",
    image: Project09,
  },
  {
    title: "Lake View",
    location: "Garden City, Egypt",
    image: Project05,
  },
  {
    title: "SA Heritage Villa",
    location: "Zamalek, Egypt",
    image: Project06,
  },
  {
    title: "Lake Side building",
    location: "New Capital, Egypt",
    image: Project08,
  },
  {
    title: "17 Spencer Mitland",
    location: "Cape Town, South Africa",
    image: Project12,
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
    title: "Villa Gardens",
    location: "Fifth Settlement, Egypt",
    image: Project07,
  },
];
