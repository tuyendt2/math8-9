# Gợi ý từng tầng: Biến đổi đại số

## Bài 1 | 1
**Ý tưởng:** a) thêm bớt $4x^2$; b) thêm bớt $x^2$ để có $x^2 + x + 1$; c) ghép $(x+1)(x+4)$ và $(x+2)(x+3)$ rồi đặt ẩn phụ.

### Gợi ý 1
a) $x^4 + 4$ gần với bình phương nào? Thử $(x^2 + 2)^2$. b) $x^5 + x + 1$: thêm bớt một hạng tử để làm xuất hiện $x^3 - 1$. c) Tìm hai cặp thừa số có cùng phần $x^2 + 5x$.

### Gợi ý 2
a) $x^4 + 4 = (x^2+2)^2 - (2x)^2$. b) $x^5 + x + 1 = x^2(x^3 - 1) + (x^2 + x + 1)$. c) Đặt $t = x^2 + 5x + 5$, biểu thức thành $(t-1)(t+1) - 24 = t^2 - 25$.

## Bài 2 | 2
**Ý tưởng:** Thay $a = b$ thấy $A = 0$, nên $A$ chứa $(a - b)$; tương tự với $(b-c)$, $(c-a)$.

### Gợi ý 1
Thay $a = b$ vào $A$. Kết quả bằng bao nhiêu? Điều đó cho biết nhân tử nào?

### Gợi ý 2
$A$ có bậc 3 và chứa ba nhân tử $(a-b)$, $(b-c)$, $(c-a)$, nên $A = k(a-b)(b-c)(c-a)$. Thay một bộ số cụ thể (ví dụ $a = 0, b = 1, c = 2$) để tìm $k$.

## Bài 3 | 2
**Ý tưởng:** Thế $c = -(a+b)$; với câu b) đặt $s = ab + bc + ca$.

### Gợi ý 1
a) Thay $c = -(a + b)$ và dùng $a^3 + b^3 = (a+b)^3 - 3ab(a+b)$. Với $P$, quy đồng mẫu $abc$. b) Từ $(a + b + c)^2 = 0$ tính $a^2 + b^2 + c^2$ theo $s = ab + bc + ca$.

### Gợi ý 2
b) $a^2 + b^2 + c^2 = -2s$ và $a^2b^2 + b^2c^2 + c^2a^2 = s^2 - 2abc(a+b+c) = s^2$. Sau đó $a^4 + b^4 + c^4 = (a^2+b^2+c^2)^2 - 2\sum a^2b^2$.

## Bài 4 | 2
**Ý tưởng:** Điều kiện tương đương $(a+b)(b+c)(c+a) = 0$.

### Gợi ý 1
Quy đồng điều kiện rồi đưa về dạng "tích bằng 0". Nhớ đẳng thức $(a+b)(b+c)(c+a) = (a+b+c)(ab+bc+ca) - abc$.

### Gợi ý 2
Giả sử $a + b = 0$, tức là $b = -a$. Vì 2025 lẻ nên $b^{2025} = -a^{2025}$. Tính hai vế, cả hai đều bằng $\frac{1}{c^{2025}}$.

## Bài 5 | 1
**Ý tưởng:** Sai phân: $\frac{1}{k(k+1)(k+2)} = \frac12\left[\frac{1}{k(k+1)} - \frac{1}{(k+1)(k+2)}\right]$.

### Gợi ý 1
Viết mỗi số hạng thành hiệu của hai phân thức liên tiếp để khi cộng lại chúng triệt tiêu dây chuyền.

### Gợi ý 2
Dùng đẳng thức ở phần ý tưởng (quy đồng để kiểm tra). Tổng còn lại $\frac12\left[\frac12 - \frac{1}{(n+1)(n+2)}\right]$.

## Bài 6 | 2
**Ý tưởng:** Quy đồng với mẫu chung $D = (a-b)(b-c)(c-a)$; tử số là biểu thức giống Bài 2.

### Gợi ý 1
Đổi dấu để ba mẫu cùng là các thừa số của $(a-b)(b-c)(c-a)$, rồi quy đồng.

### Gợi ý 2
Tử số là $-[a^2(b-c) + b^2(c-a) + c^2(a-b)]$, mà $a^2(b-c) + b^2(c-a) + c^2(a-b) = -(a-b)(b-c)(c-a)$. Kết quả $P = 1$.

## Bài 7 | 2
**Ý tưởng:** Số dư có dạng $ax + b$; thay hai nghiệm $x = 1$, $x = 2$ của số chia.

### Gợi ý 1
Số chia bậc 2 thì số dư bậc không quá 1. Viết $f(x) = (x-1)(x-2)q(x) + ax + b$.

### Gợi ý 2
Thay $x = 1$: $a + b = 3$. Thay $x = 2$: $2a + b = 2^{100} + 2^{50} + 4$. Giải hệ.

## Bài 8 | 1
**Ý tưởng:** Công thức truy hồi $S_{n+1} = S_1S_n - S_{n-1}$ với $S_n = x^n + \frac{1}{x^n}$.

### Gợi ý 1
Nhân $\left(x + \frac1x\right)\left(x^n + \frac1{x^n}\right)$ ra xem được những gì.

### Gợi ý 2
$S_{n+1} = 3S_n - S_{n-1}$, với $S_0 = 2$, $S_1 = 3$. Tính lần lượt $S_2, S_3, S_4, S_5$.

## Bài 9 | 2
**Ý tưởng:** Dùng kết quả Bài 3b: khi $x + y + z = 0$ thì $x^4 + y^4 + z^4 = \frac{(x^2+y^2+z^2)^2}{2}$.

### Gợi ý 1
Điều kiện $x + y + z = 0$ giống Bài 3. Có kết quả nào ở đó dùng được ngay không?

### Gợi ý 2
Nếu chưa làm Bài 3: đặt $s = xy + yz + zx$, từ hai điều kiện có $s = -\frac12$, rồi $x^4 + y^4 + z^4 = 1 - 2s^2$.

## Bài 10 | 2
**Ý tưởng:** Phân tích thành tích 4 số nguyên liên tiếp $(n-1)n(n+1)(n+2)$.

### Gợi ý 1
Đặt nhân tử chung $n$ rồi nhóm các hạng tử để có $(n + 2)$ chung.

### Gợi ý 2
Biểu thức bằng $(n-1)n(n+1)(n+2)$. Trong 4 số nguyên liên tiếp: có một số chia hết cho 3, và có hai số chẵn liên tiếp (một trong hai chia hết cho 4).
