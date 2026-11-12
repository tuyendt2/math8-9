# Chủ đề 6. Hệ phương trình

## I. Kiến thức cần nắm

### 1. Hệ phương trình bậc nhất hai ẩn
Hệ $\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2\end{cases}$. Nhân phương trình (1) với $b_2$, phương trình (2) với $b_1$ rồi trừ để khử $y$:
$$(a_1b_2 - a_2b_1)x = c_1b_2 - c_2b_1.$$
Tương tự khử $x$. Đặt $D = a_1b_2 - a_2b_1$, $D_x = c_1b_2 - c_2b_1$, $D_y = a_1c_2 - a_2c_1$:
- $D \ne 0$: nghiệm duy nhất $x = \frac{D_x}{D}$, $y = \frac{D_y}{D}$;
- $D = 0$ và ($D_x \ne 0$ hoặc $D_y \ne 0$): vô nghiệm;
- $D = D_x = D_y = 0$: vô số nghiệm (hoặc vô nghiệm trong trường hợp suy biến khi mọi hệ số bằng 0).

**Ý nghĩa hình học:** mỗi phương trình là một đường thẳng; hai đường thẳng cắt nhau, song song hoặc trùng nhau ứng với ba trường hợp trên.

### 2. Phương pháp cơ bản
- **Thế:** rút một ẩn từ phương trình đơn giản rồi thay vào phương trình còn lại. Luôn dùng được nếu rút được một ẩn.
- **Cộng đại số:** nhân các phương trình với hệ số thích hợp rồi cộng hoặc trừ để khử một ẩn, khử hằng số, hoặc tạo **hằng đẳng thức**.

### 3. Hệ đối xứng loại I
**Nhận biết:** mỗi phương trình không đổi khi đổi chỗ $x \leftrightarrow y$.
**Cách giải:** đặt $S = x + y$, $P = xy$, giải hệ theo $S, P$, rồi tìm $x, y$ là nghiệm của $X^2 - SX + P = 0$.

**Vì sao luôn đặt được $S, P$?** Mọi đa thức đối xứng theo $x, y$ đều biểu diễn được qua $S$ và $P$. Ví dụ:
$x^2 + y^2 = S^2 - 2P$; $\ x^3 + y^3 = S^3 - 3SP$; $\ x^2y + xy^2 = SP$; $\ x^4 + y^4 = (S^2 - 2P)^2 - 2P^2$.

**Vì sao cần điều kiện $S^2 \ge 4P$?** Vì $S^2 - 4P = (x - y)^2 \ge 0$ với $x, y$ thực. Bỏ qua điều kiện này sẽ nhận nhầm các cặp $(S; P)$ không cho nghiệm thực.

**Lưu ý:** mỗi cặp $(S; P)$ hợp lệ cho hai nghiệm $(x; y)$ và $(y; x)$, trừ khi $x = y$.

### 4. Hệ đối xứng loại II
**Nhận biết:** đổi chỗ $x \leftrightarrow y$ thì phương trình này biến thành phương trình kia.
**Cách giải:** trừ vế theo vế để được $(x - y)\cdot g(x, y) = 0$, rồi xét hai trường hợp $x = y$ và $g(x, y) = 0$.

**Vì sao hiệu luôn chứa nhân tử $x - y$?** Hiệu hai phương trình có dạng $F(x, y) - F(y, x)$. Biểu thức này bằng 0 khi $x = y$, nên (coi như đa thức theo $x$, có nghiệm $x = y$) nó chia hết cho $x - y$, theo định lý Bézout.
**Mẹo:** trường hợp $g(x, y) = 0$ thường là hệ đối xứng loại I, kết hợp với phương trình **tổng** của hai phương trình ban đầu.

### 5. Hệ đẳng cấp
**Nhận biết:** vế trái các phương trình là đa thức **đẳng cấp** cùng bậc (mọi số hạng có tổng số mũ bằng nhau), ví dụ $ax^2 + bxy + cy^2 = d$.
**Cách giải 1:** xét $y = 0$ riêng; nếu $y \ne 0$ thì đặt $x = ty$. Vì đa thức đẳng cấp bậc $k$ thỏa mãn $F(ty, y) = y^kF(t, 1)$, chia hai phương trình cho nhau sẽ khử được $y$, còn lại phương trình theo $t$.
**Cách giải 2:** nhân phương trình (1) với $d_2$, phương trình (2) với $d_1$ rồi trừ để **khử hằng số**, được một phương trình đẳng cấp bằng 0, sau đó phân tích thành nhân tử dạng $(\alpha x - \beta y)(\gamma x - \delta y) = 0$.

### 6. Kỹ thuật nâng cao

**a) Đặt ẩn phụ.** Tìm các biểu thức lặp lại: $x^2 + x$, $x + \frac1y$, $\frac xy$, $\sqrt{x + y}$, ... Sau khi đặt, hệ mới thường là đối xứng hoặc bậc nhất.

**b) Tạo hằng đẳng thức.** Nhân một phương trình với hằng số $k$ rồi cộng vào phương trình kia để được dạng $(x + a)^3 = (y + b)^3$, $(x + a)^2 = (y + b)^2$, hoặc tổng bình phương bằng 0.
*Cách tìm $k$:* viết dạng mong muốn, chẳng hạn $(x - 1)^3 = x^3 - 3x^2 + 3x - 1$, rồi chọn $k$ để hệ số của $x^2$ khớp; sau đó kiểm tra phần còn lại có khớp không.

**c) Hàm đơn điệu.** Nếu hệ đưa được về $f(x) = f(y)$ với $f$ đồng biến thực sự thì $x = y$.
*Vì sao?* Nếu $x < y$ thì $f(x) < f(y)$; nếu $x > y$ thì $f(x) > f(y)$. Chỉ còn $x = y$.
*Ví dụ:* $f(t) = t^3 + t$ đồng biến vì $f(x) - f(y) = (x - y)(x^2 + xy + y^2 + 1)$ và thừa số thứ hai luôn dương.

**d) Đánh giá.** Dùng bất đẳng thức để chứng minh vế này $\ge$ vế kia, nên hệ chỉ có nghiệm khi dấu "=" xảy ra. Ví dụ $x + y + z = 3$ và $x^2 + y^2 + z^2 = 3$ cho $(x-1)^2 + (y-1)^2 + (z-1)^2 = 0$.

**e) Hệ ba ẩn dạng tổng, tổng tích đôi, tích.** Nếu biết $x + y + z = p$, $xy + yz + zx = q$, $xyz = r$ thì theo Viète bậc ba, $x, y, z$ là ba nghiệm của
$$t^3 - pt^2 + qt - r = 0.$$
*Ví dụ:* $p = 6$, $q = 11$, $r = 6$ cho $t^3 - 6t^2 + 11t - 6 = (t - 1)(t - 2)(t - 3)$, nên $(x, y, z)$ là hoán vị của $(1, 2, 3)$.

**f) Thế liên tiếp với hệ hoán vị vòng quanh.** Với hệ dạng $y = f(x)$, $z = f(y)$, $x = f(z)$, không được vội kết luận $x = y = z$; hãy thế liên tiếp để được phương trình một ẩn, hoặc chứng minh bằng tính đơn điệu.

### 7. Lưu ý khi trình bày
- Đặt **điều kiện xác định** trước (mẫu khác 0, biểu thức dưới căn không âm).
- Mỗi khi chia hai vế cho một biểu thức, phải xét riêng trường hợp biểu thức đó bằng 0.
- **Thử lại** nghiệm vào hệ ban đầu, đặc biệt khi đã bình phương hoặc nhân hai vế với biểu thức chứa ẩn.

---

## II. Bài tập vận dụng

**Bài 1.** $\begin{cases} x + y + xy = 5 \\ x^2y + xy^2 = 6\end{cases}$

**Bài 2.** $\begin{cases} x^2 = 3x + 2y \\ y^2 = 3y + 2x\end{cases}$

**Bài 3.** $\begin{cases} x^2 - 2xy + 3y^2 = 9 \\ 2x^2 - 13xy + 15y^2 = 0\end{cases}$

**Bài 4.** $\begin{cases} x^2 + y^2 + x + y = 18 \\ x(x+1)\,y(y+1) = 72\end{cases}$

**Bài 5.** $\begin{cases} x^3 - y^3 = 9 \\ x^2 + 2y^2 = x - 4y\end{cases}$

**Bài 6.** $\begin{cases} x + y + \sqrt{xy} = 14 \\ x^2 + y^2 + xy = 84\end{cases}$

**Bài 7.** $\begin{cases} x + y + z = 3 \\ x^2 + y^2 + z^2 = 3\end{cases}$; từ đó tính $x^{2026} + y^{2026} + z^{2026}$.

**Bài 8.** $\begin{cases} x^3 + 3x = y^3 + 3y \\ x^2 + y^2 = 8\end{cases}$

**Bài 9 (khó).** Giải hệ $\begin{cases} x + \frac1y = 3 \\ y + \frac1z = 3 \\ z + \frac1x = 3\end{cases}$ với $x, y, z$ khác 0.

**Bài 10 (khó).** $\begin{cases} 2x^2 + xy - y^2 - 5x + y + 2 = 0 \\ x^2 + y^2 + x + y - 4 = 0\end{cases}$

---

## III. Lời giải chi tiết

### Bài 1
Đặt $S = x + y$ và $P = xy$: $\begin{cases} S + P = 5 \\ SP = 6\end{cases}$, nên $(S, P) = (2, 3)$ hoặc $(3, 2)$.
- $(S,P) = (2,3)$: $S^2 - 4P = -8 < 0$, loại.
- $(S,P) = (3,2)$: $x, y$ là nghiệm của $X^2 - 3X + 2 = 0$, tức là $\{x,y\} = \{1, 2\}$.

**Đáp số:** $(1,2), (2,1)$.

### Bài 2
Trừ vế theo vế: $x^2 - y^2 = (3x + 2y) - (3y + 2x) = x - y$, nên $(x - y)(x + y - 1) = 0$.
- **$x = y$:** $x^2 = 5x$, nên $x = 0$ hoặc $x = 5$. Ta được $(0,0)$ và $(5,5)$.
- **$y = 1 - x$:** $x^2 = 3x + 2 - 2x = x + 2$, nên $x^2 - x - 2 = 0$, tức là $x = 2$ hoặc $x = -1$. Ta được $(2,-1)$ và $(-1,2)$.

Thử lại $(2,-1)$: $4 = 6 - 2$ và $1 = -3 + 4$, đúng.

**Đáp số:** $(0,0), (5,5), (2,-1), (-1,2)$.

### Bài 3
Phương trình thứ hai phân tích được: $2x^2 - 13xy + 15y^2 = (2x - 3y)(x - 5y) = 0$.
- **$x = \frac{3y}{2}$:** $\frac{9y^2}{4} - 3y^2 + 3y^2 = 9$, nên $y^2 = 4$, $y = \pm2$ và $x = \pm 3$ (cùng dấu).
- **$x = 5y$:** $25y^2 - 10y^2 + 3y^2 = 18y^2 = 9$, nên $y = \pm\frac{\sqrt2}{2}$ và $x = \pm\frac{5\sqrt2}{2}$ (cùng dấu).

**Đáp số:** $(3,2), (-3,-2), \left(\frac{5\sqrt2}2, \frac{\sqrt2}2\right), \left(-\frac{5\sqrt2}2, -\frac{\sqrt2}2\right)$.

### Bài 4
Đặt $a = x^2 + x$ và $b = y^2 + y$: $\begin{cases} a + b = 18 \\ ab = 72\end{cases}$, nên $\{a, b\} = \{6, 12\}$.
- $x^2 + x = 6 \iff x \in \{2, -3\}$.
- $x^2 + x = 12 \iff x \in \{3, -4\}$.

**Đáp số (8 nghiệm):** $x \in \{2, -3\}, y \in \{3, -4\}$, hoặc $x \in \{3,-4\}, y \in \{2,-3\}$. Cụ thể:
$(2,3), (2,-4), (-3,3), (-3,-4), (3,2), (3,-3), (-4,2), (-4,-3)$.

### Bài 5
Lấy phương trình (1) trừ 3 lần phương trình (2):
$$x^3 - y^3 - 3x^2 - 6y^2 = 9 - 3x + 12y \iff x^3 - 3x^2 + 3x - 1 = y^3 + 6y^2 + 12y + 8,$$
tức là $(x - 1)^3 = (y + 2)^3 \iff x = y + 3$.

Thay vào (2): $(y+3)^2 + 2y^2 = (y + 3) - 4y \iff 3y^2 + 9y + 6 = 0 \iff y^2 + 3y + 2 = 0$, nên $y = -1$ hoặc $y = -2$.

**Đáp số:** $(2, -1), (1, -2)$. Thử lại: $8 + 1 = 9$ và $4 + 2 = 2 + 4$; $1 + 8 = 9$ và $1 + 8 = 1 + 8$.

> **Làm sao tìm được hệ số 3?** Ta muốn $x^3 + \alpha x^2 + \dots$ thành $(x - 1)^3 = x^3 - 3x^2 + 3x - 1$, nên chọn hệ số $-3$ cho $x^2$. Kiểm tra phần $y$ cũng khớp với $(y+2)^3$.

### Bài 6
Điều kiện: $xy \ge 0$. Vì $x^2 + y^2 + xy = (x+y)^2 - xy = (x + y - \sqrt{xy})(x + y + \sqrt{xy})$, chia phương trình (2) cho (1) ta được
$$x + y - \sqrt{xy} = 6.$$
Kết hợp với (1): $x + y = 10$ và $\sqrt{xy} = 4$, tức là $xy = 16$. Khi đó $x, y$ là nghiệm của $X^2 - 10X + 16 = 0$, nên $\{x, y\} = \{2, 8\}$.

**Đáp số:** $(2,8), (8,2)$.

### Bài 7
$(x - 1)^2 + (y - 1)^2 + (z - 1)^2 = (x^2+y^2+z^2) - 2(x+y+z) + 3 = 3 - 6 + 3 = 0$.
Suy ra $x = y = z = 1$, và $x^{2026} + y^{2026} + z^{2026} = 3$.

### Bài 8
Phương trình (1) tương đương với
$$(x - y)(x^2 + xy + y^2 + 3) = 0.$$
Vì $x^2 + xy + y^2 + 3 = \left(x + \frac y2\right)^2 + \frac{3y^2}{4} + 3 > 0$ nên $x = y$. Thay vào (2): $2x^2 = 8$, nên $x = \pm2$.

**Đáp số:** $(2,2), (-2,-2)$.

### Bài 9
**Thế liên tiếp để đưa về một ẩn.**
- Từ phương trình (3): $z = 3 - \frac1x = \frac{3x - 1}{x}$ (khi đó $x \ne \frac13$ vì $z \ne 0$).
- Từ phương trình (2): $y = 3 - \frac1z = 3 - \frac{x}{3x - 1} = \frac{8x - 3}{3x - 1}$.
- Thay vào phương trình (1): $x + \frac{3x - 1}{8x - 3} = 3$
  $\iff x(8x - 3) + 3x - 1 = 3(8x - 3) \iff 8x^2 - 24x + 8 = 0 \iff x^2 - 3x + 1 = 0.$

Do đó $x = \frac{3 \pm \sqrt5}{2}$. Khi $x^2 - 3x + 1 = 0$ thì $x + \frac1x = 3$, nên $z = 3 - \frac1x = x$, rồi $y = 3 - \frac1z = 3 - \frac1x = x$.

**Đáp số:** $x = y = z = \frac{3 + \sqrt5}{2}$ hoặc $x = y = z = \frac{3 - \sqrt5}{2}$.

> **Nhận xét:** Hệ không có nghiệm nào với $x, y, z$ khác nhau, dù hệ là "hoán vị vòng quanh". Với loại hệ này, thế liên tiếp là cách chắc chắn nhất; đừng vội kết luận $x = y = z$ mà không chứng minh.

### Bài 10
Coi phương trình (1) là phương trình bậc hai theo $y$: $-y^2 + (x + 1)y + (2x^2 - 5x + 2) = 0$, hay
$$y^2 - (x+1)y - (2x^2 - 5x + 2) = 0.$$
$\Delta = (x+1)^2 + 4(2x^2 - 5x + 2) = 9x^2 - 18x + 9 = 9(x - 1)^2$ là bình phương đúng, nên
$$y = \frac{(x + 1) \pm 3(x-1)}{2} \iff y = 2x - 1 \text{ hoặc } y = 2 - x.$$
- **$y = 2x - 1$:** thay vào (2): $x^2 + (2x-1)^2 + x + 2x - 1 - 4 = 0 \iff 5x^2 - x - 4 = 0 \iff x = 1$ hoặc $x = -\frac45$. Ta được $(1, 1)$ và $\left(-\frac45, -\frac{13}{5}\right)$.
- **$y = 2 - x$:** thay vào (2): $x^2 + (2-x)^2 + 2 - 4 = 0 \iff 2x^2 - 4x + 2 = 0 \iff x = 1$. Ta được $(1,1)$.

Thử lại $\left(-\frac45, -\frac{13}5\right)$ trong (2): $\frac{16}{25} + \frac{169}{25} - \frac45 - \frac{13}5 - 4 = \frac{185}{25} - \frac{17}{5} - 4 = 7{,}4 - 3{,}4 - 4 = 0$, đúng.

**Đáp số:** $(1,1), \left(-\frac45, -\frac{13}{5}\right)$.

> **Kỹ thuật:** khi một phương trình bậc hai của hệ có $\Delta$ (theo một ẩn) là bình phương đúng, phương trình đó phân tích được thành tích hai nhân tử bậc nhất.
