# Gợi ý từng tầng cho bài tập Bất đẳng thức

<!--
Định dạng: mỗi bài bắt đầu bằng "## Bài N | độ khó (1-4)".
Dòng "**Ý tưởng:**" là tóm tắt một dòng, sau đó là các "### Gợi ý K".
-->

## Bài 1 | 1
**Ý tưởng:** Nhân 2 rồi viết hiệu thành tổng ba bình phương.

### Gợi ý 1
Xét hiệu $2(a^2 + b^2 + c^2) - 2(ab + bc + ca)$. Thử tách nó thành từng cặp.

### Gợi ý 2
Hiệu đó bằng $(a - b)^2 + (b - c)^2 + (c - a)^2$. Phần sau: cộng thêm $2(ab + bc + ca)$ vào hai vế.

## Bài 2 | 1
**Ý tưởng:** Nhân ba bất đẳng thức AM-GM hai số.

### Gợi ý 1
Mỗi thừa số là tổng của hai số dương. Có bất đẳng thức nào đánh giá $a + b$ theo tích $ab$?

### Gợi ý 2
$a + b \ge 2\sqrt{ab}$, tương tự cho $b + c$ và $c + a$. Nhân vế theo vế (được phép vì các vế đều dương).

## Bài 3 | 1
**Ý tưởng:** Rút gọn $P = 1 + \frac{2}{ab}$, rồi dùng "tổng cố định thì tích lớn nhất khi hai số bằng nhau".

### Gợi ý 1
Khai triển $P$ và dùng $a + b = 1$ để rút gọn.

### Gợi ý 2
$P = 1 + \frac{2}{ab}$. Khi $a + b = 1$ thì $ab$ lớn nhất bằng bao nhiêu?

## Bài 4 | 2
**Ý tưởng:** Điểm rơi $a = 2$: tách $a = \frac a4 + \frac{3a}{4}$.

### Gợi ý 1
Áp dụng ngay $a + \frac1a \ge 2$ có được không? Dấu "=" xảy ra ở đâu, có thỏa mãn $a \ge 2$ không?

### Gợi ý 2
Dự đoán GTNN đạt tại $a = 2$. Ghép $\frac1a$ với $\frac a4$ (hai số này bằng nhau khi $a = 2$), phần còn lại $\frac{3a}{4}$ đánh giá bằng $a \ge 2$.

## Bài 5 | 3
**Ý tưởng:** Engel sau khi viết $\frac{a}{b+c} = \frac{a^2}{a(b+c)}$.

### Gợi ý 1
Tử chưa phải bình phương. Nhân cả tử và mẫu với $a$ để tạo bình phương ở tử.

### Gợi ý 2
Engel cho $\sum\frac{a^2}{a(b+c)} \ge \frac{(a+b+c)^2}{2(ab+bc+ca)}$. Kết thúc bằng Bài 1: $(a+b+c)^2 \ge 3(ab+bc+ca)$.

## Bài 6 | 2
**Ý tưởng:** AM-GM $\frac{a^3}{b} + ab \ge 2a^2$, rồi cộng lại.

### Gợi ý 1
Tìm một biểu thức ghép với $\frac{a^3}{b}$ để AM-GM cho ra $a^2$, với dấu "=" khi $a = b$.

### Gợi ý 2
$\frac{a^3}{b} + ab \ge 2a^2$. Cộng ba bất đẳng thức, rồi dùng $a^2 + b^2 + c^2 \ge ab + bc + ca$.

## Bài 7 | 2
**Ý tưởng:** Cauchy-Schwarz cho hai bộ $(1, 2, 2)$ và $(a, b, c)$.

### Gợi ý 1
Viết $a + 2b + 2c = 1\cdot a + 2\cdot b + 2\cdot c$. Bất đẳng thức nào chặn trên "tổng các tích" bằng tổng các bình phương?

### Gợi ý 2
$(a + 2b + 2c)^2 \le (1 + 4 + 4)(a^2 + b^2 + c^2) = 9$. Dấu "=" khi $a : b : c = 1 : 2 : 2$.

## Bài 8 | 2
**Ý tưởng:** Dùng biên: $(1 - a)(1 - b)(1 - c) \ge 0$.

### Gợi ý 1
Từ $a \in [0; 1]$ suy ra $1 - a \ge 0$. Nhân các biểu thức không âm như vậy lại.

### Gợi ý 2
Khai triển $(1 - a)(1 - b)(1 - c) \ge 0$ và dùng $abc \ge 0$.

## Bài 9 | 3
**Ý tưởng:** AM-GM ngược dấu: $\frac{a}{1+b^2} = a - \frac{ab^2}{1+b^2} \ge a - \frac{ab}{2}$.

### Gợi ý 1
Dùng $1 + b^2 \ge 2b$ ở mẫu sẽ cho chiều "$\le$", ngược với điều cần chứng minh. Hãy tách $\frac{a}{1 + b^2} = a - \frac{ab^2}{1 + b^2}$.

### Gợi ý 2
Phần bị trừ: $\frac{ab^2}{1 + b^2} \le \frac{ab^2}{2b} = \frac{ab}{2}$. Cuối cùng dùng $ab + bc + ca \le \frac{(a+b+c)^2}{3} = 3$.

## Bài 10 | 3
**Ý tưởng:** $a^3 + b^3 \ge ab(a + b)$ nên mẫu $\ge ab(a + b + c)$.

### Gợi ý 1
Muốn chặn trên một phân thức thì phải chặn dưới mẫu. Đánh giá $a^3 + b^3$ theo $ab$ thế nào?

### Gợi ý 2
$a^3 + b^3 + abc \ge ab(a + b + c)$, nên mỗi phân thức $\le \frac{c}{abc(a+b+c)}$. Cộng ba phân thức lại.

## Bài 11 | 3
**Ý tưởng:** Đổi biến $x = \frac1a$, … rồi Engel và AM-GM.

### Gợi ý 1
Đặt $x = \frac1a$, $y = \frac1b$, $z = \frac1c$ (khi đó $xyz = 1$). Mỗi số hạng trở thành gì?

### Gợi ý 2
Mỗi số hạng bằng $\frac{x^2}{y + z}$. Engel cho $\ge \frac{x + y + z}{2}$, rồi AM-GM: $x + y + z \ge 3$.

## Bài 12 | 3
**Ý tưởng:** Tiếp tuyến tại điểm rơi: $\frac{x}{1+x^2} \le \frac{36x + 3}{50}$.

### Gợi ý 1
Điểm rơi $a = b = c = \frac13$. Tìm đánh giá $\frac{x}{1 + x^2} \le \alpha x + \beta$ có dấu "=" tại $x = \frac13$.

### Gợi ý 2
Thử $\frac{x}{1 + x^2} \le \frac{36x + 3}{50}$. Quy đồng sẽ được $(3x - 1)^2(4x + 3) \ge 0$. Cộng ba bất đẳng thức và dùng $a + b + c = 1$.

## Bài 13 | 3
**Ý tưởng:** Tách $\frac{2}{xy} = \frac{1}{2xy} + \frac{3}{2xy}$ để dùng $\frac1u + \frac1v \ge \frac{4}{u+v}$.

### Gợi ý 1
Điểm rơi $x = y = \frac12$, khi đó $x^2 + y^2 = 2xy$. Ghép $\frac{1}{x^2 + y^2}$ với phân thức nào để hai mẫu cộng lại thành $(x + y)^2$?

### Gợi ý 2
$\frac{1}{x^2+y^2} + \frac{1}{2xy} \ge \frac{4}{(x+y)^2} \ge 4$. Phần còn lại: $\frac{3}{2xy} \ge 6$ vì $xy \le \frac14$.

## Bài 14 | 3
**Ý tưởng:** Viết $\frac{1}{a^2+2} = \frac12\left(1 - \frac{a^2}{a^2+2}\right)$ để đổi chiều, rồi Engel.

### Gợi ý 1
Chặn trên tổng các phân thức khó. Hãy viết mỗi phân thức thành "hằng số trừ phân thức khác" để chuyển sang chặn dưới.

### Gợi ý 2
Bài toán tương đương $\sum\frac{a^2}{a^2 + 2} \ge 1$. Dùng Engel và thay $6 = 2(ab + bc + ca)$ ở mẫu.

## Bài 15 | 4
**Ý tưởng:** SOS: đưa về $\sum S_a(b-c)^2 \ge 0$ và dùng tiêu chuẩn $S_b, S_c \ge 0$, $S_a + S_b \ge 0$.

### Gợi ý 1
Viết từng phần thành tổng các $(a - b)^2$: $\frac{a^2+b^2+c^2}{q} - 1$ và $1 - \frac{8abc}{R}$, với $q = ab + bc + ca$, $R = (a+b)(b+c)(c+a)$.

### Gợi ý 2
Dùng $R - 8abc = a(b-c)^2 + b(c-a)^2 + c(a-b)^2$ và $R = (a + b)(q + c^2)$. Giả sử $a \ge b \ge c$, kiểm tra $S_b \ge 0$, $S_c \ge 0$, $S_a + S_b \ge 0$.
