# Chủ đề 2. Số học: chia hết, đồng dư, số nguyên tố, số chính phương

## I. Kiến thức cần nắm

### 1. Phép chia có dư: nền tảng của số học

**Định lý.** Với mọi số nguyên $a$ và số nguyên dương $b$, tồn tại **duy nhất** cặp số nguyên $q, r$ sao cho
$$a = bq + r, \qquad 0 \le r < b.$$
$q$ gọi là thương, $r$ là số dư. Thực chất $q$ là số nguyên lớn nhất không vượt quá $\frac ab$.
- *Ví dụ:* $17 = 5\cdot 3 + 2$; với số âm: $-7 = 3\cdot(-3) + 2$ (số dư phải **không âm**, nên không viết $-7 = 3\cdot(-2) - 1$).
- *Vì sao duy nhất?* Nếu $bq + r = bq' + r'$ thì $b(q - q') = r' - r$. Vế phải có giá trị tuyệt đối nhỏ hơn $b$ nhưng chia hết cho $b$, nên bằng 0.

**Hệ quả: phương pháp chia trường hợp theo số dư.** Khi chia cho $m$, mọi số nguyên có **đúng một** trong $m$ dạng $mk, mk + 1, \dots, mk + (m - 1)$. Các dạng hay dùng:
- chia cho 2: $2k$ hoặc $2k + 1$ (chẵn, lẻ);
- chia cho 3: $3k$, $3k + 1$, $3k - 1$ (dùng $3k - 1$ thay cho $3k + 2$ để tính toán đối xứng hơn);
- chia cho 4: $4k$, $4k \pm 1$, $4k + 2$.

### 2. Quan hệ chia hết: các tính chất và vì sao đúng

**Định nghĩa.** $a \mid b$ (đọc là "$a$ chia hết $b$", hay "$b$ chia hết cho $a$") nếu tồn tại số nguyên $k$ sao cho $b = ka$. Khi đó $a$ là ước của $b$, $b$ là bội của $a$.

| Tính chất | Chứng minh nhanh |
|---|---|
| **(T1) Bắc cầu:** $a \mid b$ và $b \mid c$ thì $a \mid c$ | $b = ka$, $c = lb = (kl)a$ |
| **(T2) Tổ hợp tuyến tính:** $a \mid b$ và $a \mid c$ thì $a \mid mb + nc$ | $mb + nc = (mk + nl)a$ |
| **(T3)** $a \mid b$ và $b \ne 0$ thì $\lvert a\rvert \le \lvert b\rvert$ | $\lvert b\rvert = \lvert k\rvert\cdot\lvert a\rvert$ với $\lvert k\rvert \ge 1$ |
| **(T4) Bổ đề Euclid:** $a \mid bc$ và $\gcd(a, b) = 1$ thì $a \mid c$ | Xem dưới |
| **(T5)** $m \mid a$, $n \mid a$, $\gcd(m, n) = 1$ thì $mn \mid a$ | Xem dưới |
| **(T6)** Tích $k$ số nguyên liên tiếp chia hết cho $k!$ | Xem dưới |

- **(T2) là công cụ dùng nhiều nhất:** nếu $d$ chia hết hai số thì $d$ chia hết tổng, hiệu và mọi tổ hợp của chúng. Đây là ý tưởng của bài "chứng minh phân số tối giản" và của thuật toán Euclid.
- **(T3)** dùng để chặn: nếu $a \mid b$ và $0 < b < a$ thì vô lý.
- **(T4) Chứng minh:** vì $\gcd(a, b) = 1$, theo đẳng thức Bézout (mục 5) có $x, y$ nguyên với $ax + by = 1$. Nhân với $c$: $c = acx + bcy$. Cả hai số hạng đều chia hết cho $a$, nên $a \mid c$.
- **(T5) Chứng minh:** $a = mk$. Vì $n \mid mk$ và $\gcd(n, m) = 1$, theo (T4) $n \mid k$, tức là $k = nl$ và $a = mnl$.
  > **Cảnh báo:** điều kiện nguyên tố cùng nhau là bắt buộc. Ví dụ $4 \mid 12$ và $6 \mid 12$ nhưng $24 \nmid 12$. Vì vậy muốn chứng minh chia hết cho 24 ta chứng minh chia hết cho 3 **và** 8, chứ không phải cho 4 và 6.
- **(T6) Chứng minh cho các trường hợp hay gặp:**
  - $k = 2$: trong hai số liên tiếp có một số chẵn.
  - $k = 3$: trong ba số liên tiếp có một số chia hết cho 3 và ít nhất một số chẵn, nên tích chia hết cho 6.
  - $k = 4$: có một số chia hết cho 4 và một số chẵn khác, nên tích chia hết cho 8; lại có một số chia hết cho 3; vậy chia hết cho 24.
  - Trường hợp tổng quát: $\frac{(n+1)(n+2)\cdots(n+k)}{k!} = C_{n+k}^k$ là số cách chọn $k$ phần tử từ $n + k$ phần tử, nên là số nguyên (xem Chủ đề 10).

**Dấu hiệu chia hết và vì sao đúng.** Viết $N = \overline{a_m\dots a_1a_0} = a_m10^m + \dots + a_1\cdot 10 + a_0$.
| Chia hết cho | Dấu hiệu | Lý do |
|---|---|---|
| 2, 5, 10 | Chữ số tận cùng | $10 = 2\cdot 5$ nên $N - a_0$ chia hết cho 10 |
| 4, 25 | Hai chữ số tận cùng | $100 = 4\cdot 25$ |
| 8, 125 | Ba chữ số tận cùng | $1000 = 8\cdot 125$ |
| 3, 9 | Tổng các chữ số | $10 \equiv 1 \pmod 9$ nên $10^k \equiv 1$, do đó $N \equiv a_m + \dots + a_0 \pmod 9$ |
| 11 | Tổng đan dấu $a_0 - a_1 + a_2 - \dots$ | $10 \equiv -1 \pmod{11}$ nên $10^k \equiv (-1)^k$ |

### 3. Đồng dư thức

**Định nghĩa.** $a \equiv b \pmod m$ nếu $m \mid a - b$. Điều này **tương đương** với việc $a$ và $b$ có **cùng số dư** khi chia cho $m$.
*Vì sao?* Nếu $a = mq_1 + r_1$, $b = mq_2 + r_2$ thì $a - b \equiv r_1 - r_2$, mà $\lvert r_1 - r_2\rvert < m$, nên $m \mid a - b \iff r_1 = r_2$.

**Các phép toán được phép.** Nếu $a \equiv b$ và $c \equiv d \pmod m$ thì:
- $a + c \equiv b + d$, $\quad a - c \equiv b - d$;
- $ac \equiv bd$. *Chứng minh:* $ac - bd = a(c - d) + d(a - b)$, cả hai số hạng chia hết cho $m$;
- $a^n \equiv b^n$ với mọi $n$ tự nhiên (nhân nhiều lần, hoặc dùng $a - b \mid a^n - b^n$).

> **Cảnh báo: không được chia tùy tiện.** $2\cdot 3 \equiv 2\cdot 8 \pmod{10}$ nhưng $3 \not\equiv 8 \pmod{10}$. Chỉ được chia hai vế cho $c$ khi $\gcd(c, m) = 1$ (theo T4).

**Kỹ thuật tìm số dư của lũy thừa lớn:** tìm số mũ nhỏ $k$ sao cho $a^k \equiv \pm 1 \pmod m$, rồi chia số mũ cho $k$.
*Ví dụ:* $2^3 = 8 \equiv 1 \pmod 7$, nên $2^{2026} = (2^3)^{675}\cdot 2 \equiv 2 \pmod 7$.

**Định lý Fermat nhỏ.** Nếu $p$ là số nguyên tố và $p \nmid a$ thì $a^{p-1} \equiv 1 \pmod p$.
> *Gợi ý chứng minh (nâng cao):* xét $p - 1$ số $a, 2a, \dots, (p-1)a$. Chúng có số dư đôi một khác nhau khi chia cho $p$ (nếu $ia \equiv ja$ thì $p \mid (i - j)a$, nên $p \mid i - j$, vô lý) và đều khác 0. Vậy các số dư của chúng chính là $1, 2, \dots, p - 1$ theo một thứ tự nào đó. Nhân lại: $a^{p-1}(p-1)! \equiv (p-1)! \pmod p$, rồi chia cho $(p-1)!$ (nguyên tố cùng nhau với $p$).

### 4. Số nguyên tố

- **Định nghĩa:** số tự nhiên lớn hơn 1 chỉ có hai ước dương là 1 và chính nó. Số 1 **không** là số nguyên tố; 2 là số nguyên tố chẵn duy nhất.
- **Kiểm tra nguyên tố chỉ cần thử đến $\sqrt n$.** *Vì sao?* Nếu $n = ab$ với $1 < a \le b$ thì $a^2 \le ab = n$, nên $a \le \sqrt n$. Ví dụ, để kiểm tra 97 chỉ cần thử chia cho 2, 3, 5, 7.
- **Có vô hạn số nguyên tố (Euclid).** *Chứng minh:* giả sử chỉ có hữu hạn số nguyên tố $p_1, \dots, p_k$. Số $N = p_1p_2\cdots p_k + 1$ chia cho mỗi $p_i$ đều dư 1, nên ước nguyên tố của $N$ không nằm trong danh sách, mâu thuẫn.
- **Định lý cơ bản của số học:** mọi số tự nhiên $n > 1$ phân tích được **duy nhất** (không kể thứ tự) thành tích các thừa số nguyên tố: $n = p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_k^{\alpha_k}$.
  - **Số ước dương** của $n$ là $(\alpha_1 + 1)(\alpha_2 + 1)\cdots(\alpha_k + 1)$. *Vì sao?* Mỗi ước có dạng $p_1^{\beta_1}\cdots p_k^{\beta_k}$ với $0 \le \beta_i \le \alpha_i$; số mũ $\beta_i$ có $\alpha_i + 1$ cách chọn. Ví dụ $72 = 2^3\cdot 3^2$ có $4\cdot 3 = 12$ ước.
- **Số nguyên tố $p > 3$ có dạng $6k \pm 1$.** *Vì sao?* Các dạng $6k$, $6k \pm 2$ chia hết cho 2; dạng $6k + 3$ chia hết cho 3.
- **$p$ nguyên tố, $p \mid ab$ thì $p \mid a$ hoặc $p \mid b$** (hệ quả của T4: nếu $p \nmid a$ thì $\gcd(p, a) = 1$).

### 5. Ước chung lớn nhất, bội chung nhỏ nhất

- **$\gcd(a, b) = \gcd(a - kb, b)$.** *Vì sao?* Theo (T2), mọi ước chung của $a$ và $b$ cũng là ước của $a - kb$, và ngược lại. Hai cặp số có cùng tập ước chung, nên cùng ước chung lớn nhất.
- **Thuật toán Euclid:** lặp lại phép chia có dư. Ví dụ:
  $252 = 1\cdot 198 + 54$, $\ 198 = 3\cdot 54 + 36$, $\ 54 = 1\cdot 36 + 18$, $\ 36 = 2\cdot 18$. Vậy $\gcd(252, 198) = 18$.
- **Đẳng thức Bézout:** tồn tại các số nguyên $x, y$ sao cho $ax + by = \gcd(a, b)$. *Gợi ý:* chạy ngược thuật toán Euclid: $18 = 54 - 36 = 54 - (198 - 3\cdot 54) = 4\cdot 54 - 198 = 4(252 - 198) - 198 = 4\cdot 252 - 5\cdot 198$.
- $\gcd(a, b)\cdot\text{lcm}(a, b) = ab$ (với $a, b > 0$).
- **Hai số nguyên liên tiếp luôn nguyên tố cùng nhau,** vì mọi ước chung của $n$ và $n+1$ đều chia hết hiệu của chúng là 1.

### 6. Số chính phương

| Modulo | Số dư có thể của $n^2$ | Vì sao |
|---|---|---|
| 3 | 0, 1 | $n = 3k$ cho $9k^2$; $n = 3k\pm1$ cho $9k^2 \pm 6k + 1$ |
| 4 | 0, 1 | $n = 2k$ cho $4k^2$; $n = 2k + 1$ cho $4k^2 + 4k + 1$ |
| 5 | 0, 1, 4 | $n \equiv 0, \pm1, \pm2$ cho $n^2 \equiv 0, 1, 4$ |
| 8 | 0, 1, 4 | Số lẻ: $(2k+1)^2 = 4k(k+1) + 1$, mà $k(k+1)$ chẵn nên $\equiv 1 \pmod 8$ |
| 9 | 0, 1, 4, 7 | $n \equiv 0, \pm1, \pm2, \pm3, \pm4$ |
| 10 | 0, 1, 4, 5, 6, 9 | Bình phương các chữ số $0, \dots, 9$ |

**Các tính chất quan trọng (kèm lý do):**
- **Không có số chính phương nằm giữa hai số chính phương liên tiếp:** nếu $k^2 < N < (k+1)^2$ thì $N$ không là số chính phương, vì không có số nguyên nào nằm giữa $k$ và $k + 1$.
- **$p$ nguyên tố, $p \mid n^2$ thì $p^2 \mid n^2$.** *Vì sao?* $p \mid n\cdot n$ nên $p \mid n$, suy ra $p^2 \mid n^2$. Ví dụ: số chính phương chia hết cho 3 thì chia hết cho 9.
- **Trong phân tích thừa số nguyên tố của số chính phương, mọi số mũ đều chẵn** (vì $n^2 = p_1^{2\alpha_1}\cdots$).
- **Nếu $ab$ là số chính phương và $\gcd(a, b) = 1$ thì $a$ và $b$ đều là số chính phương.** *Vì sao?* Một thừa số nguyên tố của $ab$ chỉ xuất hiện trong $a$ hoặc chỉ trong $b$, nên toàn bộ số mũ chẵn của nó nằm trong một số.
- **Một số có số lượng ước lẻ khi và chỉ khi nó là số chính phương.** *Vì sao?* Các ước ghép thành cặp $(d, \frac nd)$; chỉ khi $d = \frac nd$, tức là $n = d^2$, mới có ước không có cặp.

### 7. Chữ số tận cùng

- Chữ số tận cùng của $N$ là $N \bmod 10$; hai chữ số tận cùng là $N \bmod 100$.
- **Chu kỳ chữ số tận cùng của lũy thừa:**

| Cơ số tận cùng | Chu kỳ chữ số tận cùng của $a^1, a^2, a^3, \dots$ |
|---|---|
| 0, 1, 5, 6 | Không đổi |
| 4 | 4, 6 (chu kỳ 2) |
| 9 | 9, 1 (chu kỳ 2) |
| 2 | 2, 4, 8, 6 (chu kỳ 4) |
| 3 | 3, 9, 7, 1 (chu kỳ 4) |
| 7 | 7, 9, 3, 1 (chu kỳ 4) |
| 8 | 8, 4, 2, 6 (chu kỳ 4) |

  Hệ quả: $a^{4k + r}$ và $a^r$ có cùng chữ số tận cùng (với $r \ge 1$). Ví dụ $3^{2026} = 3^{4\cdot 506 + 2}$ tận cùng bằng 9.
- **Hai chữ số tận cùng:** tìm số mũ $k$ với $a^k \equiv 1 \pmod{100}$. Một số kết quả: $7^4 = 2401 \equiv 1$; $3^{20} \equiv 1$; $2^{20} \equiv 76$ và $76^n \equiv 76 \pmod{100}$.

---

## II. Bài tập vận dụng

**Bài 1.** Chứng minh rằng $n^5 - n$ chia hết cho 30 với mọi số nguyên $n$.

**Bài 2.** Chứng minh rằng $3^{2n+1} + 2^{n+2}$ chia hết cho 7 với mọi số tự nhiên $n$.

**Bài 3.** Chứng minh rằng nếu $p$ là số nguyên tố lớn hơn 3 thì $p^2 - 1$ chia hết cho 24.

**Bài 4.** Tìm tất cả số nguyên tố $p$ sao cho $8p^2 + 1$ cũng là số nguyên tố.

**Bài 5.** Tìm tất cả số tự nhiên $n$ để $n^4 + 4$ là số nguyên tố.

**Bài 6 (IMO 1959).** Chứng minh rằng phân số $\frac{21n+4}{14n+3}$ tối giản với mọi số tự nhiên $n$.

**Bài 7.** Tìm số tự nhiên $n$ để $n^2 + 2n + 12$ là số chính phương.

**Bài 8.** Chứng minh rằng tổng bình phương của 5 số nguyên liên tiếp không là số chính phương.

**Bài 9.** Cho $a, b$ là các số nguyên sao cho $a^2 + b^2$ chia hết cho 3. Chứng minh rằng $a$ và $b$ đều chia hết cho 3.

**Bài 10.** Tìm hai chữ số tận cùng của $7^{2026}$.

**Bài 11 (khó).** Chứng minh rằng với mọi số tự nhiên $n \ge 1$, số $A = \underbrace{11\dots1}_{2n}  - \underbrace{22\dots2}_{n}$ là số chính phương.

**Bài 12 (khó).** Tìm tất cả số nguyên dương $n$ sao cho $2^n + 1$ chia hết cho 3, và chứng minh $2^n - 1$ không bao giờ chia hết cho 7 khi $n$ không chia hết cho 3.

---

## III. Lời giải chi tiết

### Bài 1
$n^5 - n = n(n^4 - 1) = n(n-1)(n+1)(n^2+1)$.
- **Chia hết cho 6:** $(n-1)n(n+1)$ là tích 3 số nguyên liên tiếp.
- **Chia hết cho 5:** viết $n^2 + 1 = (n^2 - 4) + 5$, ta được
  $$n^5 - n = (n-2)(n-1)n(n+1)(n+2) + 5(n-1)n(n+1).$$
  Số hạng đầu là tích 5 số nguyên liên tiếp nên chia hết cho 5, số hạng sau hiển nhiên chia hết cho 5.

Vì $\gcd(5, 6) = 1$ nên $30 \mid n^5 - n$.

> Cách khác: theo định lý Fermat nhỏ, $n^5 \equiv n \pmod 5$.

### Bài 2
Ta có $9 \equiv 2 \pmod 7$, nên $3^{2n+1} = 3\cdot 9^n \equiv 3\cdot 2^n \pmod 7$. Ngoài ra $2^{n+2} = 4\cdot 2^n$.
Suy ra $3^{2n+1} + 2^{n+2} \equiv 3\cdot2^n + 4\cdot 2^n = 7\cdot 2^n \equiv 0 \pmod 7$.

### Bài 3
$p^2 - 1 = (p-1)(p+1)$.
- $p$ lẻ nên $p-1$ và $p+1$ là hai số chẵn liên tiếp, trong đó có một số chia hết cho 4. Do đó $8 \mid (p-1)(p+1)$.
- $p$ không chia hết cho 3, mà trong ba số liên tiếp $p-1, p, p+1$ có một số chia hết cho 3, nên $3 \mid (p-1)(p+1)$.

Vì $\gcd(3,8)=1$ nên $24 \mid p^2 - 1$.

### Bài 4
- Với $p = 3$: $8\cdot 9 + 1 = 73$ là số nguyên tố, thỏa mãn.
- Với $p \ne 3$: $p$ không chia hết cho 3 nên $p^2 \equiv 1 \pmod 3$. Suy ra $8p^2 + 1 \equiv 8 + 1 = 9 \equiv 0 \pmod 3$. Mà $8p^2 + 1 > 3$, nên $8p^2+1$ là hợp số.

**Đáp số:** $p = 3$.

### Bài 5
Theo đẳng thức Sophie Germain: $n^4 + 4 = (n^2 - 2n + 2)(n^2 + 2n + 2)$.
Với $n \ge 1$ ta có $n^2 + 2n + 2 > n^2 - 2n + 2 = (n-1)^2 + 1 \ge 1$. Để $n^4+4$ là số nguyên tố, thừa số nhỏ phải bằng 1:
$(n-1)^2 + 1 = 1 \iff n = 1$. Khi đó $n^4 + 4 = 5$ là số nguyên tố.
Với $n = 0$: $n^4 + 4 = 4$, không là số nguyên tố.

**Đáp số:** $n = 1$.

### Bài 6
Gọi $d = \gcd(21n+4, 14n+3)$. Khi đó $d \mid 3(14n+3) - 2(21n+4) = 42n + 9 - 42n - 8 = 1$.
Vậy $d = 1$, phân số tối giản.

### Bài 7
Giả sử $n^2 + 2n + 12 = k^2$ với $k \in \mathbb{N}$. Khi đó $(n+1)^2 + 11 = k^2$, tức là
$$(k - n - 1)(k + n + 1) = 11.$$
Vì $k + n + 1 > 0$ nên $k - n - 1 > 0$, và $k + n + 1 > k - n - 1$. Do 11 là số nguyên tố nên
$k + n + 1 = 11$ và $k - n - 1 = 1$, suy ra $k = 6$, $n = 4$.
Thử lại: $16 + 8 + 12 = 36 = 6^2$, đúng.

**Đáp số:** $n = 4$.

### Bài 8
Gọi 5 số nguyên liên tiếp là $n-2, n-1, n, n+1, n+2$. Tổng bình phương của chúng là
$$5n^2 + 2(4 + 1) = 5n^2 + 10 = 5(n^2+2).$$
Nếu đây là số chính phương thì vì nó chia hết cho 5 nên phải chia hết cho 25, tức là $5 \mid n^2 + 2$.
Nhưng $n^2 \equiv 0, 1, 4 \pmod 5$, nên $n^2 + 2 \equiv 2, 3, 1 \pmod 5$, không bao giờ chia hết cho 5. Mâu thuẫn.

### Bài 9
$a^2, b^2 \equiv 0$ hoặc $1 \pmod 3$. Vì vậy $a^2 + b^2 \equiv 0 \pmod 3$ chỉ xảy ra khi $a^2 \equiv b^2 \equiv 0 \pmod 3$, tức là $3 \mid a$ và $3 \mid b$.

> Tổng quát: nếu $p$ là số nguyên tố dạng $4k+3$ và $p \mid a^2 + b^2$ thì $p \mid a$ và $p \mid b$.

### Bài 10
$7^2 = 49$, $7^4 = 2401 \equiv 1 \pmod{100}$. Vì $2026 = 4\cdot 506 + 2$ nên
$7^{2026} = (7^4)^{506}\cdot 7^2 \equiv 1\cdot 49 \pmod{100}$.

**Đáp số:** hai chữ số tận cùng là **49**.

### Bài 11
Đặt $a = \underbrace{11\dots1}_{n}$. Khi đó $9a + 1 = 10^n$.
- $\underbrace{11\dots1}_{2n} = a\cdot 10^n + a = a(9a+1) + a = 9a^2 + 2a$.
- $\underbrace{22\dots2}_{n} = 2a$.

Do đó $A = 9a^2 + 2a - 2a = 9a^2 = (3a)^2 = (\underbrace{33\dots3}_{n})^2$ là số chính phương.

> Kỹ thuật **đặt $a = \underbrace{11\dots1}_{n}$, khi đó $10^n = 9a + 1$** giải được hầu hết các bài về số có chữ số lặp lại.

### Bài 12
**Phần 1.** $2 \equiv -1 \pmod 3$, nên $2^n + 1 \equiv (-1)^n + 1 \pmod 3$. Biểu thức này bằng 0 khi $n$ lẻ và bằng 2 khi $n$ chẵn. Vậy $3 \mid 2^n + 1 \iff n$ lẻ.

**Phần 2.** $2^3 = 8 \equiv 1 \pmod 7$. Viết $n = 3q + r$ với $r \in \{0,1,2\}$, ta có $2^n \equiv 2^r \pmod 7$:
- $r = 1$: $2^n - 1 \equiv 1 \pmod 7$.
- $r = 2$: $2^n - 1 \equiv 3 \pmod 7$.

Vậy khi $3 \nmid n$, $2^n - 1$ không chia hết cho 7. (Khi $3 \mid n$ thì $7 \mid 2^n - 1$.)
