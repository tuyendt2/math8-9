# Thẻ ghi nhớ: Số học

## Chia hết

### Phép chia có dư $a = bq + r$: điều kiện của $r$?
$0 \le r < b$ (số dư không âm). Ví dụ $-7 = 3\cdot(-3) + 2$.

### Tính chất tổ hợp tuyến tính (T2)?
$a \mid b$ và $a \mid c$ thì $a \mid mb + nc$ với mọi số nguyên $m, n$. Đây là công cụ dùng nhiều nhất.

### Bổ đề Euclid?
$a \mid bc$ và $\gcd(a, b) = 1$ thì $a \mid c$.

### $m \mid a$, $n \mid a$ thì $mn \mid a$ khi nào?
Khi $\gcd(m, n) = 1$. Ví dụ $4 \mid 12$, $6 \mid 12$ nhưng $24 \nmid 12$. Muốn chia hết cho 24, chứng minh chia hết cho 3 **và** 8.

### Tích $k$ số nguyên liên tiếp chia hết cho?
$k!$. Ví dụ tích 3 số liên tiếp chia hết cho 6, tích 4 số liên tiếp chia hết cho 24.

### Dấu hiệu chia hết cho 9 và cho 11? Vì sao?
- Cho 9: tổng các chữ số, vì $10 \equiv 1 \pmod 9$.
- Cho 11: tổng đan dấu $a_0 - a_1 + a_2 - \dots$, vì $10 \equiv -1 \pmod{11}$.

### Dấu hiệu chia hết cho 8 và 125?
Ba chữ số tận cùng, vì $1000 = 8\cdot 125$.

## Đồng dư

### $a \equiv b \pmod m$ nghĩa là gì?
$m \mid a - b$, tương đương $a$ và $b$ có cùng số dư khi chia cho $m$.

### Phép nào **không** được làm tùy ý với đồng dư?
Chia hai vế. Chỉ chia cho $c$ khi $\gcd(c, m) = 1$. Ví dụ $2\cdot 3 \equiv 2\cdot 8 \pmod{10}$ nhưng $3 \not\equiv 8$.

### Tìm số dư của lũy thừa lớn như $2^{2026}$ chia cho 7?
Tìm $k$ nhỏ để $a^k \equiv \pm1$. Ở đây $2^3 \equiv 1 \pmod 7$, nên $2^{2026} = (2^3)^{675}\cdot 2 \equiv 2$.

### Định lý Fermat nhỏ?
$p$ nguyên tố, $p \nmid a$ thì $a^{p-1} \equiv 1 \pmod p$. Dạng khác: $a^p \equiv a \pmod p$ với mọi $a$.

## Số nguyên tố, ƯCLN

### Kiểm tra $n$ nguyên tố cần thử chia đến đâu? Vì sao?
Đến $\sqrt n$. Nếu $n = ab$ với $1 < a \le b$ thì $a^2 \le n$.

### Số nguyên tố $p > 3$ có dạng nào?
$6k \pm 1$, vì các dạng $6k$, $6k \pm 2$, $6k + 3$ đều chia hết cho 2 hoặc 3.

### Chứng minh có vô hạn số nguyên tố (Euclid)?
Giả sử chỉ có $p_1, \dots, p_k$. Số $p_1p_2\cdots p_k + 1$ chia mỗi $p_i$ dư 1, nên có ước nguyên tố mới. Mâu thuẫn.

### Số ước dương của $n = p_1^{\alpha_1}\cdots p_k^{\alpha_k}$?
$(\alpha_1 + 1)(\alpha_2 + 1)\cdots(\alpha_k + 1)$. Ví dụ $72 = 2^3\cdot 3^2$ có 12 ước.

### Vì sao $\gcd(a, b) = \gcd(a - kb, b)$?
Hai cặp số có cùng tập ước chung (theo T2). Đây là cơ sở của thuật toán Euclid.

### Đẳng thức Bézout?
Tồn tại số nguyên $x, y$ với $ax + by = \gcd(a, b)$. Tìm bằng cách chạy ngược thuật toán Euclid.

### Chứng minh phân số tối giản, ví dụ $\frac{21n+4}{14n+3}$?
Gọi $d$ là ƯCLN, tìm tổ hợp khử $n$: $3(14n + 3) - 2(21n + 4) = 1$, nên $d = 1$.

## Số chính phương

### Số dư của $n^2$ khi chia cho 3, 4, 5, 8?
- mod 3: 0, 1
- mod 4: 0, 1
- mod 5: 0, 1, 4
- mod 8: 0, 1, 4 (số lẻ bình phương $\equiv 1 \pmod 8$)

### Chữ số tận cùng của số chính phương?
0, 1, 4, 5, 6, 9. Không bao giờ là 2, 3, 7, 8.

### Chứng minh $N$ không chính phương bằng cách "kẹp"?
Chỉ ra $k^2 < N < (k + 1)^2$.

### $p$ nguyên tố và $p \mid n^2$ thì sao?
$p \mid n$, nên $p^2 \mid n^2$. Ví dụ số chính phương chia hết cho 3 thì chia hết cho 9.

### $ab$ chính phương, $\gcd(a, b) = 1$ thì sao?
$a$ và $b$ đều là số chính phương.

### Số nào có số lượng ước lẻ?
Đúng các số chính phương, vì ước ghép cặp $(d, \frac nd)$, chỉ $d = \sqrt n$ không có cặp.

## Chữ số tận cùng

### Chu kỳ chữ số tận cùng của lũy thừa $2^n, 3^n, 7^n, 8^n$?
Chu kỳ 4: $2, 4, 8, 6$; $3, 9, 7, 1$; $7, 9, 3, 1$; $8, 4, 2, 6$. Nên $a^{4k + r}$ và $a^r$ cùng chữ số tận cùng ($r \ge 1$).

### Hai chữ số tận cùng của lũy thừa 7?
$7^4 = 2401 \equiv 1 \pmod{100}$, nên chu kỳ 4: $07, 49, 43, 01$.

### Kỹ thuật cho số có chữ số lặp lại $\underbrace{11\dots1}_n$?
Đặt $a = \underbrace{11\dots1}_n$, khi đó $10^n = 9a + 1$.
