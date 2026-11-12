# Toán HSG 8–9: ứng dụng học trên điện thoại

Ứng dụng web cài được lên điện thoại (PWA) để học Toán cho học sinh giỏi lớp 8–9 và luyện thi vào lớp 10 chuyên.

- **10 chủ đề:** biến đổi đại số, số học, nghiệm nguyên, căn thức, Viète, hệ phương trình, bất đẳng thức, cực trị, hình học, tổ hợp.
- **Kiến thức:** từng mục có chứng minh, dạng mục thu gọn.
- **Thẻ ghi nhớ:** 207 thẻ công thức, ôn theo lịch ngắt quãng (1, 3, 7, 14, 30 ngày), có chế độ "Ôn thẻ hôm nay" gộp mọi chủ đề, mỗi lượt 20 thẻ.
- **Bài tập:** 108 bài, mỗi bài có ý tưởng chính, 2 gợi ý, lời giải đầy đủ, đồng hồ đếm thời gian và tự đánh giá (bài chưa làm được sẽ được hẹn làm lại).
- **Đề thi thử:** 10 đề × 10 câu, bấm giờ 150 phút (vẫn chạy khi thoát app), nộp bài rồi tự chấm từng câu, lưu lịch sử điểm.
- Dùng được khi không có mạng, có giao diện tối, chỉnh được cỡ chữ. Tiến độ lưu trên máy, không cần tài khoản.

**Dùng thử:** https://tuyendt2.github.io/math8-9/

Cài lên điện thoại: Android (Chrome) bấm ⋮ → *Thêm vào màn hình chính*; iPhone (Safari) bấm Chia sẻ → *Thêm vào MH chính*.

## Cấu trúc

```
content/NN-ten-chu-de/
  bai-hoc.md       bài học gốc: I. Kiến thức, II. Bài tập, III. Lời giải (chép từ tài liệu math8-9)
  goi-y.md         ý tưởng chính, gợi ý từng tầng và độ khó của từng bài
  the-ghi-nho.md   thẻ ghi nhớ (## nhóm, ### mặt trước, phần dưới là mặt sau)
content/11-de-thi-thu/   10 đề thi thử (chép từ tài liệu math8-9)
src/               giao diện: index.html, app.js, style.css, sw.js, icon
build.mjs          chuyển Markdown thành HTML, giữ công thức dạng TeX để KaTeX vẽ trên máy; ghi ra dist/
scripts/sync.mjs   chép lại bài học và đề thi từ thư mục ../math8-9 khi tài liệu gốc thay đổi
```

## Lệnh

```sh
npm install
npm run sync      # chép lại bài học và đề từ ../math8-9 (khi tài liệu gốc có sửa)
npm run build     # tạo dist/
npm run serve     # xem thử ở http://localhost:8089
npm run deploy    # build rồi đẩy dist/ lên nhánh gh-pages
```

Thêm chủ đề mới: tạo thư mục `content/NN-ten/` với 3 file như trên; build tự nhận. Mỗi bài trong `bai-hoc.md` phải có mục gợi ý tương ứng trong `goi-y.md`, nếu thiếu build sẽ báo lỗi.
