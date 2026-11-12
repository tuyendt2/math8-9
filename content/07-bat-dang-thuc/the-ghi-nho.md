# Thẻ ghi nhớ Bất đẳng thức

<!--
Định dạng: "## Nhóm" mở một nhóm thẻ; mỗi "### ..." là mặt trước của một thẻ,
phần bên dưới (đến thẻ tiếp theo) là mặt sau.
-->

## Tính chất cơ bản

### Ba phép biến đổi **bị cấm** khi làm việc với bất đẳng thức là gì?
1. **Trừ** vế theo vế hai bất đẳng thức cùng chiều.
2. **Nhân** vế theo vế khi có vế âm.
3. **Nghịch đảo** khi hai vế trái dấu.

Ví dụ: $5 > 1$, $4 > 0$ nhưng $5 - 4 > 1 - 0$ là sai.

### Nhân hai vế của $a > b$ với số âm $c$ thì sao? Vì sao?
Đổi chiều: $ac < bc$, vì $ac - bc = (a - b)c < 0$.

### $\lvert a\rvert + \lvert b\rvert$ so với $\lvert a + b\rvert$? Dấu "=" khi nào?
$\lvert a\rvert + \lvert b\rvert \ge \lvert a + b\rvert$, dấu "=" khi $ab \ge 0$.

*Vì sao:* bình phương hai vế, đưa về $\lvert ab\rvert \ge ab$.

## Từ bình phương không âm

### $a^2 + b^2 \ge \;?$
$a^2 + b^2 \ge 2ab$, vì hiệu bằng $(a - b)^2 \ge 0$. Dấu "=" khi $a = b$.

### Chuỗi bất đẳng thức cho **hai** số $a, b$?
$$2(a^2 + b^2) \ge (a + b)^2 \ge 4ab.$$
Cả hai đều suy ra từ $a^2 + b^2 \ge 2ab$ bằng cách cộng thêm vào hai vế.

### $a^2 + b^2 + c^2 \ge \;?$
$a^2 + b^2 + c^2 \ge ab + bc + ca$.

*Vì sao:* $2(VT - VP) = (a - b)^2 + (b - c)^2 + (c - a)^2$.

### Chuỗi bất đẳng thức cho **ba** số $a, b, c$?
$$3(a^2 + b^2 + c^2) \ge (a + b + c)^2 \ge 3(ab + bc + ca).$$

### $(ab + bc + ca)^2 \ge \;?$
$(ab + bc + ca)^2 \ge 3abc(a + b + c)$.

*Vì sao:* áp dụng $(x + y + z)^2 \ge 3(xy + yz + zx)$ cho $x = ab$, $y = bc$, $z = ca$.

## AM-GM (Cauchy)

### Phát biểu AM-GM hai số. Điều kiện? Chứng minh một dòng?
Với $a, b \ge 0$: $\frac{a + b}{2} \ge \sqrt{ab}$, dấu "=" khi $a = b$.

*Chứng minh:* $a + b - 2\sqrt{ab} = (\sqrt a - \sqrt b)^2 \ge 0$.

### Phát biểu AM-GM ba số và ý chứng minh?
Với $a, b, c \ge 0$: $\frac{a + b + c}{3} \ge \sqrt[3]{abc}$.

*Ý chứng minh:* $x^3 + y^3 + z^3 - 3xyz = \frac12(x + y + z)\left[(x-y)^2 + (y-z)^2 + (z-x)^2\right] \ge 0$, với $x = \sqrt[3]a, \dots$

### Tổng $a + b$ cố định thì tích $ab$ thế nào?
$ab \le \left(\frac{a + b}{2}\right)^2$: **tích lớn nhất khi hai số bằng nhau.**

Ngược lại, tích cố định thì tổng nhỏ nhất khi hai số bằng nhau.

### $(a + b + c)\left(\frac1a + \frac1b + \frac1c\right) \ge \;?$
$\ge 9$ (với $a, b, c > 0$). Nhân hai bất đẳng thức AM-GM ba số.

Tương tự: $(a + b)\left(\frac1a + \frac1b\right) \ge 4$.

### $(a + b)(b + c)(c + a)$ so với $abc$?
$(a + b)(b + c)(c + a) \ge 8abc$: nhân ba bất đẳng thức $a + b \ge 2\sqrt{ab}$.

Mạnh hơn: $(a+b)(b+c)(c+a) \ge \frac89(a + b + c)(ab + bc + ca)$.

### Viết $(a + b)(b + c)(c + a)$ theo $p = a+b+c$, $q = ab+bc+ca$, $r = abc$?
$(a + b)(b + c)(c + a) = pq - r$.

## Cauchy-Schwarz và Engel

### Phát biểu Cauchy-Schwarz (Bunhiacopxki). Dấu "=" khi nào?
$$(a_1b_1 + \dots + a_nb_n)^2 \le (a_1^2 + \dots + a_n^2)(b_1^2 + \dots + b_n^2).$$
Dấu "=" khi $\frac{a_1}{b_1} = \dots = \frac{a_n}{b_n}$.

### Chứng minh Cauchy-Schwarz cho $n = 2$ trong một dòng?
Đẳng thức Lagrange:
$$(a_1^2 + a_2^2)(b_1^2 + b_2^2) - (a_1b_1 + a_2b_2)^2 = (a_1b_2 - a_2b_1)^2 \ge 0.$$

### Phát biểu bổ đề Engel (BĐT Svac-xơ)?
Với $b_i > 0$:
$$\frac{a_1^2}{b_1} + \dots + \frac{a_n^2}{b_n} \ge \frac{(a_1 + \dots + a_n)^2}{b_1 + \dots + b_n}.$$

### $\frac1a + \frac1b \ge \;?$ và $\frac1a + \frac1b + \frac1c \ge \;?$
$$\frac1a + \frac1b \ge \frac{4}{a + b}, \qquad \frac1a + \frac1b + \frac1c \ge \frac{9}{a + b + c}.$$
Đây là Engel với các tử bằng 1.

### Dùng Engel khi tử **không** phải bình phương thì làm sao?
Nhân thêm để tạo bình phương, ví dụ $\frac{a}{b + c} = \frac{a^2}{a(b + c)}$.

## Bất đẳng thức phụ

### $a^3 + b^3 \ge \;?$ (với $a, b > 0$)
$a^3 + b^3 \ge ab(a + b)$, vì hiệu bằng $(a + b)(a - b)^2 \ge 0$.

### $\frac{a^2}{b} \ge \;?$ (với $b > 0$)
$\frac{a^2}{b} \ge 2a - b$, vì hiệu bằng $\frac{(a - b)^2}{b} \ge 0$.

### Phát biểu Chebyshev dạng đơn giản?
Nếu $(a - b)(x - y) \ge 0$ thì $ax + by \ge \frac{(a + b)(x + y)}{2}$.

*Vì sao:* $2(ax + by) - (a + b)(x + y) = (a - b)(x - y)$.

### Phát biểu bất đẳng thức Schur ($a, b, c \ge 0$)?
$$a(a - b)(a - c) + b(b - a)(b - c) + c(c - a)(c - b) \ge 0.$$
*Ý chứng minh:* giả sử $a \ge b \ge c$, ghép hai số hạng đầu.

## Kỹ thuật

### "Điểm rơi" là gì và vì sao phải dự đoán trước?
Là giá trị của biến tại đó dấu "=" xảy ra. Mọi bước đánh giá phải có dấu "=" **tại cùng một điểm**, nếu không kết quả cuối không đạt được.

Ví dụ: $a \ge 2$ thì không dùng được $a + \frac1a \ge 2$ (dấu "=" ở $a = 1$).

### Kỹ thuật AM-GM ngược dấu, ví dụ với $\frac{a}{1 + b^2}$?
$$\frac{a}{1 + b^2} = a - \frac{ab^2}{1 + b^2} \ge a - \frac{ab^2}{2b} = a - \frac{ab}{2}.$$
Đánh giá phần **bị trừ** nên đổi được chiều.

### Kỹ thuật tiếp tuyến: tìm hệ số $k$ mà không dùng đạo hàm?
Muốn $f(x) \ge f(1) + k(x - 1)$: chọn $k$ sao cho hiệu $f(x) - f(1) - k(x - 1)$ có nhân tử $(x - 1)^2$.

### Khi nào được **chuẩn hóa**, ví dụ giả sử $a + b + c = 3$?
Khi bất đẳng thức **thuần nhất** (nhân mọi biến với cùng $t > 0$ thì hai vế không đổi tỉ lệ).

### Điều kiện $a, b, c \in [0; 1]$ cho bất đẳng thức gì? Còn $a \in [m; M]$?
$(1 - a)(1 - b)(1 - c) \ge 0$, và $(a - m)(a - M) \le 0$.

### Mẹo "Dirichlet" trong bất đẳng thức ba biến?
Trong ba số $a - 1$, $b - 1$, $c - 1$ luôn có hai số cùng dấu, ví dụ $(a - 1)(b - 1) \ge 0$.

### Tiêu chuẩn SOS hay dùng?
Với $a \ge b \ge c$: nếu $S_b \ge 0$, $S_c \ge 0$ và $S_a + S_b \ge 0$ thì
$$S_a(b - c)^2 + S_b(c - a)^2 + S_c(a - b)^2 \ge 0.$$

### Quy trình 4 bước làm một bài bất đẳng thức?
1. Dự đoán điểm rơi.
2. Nhận dạng: đối xứng, hoán vị, thuần nhất?
3. Chọn kỹ thuật, đảm bảo mọi bước có dấu "=" tại cùng điểm rơi.
4. Kết luận và chỉ rõ khi nào dấu "=" xảy ra.
