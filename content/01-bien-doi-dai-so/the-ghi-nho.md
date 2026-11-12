# Thẻ ghi nhớ: Biến đổi đại số

## Hằng đẳng thức cơ bản

### $a^3 + b^3 = \;?$ và $a^3 - b^3 = \;?$
$$a^3 + b^3 = (a + b)(a^2 - ab + b^2), \qquad a^3 - b^3 = (a - b)(a^2 + ab + b^2).$$
*Kiểm tra:* nhân ra, các số hạng giữa triệt tiêu.

### $(a + b)^3 = \;?$
$a^3 + 3a^2b + 3ab^2 + b^3$. Hệ số $1, 3, 3, 1$ là hàng 3 của tam giác Pascal.

### Hệ số của $(a + b)^4$? Quy tắc tam giác Pascal?
$1, 4, 6, 4, 1$. Mỗi số bằng tổng hai số ngay phía trên, vì $(a+b)^{n+1} = (a+b)^n a + (a+b)^n b$.

### Quên công thức thì kiểm tra thế nào?
Nhân ra để kiểm tra, hoặc thay số cụ thể (ví dụ $a = 2$, $b = 1$) vào hai vế.

## Hằng đẳng thức mở rộng

### $(a + b + c)^2 = \;?$
$a^2 + b^2 + c^2 + 2(ab + bc + ca)$.

### $a^3 + b^3$ theo tổng $a + b$ và tích $ab$?
$a^3 + b^3 = (a + b)^3 - 3ab(a + b)$. Rất hay dùng cùng định lý Viète.

### $a^3 + b^3 + c^3 - 3abc = \;?$
$$(a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) = \tfrac12(a+b+c)\left[(a-b)^2 + (b-c)^2 + (c-a)^2\right].$$

### Nếu $a + b + c = 0$ thì $a^3 + b^3 + c^3 = \;?$
$a^3 + b^3 + c^3 = 3abc$ (hệ quả của hằng đẳng thức "vàng").

Ngoài ra khi $a + b + c = 0$: $a^4 + b^4 + c^4 = \frac{(a^2 + b^2 + c^2)^2}{2}$.

### $(a + b + c)^3 = \;?$
$a^3 + b^3 + c^3 + 3(a + b)(b + c)(c + a)$.

### $(a + b)(b + c)(c + a) = \;?$
$(a + b + c)(ab + bc + ca) - abc$.

### $a^n - b^n = \;?$ Hệ quả số học?
$a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \dots + b^{n-1})$.

Hệ quả: với $a, b$ nguyên, $(a - b) \mid (a^n - b^n)$. Với $n$ lẻ: $(a + b) \mid (a^n + b^n)$.

### Đẳng thức Sophie Germain?
$$a^4 + 4b^4 = (a^2 - 2ab + 2b^2)(a^2 + 2ab + 2b^2).$$
Thêm bớt $4a^2b^2$ để được hiệu hai bình phương.

### Đẳng thức Lagrange cho $(a^2 + b^2)(c^2 + d^2)$?
$(a^2 + b^2)(c^2 + d^2) = (ac + bd)^2 + (ad - bc)^2$.

## Phân tích đa thức

### Tách hạng tử $ax^2 + bx + c$: chọn $b_1, b_2$ thế nào?
$b_1 + b_2 = b$ và $b_1b_2 = ac$.

Ví dụ: $2x^2 - 7x + 3$: chọn $-1, -6$, được $(2x - 1)(x - 3)$.

### Vì sao $x^{3m+1} + x^{3n+2} + 1$ chia hết cho $x^2 + x + 1$?
Vì $x^{3k} - 1$ chia hết cho $x^3 - 1$, nên chia hết cho $x^2 + x + 1$:
$$x^{3m+1} + x^{3n+2} + 1 = x(x^{3m} - 1) + x^2(x^{3n} - 1) + (x^2 + x + 1).$$
Ví dụ: $x^5 + x + 1$, $x^7 + x^2 + 1$, $x^8 + x + 1$.

### Nghiệm nguyên của đa thức hệ số nguyên nằm ở đâu?
Là ước của hệ số tự do $a_0$. Nghiệm hữu tỉ $\frac pq$ thì $p \mid a_0$, $q \mid a_n$.

### Mẹo nhẩm nghiệm $x = 1$ và $x = -1$?
- Tổng các hệ số bằng 0 thì có nghiệm $x = 1$.
- Tổng hệ số bậc chẵn bằng tổng hệ số bậc lẻ thì có nghiệm $x = -1$.

### Đa thức bậc 4 không có nghiệm hữu tỉ thì phân tích thế nào?
Hệ số bất định: đặt bằng $(x^2 + ax + b)(x^2 + cx + d)$, so sánh hệ số, thử các cặp $b, d$ có tích bằng hệ số tự do.

## Bézout và phân thức

### Định lý Bézout?
Số dư khi chia $f(x)$ cho $x - a$ bằng $f(a)$. Vì $f(x) - f(a)$ là tổng các $a_k(x^k - a^k)$, đều chia hết cho $x - a$.

### Chia $f(x)$ cho đa thức bậc 2 có hai nghiệm $x_1, x_2$: tìm dư thế nào?
Dư có dạng $ax + b$. Thay $x = x_1$ và $x = x_2$: $f(x_1) = ax_1 + b$, $f(x_2) = ax_2 + b$.

### Đa thức hệ số nguyên $f$: quan hệ giữa $a - b$ và $f(a) - f(b)$?
$(a - b) \mid \left(f(a) - f(b)\right)$ với mọi số nguyên $a, b$.

### Các công thức sai phân hay dùng?
$$\frac{1}{k(k+1)} = \frac1k - \frac1{k+1}, \qquad \frac{1}{k(k+d)} = \frac1d\left(\frac1k - \frac1{k+d}\right),$$
$$\frac{1}{\sqrt k + \sqrt{k+1}} = \sqrt{k+1} - \sqrt k.$$

### $S_n = x^n + \frac1{x^n}$: công thức truy hồi?
$S_{n+1} = S_1S_n - S_{n-1}$; $S_2 = S_1^2 - 2$; $S_3 = S_1^3 - 3S_1$.

### Hai công cụ khai thác điều kiện dạng đẳng thức?
- Tích bằng 0: $AB = 0 \iff A = 0$ hoặc $B = 0$.
- Tổng bình phương bằng 0: $A^2 + B^2 + C^2 = 0 \iff A = B = C = 0$.
