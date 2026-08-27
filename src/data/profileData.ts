import { ProfileData } from "../types/profile";

/**
 * =========================================================================
 * DỮ LIỆU PROFILE CÁ NHÂN (HOÀNG PHÚ - SINH VIÊN CNTT VKU)
 * =========================================================================
 * Dữ liệu thật 100% chuẩn sinh viên, loại bỏ hoàn toàn các thông tin ảo.
 */
export const profileData: ProfileData = {
  // --- THÔNG TIN CƠ BẢN ---
  personal: {
    name: "Nguyễn Văn Hoàng Phú",
    nickname: "Fuuuuu",
    title: "IT Student & Game Enthusiast",
    typedTitles: [
      "Sinh viên CNTT @ VKU",
      "Game & Tech Enthusiast",
      "Web & Mobile Learner",
      "Aspiring Developer"
    ],
    status: {
      available: true,
      text: "Sinh viên CNTT - Đang học tập & Rèn luyện"
    },
    location: "Đà Nẵng, Việt Nam",
    experienceYears: "Sinh viên",
    email: "phunvh.23itb@vku.udn.vn",
    phone: "+84 777 476 909",
    avatar: "/assets/images/avatar.jpg",
    bio: "Xin chào! Mình là Hoàng Phú (Fuuuuu), hiện đang là sinh viên ngành Công nghệ Thông tin tại Trường Đại học CNTT & Truyền thông Việt - Hàn (VKU - ĐHĐN). Mình có niềm đam mê lớn với lập trình Game, phát triển Web và luôn hào hứng tìm tòi học hỏi công nghệ mới.",
    cvUrl: "#", // Link tải file CV nếu có
  },

  // --- THỐNG KÊ HỌC TẬP (STATS THỰC TẾ) ---
  stats: [
    { label: "Trường Đại học", value: "VKU", icon: "GraduationCap" },
    { label: "Lớp / Khóa", value: "23ITB", icon: "BookOpen" },
    { label: "Chuyên ngành", value: "CNTT", icon: "Code" },
    { label: "Đam mê chính", value: "Game & Web", icon: "Gamepad2" },
  ],

  // --- LIÊN KẾT MẠNG XÃ HỘI & LIÊN HỆ ---
  socials: [
    { name: "GitHub", url: "https://github.com", icon: "Github", color: "hover:text-gray-900 dark:hover:text-white" },
    { name: "Facebook", url: "https://facebook.com", icon: "Facebook", color: "hover:text-blue-600" },
    { name: "Email VKU", url: "mailto:phunvh.23itb@vku.udn.vn", icon: "Mail", color: "hover:text-red-500" },
    { name: "Zalo", url: "https://zalo.me/0777476909", icon: "MessageCircle", color: "hover:text-blue-500" },
  ],

  // --- VỀ BẢN THÂN (ABOUT ME) ---
  about: {
    description: `Mình là sinh viên năm 2 khoa Công nghệ Thông tin tại VKU (Đại học Đà Nẵng). Với tinh thần chủ động học hỏi và niềm đam mê với máy tính từ nhỏ, mình đang tập trung trau dồi các kiến thức nền tảng vững chắc (Cấu trúc dữ liệu & Giải thuật, Lập trình hướng đối tượng OOP) song song với việc tiếp cận các công nghệ Web hiện đại và tư duy phát triển Game.`,
    highlights: [
      {
        icon: "GraduationCap",
        title: "Sinh viên CNTT VKU",
        desc: "Lớp 23ITB - Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (ĐH Đà Nẵng)."
      },
      {
        icon: "Gamepad2",
        title: "Đam mê Game & Công nghệ",
        desc: "Yêu thích tìm hiểu logic lập trình game, đồ họa máy tính và trải nghiệm người dùng tương tác."
      },
      {
        icon: "Code2",
        title: "Học tập Lập trình Web",
        desc: "Rèn luyện xây dựng giao diện Mobile-First với HTML/CSS, JavaScript, TypeScript, Next.js và React."
      },
      {
        icon: "Flame",
        title: "Tinh thần Tự học & Sáng tạo",
        desc: "Luôn sẵn sàng đón nhận thử thách, tìm kiếm tài liệu mới và thực hành qua các bài tập dự án."
      }
    ]
  },

  // --- KỸ NĂNG ĐANG HỌC & RÈN LUYỆN (SKILLS) ---
  skills: [
    {
      category: "Ngôn ngữ Lập trình",
      items: [
        { name: "C / C++ (Cấu trúc dữ liệu & Giải thuật)", level: 85, icon: "Code" },
        { name: "Java (Lập trình Hướng đối tượng OOP)", level: 80, icon: "FileCode" },
        { name: "JavaScript / TypeScript cơ bản", level: 75, icon: "Code2" },
        { name: "Python cơ bản", level: 70, icon: "Terminal" },
      ]
    },
    {
      category: "Phát triển Web & Giao diện",
      items: [
        { name: "HTML5 / CSS3 / Responsive Mobile", level: 85, icon: "Layout" },
        { name: "Tailwind CSS", level: 80, icon: "Palette" },
        { name: "Next.js & React (Đang học tập)", level: 70, icon: "Layers" },
        { name: "Figma (Xem & Thiết kế giao diện cơ bản)", level: 75, icon: "Figma" },
      ]
    },
    {
      category: "Công cụ & Môi trường",
      items: [
        { name: "Git & Quản lý mã nguồn GitHub", level: 80, icon: "GitBranch" },
        { name: "VS Code & Tiện ích mở rộng", level: 90, icon: "Laptop" },
        { name: "Hệ điều hành Windows & Linux cơ bản", level: 80, icon: "HardDrive" },
        { name: "Tư duy Logic & Thuật toán", level: 85, icon: "Cpu" },
      ]
    }
  ],

  // --- DỰ ÁN HỌC TẬP & CÁ NHÂN (PROJECTS) ---
  projects: [
    {
      id: "project-1",
      title: "Mobile-First Personal Profile Website",
      category: "Web App",
      badge: "Next.js Project",
      description: "Trang web Profile cá nhân tối ưu trải nghiệm chạm vuốt trên di động, hỗ trợ Dark/Light mode, xây dựng bằng Next.js App Router, TypeScript và Tailwind CSS.",
      image: "/assets/images/project-portfolio.svg",
      techs: ["Next.js", "TypeScript", "Tailwind CSS", "Mobile-First"],
      demoUrl: "https://localhost:3000",
      githubUrl: "https://github.com",
      featured: true,
      metrics: "Mobile-First UX"
    },
    {
      id: "project-2",
      title: "Mini Games & Bài Tập Thuật Toán",
      category: "Game & Algorithm",
      badge: "Học tập",
      description: "Tổng hợp các bài tập lớn, thuật toán xử lý logic và mini game thực hành viết bằng C/C++ và Java trong quá trình học tại VKU.",
      image: "/assets/images/project-saas.svg",
      techs: ["C++", "Java", "Data Structures", "Algorithms"],
      demoUrl: "",
      githubUrl: "https://github.com",
      featured: true,
      metrics: "OOP & Logic"
    },
    {
      id: "project-3",
      title: "Đồ Án Môn Học Cơ Sở Ngành VKU",
      category: "Course Project",
      badge: "Đồ án sinh viên",
      description: "Các bài tập nhóm và đồ án học phần ứng dụng kiến thức lập trình căn bản, thiết kế giao diện và quản lý cơ sở dữ liệu.",
      image: "/assets/images/project-fintech.svg",
      techs: ["Java", "SQL", "HTML/CSS", "Git"],
      demoUrl: "",
      githubUrl: "https://github.com",
      featured: false,
      metrics: "Teamwork"
    }
  ],

  // --- HỌC VẤN & HOẠT ĐỘNG (TIMELINE CHUẨN SINH VIÊN) ---
  timeline: [
    {
      period: "2023 - 2028 (Dự kiến)",
      role: "Sinh viên Công nghệ Thông tin (Lớp 23ITB)",
      company: "Trường ĐH CNTT & Truyền thông Việt - Hàn (VKU - ĐH Đà Nẵng)",
      type: "Đại học Chính quy",
      description: "Theo học chương trình đào tạo Kỹ sư / Cử nhân CNTT. Tập trung vào Cấu trúc dữ liệu & Giải thuật, Lập trình hướng đối tượng, Công nghệ Web và Lập trình ứng dụng."
    },
    {
      period: "2020 - 2023",
      role: "Học sinh THPT",
      company: "Trường THPT",
      type: "Tốt nghiệp",
      description: "Hoàn thành chương trình phổ thông và bắt đầu niềm đam mê với máy tính và công nghệ thông tin."
    }
  ],

  // Xóa testimonials giả mạo
  testimonials: []
};
