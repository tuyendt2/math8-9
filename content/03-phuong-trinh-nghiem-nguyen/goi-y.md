# Gợi ý từng tầng: Phương trình nghiệm nguyên

## Bài 1 | 1
**Ý tưởng:** Đưa về phương trình ước số $(x - 3)(y - 2) = 7$.

### Gợi ý 1
Thêm vào hai vế một hằng số để vế trái phân tích được thành tích $(x - \dots)(y - \dots)$.

### Gợi ý 2
Thêm 6: $(x - 3)(y - 2) = 7$. Lập bảng với các ước $\pm1, \pm7$ của 7.

## Bài 2 | 1
**Ý tưởng:** Xét modulo 4: $x^2 - y^2$ không bao giờ đồng dư 2.

### Gợi ý 1
Bình phương chia 4 dư bao nhiêu? Hiệu hai bình phương chia 4 có thể dư bao nhiêu?

### Gợi ý 2
$x^2 - y^2 \equiv 0, 1, 3 \pmod 4$, còn $2026 \equiv 2 \pmod 4$.

## Bài 3 | 2
**Ý tưởng:** Sắp thứ tự $x \le y \le z$ để chặn $x \le 3$.

### Gợi ý 1
Phương trình đối xứng nên giả sử $x \le y \le z$. Khi đó $\frac1x$ là số lớn nhất trong ba phân số. Suy ra gì cho $x$?

### Gợi ý 2
$1 \le \frac3x$ nên $x \in \{2, 3\}$. Với mỗi $x$, làm tương tự để chặn $y$. Cuối cùng nhớ liệt kê các hoán vị.

## Bài 4 | 2
**Ý tưởng:** Nhân 4: $(2y - 2x - 1)(2y + 2x + 1) = 23$.

### Gợi ý 1
Nhân hai vế với 4 để hoàn thành bình phương $(2x + 1)^2$, rồi đưa về hiệu hai bình phương.

### Gợi ý 2
$(2y)^2 - (2x + 1)^2 = 23$. Xét 4 cặp ước của 23 (kể cả âm).

## Bài 5 | 1
**Ý tưởng:** Modulo 8: tổng ba bình phương không bao giờ đồng dư 7.

### Gợi ý 1
Bình phương chia 8 dư 0, 1 hoặc 4. $2031$ chia 8 dư bao nhiêu?

### Gợi ý 2
Liệt kê các tổng của ba số trong $\{0, 1, 4\}$ theo modulo 8: không có 7. Mà $2031 \equiv 7 \pmod 8$.

## Bài 6 | 2
**Ý tưởng:** Coi là phương trình bậc hai ẩn $x$, điều kiện $\Delta' \ge 0$ chặn $y$.

### Gợi ý 1
Viết phương trình dạng $x^2 + 2y\,x + (2y^2 + 3y - 4) = 0$ và tính $\Delta'$.

### Gợi ý 2
$\Delta' = -(y - 1)(y + 4) \ge 0$ nên $-4 \le y \le 1$. Xét từng giá trị, giữ lại khi $\Delta'$ là số chính phương.

## Bài 7 | 3
**Ý tưởng:** Cộng $xy$: $(x + y)^2 = xy(xy + 1)$; tích hai số nguyên liên tiếp là số chính phương chỉ khi bằng 0.

### Gợi ý 1
Cộng $xy$ vào hai vế để vế trái thành $(x + y)^2$. Vế phải là gì nếu đặt $t = xy$?

### Gợi ý 2
$t(t + 1)$ chính phương thì $t = 0$ hoặc $t = -1$ (kẹp giữa hai bình phương liên tiếp). Khi đó $x + y = 0$.

## Bài 8 | 1
**Ý tưởng:** Với $x \ge 2$, xét modulo 4: $y^2 \equiv 3$, vô lý.

### Gợi ý 1
Thử $x = 0, 1$ trước. Với $x \ge 2$, $2^x$ chia hết cho số nào?

### Gợi ý 2
$x \ge 2$ thì $y^2 = 2^x + 3 \equiv 3 \pmod 4$, không thể.

## Bài 9 | 3
**Ý tưởng:** Lùi vô hạn: $3 \mid x, y$ rồi $3 \mid z$, nên $\left(\frac x3, \frac y3, \frac z3\right)$ cũng là nghiệm.

### Gợi ý 1
Từ $3 \mid x^2 + y^2$ suy ra điều gì về $x$ và $y$? (Xem Bài 9 của Chủ đề 2.)

### Gợi ý 2
Đặt $x = 3x_1$, $y = 3y_1$, suy ra $3 \mid z$. Nghiệm chia 3 được nghiệm mới nhỏ hơn; lặp lại mãi chỉ có thể khi tất cả bằng 0.

## Bài 10 | 4
**Ý tưởng:** Nhân 4 rồi kẹp: $(2x^2 + x)^2 < (2y)^2 \le (2x^2 + x + 2)^2$.

### Gợi ý 1
Nhân hai vế với 4. So sánh $4x^4 + 4x^3 + 4x^2 + 4x + 4$ với $(2x^2 + x)^2$ và $(2x^2 + x + 2)^2$.

### Gợi ý 2
Chỉ còn hai khả năng: $|2y| = 2x^2 + x + 1$ (cho $x^2 - 2x - 3 = 0$) hoặc $|2y| = 2x^2 + x + 2$ (cho $x = 0$).

## Bài 11 | 4
**Ý tưởng:** Đặt $d = x - y \ge 1$; nếu $d \ge 2$ thì chặn được $x, y$ rất nhỏ; còn lại $d = 1$.

### Gợi ý 1
Vế phải dương nên $x > y$. Viết $x^3 - y^3 = d(x^2 + xy + y^2)$ với $d = x - y$.

### Gợi ý 2
$d \ge 2$ cho $2x^2 + xy + 2y^2 \le 61$, chỉ còn vài cặp để thử. $d = 1$: thay $x = y + 1$ được $y^2 + y - 30 = 0$.
