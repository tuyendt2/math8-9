# Gợi ý từng tầng: Số học

## Bài 1 | 2
**Ý tưởng:** Phân tích $n(n-1)(n+1)(n^2+1)$; tách $n^2 + 1 = (n^2 - 4) + 5$ để có tích 5 số liên tiếp.

### Gợi ý 1
$30 = 5\cdot 6$ với $\gcd(5, 6) = 1$. Phân tích $n^5 - n$ thành nhân tử và chứng minh lần lượt chia hết cho 6 và cho 5.

### Gợi ý 2
Chia hết cho 6: có tích $(n-1)n(n+1)$. Chia hết cho 5: viết $n^5 - n = (n-2)(n-1)n(n+1)(n+2) + 5(n-1)n(n+1)$.

## Bài 2 | 1
**Ý tưởng:** $9 \equiv 2 \pmod 7$ nên $3^{2n+1} = 3\cdot 9^n \equiv 3\cdot 2^n$.

### Gợi ý 1
Viết $3^{2n+1} = 3\cdot 9^n$ và $2^{n+2} = 4\cdot 2^n$. Số 9 đồng dư với số nào theo modulo 7?

### Gợi ý 2
$3^{2n+1} + 2^{n+2} \equiv 3\cdot 2^n + 4\cdot 2^n = 7\cdot 2^n \pmod 7$.

## Bài 3 | 1
**Ý tưởng:** $(p-1)(p+1)$: tích hai số chẵn liên tiếp chia hết cho 8, và một trong hai chia hết cho 3.

### Gợi ý 1
$24 = 3\cdot 8$. Phân tích $p^2 - 1$ và dùng việc $p$ lẻ, $p$ không chia hết cho 3.

### Gợi ý 2
Hai số chẵn liên tiếp $p - 1$, $p + 1$ có một số chia hết cho 4. Trong ba số liên tiếp $p - 1, p, p + 1$ có một số chia hết cho 3, nhưng không phải $p$.

## Bài 4 | 1
**Ý tưởng:** Xét modulo 3: nếu $p \ne 3$ thì $8p^2 + 1$ chia hết cho 3.

### Gợi ý 1
Thử vài giá trị $p = 2, 3, 5, 7$. Kết quả có điểm chung gì khi chia cho 3?

### Gợi ý 2
$p \ne 3$ thì $p^2 \equiv 1 \pmod 3$, nên $8p^2 + 1 \equiv 9 \equiv 0 \pmod 3$. Chỉ còn trường hợp $p = 3$.

## Bài 5 | 2
**Ý tưởng:** Sophie Germain: $n^4 + 4 = (n^2 - 2n + 2)(n^2 + 2n + 2)$.

### Gợi ý 1
Phân tích $n^4 + 4$ thành tích hai thừa số (thêm bớt $4n^2$).

### Gợi ý 2
Số nguyên tố chỉ là tích của 1 và chính nó, nên thừa số nhỏ $(n-1)^2 + 1$ phải bằng 1. Đừng quên xét $n = 0$.

## Bài 6 | 1
**Ý tưởng:** Gọi $d$ là ƯCLN, lấy tổ hợp $3(14n+3) - 2(21n+4) = 1$.

### Gợi ý 1
Gọi $d = \gcd(21n + 4, 14n + 3)$. $d$ chia hết mọi tổ hợp của hai số này. Tìm tổ hợp khử được $n$.

### Gợi ý 2
$3(14n + 3) - 2(21n + 4) = 1$, nên $d \mid 1$.

## Bài 7 | 2
**Ý tưởng:** $(n+1)^2 + 11 = k^2$ nên $(k - n - 1)(k + n + 1) = 11$.

### Gợi ý 1
Đặt $n^2 + 2n + 12 = k^2$ và đưa về hiệu hai bình phương bằng một hằng số.

### Gợi ý 2
$(k - n - 1)(k + n + 1) = 11$, với $11$ nguyên tố và thừa số sau lớn hơn. Vậy $k + n + 1 = 11$, $k - n - 1 = 1$.

## Bài 8 | 2
**Ý tưởng:** Tổng bằng $5(n^2 + 2)$; số chính phương chia hết cho 5 thì chia hết cho 25.

### Gợi ý 1
Gọi 5 số là $n - 2, \dots, n + 2$ (đối xứng quanh $n$) để tính tổng bình phương gọn hơn.

### Gợi ý 2
Tổng bằng $5(n^2 + 2)$. Nếu là số chính phương thì $5 \mid n^2 + 2$. Xét số dư của $n^2$ khi chia cho 5.

## Bài 9 | 1
**Ý tưởng:** Bình phương chia 3 chỉ dư 0 hoặc 1.

### Gợi ý 1
Liệt kê các số dư có thể của $a^2$ khi chia cho 3.

### Gợi ý 2
$a^2 + b^2 \equiv 0 \pmod 3$ với $a^2, b^2 \in \{0, 1\}$ chỉ xảy ra khi cả hai bằng 0.

## Bài 10 | 1
**Ý tưởng:** $7^4 = 2401 \equiv 1 \pmod{100}$.

### Gợi ý 1
Hai chữ số tận cùng là số dư khi chia cho 100. Tính vài lũy thừa đầu của 7 theo modulo 100.

### Gợi ý 2
$7^4 \equiv 1 \pmod{100}$ và $2026 = 4\cdot 506 + 2$, nên $7^{2026} \equiv 7^2 = 49$.

## Bài 11 | 3
**Ý tưởng:** Đặt $a = \underbrace{11\dots1}_{n}$, khi đó $10^n = 9a + 1$.

### Gợi ý 1
Biểu diễn cả hai số qua $a = \underbrace{11\dots1}_{n}$ và $10^n$.

### Gợi ý 2
$\underbrace{11\dots1}_{2n} = a\cdot 10^n + a = a(9a + 1) + a$ và $\underbrace{22\dots2}_{n} = 2a$. Hiệu bằng $9a^2$.

## Bài 12 | 2
**Ý tưởng:** $2 \equiv -1 \pmod 3$; $2^3 \equiv 1 \pmod 7$.

### Gợi ý 1
Phần 1: thay 2 bằng $-1$ theo modulo 3. Phần 2: tìm lũy thừa nhỏ nhất của 2 đồng dư 1 theo modulo 7.

### Gợi ý 2
Phần 1: $2^n + 1 \equiv (-1)^n + 1$. Phần 2: viết $n = 3q + r$, thì $2^n \equiv 2^r \pmod 7$; xét $r = 1, 2$.
