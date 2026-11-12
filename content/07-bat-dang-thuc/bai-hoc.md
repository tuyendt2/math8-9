# Chủ đề 7. Bất đẳng thức

> Đây là chủ đề **quan trọng nhất và khó nhất** trong đề thi HSG và thi chuyên. Câu bất đẳng thức thường là câu phân loại.

## I. Kiến thức cần nắm

> **Ý tưởng xuyên suốt:** gần như mọi bất đẳng thức cổ điển đều bắt nguồn từ một sự thật đơn giản: **bình phương của một số thực luôn không âm**, $x^2 \ge 0$. Hiểu được điều này, ta có thể tự chứng minh lại các bất đẳng thức cơ bản khi quên.

### 1. Tính chất cơ bản và vì sao đúng
Định nghĩa: $a > b \iff a - b > 0$. Mọi tính chất dưới đây đều suy ra từ: **tổng và tích của hai số dương là số dương**.
- **Bắc cầu:** $a > b$, $b > c$ thì $a > c$, vì $a - c = (a - b) + (b - c) > 0$.
- **Cộng hai vế với một số:** $a > b \iff a + c > b + c$.
- **Cộng hai bất đẳng thức cùng chiều:** $a > b$, $c > d$ thì $a + c > b + d$.
- **Nhân với số dương:** $a > b$, $c > 0$ thì $ac > bc$, vì $ac - bc = (a - b)c > 0$.
- **Nhân với số âm thì đổi chiều:** $a > b$, $c < 0$ thì $ac < bc$, vì $(a - b)c < 0$.
- **Nhân hai bất đẳng thức cùng chiều có các vế dương:** $a > b > 0$, $c > d > 0$ thì $ac > bd$, vì $ac - bd = a(c - d) + d(a - b) > 0$.
- **Nghịch đảo:** $a > b > 0$ thì $\frac1a < \frac1b$, vì $\frac1b - \frac1a = \frac{a - b}{ab} > 0$.
- **Lũy thừa:** $a > b \ge 0$ thì $a^n > b^n$ (nhân nhiều lần).

> **Những sai lầm bị cấm:**
> - **Trừ** vế theo vế hai bất đẳng thức cùng chiều: $5 > 1$ và $4 > 0$ nhưng $5 - 4 > 1 - 0$ là sai.
> - **Nhân** vế theo vế khi có vế âm: $-1 > -2$ và $-1 > -2$ nhưng $(-1)(-1) > (-2)(-2)$ là sai.
> - **Nghịch đảo** khi hai vế trái dấu: $1 > -1$ nhưng $1 < -1$ là sai.

**Bất đẳng thức giá trị tuyệt đối:** $\lvert a\rvert + \lvert b\rvert \ge \lvert a + b\rvert$, dấu "=" khi $ab \ge 0$.
*Chứng minh:* hai vế không âm, bình phương được $a^2 + 2\lvert ab\rvert + b^2 \ge a^2 + 2ab + b^2 \iff \lvert ab\rvert \ge ab$, luôn đúng.

### 2. Nhóm bất đẳng thức từ bình phương không âm

**(B1)** $a^2 + b^2 \ge 2ab$. *Chứng minh:* hiệu hai vế bằng $(a - b)^2 \ge 0$. Dấu "=" khi $a = b$.

Từ (B1) suy ra ngay (cộng thêm cùng một lượng vào hai vế):
- **(B2)** $(a + b)^2 \ge 4ab$ (cộng $2ab$ vào hai vế của B1);
- **(B3)** $2(a^2 + b^2) \ge (a + b)^2$ (cộng $a^2 + b^2$ vào hai vế của B1).

Gộp lại thành chuỗi: $2(a^2 + b^2) \ge (a + b)^2 \ge 4ab$.

**(B4)** $a^2 + b^2 + c^2 \ge ab + bc + ca$. *Chứng minh:* cộng ba bất đẳng thức $a^2 + b^2 \ge 2ab$, $b^2 + c^2 \ge 2bc$, $c^2 + a^2 \ge 2ca$ rồi chia 2. Hoặc viết $2(VT - VP) = (a - b)^2 + (b - c)^2 + (c - a)^2$.

Từ (B4), cộng thêm vào hai vế:
- **(B5)** $(a + b + c)^2 \ge 3(ab + bc + ca)$ (cộng $2(ab + bc + ca)$);
- **(B6)** $3(a^2 + b^2 + c^2) \ge (a + b + c)^2$ (cộng $2(a^2 + b^2 + c^2)$).

Chuỗi quan trọng:
$$\boxed{3(a^2 + b^2 + c^2) \ge (a + b + c)^2 \ge 3(ab + bc + ca)}$$

**(B7)** $(ab + bc + ca)^2 \ge 3abc(a + b + c)$. *Chứng minh:* áp dụng (B5) cho ba số $x = ab$, $y = bc$, $z = ca$: $(x + y + z)^2 \ge 3(xy + yz + zx)$, và $xy + yz + zx = ab^2c + bc^2a + ca^2b = abc(a + b + c)$.

### 3. Bất đẳng thức AM-GM (Cauchy)
**Phát biểu:** với các số **không âm**, trung bình cộng không nhỏ hơn trung bình nhân. Dấu "=" khi và chỉ khi các số bằng nhau.

**Hai số:** $\frac{a + b}{2} \ge \sqrt{ab}$.
- *Chứng minh:* $a + b - 2\sqrt{ab} = (\sqrt a - \sqrt b)^2 \ge 0$.
- *Hình học:* vẽ nửa đường tròn đường kính $AB = a + b$, điểm $H$ trên $AB$ với $AH = a$, $HB = b$. Đường vuông góc tại $H$ cắt nửa đường tròn tại $C$. Theo hệ thức lượng $CH = \sqrt{ab}$, mà $CH$ không lớn hơn bán kính $\frac{a+b}{2}$.

**Ba số:** $\frac{a + b + c}{3} \ge \sqrt[3]{abc}$.
- *Chứng minh:* theo Chủ đề 1, $x^3 + y^3 + z^3 - 3xyz = \frac12(x + y + z)\left[(x-y)^2 + (y-z)^2 + (z-x)^2\right] \ge 0$ với $x, y, z \ge 0$. Áp dụng cho $x = \sqrt[3]a$, $y = \sqrt[3]b$, $z = \sqrt[3]c$.

**Bốn số:** áp dụng AM-GM hai số hai lần: $\frac{a + b + c + d}{4} \ge \frac{\sqrt{ab} + \sqrt{cd}}{2} \ge \sqrt{\sqrt{ab}\sqrt{cd}} = \sqrt[4]{abcd}$.
*(Tổng quát cho $n$ số được chứng minh bằng quy nạp "tiến lùi" của Cauchy: từ $n = 2^k$ rồi lùi về mọi $n$.)*

**Các dạng thường dùng (với số dương):**
- $ab \le \left(\frac{a + b}{2}\right)^2$: **tổng cố định thì tích lớn nhất khi hai số bằng nhau** (trong các hình chữ nhật cùng chu vi, hình vuông có diện tích lớn nhất).
- $a + b \ge 2\sqrt{ab}$: **tích cố định thì tổng nhỏ nhất khi hai số bằng nhau.**
- $a + \frac1a \ge 2$; $\quad\frac ab + \frac ba \ge 2$.
- $(a + b)\left(\frac1a + \frac1b\right) \ge 4$; $\quad(a + b + c)\left(\frac1a + \frac1b + \frac1c\right) \ge 9$ (nhân hai bất đẳng thức AM-GM).

### 4. Bất đẳng thức Cauchy-Schwarz (Bunhiacopxki)
$$(a_1b_1 + a_2b_2 + \dots + a_nb_n)^2 \le (a_1^2 + a_2^2 + \dots + a_n^2)(b_1^2 + b_2^2 + \dots + b_n^2).$$
Dấu "=" khi $\frac{a_1}{b_1} = \frac{a_2}{b_2} = \dots = \frac{a_n}{b_n}$ (quy ước: nếu $b_i = 0$ thì $a_i = 0$).

**Chứng minh 1 (đẳng thức Lagrange):** với $n = 2$,
$$(a_1^2 + a_2^2)(b_1^2 + b_2^2) - (a_1b_1 + a_2b_2)^2 = (a_1b_2 - a_2b_1)^2 \ge 0.$$
Với $n$ bất kỳ, hiệu hai vế bằng $\sum_{i < j}(a_ib_j - a_jb_i)^2 \ge 0$.

**Chứng minh 2 (dùng tam thức bậc hai):** xét $f(t) = (a_1t - b_1)^2 + \dots + (a_nt - b_n)^2 \ge 0$ với mọi $t$. Khai triển:
$$f(t) = \left(\sum a_i^2\right)t^2 - 2\left(\sum a_ib_i\right)t + \sum b_i^2.$$
Tam thức không âm với mọi $t$ nên $\Delta' \le 0$, tức là $\left(\sum a_ib_i\right)^2 - \sum a_i^2\sum b_i^2 \le 0$.

### 5. Dạng phân thức của Cauchy-Schwarz (bổ đề Engel, BĐT Svac-xơ)
Với $b_i > 0$:
$$\frac{a_1^2}{b_1} + \frac{a_2^2}{b_2} + \dots + \frac{a_n^2}{b_n} \ge \frac{(a_1 + a_2 + \dots + a_n)^2}{b_1 + b_2 + \dots + b_n}.$$
Dấu "=" khi $\frac{a_1}{b_1} = \frac{a_2}{b_2} = \dots$

**Chứng minh 1:** áp dụng Cauchy-Schwarz cho hai bộ $\left(\frac{a_i}{\sqrt{b_i}}\right)$ và $\left(\sqrt{b_i}\right)$:
$\left(\sum a_i\right)^2 = \left(\sum\frac{a_i}{\sqrt{b_i}}\cdot\sqrt{b_i}\right)^2 \le \sum\frac{a_i^2}{b_i}\cdot\sum b_i$.

**Chứng minh 2 (sơ cấp, cho hai số hạng):** $\frac{a^2}{x} + \frac{b^2}{y} \ge \frac{(a + b)^2}{x + y}$. Quy đồng rồi chuyển vế, bất đẳng thức tương đương $(ay - bx)^2 \ge 0$. Áp dụng liên tiếp nhiều lần sẽ được trường hợp $n$ số hạng.

**Hệ quả quan trọng** (chọn $a_i = 1$):
$$\frac1a + \frac1b \ge \frac{4}{a + b}, \qquad \frac1a + \frac1b + \frac1c \ge \frac{9}{a + b + c}.$$

**Mẹo dùng Engel:** khi tử không phải bình phương, hãy **nhân thêm** để tạo bình phương, ví dụ $\frac{a}{b + c} = \frac{a^2}{a(b + c)}$.

### 6. Các bất đẳng thức phụ hay dùng (với $a, b, c > 0$)
| Bất đẳng thức | Chứng minh nhanh |
|---|---|
| $a^3 + b^3 \ge ab(a + b)$ | Hiệu bằng $(a + b)(a - b)^2 \ge 0$ |
| $\frac{a^2}{b} \ge 2a - b$ | Hiệu bằng $\frac{(a - b)^2}{b} \ge 0$ |
| $a^4 + b^4 \ge a^3b + ab^3$ | Hiệu bằng $(a - b)(a^3 - b^3) = (a-b)^2(a^2 + ab + b^2) \ge 0$ |
| $(a+b)(b+c)(c+a) \ge 8abc$ | Nhân ba bất đẳng thức $a + b \ge 2\sqrt{ab}$, ... |
| $(a+b)(b+c)(c+a) \ge \frac89(a+b+c)(ab+bc+ca)$ | Xem dưới |

*Chứng minh dòng cuối:* đặt $p = a + b + c$, $q = ab + bc + ca$, $r = abc$. Theo Chủ đề 1, $(a + b)(b + c)(c + a) = pq - r$. Theo AM-GM, $p \ge 3\sqrt[3]{r}$ và $q \ge 3\sqrt[3]{r^2}$, nên $pq \ge 9r$, tức là $r \le \frac{pq}{9}$. Do đó $pq - r \ge \frac{8pq}{9}$.

**Bất đẳng thức Chebyshev (dạng đơn giản):** nếu $(a - b)(x - y) \ge 0$ (hai dãy "cùng chiều") thì $ax + by \ge \frac{(a + b)(x + y)}{2}$.
*Chứng minh:* $2(ax + by) - (a + b)(x + y) = (a - b)(x - y) \ge 0$.

**Bất đẳng thức Schur (nâng cao):** với $a, b, c \ge 0$,
$$a(a - b)(a - c) + b(b - a)(b - c) + c(c - a)(c - b) \ge 0.$$
*Gợi ý chứng minh:* giả sử $a \ge b \ge c$. Số hạng cuối $c(c - a)(c - b) \ge 0$. Hai số hạng đầu bằng $(a - b)\left[a(a - c) - b(b - c)\right] \ge 0$ vì $a \ge b$ và $a - c \ge b - c \ge 0$.

### 7. Các kỹ thuật chứng minh và vì sao hiệu quả

| Kỹ thuật | Ý tưởng | Vì sao hoạt động |
|---|---|---|
| **Biến đổi tương đương** | Đưa về bất đẳng thức hiển nhiên, thường là tổng bình phương | Mỗi bước đều "khi và chỉ khi", nên điều cuối đúng thì điều đầu đúng |
| **SOS (tổng bình phương)** | Viết $VT - VP = S_a(b-c)^2 + S_b(c-a)^2 + S_c(a-b)^2$ | Bình phương không âm, chỉ cần kiểm tra hệ số |
| **Chọn điểm rơi AM-GM** | Tách hoặc thêm bớt để các số hạng **bằng nhau** tại dấu "=" | AM-GM chỉ xảy ra dấu "=" khi các số bằng nhau |
| **AM-GM ngược dấu** | $\frac{a}{1 + b^2} = a - \frac{ab^2}{1 + b^2} \ge a - \frac{ab^2}{2b}$ | Đánh giá phần **bị trừ** thì đổi được chiều bất đẳng thức |
| **Cauchy-Schwarz dạng Engel** | Nhân thêm để tử là bình phương | Biến tổng phân thức thành một phân thức |
| **Tiếp tuyến** | Tìm $f(x) \ge \alpha x + \beta$ có dấu "=" tại điểm rơi | Cộng lại và dùng điều kiện $\sum x_i$ cố định |
| **Chuẩn hóa** | Bất đẳng thức thuần nhất thì được giả sử $a + b + c = 1$ (hoặc $= 3$) | Nhân mọi biến với cùng một số dương không làm thay đổi bất đẳng thức |
| **Đổi biến** | $abc = 1$ thì đặt $a = \frac1x$ hoặc $a = \frac xy$, ... | Đưa về dạng quen thuộc |
| **Dùng biên** | $a \in [m; M]$ thì $(a - m)(a - M) \le 0$; $a, b, c \in [0; 1]$ thì $(1-a)(1-b)(1-c) \ge 0$ | Tạo bất đẳng thức đa thức từ điều kiện chặn |
| **Dirichlet** | Trong ba số $a - 1, b - 1, c - 1$ có hai số cùng dấu | Có ngay $(a - 1)(b - 1) \ge 0$ |

**Giải thích kỹ hơn về "điểm rơi".** Giả sử cần tìm GTNN của $a + \frac1a$ với $a \ge 2$. Áp dụng ngay $a + \frac1a \ge 2$ thì dấu "=" ở $a = 1$, không thuộc miền xét, nên kết quả sai. Ta dự đoán GTNN đạt tại $a = 2$, khi đó $\frac1a = \frac12$. Muốn áp dụng AM-GM cho hai số **bằng nhau** tại $a = 2$, ta ghép $\frac1a$ với $\frac a4$ (vì $\frac24 = \frac12$), phần còn lại $\frac{3a}{4}$ đánh giá trực tiếp bằng $a \ge 2$.

**Giải thích kỹ hơn về "tiếp tuyến".** Muốn chứng minh $f(a) + f(b) + f(c) \ge 3f(1)$ khi $a + b + c = 3$: nếu chứng minh được $f(x) \ge f(1) + k(x - 1)$ với mọi $x$ trong miền xét, cộng ba bất đẳng thức sẽ được $\sum f \ge 3f(1) + k(a + b + c - 3) = 3f(1)$. Đường thẳng $y = f(1) + k(x - 1)$ phải "chạm" đồ thị tại $x = 1$, nên đó là tiếp tuyến tại điểm rơi. Học sinh chưa học đạo hàm có thể tìm $k$ bằng yêu cầu: hiệu $f(x) - f(1) - k(x - 1)$ phải chứa nhân tử $(x - 1)^2$.

### 8. Quy trình làm bài bất đẳng thức
1. **Dự đoán điểm rơi** (thường là các biến bằng nhau, hoặc tại biên như một biến bằng 0).
2. Nhận dạng: bất đẳng thức **đối xứng** hay **hoán vị vòng quanh**? Có **thuần nhất** không (nếu có thì chuẩn hóa được)?
3. Chọn kỹ thuật phù hợp, đảm bảo **mọi bước đánh giá đều có dấu "=" tại cùng một điểm rơi**.
4. Kết luận và **chỉ rõ khi nào dấu "=" xảy ra**.

**Lỗi hay gặp:**
- Dấu "=" ở các bước không xảy ra đồng thời, nên kết quả cuối không đạt được.
- Áp dụng AM-GM cho số âm (AM-GM chỉ đúng với số không âm).
- Chia hoặc nhân hai vế với biểu thức chưa biết dấu.

---

## II. Bài tập vận dụng

**Bài 1.** Chứng minh với mọi số thực $a, b, c$: $a^2 + b^2 + c^2 \ge ab + bc + ca$. Suy ra $(a+b+c)^2 \ge 3(ab+bc+ca)$.

**Bài 2.** Cho $a, b, c > 0$. Chứng minh $(a + b)(b + c)(c + a) \ge 8abc$.

**Bài 3.** Cho $a, b > 0$ và $a + b = 1$. Tìm giá trị nhỏ nhất của $P = \left(1 + \frac1a\right)\left(1 + \frac1b\right)$.

**Bài 4 (điểm rơi).** Cho $a \ge 2$. Tìm giá trị nhỏ nhất của $A = a + \frac1a$.

**Bài 5 (Nesbitt).** Cho $a, b, c > 0$. Chứng minh $\frac{a}{b+c} + \frac{b}{c+a} + \frac{c}{a+b} \ge \frac32$.

**Bài 6.** Cho $a, b, c > 0$. Chứng minh $\frac{a^3}{b} + \frac{b^3}{c} + \frac{c^3}{a} \ge ab + bc + ca$.

**Bài 7 (Cauchy-Schwarz).** Cho $a^2 + b^2 + c^2 = 1$. Tìm giá trị lớn nhất của $a + 2b + 2c$.

**Bài 8.** Cho $a, b, c \in [0; 1]$. Chứng minh $a + b + c - ab - bc - ca \le 1$.

**Bài 9 (AM-GM ngược dấu).** Cho $a, b, c > 0$ và $a + b + c = 3$. Chứng minh
$$\frac{a}{1 + b^2} + \frac{b}{1 + c^2} + \frac{c}{1 + a^2} \ge \frac32.$$

**Bài 10 (USAMO 1997).** Cho $a, b, c > 0$. Chứng minh
$$\frac{1}{a^3 + b^3 + abc} + \frac{1}{b^3 + c^3 + abc} + \frac{1}{c^3 + a^3 + abc} \le \frac{1}{abc}.$$

**Bài 11 (IMO 1995).** Cho $a, b, c > 0$ và $abc = 1$. Chứng minh
$$\frac{1}{a^3(b + c)} + \frac{1}{b^3(c+a)} + \frac{1}{c^3(a+b)} \ge \frac32.$$

**Bài 12 (tiếp tuyến).** Cho $a, b, c > 0$ và $a + b + c = 1$. Chứng minh
$$\frac{a}{1 + a^2} + \frac{b}{1 + b^2} + \frac{c}{1 + c^2} \le \frac{9}{10}.$$

**Bài 13 (thi chuyên).** Cho $x, y > 0$ và $x + y \le 1$. Tìm giá trị nhỏ nhất của $P = \frac{1}{x^2 + y^2} + \frac{2}{xy}$.

**Bài 14 (thi chuyên).** Cho $a, b, c > 0$ và $ab + bc + ca = 3$. Chứng minh
$$\frac{1}{a^2 + 2} + \frac{1}{b^2 + 2} + \frac{1}{c^2 + 2} \le 1.$$

**Bài 15 (khó, SOS).** Cho $a, b, c > 0$. Chứng minh
$$\frac{a^2 + b^2 + c^2}{ab + bc + ca} + \frac{8abc}{(a+b)(b+c)(c+a)} \ge 2.$$

---

## III. Lời giải chi tiết

### Bài 1
$2(a^2 + b^2 + c^2) - 2(ab + bc + ca) = (a - b)^2 + (b - c)^2 + (c - a)^2 \ge 0$. Dấu "=" khi $a = b = c$.
Cộng $2(ab+bc+ca)$ vào hai vế của $a^2 + b^2 + c^2 \ge ab + bc + ca$ ta được $(a + b + c)^2 \ge 3(ab + bc + ca)$.

### Bài 2
Theo AM-GM: $a + b \ge 2\sqrt{ab}$, $b + c \ge 2\sqrt{bc}$ và $c + a \ge 2\sqrt{ca}$. Nhân ba bất đẳng thức (các vế đều dương):
$$(a+b)(b+c)(c+a) \ge 8\sqrt{a^2b^2c^2} = 8abc.$$
Dấu "=" khi $a = b = c$.

### Bài 3
$P = 1 + \frac1a + \frac1b + \frac{1}{ab} = 1 + \frac{a + b}{ab} + \frac1{ab} = 1 + \frac{2}{ab}$.
Vì $ab \le \frac{(a+b)^2}{4} = \frac14$ nên $P \ge 1 + 8 = 9$. Dấu "=" khi $a = b = \frac12$.

**Giá trị nhỏ nhất:** $P_{\min} = 9$.

### Bài 4
**Sai lầm thường gặp:** $a + \frac1a \ge 2$, nhưng dấu "=" khi $a = 1$, không thỏa mãn $a \ge 2$.

**Chọn điểm rơi:** dự đoán giá trị nhỏ nhất đạt tại $a = 2$. Khi đó $\frac1a = \frac12$, và ta cần tách $a$ thành $ka + (1-k)a$ sao cho $ka = \frac1a$ tại $a = 2$, tức là $2k = \frac12$, hay $k = \frac14$:
$$A = \left(\frac a4 + \frac1a\right) + \frac{3a}{4} \ge 2\sqrt{\frac a4\cdot\frac1a} + \frac{3\cdot 2}{4} = 1 + \frac32 = \frac52.$$
Dấu "=" khi $\frac a4 = \frac1a$ và $a = 2$, cả hai đều thỏa mãn tại $a = 2$.

**Giá trị nhỏ nhất:** $A_{\min} = \frac52$ tại $a = 2$.

### Bài 5
**Cách 1 (Cauchy-Schwarz dạng Engel):**
$$\sum \frac{a}{b + c} = \sum\frac{a^2}{a(b+c)} \ge \frac{(a + b + c)^2}{2(ab + bc + ca)} \ge \frac{3(ab+bc+ca)}{2(ab+bc+ca)} = \frac32.$$
(Bước cuối dùng Bài 1.)

**Cách 2 (thêm 1 vào mỗi số hạng):** Đặt $S = a + b + c$, ta có $\frac{a}{b+c} + 1 = \frac{S}{b+c}$. Do đó
$$VT + 3 = S\left(\frac1{b+c} + \frac1{c+a} + \frac1{a+b}\right) \ge S\cdot\frac{9}{2S} = \frac92,$$
nên $VT \ge \frac32$. Dấu "=" khi $a = b = c$.

### Bài 6
Theo AM-GM: $\frac{a^3}{b} + ab \ge 2\sqrt{a^4} = 2a^2$. Tương tự cho hai số hạng còn lại. Cộng lại:
$$\sum\frac{a^3}{b} \ge 2(a^2 + b^2 + c^2) - (ab + bc + ca) \ge 2(ab+bc+ca) - (ab+bc+ca) = ab + bc + ca.$$
Dấu "=" khi $a = b = c$.

### Bài 7
Theo Cauchy-Schwarz: $(1\cdot a + 2\cdot b + 2\cdot c)^2 \le (1^2 + 2^2 + 2^2)(a^2 + b^2 + c^2) = 9$, nên $a + 2b + 2c \le 3$.
Dấu "=" khi $\frac a1 = \frac b2 = \frac c2 = k > 0$ và $k^2 + 4k^2 + 4k^2 = 1$, tức là $k = \frac13$: $a = \frac13$, $b = c = \frac23$.

**Giá trị lớn nhất:** $3$.

### Bài 8
Vì $a, b, c \in [0;1]$ nên $(1 - a)(1 - b)(1 - c) \ge 0$. Khai triển:
$$1 - (a + b + c) + (ab + bc + ca) - abc \ge 0 \iff a + b + c - ab - bc - ca \le 1 - abc \le 1.$$
Dấu "=" xảy ra, chẳng hạn, khi $a = 1$, $b = c = 0$.

### Bài 9
Vì AM-GM cho mẫu $1 + b^2 \ge 2b$ sẽ được chiều "$\le$" (ngược chiều cần chứng minh), ta tách như sau:
$$\frac{a}{1 + b^2} = a - \frac{ab^2}{1 + b^2} \ge a - \frac{ab^2}{2b} = a - \frac{ab}{2}.$$
Cộng ba bất đẳng thức tương tự:
$$VT \ge (a + b + c) - \frac{ab + bc + ca}{2} \ge 3 - \frac{1}{2}\cdot\frac{(a+b+c)^2}{3} = 3 - \frac32 = \frac32.$$
Dấu "=" khi $a = b = c = 1$.

### Bài 10
Bổ đề: $a^3 + b^3 \ge ab(a + b)$, vì $a^3 + b^3 - ab(a+b) = (a + b)(a - b)^2 \ge 0$.
Suy ra $a^3 + b^3 + abc \ge ab(a + b) + abc = ab(a + b + c)$, nên
$$\frac{1}{a^3 + b^3 + abc} \le \frac{1}{ab(a+b+c)} = \frac{c}{abc(a+b+c)}.$$
Cộng ba bất đẳng thức tương tự: $VT \le \frac{a + b + c}{abc(a + b + c)} = \frac{1}{abc}$. Dấu "=" khi $a = b = c$.

### Bài 11
Đặt $x = \frac1a$, $y = \frac1b$, $z = \frac1c$, khi đó $xyz = 1$. Ta có
$$\frac{1}{a^3(b + c)} = \frac{x^3}{\frac1y + \frac1z} = \frac{x^3yz}{y + z} = \frac{x^2}{y + z} \quad (\text{vì } xyz = 1).$$
Theo Cauchy-Schwarz dạng Engel và AM-GM:
$$VT = \sum\frac{x^2}{y+z} \ge \frac{(x + y + z)^2}{2(x+y+z)} = \frac{x + y + z}{2} \ge \frac{3\sqrt[3]{xyz}}{2} = \frac32.$$
Dấu "=" khi $a = b = c = 1$.

### Bài 12
Điểm rơi tại $a = b = c = \frac13$. Xét $f(x) = \frac{x}{1+x^2}$ với $0 < x < 1$; ta tìm đánh giá dạng $f(x) \le \alpha x + \beta$ có dấu "=" tại $x = \frac13$ (đường tiếp tuyến). Kết quả tìm được: $f(x) \le \frac{36x + 3}{50}$.

**Chứng minh:** $\frac{x}{1 + x^2} \le \frac{36x + 3}{50} \iff 50x \le (36x + 3)(1 + x^2) \iff 36x^3 + 3x^2 - 14x + 3 \ge 0 \iff (3x - 1)^2(4x + 3) \ge 0$, luôn đúng với $x > 0$.
(Kiểm tra: $(9x^2 - 6x + 1)(4x + 3) = 36x^3 + 27x^2 - 24x^2 - 18x + 4x + 3 = 36x^3 + 3x^2 - 14x + 3$.)

Cộng ba bất đẳng thức: $VT \le \frac{36(a + b + c) + 9}{50} = \frac{45}{50} = \frac{9}{10}$. Dấu "=" khi $a = b = c = \frac13$.

> **Cách tìm $\alpha, \beta$:** $\alpha = f'\left(\frac13\right) = \frac{1 - x^2}{(1+x^2)^2}\Big|_{x = 1/3} = \frac{18}{25}$ và $\beta = f\left(\frac13\right) - \frac{\alpha}{3} = \frac{3}{10} - \frac{6}{25} = \frac{3}{50}$. Học sinh lớp 9 chưa học đạo hàm có thể tìm $\alpha$ bằng điều kiện "$(3x-1)^2$ là nhân tử" của hiệu hai vế.

### Bài 13
Dự đoán điểm rơi $x = y = \frac12$. Khi đó $x^2 + y^2 = 2xy = \frac12$. Tách $\frac{2}{xy} = \frac{1}{2xy} + \frac{3}{2xy}$:
- Theo hệ quả $\frac1u + \frac1v \ge \frac{4}{u+v}$: $\frac{1}{x^2+y^2} + \frac{1}{2xy} \ge \frac{4}{(x+y)^2} \ge 4$.
- $xy \le \frac{(x+y)^2}{4} \le \frac14$, nên $\frac{3}{2xy} \ge 6$.

Do đó $P \ge 10$. Dấu "=" khi $x = y = \frac12$.

**Giá trị nhỏ nhất:** $P_{\min} = 10$.

### Bài 14
Ta có $\frac{1}{a^2 + 2} = \frac12\left(1 - \frac{a^2}{a^2 + 2}\right)$. Bất đẳng thức tương đương với
$$\frac32 - \frac12\sum\frac{a^2}{a^2 + 2} \le 1 \iff \sum\frac{a^2}{a^2+2} \ge 1.$$
Theo Cauchy-Schwarz dạng Engel:
$$\sum\frac{a^2}{a^2 + 2} \ge \frac{(a + b + c)^2}{a^2 + b^2 + c^2 + 6} = \frac{(a+b+c)^2}{a^2 + b^2 + c^2 + 2(ab + bc + ca)} = 1.$$
(Dùng $6 = 2(ab + bc + ca)$.) Dấu "=" khi $a = b = c = 1$.

### Bài 15
Đặt $q = ab + bc + ca$ và $R = (a+b)(b+c)(c+a)$.

**Bước 1: viết hai vế dưới dạng SOS.**
- $\frac{a^2+b^2+c^2}{q} - 1 = \frac{(a-b)^2 + (b-c)^2 + (c-a)^2}{2q}$.
- $1 - \frac{8abc}{R} = \frac{R - 8abc}{R}$. Khai triển ta có đẳng thức
  $R - 8abc = a(b-c)^2 + b(c-a)^2 + c(a-b)^2$
  (cả hai vế đều bằng $a^2b + a^2c + b^2a + b^2c + c^2a + c^2b - 6abc$).

Do đó bất đẳng thức tương đương với
$$S_a(b-c)^2 + S_b(c-a)^2 + S_c(a-b)^2 \ge 0, \quad\text{trong đó } S_a = \frac{1}{2q} - \frac{a}{R}$$
(và $S_b, S_c$ tương tự). Nhận xét: $S_a \ge 0 \iff R \ge 2aq$.

**Bước 2: một đẳng thức hữu ích.** $(b + c)(c + a) = ab + bc + ca + c^2 = q + c^2$, nên $R = (a + b)(q + c^2)$.

**Bước 3: đánh giá các hệ số.** Không mất tổng quát, giả sử $a \ge b \ge c$.
- $S_c \ge 0$: $R = (a+b)(q + c^2) \ge 2c\cdot q$ vì $a + b \ge 2c$.
- $S_b \ge 0$: $R = (a+b)(q + c^2) \ge 2b\cdot q$ vì $a + b \ge 2b$.
- $S_a + S_b \ge 0$: $S_a + S_b = \frac1q - \frac{a+b}{R} \ge 0 \iff R \ge (a+b)q \iff (a+b)(q + c^2) \ge (a+b)q$, luôn đúng.

($S_a$ có thể âm khi $a$ rất lớn so với $b, c$, nên ta không thể đánh giá riêng từng hệ số.)

**Bước 4: kết luận.** Vì $a - c \ge b - c \ge 0$ nên $(c - a)^2 \ge (b - c)^2$. Kết hợp với $S_b \ge 0$:
$$S_a(b-c)^2 + S_b(c-a)^2 + S_c(a-b)^2 \ge (S_a + S_b)(b-c)^2 + S_c(a-b)^2 \ge 0.$$
Dấu "=" khi $a = b = c$.

> **Tiêu chuẩn SOS hay dùng:** với $a \ge b \ge c$, nếu $S_b \ge 0$, $S_c \ge 0$ và $S_a + S_b \ge 0$ thì $\sum S_a(b-c)^2 \ge 0$. Đây là bài **rất khó**, có thể bỏ qua ở lần học đầu.
