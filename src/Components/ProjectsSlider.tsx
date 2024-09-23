import React from "react";
import Slider from "react-slick";
import AllProjects from "./AllProjects"; // تعديل المسار حسب مشروعك
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectsSliderProps {
  limit: number; // عدد المشاريع التي سيتم عرضها في نفس الوقت
  title: string; // عنوان قسم المشاريع
}

const ProjectsSlider: React.FC<ProjectsSliderProps> = ({ limit, title }) => {
  // إعدادات السلايدر
  const settings = {
    dots: true, // إظهار النقاط التنقلية
    infinite: true, // تشغيل السلايدر بشكل لانهائي
    speed: 500, // سرعة الانتقال
    slidesToShow: limit, // عرض عدد معين من المشاريع
    slidesToScroll: 1, // التمرير بمشروع واحد في كل مرة
    nextArrow: <div style={{ color: "black" }}>Next</div>, // تخصيص السهم الأيمن
    prevArrow: <div style={{ color: "black" }}>Prev</div>, // تخصيص السهم الأيسر
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // عرض 3 مشاريع على الشاشات اللوحية
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // عرض مشروعين على الشاشات الصغيرة
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // عرض مشروع واحد على الشاشات الصغيرة جداً
        },
      },
    ],
  };

  return (
    <div>
      <h2>{title}</h2>
      <Slider {...settings}>
        <AllProjects title={title} limit={limit} /> {/* تمرير عدد المشاريع */}
      </Slider>
    </div>
  );
};

export default ProjectsSlider;
