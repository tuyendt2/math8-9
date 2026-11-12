# Chủ đề 8. Cực trị đại số (giá trị lớn nhất, giá trị nhỏ nhất)

## I. Kiến thức cần nắm

### 1. Định nghĩa và hai bước bắt buộc
Số $m$ là **giá trị nhỏ nhất** (GTNN) của $f$ trên tập $D$ khi:
1. $f(x) \ge m$ với mọi $x \in D$;
2. **tồn tại** $x_0 \in D$ sao cho $f(x_0) = m$.

Định nghĩa GTLN tương tự với $f(x) \le M$.

**Vì sao bước 2 bắt buộc?** Chỉ chứng minh $f(x) \ge m$ thì chưa đủ. Ví dụ $x^2 + 1 \ge 0$ với mọi $x$, nhưng GTNN của $x^2 + 1$ là 1 chứ không phải 0. Một số $m$ thỏa mãn bước 1 chỉ là một **cận dưới**; nó là GTNN khi và chỉ khi đạt được.

> Thiếu bước 2 là lỗi bị trừ điểm nhiều nhất. Phải chỉ ra giá trị cụ thể của biến để dấu "=" xảy ra, và giá trị đó phải **thuộc miền xét**.

### 2. Tam thức bậc hai: công cụ cơ bản nhất
$$ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a}, \quad \Delta = b^2 - 4ac.$$
(Chứng minh: hoàn thành bình phương, xem Chủ đề 5.)
- $a > 0$: GTNN bằng $-\frac{\Delta}{4a}$, đạt tại $x = -\frac{b}{2a}$; không có GTLN.
- $a < 0$: GTLN bằng $-\frac{\Delta}{4a}$, đạt tại $x = -\frac{b}{2a}$; không có GTNN.

**Trên một đoạn $[m; M]$** (rất hay gặp sau khi đặt ẩn phụ): parabol đối xứng qua đường thẳng $x = -\frac{b}{2a}$.
- Với $a > 0$: GTNN đạt tại đỉnh nếu đỉnh nằm trong đoạn, nếu không thì đạt tại đầu mút gần đỉnh hơn; GTLN đạt tại đầu mút **xa đỉnh hơn**.
- Với $a < 0$: ngược lại.

**Biểu thức hai biến bậc hai:** coi một biến (chẳng hạn $x$) là biến chính, gom các số hạng chứa $x$ thành một bình phương; phần còn lại chỉ chứa $y$, tiếp tục hoàn thành bình phương:
$$A = (x + \alpha y + \beta)^2 + k(y + \gamma)^2 + c.$$

### 3. Đặt ẩn phụ: luôn tìm miền giá trị của ẩn mới
Đặt ẩn phụ giúp hạ bậc, nhưng **ẩn mới bị giới hạn** và phải xét đúng miền đó:
- $t = x + \frac1x$ (với $x > 0$) thì $t \ge 2$; với $x \ne 0$ thì $\lvert t\rvert \ge 2$.
- $t = x^2 + 3x = \left(x + \frac32\right)^2 - \frac94$ thì $t \ge -\frac94$.
- $t = \sqrt{x - 1} + \sqrt{3 - x}$ (với $1 \le x \le 3$) thì $\sqrt2 \le t \le 2$, vì $t^2 = 2 + 2\sqrt{(x-1)(3-x)}$ và $0 \le (x-1)(3-x) \le 1$.
- $s = x + y$, $p = xy$ với $x, y$ thực thì $s^2 \ge 4p$.

### 4. Phương pháp miền giá trị (dùng $\Delta$)
Áp dụng cho phân thức $P = \frac{ax^2 + bx + c}{a'x^2 + b'x + c'}$ (mẫu luôn khác 0).

**Vì sao đúng?** Một số $P$ là giá trị của biểu thức **khi và chỉ khi** phương trình (ẩn $x$)
$$P(a'x^2 + b'x + c') = ax^2 + bx + c$$
có nghiệm. Đây là phương trình bậc hai (hoặc bậc nhất) theo $x$, có nghiệm khi $\Delta \ge 0$. Điều kiện này cho bất phương trình bậc hai theo $P$, giải ra được khoảng giá trị của $P$. Hai đầu mút của khoảng chính là GTNN và GTLN, và chúng **tự động đạt được** (vì khi đó $\Delta = 0$, có nghiệm kép).
> Nhớ xét riêng trường hợp hệ số của $x^2$ bằng 0.

### 5. Dùng bất đẳng thức
- **Tổng cố định thì tích lớn nhất khi các số bằng nhau; tích cố định thì tổng nhỏ nhất khi các số bằng nhau** (AM-GM).
- GTNN của $\frac{\alpha}{x} + \frac{\beta}{y}$ khi $x + y = k$: theo Engel, $\frac{(\sqrt\alpha)^2}{x} + \frac{(\sqrt\beta)^2}{y} \ge \frac{(\sqrt\alpha + \sqrt\beta)^2}{k}$.
- GTLN của $ax + by$ khi $x^2 + y^2 = r^2$: theo Cauchy-Schwarz, $ax + by \le r\sqrt{a^2 + b^2}$.
- Xem thêm Chủ đề 7.

### 6. Biểu thức đối xứng hai biến: đưa về $S = x + y$, $P = xy$
Biến đổi biểu thức theo $S, P$; dùng điều kiện ràng buộc để biểu diễn $P$ theo $S$; khi đó bài toán trở thành tìm cực trị của hàm **một biến** $S$ trên một đoạn.
**Vì sao cần $S^2 \ge 4P$?** Vì $x, y$ là nghiệm của $X^2 - SX + P = 0$, nên chúng là số thực khi và chỉ khi $S^2 - 4P \ge 0$. Điều kiện này thường cho đoạn giá trị của $S$.

### 7. Giá trị tuyệt đối
- $\lvert a\rvert + \lvert b\rvert \ge \lvert a + b\rvert$, dấu "=" khi $ab \ge 0$;
- $\lvert a\rvert - \lvert b\rvert \le \lvert a - b\rvert$ (áp dụng bất đẳng thức trên cho $a - b$ và $b$).

**Tổng $\sum\lvert x - a_i\rvert$ nhỏ nhất tại trung vị.** *Vì sao?* Sắp xếp $a_1 \le a_2 \le \dots \le a_n$. Ghép các cặp đối xứng: $\lvert x - a_1\rvert + \lvert x - a_n\rvert \ge a_n - a_1$, dấu "=" khi $a_1 \le x \le a_n$; $\lvert x - a_2\rvert + \lvert x - a_{n-1}\rvert \ge a_{n-1} - a_2$, dấu "=" khi $a_2 \le x \le a_{n-1}$; ... Tất cả dấu "=" xảy ra đồng thời khi $x$ nằm ở "giữa", tức là tại trung vị.

### 8. Bất đẳng thức Minkowski
$$\sqrt{a^2 + b^2} + \sqrt{c^2 + d^2} \ge \sqrt{(a + c)^2 + (b + d)^2}.$$
Dấu "=" khi $\frac ac = \frac bd$ (cùng dấu).
- *Chứng minh:* bình phương hai vế, bất đẳng thức tương đương với $\sqrt{(a^2 + b^2)(c^2 + d^2)} \ge ac + bd$, đúng theo Cauchy-Schwarz.
- *Ý nghĩa hình học:* với $O(0;0)$, $M(a; b)$, $N(a + c; b + d)$, ta có $OM + MN \ge ON$ (bất đẳng thức tam giác).
- *Ứng dụng:* tìm GTNN của tổng hai căn bậc hai của tam thức. Viết mỗi căn dưới dạng $\sqrt{(\dots)^2 + (\dots)^2}$, chọn dấu sao cho khi cộng các thành phần, biến $x$ bị triệt tiêu.

### 9. Điểm rơi tại biên
Không phải lúc nào cực trị cũng đạt khi các biến bằng nhau. Khi các biến bị chặn, như $x \in [m; M]$ hoặc $x \ge 0$, hãy thử các giá trị tại biên. Công cụ hay dùng:
- $(x - m)(x - M) \le 0$ khi $m \le x \le M$;
- $(M - x)(M - y)(M - z) \ge 0$ khi $x, y, z \le M$;
- giả sử biến nhỏ nhất là $a$ (nên $a \le$ trung bình) rồi đánh giá theo $a$.

---

## II. Bài tập vận dụng

**Bài 1.** Tìm GTNN của $A = x^2 + 2y^2 + 2xy - 2x - 6y + 2030$.

**Bài 2.** Tìm GTNN của $B = x(x+1)(x+2)(x+3)$.

**Bài 3.** Tìm GTLN và GTNN của $P = \frac{x^2 - x + 1}{x^2 + x + 1}$.

**Bài 4.** Tìm GTNN của $f(x) = |x - 1| + |x - 2| + \dots + |x - 2025|$.

**Bài 5.** Cho $x, y > 0$ và $x + y = 2$. Tìm GTNN của $P = \frac1x + \frac4y$.

**Bài 6.** Cho các số thực $x, y$ thỏa mãn $x^2 + y^2 = 1$. Tìm GTLN và GTNN của $P = x + y + xy$.

**Bài 7.** Cho các số thực $x, y$ thỏa mãn $x^2 + y^2 - xy = 1$. Tìm GTLN và GTNN của $P = x^2 + y^2$.

**Bài 8.** Tìm GTNN của $A = \sqrt{x^2 - 2x + 5} + \sqrt{x^2 + 4x + 13}$.

**Bài 9 (khó).** Cho $x, y, z > 0$ và $x + y + z = 1$. Tìm GTNN của $P = \frac1x + \frac4y + \frac9z$.

**Bài 10 (khó).** Cho $a, b, c \ge 0$ và $a + b + c = 3$. Tìm GTLN của $P = ab + bc + ca - abc$.

---

## III. Lời giải chi tiết

### Bài 1
Gom các số hạng chứa $x$ thành một bình phương:
$$A = (x + y - 1)^2 + y^2 - 4y + 2029 = (x + y - 1)^2 + (y - 2)^2 + 2025 \ge 2025.$$
(Kiểm tra: $(x + y - 1)^2 = x^2 + y^2 + 1 + 2xy - 2x - 2y$, nên $A - (x+y-1)^2 = y^2 - 4y + 2029$.)
Dấu "=" khi $y = 2$ và $x = -1$.

**GTNN:** $A_{\min} = 2025$ tại $(x, y) = (-1, 2)$.

### Bài 2
$B = (x^2 + 3x)(x^2 + 3x + 2)$. Đặt $t = x^2 + 3x$:
$$B = t(t + 2) = (t+1)^2 - 1 \ge -1.$$
Dấu "=" khi $t = -1$, tức là $x^2 + 3x + 1 = 0 \iff x = \frac{-3\pm\sqrt5}{2}$.

**GTNN:** $B_{\min} = -1$.

### Bài 3
Vì $x^2 + x + 1 > 0$, $P$ xác định với mọi $x$. Giá trị $P$ đạt được khi và chỉ khi phương trình sau (ẩn $x$) có nghiệm:
$$P(x^2 + x + 1) = x^2 - x + 1 \iff (P - 1)x^2 + (P + 1)x + (P - 1) = 0.$$
- $P = 1$: được $x = 0$, có nghiệm.
- $P \ne 1$: cần $\Delta = (P+1)^2 - 4(P - 1)^2 \ge 0 \iff (3 - P)(3P - 1) \ge 0 \iff \frac13 \le P \le 3$.

$P = 3$ khi $2x^2 + 4x + 2 = 0$, tức là $x = -1$. $P = \frac13$ khi $x = 1$.

**GTLN:** $3$ tại $x = -1$. **GTNN:** $\frac13$ tại $x = 1$.

### Bài 4
Ghép các số hạng thành cặp đối xứng: với $k = 1, 2, \dots, 1012$:
$$|x - k| + |x - (2026 - k)| \ge |(2026 - k) - k| = 2026 - 2k,$$
dấu "=" khi $k \le x \le 2026 - k$. Số hạng giữa là $|x - 1013| \ge 0$, dấu "=" khi $x = 1013$.
$$f(x) \ge \sum_{k=1}^{1012}(2026 - 2k) = 2\sum_{k=1}^{1012}(1013 - k) = 2(1012 + 1011 + \dots + 1) = 1012\cdot 1013 = 1\,025\,156.$$
Tất cả dấu "=" đồng thời xảy ra tại $x = 1013$.

**GTNN:** $1\,025\,156$ tại $x = 1013$ (trung vị).

### Bài 5
Theo Cauchy-Schwarz dạng Engel: $\frac{1^2}{x} + \frac{2^2}{y} \ge \frac{(1 + 2)^2}{x + y} = \frac92$.
Dấu "=" khi $\frac1x = \frac2y$, tức là $y = 2x$; kết hợp $x + y = 2$ được $x = \frac23$ và $y = \frac43$.

**GTNN:** $\frac92$.

### Bài 6
Đặt $s = x + y$. Từ $x^2 + y^2 = 1$ suy ra $xy = \frac{s^2 - 1}{2}$. Điều kiện tồn tại $x, y$ thực: $s^2 \ge 4xy = 2(s^2 - 1) \iff s^2 \le 2 \iff -\sqrt2 \le s \le \sqrt2$.
$$P = s + \frac{s^2 - 1}{2} = \frac{(s + 1)^2 - 2}{2}, \quad s \in [-\sqrt2; \sqrt2].$$
- **GTNN** tại $s = -1$: $P = -1$. Khi đó $xy = 0$, chẳng hạn $(x,y) = (0, -1)$.
- **GTLN** tại $s = \sqrt2$ (điểm xa $-1$ nhất trong đoạn): $P = \frac{(\sqrt2+1)^2 - 2}{2} = \frac{1 + 2\sqrt2}{2}$. Khi đó $x = y = \frac{\sqrt2}{2}$.

### Bài 7
Từ $x^2 + y^2 \ge 2xy$ và $x^2 + y^2 \ge -2xy$:
- $1 = x^2 + y^2 - xy \ge 2xy - xy = xy$, nên $xy \le 1$.
- $1 = x^2 + y^2 - xy \ge -2xy - xy = -3xy$, nên $xy \ge -\frac13$.

Mà $P = 1 + xy$, nên $\frac23 \le P \le 2$.
- $P = 2$ khi $x = y$ và $x^2 = 1$: $(1,1)$ hoặc $(-1,-1)$.
- $P = \frac23$ khi $x = -y$ và $3x^2 = 1$: $\left(\frac{1}{\sqrt3}, -\frac1{\sqrt3}\right)$ hoặc $\left(-\frac{1}{\sqrt3}, \frac{1}{\sqrt3}\right)$.

**GTLN:** $2$. **GTNN:** $\frac23$.

### Bài 8
$A = \sqrt{(1 - x)^2 + 2^2} + \sqrt{(x + 2)^2 + 3^2}$. Theo bất đẳng thức Minkowski:
$$A \ge \sqrt{(1 - x + x + 2)^2 + (2 + 3)^2} = \sqrt{9 + 25} = \sqrt{34}.$$
Dấu "=" khi $\frac{1 - x}{2} = \frac{x+2}{3} \iff 3 - 3x = 2x + 4 \iff x = -\frac15$.

**GTNN:** $\sqrt{34}$ tại $x = -\frac15$.

> **Ý nghĩa hình học:** $A = MP + MQ$ với $M(x; 0)$, $P(1; 2)$, $Q(-2; -3)$. Vì $P, Q$ nằm khác phía so với trục $Ox$ nên $MP + MQ \ge PQ = \sqrt{3^2 + 5^2} = \sqrt{34}$.

### Bài 9
Theo Cauchy-Schwarz dạng Engel:
$$P = \frac{1^2}{x} + \frac{2^2}{y} + \frac{3^2}{z} \ge \frac{(1 + 2 + 3)^2}{x + y + z} = 36.$$
Dấu "=" khi $\frac1x = \frac2y = \frac3z$, tức là $x : y : z = 1 : 2 : 3$, nên $x = \frac16$, $y = \frac13$, $z = \frac12$.

**GTNN:** $36$.

### Bài 10
Giả sử $a = \min\{a, b, c\}$, khi đó $0 \le a \le 1$. Ta có
$$P = a(b + c) + bc(1 - a).$$
Vì $1 - a \ge 0$ và $bc \le \left(\frac{b + c}{2}\right)^2 = \frac{(3 - a)^2}{4}$:
$$P \le a(3 - a) + \frac{(3 - a)^2(1 - a)}{4} = \frac{4a(3-a) + (3-a)^2(1-a)}{4}.$$
Khai triển tử số: $12a - 4a^2 + (9 - 6a + a^2)(1 - a) = 12a - 4a^2 + 9 - 15a + 7a^2 - a^3 = -a^3 + 3a^2 - 3a + 9$.
Do đó $P \le \frac{9 - a^3 + 3a^2 - 3a}{4} = \frac{8 - (a - 1)^3}{4}$.

Vì $0 \le a \le 1$ nên $-(a-1)^3 = (1 - a)^3 \le 1$, dấu "=" khi $a = 0$. Suy ra $P \le \frac{8 + 1}{4} = \frac94$.
Dấu "=" khi $a = 0$ và $b = c = \frac32$.

Kiểm tra: $P = 0 + \frac94 + 0 - 0 = \frac94$. So sánh với điểm $a = b = c = 1$: $P = 3 - 1 = 2 < \frac94$.

**GTLN:** $\frac94$ tại $(a,b,c) = \left(0, \frac32, \frac32\right)$ và các hoán vị.

> **Bài học:** điểm rơi **không phải lúc nào cũng là các biến bằng nhau**; luôn thử cả các trường hợp biên.
