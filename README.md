# 📱 Website Profile / Portfolio Cá Nhân Bằng Next.js (Mobile-First)

Trang web Profile & Portfolio cá nhân cao cấp được xây dựng bằng **Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion và Next-Themes**, tối ưu tuyệt đối theo triết lý **Mobile-First**.

---

## 🌟 Tính Năng Nổi Bật

- ⚡ **Next.js 15 App Router & TypeScript**: Hiệu năng vượt trội, chuẩn SEO, type safety hoàn toàn.
- 📱 **Mobile-First 100%**: Thanh **Bottom Navigation Dock** chuẩn Native App, thao tác chạm vuốt dễ dàng bằng ngón tay cái (Thumb-zone).
- 🌓 **Dark / Light Mode mượt mà**: Sử dụng `next-themes`, tự động nhận diện chế độ hệ thống, không bị giật nháy màn hình (FOUC).
- ✨ **Hero Section sống động**: Avatar viền phát sáng (Glow animation), huy hiệu trạng thái làm việc ("Available for work") và hiệu ứng chữ gõ tự động (Typewriter).
- 🗂 **Bộ lọc dự án & Modal chi tiết**: Xem danh mục sản phẩm, popup thông tin chi tiết, liên kết GitHub và Live Demo.
- ⏳ **Lộ trình kinh nghiệm & Học vấn**: Dòng thời gian dọc trực quan.
- 📬 **Form liên hệ & Copy 1 chạm**: Tích hợp Toast Notification thông minh khi copy Email / SĐT hoặc gửi tin nhắn.
- ⚙️ **Dễ dàng cập nhật thông tin thật**: Toàn bộ dữ liệu được quản lý tập trung tại [`src/data/profileData.ts`](src/data/profileData.ts).

---

## 🚀 Hướng Dẫn Khởi Chạy

### 1. Cài đặt thư viện (nếu chưa cài):
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev):
```bash
npm run dev
```
Mở trình duyệt tại [http://localhost:3000](http://localhost:3000).

### 3. Build sản phẩm (Production):
```bash
npm run build
```

---

## 🛠 Hướng Dẫn Điền & Cập Nhật Thông Tin Thật Của Bạn

Mở file [`src/data/profileData.ts`](src/data/profileData.ts) và chỉnh sửa các trường:

1. **`personal`**: Họ tên, chức danh gõ chữ (`typedTitles`), bio, avatar, email, SĐT, link tải CV.
2. **`stats`**: Các con số thống kê nổi bật (số năm kinh nghiệm, dự án hoàn thành,...).
3. **`skills`**: Danh mục kỹ năng (Frontend, Backend, DevOps) và % cấp độ.
4. **`projects`**: Danh sách dự án thực tế của bạn, công nghệ, link demo và GitHub.
5. **`timeline`**: Quá trình học tập và làm việc.
6. **`socials`**: Link GitHub, LinkedIn, Facebook, Telegram của bạn.

---

## 🌐 Triển Khai Miễn Phí Lên Vercel (1 Click)

1. Đẩy mã nguồn lên tài khoản GitHub của bạn.
2. Truy cập [vercel.com](https://vercel.com) và bấm **Add New Project**.
3. Chọn repository `personal-profile-nextjs` -> Bấm **Deploy**.
4. Website Next.js của bạn sẽ hoạt động ngay lập tức với tốc độ toàn cầu và SSL miễn phí!
