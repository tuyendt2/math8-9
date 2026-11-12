# Chủ đề 5. Phương trình bậc hai và định lý Viète

## I. Kiến thức cần nắm

### 1. Công thức nghiệm và vì sao có công thức đó
Xét phương trình $ax^2 + bx + c = 0$ với $a \ne 0$.

**Chứng minh (hoàn thành bình phương):**
$$ax^2 + bx + c = a\left[x^2 + \frac ba x + \frac{c}{a}\right] = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2 - 4ac}{4a^2}\right].$$
Đặt $\Delta = b^2 - 4ac$. Phương trình tương đương với $\left(x + \frac{b}{2a}\right)^2 = \frac{\Delta}{4a^2}$.
- $\Delta > 0$: $x + \frac{b}{2a} = \pm\frac{\sqrt\Delta}{2a}$, nên có hai nghiệm phân biệt $x_{1,2} = \frac{-b \pm\sqrt\Delta}{2a}$.
- $\Delta = 0$: nghiệm kép $x = -\frac{b}{2a}$.
- $\Delta < 0$: vế trái không âm, vế phải âm, nên vô nghiệm.

**Công thức thu gọn:** khi $b = 2b'$ (hệ số $b$ chẵn), $\Delta = 4(b'^2 - ac) = 4\Delta'$, nên $x_{1,2} = \frac{-b' \pm\sqrt{\Delta'}}{a}$ với $\Delta' = b'^2 - ac$.

**Các trường hợp đặc biệt:**
- **$a + b + c = 0$** thì có nghiệm $x_1 = 1$ (thay $x = 1$ vào), và $x_2 = \frac ca$ (theo Viète).
- **$a - b + c = 0$** thì có nghiệm $x_1 = -1$ và $x_2 = -\frac ca$.
- **$ac < 0$** thì có hai nghiệm trái dấu. *Vì sao?* $\Delta = b^2 - 4ac > 0$ và $x_1x_2 = \frac ca < 0$.

**Ý nghĩa hình học:** đồ thị $y = ax^2 + bx + c$ là một parabol có đỉnh tại $x = -\frac{b}{2a}$. Số nghiệm của phương trình là số giao điểm của parabol với trục hoành, tương ứng với $\Delta > 0$, $\Delta = 0$, $\Delta < 0$.

### 2. Định lý Viète
Nếu phương trình có hai nghiệm $x_1, x_2$ (kể cả nghiệm kép) thì
$$S = x_1 + x_2 = -\frac ba, \qquad P = x_1x_2 = \frac ca.$$
**Chứng minh 1:** cộng và nhân hai công thức nghiệm:
$x_1 + x_2 = \frac{-2b}{2a}$; $\ x_1x_2 = \frac{b^2 - \Delta}{4a^2} = \frac{4ac}{4a^2} = \frac ca$.
**Chứng minh 2 (đẹp hơn):** vì $x_1, x_2$ là nghiệm, $ax^2 + bx + c = a(x - x_1)(x - x_2) = ax^2 - a(x_1 + x_2)x + ax_1x_2$. So sánh hệ số được kết quả.

**Định lý Viète đảo.** Nếu hai số $u, v$ có $u + v = S$ và $uv = P$ thì $u, v$ là hai nghiệm của $X^2 - SX + P = 0$.
*Chứng minh:* $X^2 - SX + P = X^2 - (u + v)X + uv = (X - u)(X - v)$.
*Điều kiện tồn tại $u, v$ thực:* $S^2 - 4P \ge 0$, vì $S^2 - 4P = (u - v)^2$.

**Mở rộng cho bậc ba (dùng trong thi chuyên):** nếu $ax^3 + bx^2 + cx + d = 0$ có ba nghiệm $x_1, x_2, x_3$ thì
$$x_1 + x_2 + x_3 = -\frac ba, \quad x_1x_2 + x_2x_3 + x_3x_1 = \frac ca, \quad x_1x_2x_3 = -\frac da.$$
(Chứng minh tương tự cách 2: so sánh hệ số của $a(x - x_1)(x - x_2)(x - x_3)$.)

### 3. Biểu thức đối xứng của hai nghiệm
Một biểu thức **đối xứng** (không đổi khi đổi chỗ $x_1, x_2$) luôn biểu diễn được qua $S$ và $P$. Các công thức hay dùng và cách suy ra:
- $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 = S^2 - 2P$
- $x_1^3 + x_2^3 = (x_1 + x_2)^3 - 3x_1x_2(x_1 + x_2) = S^3 - 3SP$
- $(x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1x_2 = S^2 - 4P$, do đó $\lvert x_1 - x_2\rvert = \frac{\sqrt\Delta}{\lvert a\rvert}$
- $\frac1{x_1} + \frac1{x_2} = \frac{x_1 + x_2}{x_1x_2} = \frac SP$
- **Công thức truy hồi:** đặt $S_n = x_1^n + x_2^n$ thì $S_{n+2} = S\cdot S_{n+1} - P\cdot S_n$.
  *Chứng minh:* $x_i^2 = Sx_i - P$; nhân với $x_i^n$ được $x_i^{n+2} = Sx_i^{n+1} - Px_i^n$; cộng với $i = 1, 2$.

**Biểu thức không đối xứng** (như $x_1^2 + 2x_2$): dùng chính phương trình để **hạ bậc**, $ax_1^2 = -bx_1 - c$, sau đó biểu thức thường trở nên đối xứng hoặc chỉ còn $x_1 - x_2$.

### 4. Dấu của các nghiệm và so sánh nghiệm với một số

| Yêu cầu | Điều kiện | Lý do |
|---|---|---|
| Hai nghiệm trái dấu | $P < 0$ | Khi đó tự động $\Delta > 0$ |
| Hai nghiệm cùng dấu | $\Delta \ge 0$, $P > 0$ | Tích dương thì cùng dấu |
| Hai nghiệm dương phân biệt | $\Delta > 0,\ S > 0,\ P > 0$ | Cùng dấu và tổng dương |
| Hai nghiệm âm phân biệt | $\Delta > 0,\ S < 0,\ P > 0$ | Cùng dấu và tổng âm |
| $x_1 < \alpha < x_2$ | $a\cdot f(\alpha) < 0$ | Xem dưới |

**Vì sao $x_1 < \alpha < x_2 \iff a\cdot f(\alpha) < 0$?** Vì $f(\alpha) = a(\alpha - x_1)(\alpha - x_2)$, nên $a\cdot f(\alpha) = a^2(\alpha - x_1)(\alpha - x_2)$. Biểu thức này âm khi và chỉ khi $\alpha$ nằm giữa hai nghiệm.
**Mẹo tổng quát:** muốn so sánh hai nghiệm với $\alpha$, đặt $t = x - \alpha$ rồi xét dấu các nghiệm $t_1, t_2$ của phương trình mới, dùng $(x_1 - \alpha)(x_2 - \alpha) = P - \alpha S + \alpha^2$ và $(x_1 - \alpha) + (x_2 - \alpha) = S - 2\alpha$.

### 5. Dấu của tam thức bậc hai (dùng cho bất đẳng thức)
- Nếu $a > 0$ và $\Delta < 0$ thì $ax^2 + bx + c > 0$ với mọi $x$ (từ dạng hoàn thành bình phương ở mục 1).
- Ngược lại, nếu $ax^2 + bx + c \ge 0$ với mọi $x$ (và $a > 0$) thì $\Delta \le 0$. Đây là một cách chứng minh **bất đẳng thức Cauchy-Schwarz** (xem Chủ đề 7).

### 6. Phương trình quy về bậc hai
- **Trùng phương** $ax^4 + bx^2 + c = 0$: đặt $t = x^2 \ge 0$. Mỗi nghiệm $t > 0$ cho hai nghiệm $x = \pm\sqrt t$; nghiệm $t = 0$ cho một nghiệm $x = 0$; nghiệm $t < 0$ bị loại. Do đó phương trình có 4 nghiệm phân biệt khi và chỉ khi phương trình theo $t$ có hai nghiệm **dương** phân biệt.
- **Hồi quy (đối xứng)** $ax^4 + bx^3 + cx^2 + bx + a = 0$: $x = 0$ không là nghiệm; chia cho $x^2$ và đặt $t = x + \frac1x$. Ta có $x^2 + \frac{1}{x^2} = t^2 - 2$ và **$\lvert t\rvert \ge 2$**, vì $t^2 - 4 = \left(x - \frac1x\right)^2 \ge 0$.
- **$(x+a)(x+b)(x+c)(x+d) = m$ với $a + d = b + c$:** nhóm $(x+a)(x+d) = x^2 + (a+d)x + ad$ và $(x+b)(x+c) = x^2 + (b+c)x + bc$; hai biểu thức có chung phần $x^2 + (a+d)x$ nên đặt ẩn phụ được.
- **Nghiệm chung của hai phương trình:** gọi $x_0$ là nghiệm chung, trừ vế theo vế để khử $x_0^2$, tìm $x_0$ theo tham số, rồi thay lại. Nhớ kiểm tra trường hợp hai phương trình trùng nhau.

### 7. Tương giao parabol $y = ax^2$ và đường thẳng $y = mx + n$
- Hoành độ giao điểm là nghiệm của $ax^2 - mx - n = 0$. Số giao điểm bằng số nghiệm của phương trình này; $\Delta = 0$ nghĩa là đường thẳng **tiếp xúc** với parabol.
- Tọa độ giao điểm: $A(x_1; ax_1^2)$, $B(x_2; ax_2^2)$; dùng Viète cho các đại lượng như độ dài $AB$, diện tích tam giác $OAB$, ...

---

## II. Bài tập vận dụng

**Bài 1.** Cho phương trình $x^2 - 2(m-1)x + m - 3 = 0$.
a) Chứng minh phương trình luôn có hai nghiệm phân biệt với mọi $m$.
b) Tìm $m$ để $x_1^2 + x_2^2$ đạt giá trị nhỏ nhất.
c) Tìm hệ thức liên hệ giữa $x_1, x_2$ không phụ thuộc $m$.

**Bài 2.** Cho phương trình $x^2 - 2mx + m^2 - m + 1 = 0$. Tìm $m$ để phương trình có hai nghiệm $x_1, x_2$ thỏa mãn $x_1^2 + 2mx_2 = 9$.

**Bài 3.** Tìm số nguyên $m$ để phương trình $x^2 - mx + m + 2 = 0$ có các nghiệm đều là số nguyên.

**Bài 4.** Cho phương trình $x^4 - 2(m+1)x^2 + 2m + 1 = 0$.
a) Tìm $m$ để phương trình có 4 nghiệm phân biệt.
b) Tìm $m$ để 4 nghiệm đó, khi sắp xếp tăng dần, lập thành cấp số cộng (các khoảng cách liên tiếp bằng nhau).

**Bài 5.** Giải phương trình $x^4 - 5x^3 + 6x^2 - 5x + 1 = 0$.

**Bài 6.** Giải phương trình $(x+1)(x+2)(x+3)(x+4) = 3$.

**Bài 7.** Tìm $m$ để hai phương trình $x^2 + mx + 1 = 0$ và $x^2 + x + m = 0$ có ít nhất một nghiệm chung.

**Bài 8.** Cho hai phương trình $x^2 + ax + b = 0$ và $x^2 + cx + d = 0$, trong đó $ac \ge 2(b+d)$. Chứng minh ít nhất một trong hai phương trình có nghiệm.

**Bài 9.** Cho parabol $(P): y = x^2$ và đường thẳng $(d): y = mx + 1$.
a) Chứng minh $(d)$ luôn cắt $(P)$ tại hai điểm phân biệt $A, B$.
b) Tìm $m$ để diện tích tam giác $OAB$ nhỏ nhất ($O$ là gốc tọa độ).

**Bài 10 (khó).** Cho $a, b, c$ là độ dài ba cạnh của một tam giác. Chứng minh phương trình $b^2x^2 + (b^2 + c^2 - a^2)x + c^2 = 0$ vô nghiệm.

---

## III. Lời giải chi tiết

### Bài 1
**a)** $\Delta' = (m-1)^2 - (m-3) = m^2 - 3m + 4 = \left(m - \frac32\right)^2 + \frac74 > 0$ với mọi $m$.

**b)** Theo Viète: $S = 2(m-1)$ và $P = m - 3$. Khi đó
$$x_1^2 + x_2^2 = S^2 - 2P = 4(m-1)^2 - 2(m-3) = 4m^2 - 10m + 10 = 4\left(m - \frac54\right)^2 + \frac{15}{4} \ge \frac{15}4.$$
Giá trị nhỏ nhất là $\frac{15}{4}$, đạt được khi $m = \frac54$.

**c)** Từ $P = m - 3$ suy ra $m = P + 3$. Thay vào $S = 2(m - 1) = 2(P + 2)$, ta được hệ thức
$$x_1 + x_2 - 2x_1x_2 = 4.$$

### Bài 2
Điều kiện có nghiệm: $\Delta' = m^2 - (m^2 - m + 1) = m - 1 \ge 0 \iff m \ge 1$.
Vì $x_1$ là nghiệm nên $x_1^2 = 2mx_1 - m^2 + m - 1$. Do đó
$$x_1^2 + 2mx_2 = 2m(x_1 + x_2) - m^2 + m - 1 = 2m\cdot 2m - m^2 + m - 1 = 3m^2 + m - 1.$$
Ta cần $3m^2 + m - 1 = 9 \iff 3m^2 + m - 10 = 0 \iff m = \frac53$ hoặc $m = -2$.
Kết hợp điều kiện $m \ge 1$: **$m = \frac53$**.

> **Kỹ thuật hạ bậc:** dùng chính phương trình để thay $x_1^2$, khi đó biểu thức không đối xứng trở thành đối xứng.

### Bài 3
Giả sử phương trình có hai nghiệm nguyên $x_1, x_2$. Theo Viète: $x_1 + x_2 = m$ và $x_1x_2 = m + 2$. Khử $m$:
$$x_1x_2 - x_1 - x_2 = 2 \iff (x_1 - 1)(x_2 - 1) = 3.$$
| $(x_1 - 1, x_2 - 1)$ | $(1,3)$ hoặc $(3,1)$ | $(-1,-3)$ hoặc $(-3,-1)$ |
|---|---|---|
| $\{x_1, x_2\}$ | $\{2, 4\}$ | $\{0, -2\}$ |
| $m = x_1 + x_2$ | 6 | $-2$ |

Thử lại: $m = 6$ cho $x^2 - 6x + 8 = 0$ với nghiệm 2, 4; $m = -2$ cho $x^2 + 2x = 0$ với nghiệm 0, $-2$.

**Đáp số:** $m \in \{6; -2\}$.

### Bài 4
**a)** Đặt $t = x^2 \ge 0$: $t^2 - 2(m+1)t + 2m + 1 = 0$. Vì $1 - 2(m+1) + 2m + 1 = 0$ nên phương trình có nghiệm $t_1 = 1$ và $t_2 = 2m + 1$.
Phương trình ban đầu có 4 nghiệm phân biệt khi và chỉ khi $t_2 > 0$ và $t_2 \ne 1$, tức là $m > -\frac12$ và $m \ne 0$.

**b)** Bốn nghiệm là $\pm1$ và $\pm a$ với $a = \sqrt{2m+1}$.
- Nếu $a > 1$: dãy $-a, -1, 1, a$. Cấp số cộng khi $a - 1 = 1 - (-1) = 2$, tức là $a = 3$. Khi đó $2m + 1 = 9$, nên $m = 4$.
- Nếu $0 < a < 1$: dãy $-1, -a, a, 1$. Cấp số cộng khi $1 - a = 2a$, tức là $a = \frac13$. Khi đó $2m + 1 = \frac19$, nên $m = -\frac49$.

**Đáp số:** $m = 4$ hoặc $m = -\frac49$.

### Bài 5
$x = 0$ không là nghiệm. Chia hai vế cho $x^2$:
$$\left(x^2 + \frac1{x^2}\right) - 5\left(x + \frac1x\right) + 6 = 0.$$
Đặt $t = x + \frac1x$, khi đó $x^2 + \frac{1}{x^2} = t^2 - 2$. Phương trình trở thành $t^2 - 5t + 4 = 0$, nên $t = 1$ hoặc $t = 4$.
- $t = 1$: $x^2 - x + 1 = 0$, vô nghiệm. (Cũng có thể thấy ngay vì $|t| \ge 2$.)
- $t = 4$: $x^2 - 4x + 1 = 0$, nên $x = 2 \pm \sqrt3$.

**Đáp số:** $x = 2 \pm\sqrt3$.

### Bài 6
$(x+1)(x+4)\cdot(x+2)(x+3) = (x^2 + 5x + 4)(x^2 + 5x + 6)$. Đặt $t = x^2 + 5x + 5$:
$$(t-1)(t+1) = 3 \iff t^2 = 4 \iff t = \pm 2.$$
- $t = 2$: $x^2 + 5x + 3 = 0$, nên $x = \frac{-5 \pm \sqrt{13}}{2}$.
- $t = -2$: $x^2 + 5x + 7 = 0$ có $\Delta = 25 - 28 < 0$, vô nghiệm.

**Đáp số:** $x = \frac{-5\pm\sqrt{13}}{2}$.

### Bài 7
Gọi $x_0$ là nghiệm chung. Trừ vế theo vế hai phương trình:
$$(m - 1)x_0 + (1 - m) = 0 \iff (m - 1)(x_0 - 1) = 0.$$
- $m = 1$: cả hai phương trình đều là $x^2 + x + 1 = 0$, vô nghiệm, nên loại.
- $x_0 = 1$: thay vào phương trình thứ nhất được $1 + m + 1 = 0$, tức là $m = -2$. Thử lại: $x^2 - 2x + 1 = 0$ và $x^2 + x - 2 = 0$ có chung nghiệm $x = 1$.

**Đáp số:** $m = -2$.

### Bài 8
$\Delta_1 + \Delta_2 = a^2 - 4b + c^2 - 4d = a^2 + c^2 - 4(b+d) \ge a^2 + c^2 - 2ac = (a-c)^2 \ge 0.$
Vậy ít nhất một trong hai số $\Delta_1, \Delta_2$ không âm, nên ít nhất một phương trình có nghiệm.

> **Kỹ thuật:** muốn chứng minh "ít nhất một trong các phương trình có nghiệm", hãy chứng minh **tổng** (hoặc tổng có trọng số) các $\Delta$ không âm.

### Bài 9
**a)** Phương trình hoành độ giao điểm $x^2 - mx - 1 = 0$ có $ac = -1 < 0$, nên luôn có hai nghiệm trái dấu $x_1 < 0 < x_2$. Vậy $(d)$ luôn cắt $(P)$ tại hai điểm phân biệt.

**b)** Đường thẳng $(d)$ cắt trục $Oy$ tại $I(0;1)$, với $OI = 1$. Vì $A, B$ nằm hai bên trục $Oy$:
$$S_{OAB} = S_{OAI} + S_{OBI} = \frac12\cdot OI\cdot(|x_1| + |x_2|) = \frac12|x_1 - x_2| = \frac12\sqrt{(x_1+x_2)^2 - 4x_1x_2} = \frac12\sqrt{m^2 + 4} \ge 1.$$
Diện tích nhỏ nhất bằng 1, đạt được khi $m = 0$.

### Bài 10
$\Delta = (b^2 + c^2 - a^2)^2 - 4b^2c^2 = (b^2 + c^2 - a^2 - 2bc)(b^2 + c^2 - a^2 + 2bc)$
$= \left[(b-c)^2 - a^2\right]\left[(b+c)^2 - a^2\right] = (b - c - a)(b - c + a)(b + c - a)(b + c + a).$

Theo bất đẳng thức tam giác: $b - c - a < 0$, còn $b - c + a > 0$, $b + c - a > 0$, $a + b + c > 0$. Do đó $\Delta < 0$ và phương trình vô nghiệm.
