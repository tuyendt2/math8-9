# Thẻ ghi nhớ: Cực trị đại số

## Nguyên tắc

### Hai bước bắt buộc khi tìm GTNN?
1. Chứng minh $f(x) \ge m$ với mọi $x$ trong miền.
2. Chỉ ra $x_0$ **thuộc miền** để $f(x_0) = m$.

Thiếu bước 2 là lỗi bị trừ điểm nhiều nhất.

### GTNN/GTLN của tam thức $ax^2 + bx + c$?
$ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a}$. Với $a > 0$: GTNN $-\frac{\Delta}{4a}$ tại $x = -\frac{b}{2a}$.

### Tam thức ($a > 0$) trên đoạn $[m; M]$: GTNN, GTLN ở đâu?
- GTNN: tại đỉnh nếu đỉnh trong đoạn, nếu không thì tại đầu mút gần đỉnh hơn.
- GTLN: tại đầu mút xa đỉnh hơn.

### Biểu thức bậc hai hai biến: cách làm?
Coi một biến là chính, gom thành bình phương, phần còn lại tiếp tục hoàn thành bình phương:
$$(x + \alpha y + \beta)^2 + k(y + \gamma)^2 + c.$$

## Ẩn phụ, miền giá trị

### Miền giá trị của $t = x + \frac1x$?
$x > 0$: $t \ge 2$. $x \ne 0$: $|t| \ge 2$.

### Miền giá trị của $t = \sqrt{x - 1} + \sqrt{3 - x}$?
$\sqrt2 \le t \le 2$, vì $t^2 = 2 + 2\sqrt{(x - 1)(3 - x)}$ và $0 \le (x - 1)(3 - x) \le 1$.

### Phương pháp miền giá trị cho phân thức bậc hai/bậc hai?
$P$ là một giá trị khi phương trình $P\cdot(\text{mẫu}) = \text{tử}$ có nghiệm $x$. Điều kiện $\Delta \ge 0$ cho khoảng của $P$. Xét riêng hệ số $x^2$ bằng 0.

### Biểu thức đối xứng hai biến có ràng buộc: cách làm?
Đưa về $S = x + y$, $P = xy$; biểu diễn $P$ theo $S$; tìm đoạn của $S$ từ $S^2 \ge 4P$; còn lại hàm một biến.

## Bất đẳng thức trong cực trị

### GTNN của $\frac{\alpha}{x} + \frac{\beta}{y}$ khi $x + y = k$?
$\frac{(\sqrt\alpha + \sqrt\beta)^2}{k}$ (Engel).

### GTLN của $ax + by$ khi $x^2 + y^2 = r^2$?
$r\sqrt{a^2 + b^2}$ (Cauchy-Schwarz).

### GTNN của $\sum|x - a_i|$ đạt ở đâu? Vì sao?
Tại trung vị. Ghép cặp $|x - a_1| + |x - a_n| \ge a_n - a_1$, ...; mọi dấu "=" xảy ra đồng thời ở giữa.

### Bất đẳng thức Minkowski?
$$\sqrt{a^2 + b^2} + \sqrt{c^2 + d^2} \ge \sqrt{(a + c)^2 + (b + d)^2}.$$
Hình học: $OM + MN \ge ON$.

### Dùng Minkowski tìm GTNN của tổng hai căn tam thức?
Viết mỗi căn thành $\sqrt{(\dots)^2 + (\dots)^2}$, chọn dấu để khi cộng các thành phần, biến bị triệt tiêu.

### Điểm rơi không phải lúc nào cũng là các biến bằng nhau. Thử gì?
Thử các trường hợp biên (một biến bằng 0, biến bằng cận). Công cụ: $(x - m)(x - M) \le 0$; giả sử biến nhỏ nhất $a \le$ trung bình.
