import { Collection, PhilosophyItem, WorkflowStep, Project, Testimonial } from "./types";

export const BRAND_INFO = {
  name: "FESGift",
  tagline: "Heritage & Grace",
  hotline: "0931 133 790",
  email: "fesgift@mars-vn.com",
  address: "District 1, Ho Chi Minh City, Vietnam",
};

export const COMPANY_STATS = [
{
value: "34",
label: "Tỉnh thành phục vụ",
},
{
value: "200+",
label: "Khách hàng doanh nghiệp",
},
{
value: "50.000+",
label: "Quà tặng mỗi năm",
},
{
value: "8+",
label: "Năm kinh nghiệm",
},
];

export const NAVIGATION_LINKS = [
{ label: "Năng Lực", href: "#our-story" },
{ label: "Sản Phẩm", href: "#collections" },
{ label: "Câu Chuyện", href: "#philosophy" },
{ label: "Khách Hàng", href: "#capabilities" },
{ label: "Quy Trình", href: "#process" },
{ label: "Liên Hệ", href: "#contact" },
];

export const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    id: "mars-story",
    title: "CÂU CHUYỆN MARS",
    description:
      "FESGift được phát triển từ kinh nghiệm nhiều năm trong lĩnh vực quà tặng doanh nghiệp và sản xuất theo yêu cầu. Mục tiêu là tạo ra những giải pháp quà tặng giúp doanh nghiệp xây dựng hình ảnh chuyên nghiệp và bền vững.",
    iconName: "Building2",
  },
  {
    id: "usp",
    title: "ĐIỂM KHÁC BIỆT",
    description:
      "Tư vấn theo mục tiêu chiến dịch, thiết kế theo nhận diện thương hiệu, sản xuất linh hoạt và kiểm soát chất lượng xuyên suốt từ ý tưởng đến thành phẩm.",
    iconName: "Sparkles",
  },
  {
    id: "mission",
    title: "LÝ DO TỒN TẠI",
    description:
      "Chúng tôi tin rằng một món quà được chuẩn bị đúng cách có thể tạo nên sự kết nối, ghi nhớ và giá trị lâu dài cho thương hiệu trong mắt khách hàng và đối tác.",
    iconName: "HeartHandshake",
  },
];

export const COLLECTIONS: Collection[] = [
{
id: "customer-gifts",
title: "Quà Khách Hàng",
tagline: "Tăng độ ghi nhớ thương hiệu",
icon: "Users",
description:
"Giải pháp quà tặng giúp doanh nghiệp xây dựng mối quan hệ bền vững và tạo trải nghiệm tích cực cho khách hàng.",
image:
"https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=800&auto=format&fit=crop",
badge: "KHÁCH HÀNG",
highlights: [
"Giftset theo nhận diện thương hiệu",
"Bao bì thiết kế riêng",
"Tăng độ ghi nhớ thương hiệu",
],
},

{
id: "event-gifts",
title: "Quà Sự Kiện",
tagline: "Đồng bộ mọi chiến dịch",
icon: "CalendarDays",
description:
"Phù hợp cho hội nghị, workshop, activation, lễ ra mắt sản phẩm và các chương trình truyền thông doanh nghiệp.",
image:
"https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
badge: "SỰ KIỆN",
highlights: [
"Sản xuất số lượng lớn",
"Đồng bộ concept chương trình",
"Tiến độ triển khai nhanh",
],
},

{
id: "vip-gifts",
title: "Quà VIP",
tagline: "Khẳng định đẳng cấp đối tác",
icon: "Crown",
description:
"Dòng quà tặng cao cấp dành cho đối tác chiến lược, khách hàng quan trọng và các chương trình tri ân đặc biệt.",
image:
"https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
badge: "VIP",
highlights: [
"Thiết kế sang trọng",
"Cá nhân hóa theo yêu cầu",
"Nâng tầm hình ảnh doanh nghiệp",
],
},

{
id: "employee-gifts",
title: "Quà Đội Ngũ",
tagline: "Gắn kết và truyền cảm hứng",
icon: "UsersRound",
description:
"Welcome Kit, quà sinh nhật, lễ tết và các chương trình nội bộ giúp nâng cao trải nghiệm nhân sự.",
image:
"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop",
badge: "NỘI BỘ",
highlights: [
"Welcome Kit",
"Quà sinh nhật nhân viên",
"Quà lễ tết doanh nghiệp",
],
},
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
{
id: "step1",
num: "01",
title: "TRAO ĐỔI NHU CẦU",
desc: "Chia sẻ ngân sách, số lượng, đối tượng nhận quà và mục tiêu chương trình.",
},
{
id: "step2",
num: "02",
title: "THIẾT KẾ & BÁO GIÁ",
desc: "FESGift đề xuất giải pháp, thiết kế và gửi báo giá phù hợp với yêu cầu.",
},
{
id: "step3",
num: "03",
title: "SẢN XUẤT & GIAO HÀNG",
desc: "Triển khai sản xuất, kiểm soát chất lượng và giao hàng đúng tiến độ.",
},
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Bộ Quà Trung Thu Song Ngư Cát Tường",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    category: "Doanh Nghiệp",
    longDescription: "Dự án thiết kế riêng hộp quà Trung Thu cho Tập đoàn Tài chính Tech Global, kết hợp tranh sớ Đông Hồ dát vàng và bánh nghệ nhân thượng hạng truyền thống.",
    client: "Tech Global Corporation",
    year: "2025",
    components: ["Hộp gỗ sơn mài đỏ cherry", "Bộ ấm trà gốm Bát Tràng", "4 bánh trung thu nghệ nhân", "Trà tôm nõn Tân Cương"],
  },
  {
    id: "proj2",
    title: "Bộ Bình Ly Thép Không Gỉ Pastel Matte",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop",
    category: "Sự Kiện",
    longDescription: "Sản phẩm quà tặng sinh thái sang trọng đại hội thường niên với khả năng giữ nhiệt vượt trội lên đến 24h, hoàn thiện phủ sơn nhám cực kỳ sang trọng.",
    client: "Green Future Fund",
    year: "2025",
    components: ["Bình giữ nhiệt 750ml dập nổi logo", "2 ly thủy tinh có ống hút chịu nhiệt", "Hộp quà bìa cứng Kraft ép kim vàng"],
  },
  {
    id: "proj3",
    title: "Hộp Quà Kỳ Ẩn Hoàng Gia Gốm Sứ",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
    category: "Doanh Nghiệp",
    longDescription: "Sự kết hợp hoàn hảo giữa gốm men lam cao cấp và sản vật núi rừng Tây Bắc tạo nên set quà ấm lòng những đối tác nước ngoài quan trọng.",
    client: "Vietnam Heritage Foundation",
    year: "2024",
    components: ["Hũ trà gốm vẽ tay", "Trà cổ thụ San Tuyết", "Bộ khay đĩa gỗ xà cừ", "Hộp quà da PU thêu dập nổi"],
  },
  {
    id: "proj4",
    title: "Bao Da Laptop & Sổ Tay Da Thuộc",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    category: "Cá Nhân Hóa",
    longDescription: "Thiết kế da bò Mill thật 100% may tay thủ công hoàn toàn, dập tên riêng của thành viên Hội đồng Quản trị bằng tiếng Pháp tinh tế.",
    client: "Vilas International",
    year: "2024",
    components: ["Bao da Macbook Pro 14 inch", "Sổ tay da thay ruột cao cấp", "Bút ký kim loại khắc laser", "Bao đựng thẻ đồng bộ"],
  },
  {
    id: "proj5",
    title: "Hộp Hương Sắc Bình Yên Nến Thơm",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800&auto=format&fit=crop",
    category: "Cá Nhân Hóa",
    longDescription: "Bộ quà tặng mang lại không gian thư giãn an lành cho phái nữ với nến đậu nành thiên nhiên, xà phòng hữu cơ và hoa hồng khô organic.",
    client: "Spa & Beauty Group",
    year: "2025",
    components: ["2 hũ nến tinh dầu 200g", "Xà phòng muối biển ép lạnh", "Khăn lụa tơ tằm Bảo Lộc", "Hộp quà sồi tự nhiên"],
  },
  {
    id: "proj6",
    title: "Bình Giữ Nhiệt Nordic Gradient Thủy Tinh",
    image: "https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop",
    category: "Sự Kiện",
    longDescription: "Thiết kế mang hơi thở Bắc Âu hiện đại với dải màu gradient bắt mắt, là giải pháp quà tặng năng động tuyệt vời cho ngày hội sức khoẻ doanh nghiệp.",
    client: "Active Life Lifestyle",
    year: "2025",
    components: ["Bình thể thao kim loại cao cấp 1L", "Bao silicone bảo vệ chống va đập", "Hộp kraft lót rơm thân thiện môi trường"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    content: "FESGift đã thực sự thay đổi cách chúng tôi nhìn nhận về quà tặng doanh nghiệp. Từ khâu tư vấn đến sản phẩm cuối cùng đều mang lại sự tử tế và chuyên nghiệp. Đối tác của chúng tôi cực kỳ ấn tượng với bộ quà Tết năm nay.",
    author: "Ms. Phương Thảo",
    role: "Giám đốc Marketing",
    company: "Tech Global Corp",
  },
  {
    id: "t2",
    content: "Dịch vụ của FESGift vô cùng hoàn hảo nhờ vào khả năng lắng nghe và hiện thực hóa cực tốt ý tưởng của thương hiệu. Khách hàng thân thiết của chúng tôi khen ngợi bao da laptop khắc tên thật sự đẳng cấp và hữu dụng.",
    author: "Mr. Minh Khang",
    role: "Giám đốc Nhân sự",
    company: "Vilas International",
  },
  {
    id: "t3",
    content: "Rất hiếm đơn vị quà tặng nào tại Việt Nam có gu thẩm mỹ thanh lịch đậm chất di sản mà vẫn trẻ trung như FESGift. Việc sản xuất 1000 bộ quà tặng đạt tỷ lệ hoàn mỹ 100% là một nỗ lực tuyệt vời từ phòng QC.",
    author: "Ms. Hồng Vân",
    role: "Quản lý Thương hiệu",
    company: "Vietnam Heritage Foundation",
  },
];
