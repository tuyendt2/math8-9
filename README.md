# Toán HSG 8–9: ứng dụng học trên điện thoại

Ứng dụng web cài được lên điện thoại (PWA) để học Toán cho học sinh giỏi lớp 8–9. Bản thử nghiệm này có chủ đề **Bất đẳng thức**:

- **Kiến thức:** 8 mục, có chứng minh, dạng mục thu gọn.
- **Thẻ ghi nhớ:** 31 thẻ công thức, ôn theo lịch ngắt quãng (1, 3, 7, 14, 30 ngày).
- **Bài tập:** 15 bài, mỗi bài có ý tưởng chính, 2 gợi ý, lời giải đầy đủ, đồng hồ đếm thời gian và tự đánh giá (bài chưa làm được sẽ được hẹn làm lại).
- Dùng được khi không có mạng, có giao diện tối, chỉnh được cỡ chữ. Tiến độ lưu trên máy, không cần tài khoản.

**Dùng thử:** https://tuyendt2.github.io/math8-9/

Cài lên điện thoại: Android (Chrome) bấm ⋮ → *Thêm vào màn hình chính*; iPhone (Safari) bấm Chia sẻ → *Thêm vào MH chính*.

## Cấu trúc

```
content/07-bat-dang-thuc/
  bai-hoc.md       bài học gốc: I. Kiến thức, II. Bài tập, III. Lời giải
  goi-y.md         ý tưởng chính, gợi ý từng tầng và độ khó của từng bài
  the-ghi-nho.md   thẻ ghi nhớ (## nhóm, ### mặt trước, phần dưới là mặt sau)
src/               giao diện: index.html, app.js, style.css, sw.js, icon
build.mjs          chuyển Markdown + LaTeX thành HTML sẵn (KaTeX), ghi ra dist/
```

## Lệnh

```sh
npm install
npm run build     # tạo dist/
npm run serve     # xem thử ở http://localhost:8089
npm run deploy    # build rồi đẩy dist/ lên nhánh gh-pages
```

Thêm chủ đề mới: tạo thư mục trong `content/` với 3 file như trên, rồi khai báo trong mảng `TOPICS` của `build.mjs`.
