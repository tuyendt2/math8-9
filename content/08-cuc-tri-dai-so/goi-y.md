# Gợi ý từng tầng: Cực trị đại số

## Bài 1 | 1
**Ý tưởng:** Gom thành $(x + y - 1)^2 + (y - 2)^2 + 2025$.

### Gợi ý 1
Coi $x$ là biến chính, gom các số hạng chứa $x$ ($x^2 + 2xy - 2x$) thành một bình phương.

### Gợi ý 2
$A = (x + y - 1)^2 + y^2 - 4y + 2029$. Tiếp tục hoàn thành bình phương phần theo $y$.

## Bài 2 | 1
**Ý tưởng:** Ghép $x(x + 3)$ và $(x + 1)(x + 2)$, đặt $t = x^2 + 3x$.

### Gợi ý 1
Ghép hai cặp thừa số có cùng phần $x^2 + 3x$.

### Gợi ý 2
$B = t(t + 2) = (t + 1)^2 - 1$. Kiểm tra $t = -1$ có đạt được không.

## Bài 3 | 2
**Ý tưởng:** Miền giá trị: $P$ đạt được khi phương trình theo $x$ có nghiệm, tức $\Delta \ge 0$.

### Gợi ý 1
Viết $P(x^2 + x + 1) = x^2 - x + 1$ thành phương trình bậc hai theo $x$ (tham số $P$).

### Gợi ý 2
$(P - 1)x^2 + (P + 1)x + (P - 1) = 0$. Xét $P = 1$ riêng; nếu $P \ne 1$, $\Delta \ge 0$ cho $(3 - P)(3P - 1) \ge 0$.

## Bài 4 | 2
**Ý tưởng:** Ghép cặp đối xứng $|x - k| + |x - (2026 - k)|$; GTNN tại trung vị $x = 1013$.

### Gợi ý 1
Dùng $|a| + |b| \ge |a + b|$ cho từng cặp số hạng ở hai đầu: $|x - 1|$ với $|x - 2025|$, ...

### Gợi ý 2
Mỗi cặp $\ge 2026 - 2k$, dấu "=" khi $k \le x \le 2026 - k$. Mọi dấu "=" xảy ra đồng thời tại $x = 1013$. Tính tổng $\sum_{k=1}^{1012}(2026 - 2k)$.

## Bài 5 | 1
**Ý tưởng:** Engel: $\frac{1^2}{x} + \frac{2^2}{y} \ge \frac{(1 + 2)^2}{x + y}$.

### Gợi ý 1
Viết $\frac4y = \frac{2^2}{y}$. Bất đẳng thức nào gộp tổng phân thức có tử là bình phương?

### Gợi ý 2
$P \ge \frac92$. Dấu "=" khi $\frac1x = \frac2y$, kết hợp $x + y = 2$.

## Bài 6 | 2
**Ý tưởng:** Đặt $s = x + y$, $xy = \frac{s^2 - 1}{2}$, với $s \in [-\sqrt2; \sqrt2]$.

### Gợi ý 1
Biểu thức đối xứng. Đặt $s = x + y$, tính $xy$ theo $s$ từ điều kiện. Đừng quên điều kiện $s^2 \ge 4xy$.

### Gợi ý 2
$P = \frac{(s + 1)^2 - 2}{2}$ trên đoạn $[-\sqrt2; \sqrt2]$. GTNN tại đỉnh $s = -1$, GTLN tại đầu mút xa đỉnh nhất.

## Bài 7 | 2
**Ý tưởng:** Chặn $xy$ bằng $x^2 + y^2 \ge \pm 2xy$, rồi $P = 1 + xy$.

### Gợi ý 1
Từ điều kiện, $P = x^2 + y^2 = 1 + xy$. Chỉ cần tìm khoảng giá trị của $xy$.

### Gợi ý 2
$1 = x^2 + y^2 - xy \ge xy$ và $1 \ge -3xy$, nên $-\frac13 \le xy \le 1$.

## Bài 8 | 2
**Ý tưởng:** Minkowski: $\sqrt{(1 - x)^2 + 2^2} + \sqrt{(x + 2)^2 + 3^2} \ge \sqrt{3^2 + 5^2}$.

### Gợi ý 1
Hoàn thành bình phương dưới mỗi căn: $x^2 - 2x + 5 = (x - 1)^2 + 2^2$, $x^2 + 4x + 13 = (x + 2)^2 + 3^2$.

### Gợi ý 2
Viết $(x - 1)^2 = (1 - x)^2$ để khi cộng các thành phần, $x$ triệt tiêu: $(1 - x) + (x + 2) = 3$. Dùng Minkowski.

## Bài 9 | 2
**Ý tưởng:** Engel: $\frac{1^2}{x} + \frac{2^2}{y} + \frac{3^2}{z} \ge \frac{(1 + 2 + 3)^2}{x + y + z}$.

### Gợi ý 1
Viết các tử thành bình phương $1^2, 2^2, 3^2$.

### Gợi ý 2
$P \ge 36$. Dấu "=" khi $x : y : z = 1 : 2 : 3$.

## Bài 10 | 4
**Ý tưởng:** Giả sử $a$ nhỏ nhất ($a \le 1$), viết $P = a(b + c) + bc(1 - a)$, dùng $bc \le \frac{(3 - a)^2}{4}$.

### Gợi ý 1
Thử $a = b = c = 1$ được $P = 2$; thử $a = 0$, $b = c = \frac32$ được $P = \frac94$ lớn hơn. Điểm rơi ở biên. Giả sử $a = \min$ nên $0 \le a \le 1$.

### Gợi ý 2
$P = a(3 - a) + bc(1 - a) \le a(3 - a) + \frac{(3-a)^2(1-a)}{4} = \frac{8 - (a - 1)^3}{4}$, rồi dùng $0 \le a \le 1$.
