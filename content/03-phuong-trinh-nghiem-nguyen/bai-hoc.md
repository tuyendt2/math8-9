# Chủ đề 3. Phương trình nghiệm nguyên (phương trình Diophantine)

## I. Kiến thức cần nắm

Giải phương trình nghiệm nguyên là tìm **tất cả** bộ số nguyên thỏa mãn phương trình. Không có một thuật toán chung cho mọi phương trình. Ý tưởng xuyên suốt là: **dùng tính chất của số nguyên để thu hẹp các khả năng về hữu hạn trường hợp**, hoặc chỉ ra mâu thuẫn. Các tính chất của số nguyên được dùng nhiều nhất:
- giữa hai số nguyên liên tiếp không có số nguyên nào;
- ước của một số khác 0 chỉ có hữu hạn;
- một tập số tự nhiên khác rỗng luôn có phần tử nhỏ nhất.

### 1. Phương pháp đưa về phương trình ước số (dạng tích)
Biến đổi về dạng $A\cdot B = c$, trong đó $A, B$ là biểu thức nguyên và $c$ là hằng số khác 0.
**Vì sao hiệu quả?** $A$ phải là ước của $c$ (tính chất T3 ở Chủ đề 2), mà $c$ chỉ có hữu hạn ước. Ta chỉ cần lập bảng xét từng trường hợp.

**Mẹo 1: phương trình $axy + bx + cy = d$.** Nhân hai vế với $a$ rồi thêm $bc$:
$$a^2xy + abx + acy + bc = ad + bc \iff (ax + c)(ay + b) = ad + bc.$$
(Kiểm tra bằng cách khai triển vế trái.) Ví dụ: $xy - 2x - 3y = 1$ có $a = 1, b = -2, c = -3$, nên $(x - 3)(y - 2) = 1 + 6 = 7$.

**Mẹo 2: phương trình $x^2 + bx + c = y^2$.** Nhân với 4 rồi hoàn thành bình phương:
$$(2x + b)^2 - (2y)^2 = b^2 - 4c \iff (2x + b - 2y)(2x + b + 2y) = b^2 - 4c.$$

**Mẹo giảm số trường hợp:** hai thừa số $u = 2x + b - 2y$ và $v = 2x + b + 2y$ có tổng $u + v = 2(2x + b)$ chẵn, nên $u, v$ **cùng tính chẵn lẻ**. Chỉ cần xét các cặp ước cùng tính chẵn lẻ.

### 2. Phương pháp xét số dư (modulo)
**Vì sao đúng?** Nếu hai số nguyên bằng nhau thì chúng có cùng số dư khi chia cho bất kỳ $m$ nào. Vì vậy nếu tìm được $m$ để hai vế **luôn** có số dư khác nhau thì phương trình vô nghiệm.

**Chọn modulo nào?** Chọn $m$ sao cho các lũy thừa trong phương trình chỉ có ít số dư:

| Lũy thừa | Modulo nên thử | Các số dư |
|---|---|---|
| $x^2$ | 3; 4; 8 | $\{0,1\}$; $\{0,1\}$; $\{0,1,4\}$ |
| $x^3$ | 7; 9 | $\{0, \pm1\}$; $\{0, \pm1\}$ |
| $x^4$ | 16 | $\{0, 1\}$ |
| $2^x$, $3^x$ | 3; 4; 7; 8 | Tuần hoàn theo $x$ |

*Chứng minh $x^3 \equiv 0, \pm1 \pmod 9$:* $x = 3k$ cho $x^3 = 27k^3 \equiv 0$; $x = 3k \pm 1$ cho $x^3 = 27k^3 \pm 27k^2 + 9k \pm 1 \equiv \pm 1 \pmod 9$.
*Hệ quả:* tổng ba lập phương chỉ có thể đồng dư $0, \pm1, \pm2, \pm3 \pmod 9$, nên phương trình $x^3 + y^3 + z^3 = n$ vô nghiệm nguyên khi $n \equiv \pm 4 \pmod 9$.

### 3. Phương pháp kẹp giữa hai lũy thừa liên tiếp
**Vì sao đúng?** Không có số nguyên nào nằm **giữa** $X$ và $X + 1$, nên không có số chính phương nào nằm giữa $X^2$ và $(X+1)^2$ (với $X \ge 0$). Tổng quát: nếu $X^n < Y^n < (X + 2)^n$ thì $Y = X + 1$.

**Cách tìm hai số kẹp:** hoàn thành bình phương phần bậc cao nhất của vế đa thức.
*Ví dụ:* với $x > 0$, phương trình $y^2 = x^2 + x + 1$ vô nghiệm vì $x^2 < x^2 + x + 1 < x^2 + 2x + 1 = (x+1)^2$.
Với đa thức bậc 4 như $y^2 = x^4 + x^3 + \dots$, nhân 4 rồi so sánh với $(2x^2 + x + k)^2$ cho vài giá trị $k$ (xem Bài 10).

### 4. Phương pháp sắp thứ tự (với phương trình đối xứng)
**Vì sao được giả sử $x \le y \le z$?** Khi phương trình không đổi lúc hoán vị các ẩn, mỗi nghiệm sắp lại theo thứ tự tăng dần vẫn là nghiệm. Ta tìm các nghiệm có thứ tự rồi **liệt kê thêm các hoán vị** (đừng quên bước này).
Giả thiết thứ tự cho phép chặn biến nhỏ nhất. Ví dụ từ $\frac1x + \frac1y + \frac1z = 1$ và $x \le y \le z$ suy ra $1 \le \frac3x$, tức là $x \le 3$.

### 5. Phương pháp dùng biệt thức $\Delta$
Coi phương trình là phương trình bậc hai theo một ẩn, chẳng hạn $x$.
- **Điều kiện cần thứ nhất: $\Delta \ge 0$.** Thường cho một bất phương trình bậc hai theo ẩn còn lại, nên chặn được ẩn đó trong một đoạn.
- **Điều kiện cần thứ hai: $\Delta$ là số chính phương.** *Vì sao?* Nghiệm $x = \frac{-b \pm\sqrt\Delta}{2a}$ nguyên thì $\sqrt\Delta = \pm(2ax + b)$ là số nguyên.

### 6. Phương pháp lùi vô hạn (xuống thang)
**Nguyên lý:** mọi tập số tự nhiên khác rỗng đều có phần tử nhỏ nhất. Giả sử phương trình có nghiệm khác 0, xét nghiệm có $\lvert x\rvert$ (hoặc $\lvert x\rvert + \lvert y\rvert + \lvert z\rvert$) **nhỏ nhất**. Nếu từ nghiệm đó suy ra được một nghiệm khác 0 **nhỏ hơn thực sự** (ví dụ $\left(\frac x3, \frac y3, \frac z3\right)$) thì mâu thuẫn. Vậy chỉ có nghiệm tầm thường.
Dấu hiệu nhận biết: phương trình **thuần nhất** (mọi số hạng cùng bậc), như $x^2 + y^2 = 3z^2$ hoặc $x^3 + 2y^3 = 4z^3$.

### 7. Tích hai số nguyên liên tiếp
$t(t + 1)$ là số chính phương khi và chỉ khi $t = 0$ hoặc $t = -1$.
*Chứng minh:* nếu $t \ge 1$ thì $t^2 < t^2 + t < (t + 1)^2$. Nếu $t \le -2$, đặt $s = -t \ge 2$ thì $t(t+1) = s(s - 1)$ và $(s-1)^2 < s^2 - s < s^2$. Trong cả hai trường hợp, $t(t+1)$ bị kẹp giữa hai số chính phương liên tiếp.

### 8. Phương trình bậc nhất hai ẩn $ax + by = c$
- **Có nghiệm nguyên khi và chỉ khi $d = \gcd(a, b)$ chia hết $c$.** *Vì sao?* Nếu có nghiệm thì $d \mid ax + by = c$. Ngược lại, theo đẳng thức Bézout có $ax_0 + by_0 = d$; nhân với $\frac cd$ được một nghiệm.
- **Nghiệm tổng quát:** nếu $(x_0; y_0)$ là một nghiệm thì mọi nghiệm có dạng
  $$x = x_0 + \frac bd t, \quad y = y_0 - \frac ad t \quad (t \in \mathbb Z).$$
  *Gợi ý:* trừ hai đẳng thức $ax + by = c$ và $ax_0 + by_0 = c$ được $a(x - x_0) = -b(y - y_0)$, rồi dùng bổ đề Euclid.
- *Ví dụ:* $5x + 7y = 112$ có nghiệm $(21; 1)$, nên mọi nghiệm là $x = 21 - 7t$, $y = 1 + 5t$. Nghiệm nguyên dương ứng với $t = 0, 1, 2$: $(21;1), (14;6), (7;11)$.

### 9. Lưu ý khi trình bày
- Đọc kỹ đề: nghiệm **nguyên**, **nguyên dương** hay **tự nhiên**.
- Mọi bước "suy ra" đều là điều kiện cần, nên luôn **thử lại** nghiệm tìm được.
- Khi đổi biến (như $u = 2x + 1$), nhớ điều kiện của biến mới (ví dụ $u$ lẻ).

---

## II. Bài tập vận dụng

**Bài 1.** Tìm nghiệm nguyên của phương trình $xy - 2x - 3y = 1$.

**Bài 2.** Chứng minh phương trình $x^2 - y^2 = 2026$ không có nghiệm nguyên.

**Bài 3.** Tìm nghiệm nguyên dương của phương trình $\frac1x + \frac1y + \frac1z = 1$.

**Bài 4.** Tìm nghiệm nguyên của phương trình $x^2 + x + 6 = y^2$.

**Bài 5.** Chứng minh phương trình $x^2 + y^2 + z^2 = 2031$ không có nghiệm nguyên.

**Bài 6.** Tìm nghiệm nguyên của phương trình $x^2 + 2y^2 + 2xy + 3y - 4 = 0$.

**Bài 7.** Tìm nghiệm nguyên của phương trình $x^2 + xy + y^2 = x^2y^2$.

**Bài 8.** Tìm các số tự nhiên $x$ và số nguyên $y$ thỏa mãn $2^x + 3 = y^2$.

**Bài 9.** Chứng minh phương trình $x^2 + y^2 = 3z^2$ chỉ có nghiệm nguyên $x = y = z = 0$.

**Bài 10 (khó).** Tìm nghiệm nguyên của phương trình $y^2 = x^4 + x^3 + x^2 + x + 1$.

**Bài 11 (khó).** Tìm nghiệm nguyên dương của phương trình $x^3 - y^3 = xy + 61$.

---

## III. Lời giải chi tiết

### Bài 1
$xy - 2x - 3y = 1 \iff xy - 2x - 3y + 6 = 7 \iff (x-3)(y-2) = 7.$

Các ước của 7 là $\pm1, \pm7$:

| $x - 3$ | 1 | 7 | $-1$ | $-7$ |
|---|---|---|---|---|
| $y - 2$ | 7 | 1 | $-7$ | $-1$ |
| $(x, y)$ | $(4, 9)$ | $(10, 3)$ | $(2, -5)$ | $(-4, 1)$ |

### Bài 2
Bình phương một số nguyên chia 4 dư 0 hoặc 1, nên $x^2 - y^2 \equiv 0, 1, 3 \pmod 4$.
Mà $2026 = 4\cdot 506 + 2 \equiv 2 \pmod 4$. Vậy phương trình vô nghiệm.

> Tổng quát: một số nguyên biểu diễn được dưới dạng hiệu hai bình phương khi và chỉ khi nó không có dạng $4k + 2$.

### Bài 3
Do vai trò của $x, y, z$ như nhau, giả sử $x \le y \le z$. Khi đó $1 = \frac1x + \frac1y + \frac1z \le \frac3x$, nên $x \le 3$. Ngoài ra $x \ge 2$ (nếu $x = 1$ thì $\frac1y + \frac1z = 0$, vô lý).

- **$x = 2$:** $\frac1y + \frac1z = \frac12$, suy ra $\frac12 \le \frac2y$, tức là $y \le 4$; ngoài ra $y > 2$.
  - $y = 3$ thì $z = 6$.
  - $y = 4$ thì $z = 4$.
- **$x = 3$:** $\frac1y+\frac1z = \frac23 \le \frac2y$, nên $y \le 3$, suy ra $y = 3$ và $z = 3$.

**Đáp số:** $(2,3,6)$, $(2,4,4)$, $(3,3,3)$ và các hoán vị của chúng (tổng cộng $6 + 3 + 1 = 10$ nghiệm).

### Bài 4
Nhân hai vế với 4: $4x^2 + 4x + 24 = 4y^2 \iff (2x+1)^2 + 23 = (2y)^2$, nên
$$(2y - 2x - 1)(2y + 2x + 1) = 23.$$
Đặt $u = 2y - 2x - 1$ và $v = 2y + 2x + 1$, khi đó $uv = 23$, $4y = u + v$ và $4x + 2 = v - u$.

| $(u, v)$ | $(1, 23)$ | $(23, 1)$ | $(-1, -23)$ | $(-23, -1)$ |
|---|---|---|---|---|
| $y$ | 6 | 6 | $-6$ | $-6$ |
| $x$ | 5 | $-6$ | $-6$ | 5 |

**Đáp số:** $(x,y) \in \{(5, 6), (5, -6), (-6, 6), (-6, -6)\}$. Thử lại: $25 + 5 + 6 = 36$ và $36 - 6 + 6 = 36$, đúng.

### Bài 5
Bình phương một số nguyên chia 8 dư 0, 1 hoặc 4. Tổng ba số trong tập $\{0,1,4\}$ chỉ có thể nhận các giá trị $0,1,2,3,4,5,6,9,12$, tức là đồng dư với $0,1,2,3,4,5,6 \pmod 8$, **không bao giờ đồng dư 7**.
Mà $2031 = 8\cdot 253 + 7 \equiv 7 \pmod 8$. Vậy phương trình vô nghiệm.

### Bài 6
Coi phương trình là phương trình bậc hai ẩn $x$: $x^2 + 2y\,x + (2y^2 + 3y - 4) = 0$.
$$\Delta' = y^2 - (2y^2 + 3y - 4) = -y^2 - 3y + 4 = -(y-1)(y+4).$$
Phương trình có nghiệm khi $\Delta' \ge 0 \iff -4 \le y \le 1$. Xét từng giá trị:

| $y$ | $-4$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ |
|---|---|---|---|---|---|---|
| $\Delta'$ | 0 | 4 | 6 | 6 | 4 | 0 |
| $x = -y \pm \sqrt{\Delta'}$ | 4 | 5; 1 | loại | loại | 2; $-2$ | $-1$ |

**Đáp số:** $(4,-4), (5,-3), (1,-3), (2,0), (-2,0), (-1,1)$.

### Bài 7
Cộng $xy$ vào hai vế: $(x+y)^2 = x^2y^2 + xy = xy(xy+1)$.
Đặt $t = xy$. Khi đó $t(t+1)$ là số chính phương.
- Nếu $t \ge 1$: $t^2 < t^2 + t < (t+1)^2$, nên $t(t+1)$ không là số chính phương.
- Nếu $t \le -2$: đặt $s = -t \ge 2$, ta có $t(t+1) = s(s-1)$ và $(s-1)^2 < s^2 - s < s^2$ (vì $s > 1$), cũng không là số chính phương.

Vậy $t \in \{0, -1\}$, và khi đó $(x+y)^2 = 0$, tức là $y = -x$.
- $t = 0$: $-x^2 = 0$, nên $x = y = 0$.
- $t = -1$: $-x^2 = -1$, nên $x = \pm1$.

**Đáp số:** $(0,0), (1,-1), (-1,1)$.

### Bài 8
- $x = 0$: $y^2 = 4$, nên $y = \pm 2$.
- $x = 1$: $y^2 = 5$, loại.
- $x \ge 2$: $2^x \equiv 0 \pmod 4$ nên $y^2 \equiv 3 \pmod 4$, vô lý.

**Đáp số:** $(x, y) = (0, 2), (0, -2)$.

### Bài 9
Giả sử $(x,y,z)$ là nghiệm khác $(0,0,0)$. Vì $3 \mid x^2 + y^2$ nên theo Bài 9 của Chủ đề 2, $3 \mid x$ và $3 \mid y$. Đặt $x = 3x_1$, $y = 3y_1$, ta được $9(x_1^2 + y_1^2) = 3z^2$, tức là $z^2 = 3(x_1^2+y_1^2)$. Suy ra $3 \mid z$; đặt $z = 3z_1$ thì $x_1^2 + y_1^2 = 3z_1^2$.

Như vậy $\left(\frac x3, \frac y3, \frac z3\right)$ cũng là nghiệm. Lặp lại, $x, y, z$ chia hết cho $3^k$ với mọi $k$, điều này chỉ xảy ra khi $x = y = z = 0$.

### Bài 10
Nhân hai vế với 4: $(2y)^2 = 4x^4 + 4x^3 + 4x^2 + 4x + 4$. Ta so sánh vế phải với các bình phương "gần" nó:
- $(2x^2 + x)^2 = 4x^4 + 4x^3 + x^2$, nên $(2y)^2 - (2x^2+x)^2 = 3x^2 + 4x + 4 > 0$ (biệt thức âm).
- $(2x^2 + x + 2)^2 = 4x^4 + 4x^3 + 9x^2 + 4x + 4$, nên $(2x^2+x+2)^2 - (2y)^2 = 5x^2 \ge 0$.

Do đó $(2x^2+x)^2 < (2y)^2 \le (2x^2+x+2)^2$. Lưu ý $2x^2 + x + 2 > 0$ và $2x^2+x \ge 0$ với mọi số nguyên $x$, nên $|2y| = 2x^2 + x + 1$ hoặc $|2y| = 2x^2 + x + 2$.

- **$|2y| = 2x^2+x+2$:** cần $5x^2 = 0$, nên $x = 0$ và $y = \pm 1$.
- **$|2y| = 2x^2 + x + 1$:** $(2x^2+x+1)^2 = 4x^4 + 4x^3 + 5x^2 + 2x + 1$. Cho bằng $4x^4+4x^3+4x^2+4x+4$:
  $x^2 - 2x - 3 = 0 \iff x = 3$ hoặc $x = -1$.
  - $x = 3$: $y^2 = 81+27+9+3+1 = 121$, nên $y = \pm 11$.
  - $x = -1$: $y^2 = 1$, nên $y = \pm 1$.

**Đáp số:** $(0, \pm1), (-1, \pm1), (3, \pm 11)$.

### Bài 11
Vì $x, y$ nguyên dương nên vế phải dương, suy ra $x > y$. Đặt $d = x - y \ge 1$:
$$x^3 - y^3 = d(x^2 + xy + y^2) = xy + 61.$$
- **Nếu $d \ge 2$:** từ $d(x^2+xy+y^2) = xy + 61$ suy ra $2(x^2+xy+y^2) \le xy + 61$, tức là $2x^2 + xy + 2y^2 \le 61$, với $x \ge y + 2$.
  - $y = 1$: $2x^2 + x \le 59$ và $x \ge 3$, nên $x \in \{3, 4, 5\}$.
  - $y = 2$: $2x^2 + 2x + 8 \le 61$ và $x \ge 4$, nên $x = 4$.
  - $y \ge 3$: $x \ge 5$, nên $2x^2+xy+2y^2 \ge 50 + 15 + 18 = 83 > 61$, loại.

  Kiểm tra $x^3 - y^3$ so với $xy + 61$: $(3,1)$: $26 \ne 64$; $(4,1)$: $63 \ne 65$; $(5,1)$: $124 \ne 66$; $(4,2)$: $56 \ne 69$. Không có nghiệm.
- Nếu $d = 1$, tức là $x = y + 1$: $(y+1)^2 + (y+1)y + y^2 = (y+1)y + 61 \iff (y+1)^2 + y^2 = 61 \iff 2y^2 + 2y - 60 = 0 \iff y^2 + y - 30 = 0 \iff y = 5$ (loại $y=-6$).
  Khi đó $x = 6$. Thử lại: $216 - 125 = 91 = 30 + 61$, đúng.

**Đáp số:** $(x,y) = (6,5)$.
