# Chủ đề 1. Biến đổi đại số: hằng đẳng thức, phân tích đa thức, phân thức

## I. Kiến thức cần nắm

> **Nguyên tắc chung:** mọi hằng đẳng thức đều suy ra từ **tính chất phân phối** $a(b + c) = ab + ac$ và quy tắc dấu. Vì vậy, nếu quên một công thức, luôn có thể **nhân ra để kiểm tra**, hoặc **thay số cụ thể** (ví dụ $a = 2$, $b = 1$) để phát hiện sai sót.

### 1. Bảy hằng đẳng thức đáng nhớ và vì sao chúng đúng

| # | Hằng đẳng thức | Chứng minh nhanh |
|---|---|---|
| 1 | $(a + b)^2 = a^2 + 2ab + b^2$ | $(a+b)(a+b) = a^2 + ab + ba + b^2$ |
| 2 | $(a - b)^2 = a^2 - 2ab + b^2$ | Thay $b$ bởi $-b$ trong (1) |
| 3 | $a^2 - b^2 = (a - b)(a + b)$ | Nhân ra: $a^2 + ab - ab - b^2$, hai số hạng giữa triệt tiêu |
| 4 | $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ | $(a+b)^2(a+b) = (a^2 + 2ab + b^2)(a + b)$ |
| 5 | $(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$ | Thay $b$ bởi $-b$ trong (4) |
| 6 | $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ | Nhân ra: $a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3$ |
| 7 | $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ | Thay $b$ bởi $-b$ trong (6) |

**Ý nghĩa hình học (giúp nhớ lâu):**
- $(a+b)^2$: hình vuông cạnh $a + b$ được chia thành một hình vuông $a^2$, một hình vuông $b^2$ và **hai** hình chữ nhật $a \times b$.
- $a^2 - b^2$: cắt hình vuông nhỏ cạnh $b$ ra khỏi hình vuông cạnh $a$; phần còn lại ghép được thành hình chữ nhật $(a - b)\times(a + b)$.

**Tam giác Pascal và hệ số của $(a + b)^n$.** Các hệ số của $(a+b)^n$ là hàng thứ $n$ của tam giác Pascal:
```
n = 0:          1
n = 1:        1   1
n = 2:      1   2   1
n = 3:    1   3   3   1
n = 4:  1   4   6   4   1
```
*Vì sao?* $(a+b)^{n+1} = (a+b)^n\cdot a + (a+b)^n\cdot b$. Hệ số của $a^{k}b^{n+1-k}$ là tổng của hai hệ số ở hàng trên, đúng như quy tắc "mỗi số bằng tổng hai số phía trên". Ví dụ $(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$.

### 2. Hằng đẳng thức mở rộng (kèm chứng minh)

**(a) Bình phương của tổng ba số**
$$(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca).$$
*Chứng minh:* coi $a + b$ là một số, áp dụng HĐT (1) hai lần: $\left[(a+b) + c\right]^2 = (a+b)^2 + 2(a+b)c + c^2$.
*Tổng quát:* bình phương của một tổng bằng tổng các bình phương cộng hai lần tổng các tích đôi một.

**(b) Tổng hai lập phương theo tổng và tích**
$$a^3 + b^3 = (a + b)^3 - 3ab(a + b).$$
*Chứng minh:* từ HĐT (4), $(a+b)^3 = a^3 + b^3 + 3ab(a + b)$.
Công thức này cho phép tính $a^3 + b^3$ khi chỉ biết $a + b$ và $ab$ (rất hay dùng với Viète).

**(c) Hằng đẳng thức "vàng" của ba số**
$$a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca).$$
*Chứng minh:* đặt $s = a + b$, dùng (b):
$$a^3 + b^3 + c^3 - 3abc = s^3 - 3abs + c^3 - 3abc = (s^3 + c^3) - 3ab(s + c)$$
$$= (s + c)(s^2 - sc + c^2) - 3ab(s + c) = (a + b + c)(s^2 - sc + c^2 - 3ab).$$
Khai triển $s^2 - sc + c^2 - 3ab = a^2 + 2ab + b^2 - ac - bc + c^2 - 3ab = a^2 + b^2 + c^2 - ab - bc - ca$.

Lại có $2(a^2 + b^2 + c^2 - ab - bc - ca) = (a-b)^2 + (b-c)^2 + (c-a)^2$, nên
$$a^3 + b^3 + c^3 - 3abc = \tfrac12(a+b+c)\left[(a-b)^2 + (b-c)^2 + (c-a)^2\right].$$
- **Hệ quả 1:** nếu $a + b + c = 0$ thì $a^3 + b^3 + c^3 = 3abc$.
- **Hệ quả 2:** nếu $a, b, c \ge 0$ thì $a^3 + b^3 + c^3 \ge 3abc$; đây chính là **bất đẳng thức AM-GM cho 3 số** (xem Chủ đề 7).

**(d) Lập phương của tổng ba số**
$$(a + b + c)^3 = a^3 + b^3 + c^3 + 3(a + b)(b + c)(c + a).$$
*Chứng minh:* đặt $s = a + b + c$. Dùng HĐT (7) và (6):
$s^3 - a^3 = (s - a)(s^2 + sa + a^2) = (b + c)(s^2 + sa + a^2)$ và $b^3 + c^3 = (b + c)(b^2 - bc + c^2)$. Do đó
$$s^3 - a^3 - b^3 - c^3 = (b + c)\left[s^2 + sa + a^2 - b^2 + bc - c^2\right].$$
Khai triển ngoặc vuông: $3a^2 + 3ab + 3ac + 3bc = 3(a + b)(a + c)$.

**(e) Tích $(a+b)(b+c)(c+a)$**
$$(a+b)(b+c)(c+a) = (a + b + c)(ab + bc + ca) - abc.$$
*Chứng minh gọn:* đặt $p = a + b + c$, khi đó $a + b = p - c$, ... và
$$(p - a)(p - b)(p - c) = p^3 - (a + b + c)p^2 + (ab + bc + ca)p - abc = p(ab + bc + ca) - abc.$$
(Bước khai triển $(p-a)(p-b)(p-c)$ giống hệt định lý Viète cho phương trình bậc ba.)

**(f) Hiệu hai lũy thừa cùng bậc**
$$a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \dots + ab^{n-2} + b^{n-1}).$$
*Chứng minh:* nhân ra, các số hạng **triệt tiêu dây chuyền**: $a\cdot a^{n-1} = a^n$, rồi $a\cdot a^{n-2}b$ triệt tiêu với $-b\cdot a^{n-1}$, ..., cuối cùng còn $-b\cdot b^{n-1} = -b^n$.
- **Hệ quả số học quan trọng:** với $a, b$ nguyên, $a - b$ luôn chia hết $a^n - b^n$. Ví dụ $7^{100} - 1$ chia hết cho $7 - 1 = 6$.
- **Với $n$ lẻ:** $a^n + b^n = a^n - (-b)^n$ chia hết cho $a - (-b) = a + b$. Ví dụ $2^{2025} + 3^{2025}$ chia hết cho 5.

**(g) Đẳng thức Sophie Germain**
$$a^4 + 4b^4 = (a^2 + 2b^2)^2 - (2ab)^2 = (a^2 - 2ab + 2b^2)(a^2 + 2ab + 2b^2).$$
*Ý tưởng:* thêm bớt $4a^2b^2$ để được hiệu hai bình phương.

**(h) Đẳng thức Lagrange** (nền tảng của bất đẳng thức Cauchy-Schwarz)
$$(a^2 + b^2)(c^2 + d^2) = (ac + bd)^2 + (ad - bc)^2.$$
*Gợi ý:* khai triển hai vế, mỗi vế đều bằng $a^2c^2 + a^2d^2 + b^2c^2 + b^2d^2$.

### 3. Các phương pháp phân tích đa thức thành nhân tử

| Phương pháp | Khi nào dùng |
|---|---|
| Đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử | Cơ bản, luôn thử trước |
| Tách hạng tử | Tam thức $ax^2 + bx + c$ |
| Thêm bớt hạng tử | $x^4 + 4$, $x^5 + x + 1$, $x^8 + x + 1$, ... |
| Đặt ẩn phụ | Biểu thức lặp lại, ví dụ $(x+1)(x+2)(x+3)(x+4)$ |
| Nhẩm nghiệm (định lý Bézout) | Đa thức bậc cao có nghiệm "đẹp" |
| Hệ số bất định | Đa thức bậc 4 không có nghiệm hữu tỉ |

**a) Tách hạng tử cho $ax^2 + bx + c$: vì sao cần $b_1b_2 = ac$?**
Ta muốn viết $ax^2 + b_1x + b_2x + c = x(ax + b_1) + (b_2x + c)$ và nhóm được nhân tử $ax + b_1$. Điều đó xảy ra khi $b_2x + c$ tỉ lệ với $ax + b_1$, tức là $\frac{b_2}{a} = \frac{c}{b_1}$, hay $b_1b_2 = ac$.
*Ví dụ:* $2x^2 - 7x + 3$: cần $b_1 + b_2 = -7$, $b_1b_2 = 6$, nên chọn $-1$ và $-6$:
$2x^2 - x - 6x + 3 = x(2x - 1) - 3(2x - 1) = (2x - 1)(x - 3)$.

**b) Thêm bớt: vì sao $x^{3m+1} + x^{3n+2} + 1$ luôn chia hết cho $x^2 + x + 1$?**
Vì $x^3 - 1 = (x - 1)(x^2 + x + 1)$, và theo (f), $x^{3m} - 1 = (x^3)^m - 1$ chia hết cho $x^3 - 1$, nên cũng chia hết cho $x^2 + x + 1$. Do đó
$$x^{3m+1} + x^{3n+2} + 1 = x(x^{3m} - 1) + x^2(x^{3n} - 1) + (x^2 + x + 1)$$
là tổng của các biểu thức chia hết cho $x^2 + x + 1$. Ví dụ: $x^5 + x + 1$ ($m = 0$, $n = 1$), $x^7 + x^2 + 1$, $x^8 + x + 1$.

**c) Nhẩm nghiệm: tìm nghiệm ở đâu?**
- **Định lý về nghiệm nguyên:** nếu đa thức hệ số nguyên $a_nx^n + \dots + a_1x + a_0$ có nghiệm nguyên $x_0 \ne 0$ thì $x_0$ là ước của $a_0$.
  *Chứng minh:* $a_nx_0^n + \dots + a_1x_0 = -a_0$, vế trái chia hết cho $x_0$.
- **Nghiệm hữu tỉ** $\frac pq$ (tối giản): $p \mid a_0$ và $q \mid a_n$.
- **Mẹo nhanh:** tổng các hệ số bằng 0 thì có nghiệm $x = 1$; tổng hệ số các bậc chẵn bằng tổng hệ số các bậc lẻ thì có nghiệm $x = -1$.

**d) Hệ số bất định: ví dụ.** Phân tích $x^4 - 6x^3 + 12x^2 - 14x + 3$ (không có nghiệm hữu tỉ: thử $\pm1, \pm3$ đều không được).
Đặt bằng $(x^2 + ax + b)(x^2 + cx + d)$ và so sánh hệ số: $a + c = -6$, $ac + b + d = 12$, $ad + bc = -14$, $bd = 3$.
Thử $b = 1$, $d = 3$: $ac = 8$, $3a + c = -14$, nên $a = -4$, $c = -2$ (thỏa mãn $ac = 8$).
Kết quả: $(x^2 - 4x + 1)(x^2 - 2x + 3)$.

### 4. Định lý Bézout và phép chia đa thức

**Định lý Bézout.** Số dư khi chia đa thức $f(x)$ cho $x - a$ bằng $f(a)$.

*Chứng minh:* $f(x) - f(a) = \sum a_k(x^k - a^k)$. Theo (f), mỗi $x^k - a^k$ chia hết cho $x - a$, nên $f(x) - f(a) = (x - a)q(x)$, tức là $f(x) = (x - a)q(x) + f(a)$.

**Hệ quả:**
- $f(a) = 0 \iff f(x)$ chia hết cho $x - a$. Đây là cơ sở của phương pháp nhẩm nghiệm.
- **Bậc của số dư nhỏ hơn bậc của số chia.** Khi chia cho đa thức bậc 2 thì số dư có dạng $ax + b$. Nếu số chia có hai nghiệm $x_1 \ne x_2$, thay lần lượt $x = x_1, x_2$ để tìm $a, b$.
- **Với đa thức hệ số nguyên:** $a - b$ chia hết $f(a) - f(b)$ với mọi số nguyên $a, b$. Ví dụ: không tồn tại đa thức hệ số nguyên có $f(1) = 2$ và $f(3) = 5$, vì $3 - 1 = 2$ không chia hết $5 - 2 = 3$.

### 5. Phân thức đại số và tính giá trị biểu thức

- **Điều kiện xác định:** mẫu khác 0. Khi rút gọn phải ghi rõ điều kiện, vì $\frac{x^2 - 1}{x - 1} = x + 1$ chỉ đúng khi $x \ne 1$.
- **Rút gọn:** phân tích tử và mẫu thành nhân tử rồi chia cả tử và mẫu cho nhân tử chung (khác 0).

**Kỹ thuật sai phân (khử liên tiếp)**
- Nguyên lý: $(u_1 - u_2) + (u_2 - u_3) + \dots + (u_n - u_{n+1}) = u_1 - u_{n+1}$.
- Muốn tính $\sum v_k$, ta tìm $u_k$ sao cho $v_k = u_k - u_{k+1}$:
  - $\frac{1}{k(k+1)} = \frac1k - \frac{1}{k+1}$ (quy đồng vế phải để kiểm tra);
  - tổng quát $\frac{1}{k(k+d)} = \frac1d\left(\frac1k - \frac{1}{k+d}\right)$;
  - $\frac{1}{k(k+1)(k+2)} = \frac12\left[\frac{1}{k(k+1)} - \frac{1}{(k+1)(k+2)}\right]$;
  - $\frac{1}{\sqrt k + \sqrt{k+1}} = \sqrt{k+1} - \sqrt k$.

**Biểu thức $S_n = x^n + \frac{1}{x^n}$.** Ta có $S_{n+1} = S_1S_n - S_{n-1}$.
*Chứng minh:* $\left(x + \frac1x\right)\left(x^n + \frac1{x^n}\right) = x^{n+1} + \frac{1}{x^{n+1}} + x^{n-1} + \frac{1}{x^{n-1}}$, tức là $S_1S_n = S_{n+1} + S_{n-1}$.
Ngoài ra $S_2 = S_1^2 - 2$ và $S_3 = S_1^3 - 3S_1$.

**Khai thác điều kiện có dạng đẳng thức.** Hai công cụ chính:
- Đưa về **tích bằng 0**: $AB = 0 \iff A = 0$ hoặc $B = 0$.
- Đưa về **tổng các bình phương bằng 0**: $A^2 + B^2 + C^2 = 0 \iff A = B = C = 0$.

*Ví dụ:* nếu $a^2 + b^2 + c^2 = ab + bc + ca$ thì $(a - b)^2 + (b - c)^2 + (c - a)^2 = 0$, suy ra $a = b = c$.

---

## II. Bài tập vận dụng

**Bài 1.** Phân tích thành nhân tử:
a) $x^4 + 4$; $\quad$ b) $x^5 + x + 1$; $\quad$ c) $(x+1)(x+2)(x+3)(x+4) - 24$.

**Bài 2.** Phân tích thành nhân tử: $A = a(b^2 - c^2) + b(c^2 - a^2) + c(a^2 - b^2)$.

**Bài 3.** Cho $a + b + c = 0$. Chứng minh:
a) $a^3 + b^3 + c^3 = 3abc$; từ đó tính $P = \frac{a^2}{bc} + \frac{b^2}{ca} + \frac{c^2}{ab}$ (với $abc \neq 0$).
b) $a^4 + b^4 + c^4 = \frac{(a^2+b^2+c^2)^2}{2}$.

**Bài 4.** Cho $a, b, c$ khác 0 thỏa mãn $\frac1a + \frac1b + \frac1c = \frac{1}{a+b+c}$. Chứng minh:
$$\frac{1}{a^{2025}} + \frac{1}{b^{2025}} + \frac{1}{c^{2025}} = \frac{1}{a^{2025} + b^{2025} + c^{2025}}.$$

**Bài 5.** Tính tổng $S_n = \frac{1}{1\cdot2\cdot3} + \frac{1}{2\cdot3\cdot4} + \dots + \frac{1}{n(n+1)(n+2)}$.

**Bài 6.** Cho $a, b, c$ đôi một khác nhau. Tính
$$P = \frac{a^2}{(a-b)(a-c)} + \frac{b^2}{(b-a)(b-c)} + \frac{c^2}{(c-a)(c-b)}.$$

**Bài 7.** Tìm đa thức dư khi chia $f(x) = x^{100} + x^{50} + x^2$ cho $x^2 - 3x + 2$.

**Bài 8.** Cho $x + \frac1x = 3$. Tính $x^5 + \frac{1}{x^5}$.

**Bài 9 (khó).** Cho $x, y, z$ thỏa mãn $x + y + z = 0$ và $x^2 + y^2 + z^2 = 1$. Tính $Q = x^4 + y^4 + z^4$.

**Bài 10 (khó).** Chứng minh rằng với mọi số nguyên $n$, biểu thức $n^4 + 2n^3 - n^2 - 2n$ chia hết cho 24.

---

## III. Lời giải chi tiết

### Bài 1
**a)** Thêm bớt $4x^2$ để có bình phương đúng:
$$x^4 + 4 = (x^4 + 4x^2 + 4) - 4x^2 = (x^2+2)^2 - (2x)^2 = (x^2 - 2x + 2)(x^2 + 2x + 2).$$

**b)** Thêm bớt $x^2$ để làm xuất hiện nhân tử $x^2+x+1$:
$$x^5 + x + 1 = x^5 - x^2 + (x^2 + x + 1) = x^2(x^3-1) + (x^2+x+1)$$
$$= x^2(x-1)(x^2+x+1) + (x^2+x+1) = (x^2+x+1)(x^3 - x^2 + 1).$$

> **Nhận xét:** Các đa thức dạng $x^{3m+1} + x^{3n+2} + 1$ (như $x^7+x^2+1$, $x^8+x+1$) đều chia hết cho $x^2+x+1$, vì nếu $\omega^2+\omega+1=0$ thì $\omega^3 = 1$.

**c)** Nhóm $(x+1)(x+4) = x^2+5x+4$ và $(x+2)(x+3) = x^2+5x+6$. Đặt $t = x^2 + 5x + 5$:
$$(t-1)(t+1) - 24 = t^2 - 25 = (t-5)(t+5) = (x^2+5x)(x^2+5x+10) = x(x+5)(x^2+5x+10).$$

### Bài 2
Viết $c^2 - a^2 = -(b^2 - c^2) - (a^2 - b^2)$, ta có
$$A = a(b^2-c^2) - b(b^2-c^2) - b(a^2-b^2) + c(a^2-b^2) = (b^2-c^2)(a-b) - (a^2-b^2)(b-c)$$
$$= (a-b)(b-c)\left[(b+c) - (a+b)\right] = (a-b)(b-c)(c-a).$$

> **Mẹo kiểm tra:** Thay $a = b$ thì $A = 0$, nên $A$ chứa nhân tử $(a-b)$. Tương tự với $(b-c)$ và $(c-a)$. Vì $A$ có bậc 3 nên $A = k(a-b)(b-c)(c-a)$. Thay một bộ số cụ thể sẽ được $k = 1$.

### Bài 3
**a)** Vì $c = -(a+b)$ nên
$$a^3 + b^3 + c^3 = (a+b)^3 - 3ab(a+b) - (a+b)^3 = -3ab(a+b) = 3abc.$$
Do đó $P = \frac{a^3+b^3+c^3}{abc} = \frac{3abc}{abc} = 3$.

**b)** Đặt $s = ab + bc + ca$. Từ $(a+b+c)^2 = 0$ suy ra $a^2+b^2+c^2 = -2s$.
Mặt khác $a^2b^2 + b^2c^2 + c^2a^2 = (ab+bc+ca)^2 - 2abc(a+b+c) = s^2$.
Do đó
$$a^4+b^4+c^4 = (a^2+b^2+c^2)^2 - 2(a^2b^2+b^2c^2+c^2a^2) = 4s^2 - 2s^2 = 2s^2.$$
Mà $\frac{(a^2+b^2+c^2)^2}{2} = \frac{4s^2}{2} = 2s^2$. Hai vế bằng nhau.

### Bài 4
Điều kiện tương đương với
$$\frac{ab+bc+ca}{abc} = \frac{1}{a+b+c} \iff (a+b+c)(ab+bc+ca) - abc = 0 \iff (a+b)(b+c)(c+a) = 0.$$
Không mất tổng quát, giả sử $a + b = 0$, tức là $b = -a$. Vì 2025 lẻ nên $b^{2025} = -a^{2025}$. Khi đó
- Vế trái $= \frac{1}{a^{2025}} - \frac{1}{a^{2025}} + \frac{1}{c^{2025}} = \frac{1}{c^{2025}}$.
- Vế phải $= \frac{1}{a^{2025} - a^{2025} + c^{2025}} = \frac{1}{c^{2025}}$.

Vậy đẳng thức được chứng minh.

### Bài 5
Ta có $\frac{1}{k(k+1)(k+2)} = \frac12\left[\frac{1}{k(k+1)} - \frac{1}{(k+1)(k+2)}\right]$, vì
$\frac{1}{k(k+1)} - \frac{1}{(k+1)(k+2)} = \frac{(k+2) - k}{k(k+1)(k+2)} = \frac{2}{k(k+1)(k+2)}$.

Cộng từ $k=1$ đến $k=n$, các số hạng ở giữa triệt tiêu:
$$S_n = \frac12\left[\frac{1}{1\cdot 2} - \frac{1}{(n+1)(n+2)}\right] = \frac{(n+1)(n+2) - 2}{4(n+1)(n+2)} = \frac{n(n+3)}{4(n+1)(n+2)}.$$
Thử lại với $n=1$: $\frac{1\cdot4}{4\cdot2\cdot3} = \frac16$, đúng.

### Bài 6
Đặt $D = (a-b)(b-c)(c-a)$. Ta có $(a-b)(a-c) = -(a-b)(c-a)$, nên
$\frac{a^2}{(a-b)(a-c)} = \frac{-a^2(b-c)}{D}$. Tương tự,
$\frac{b^2}{(b-a)(b-c)} = \frac{-b^2(c-a)}{D}$ và $\frac{c^2}{(c-a)(c-b)} = \frac{-c^2(a-b)}{D}$.

Suy ra $P = -\frac{a^2(b-c) + b^2(c-a) + c^2(a-b)}{D}$.

Tương tự Bài 2, ta có $a^2(b-c) + b^2(c-a) + c^2(a-b) = -(a-b)(b-c)(c-a) = -D$. Vậy $P = 1$.

> **Cách 2 (dùng đa thức):** Xét $g(x) = \frac{a^2(x-b)(x-c)}{(a-b)(a-c)} + \frac{b^2(x-a)(x-c)}{(b-a)(b-c)} + \frac{c^2(x-a)(x-b)}{(c-a)(c-b)} - x^2$. Đây là đa thức bậc không quá 2 nhưng có ba nghiệm phân biệt $a, b, c$, nên $g \equiv 0$. So sánh hệ số của $x^2$ ta được $P - 1 = 0$.

### Bài 7
Vì $x^2 - 3x + 2 = (x-1)(x-2)$ có bậc 2 nên số dư có dạng $ax + b$:
$$f(x) = (x-1)(x-2)q(x) + ax + b.$$
- Thay $x = 1$: $f(1) = 3 = a + b$.
- Thay $x = 2$: $f(2) = 2^{100} + 2^{50} + 4 = 2a + b$.

Giải hệ: $a = 2^{100} + 2^{50} + 1$ và $b = 2 - 2^{100} - 2^{50}$.

Vậy số dư là $(2^{100} + 2^{50} + 1)x + 2 - 2^{100} - 2^{50}$.

### Bài 8
Đặt $S_n = x^n + \frac{1}{x^n}$. Ta có $\left(x + \frac1x\right)\left(x^n + \frac1{x^n}\right) = x^{n+1} + \frac1{x^{n+1}} + x^{n-1} + \frac{1}{x^{n-1}}$, nên
$S_{n+1} = S_1 S_n - S_{n-1}$ với $S_0 = 2$ và $S_1 = 3$. Lần lượt tính được:
- $S_2 = 3\cdot 3 - 2 = 7$
- $S_3 = 3 \cdot 7 - 3 = 18$
- $S_4 = 3\cdot 18 - 7 = 47$
- $S_5 = 3\cdot 47 - 18 = 123$

Vậy $x^5 + \frac1{x^5} = 123$.

### Bài 9
Theo Bài 3b), với $x+y+z=0$ ta có $x^4+y^4+z^4 = \frac{(x^2+y^2+z^2)^2}{2} = \frac12$.

> Bài này cho thấy nên ghi nhớ các **hệ quả** của điều kiện $a+b+c=0$.

### Bài 10
$$n^4 + 2n^3 - n^2 - 2n = n^3(n+2) - n(n+2) = n(n+2)(n^2-1) = (n-1)n(n+1)(n+2).$$
Đây là tích của 4 số nguyên liên tiếp nên:
- Có một số chia hết cho 3, do đó tích chia hết cho 3.
- Có hai số chẵn liên tiếp, trong đó một số chia hết cho 4, do đó tích chia hết cho $2 \cdot 4 = 8$.

Vì $\gcd(3, 8) = 1$ nên tích chia hết cho 24.
