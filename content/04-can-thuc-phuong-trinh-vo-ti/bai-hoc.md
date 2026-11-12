# Chủ đề 4. Căn thức và phương trình vô tỉ

## I. Kiến thức cần nắm

### 1. Căn bậc hai số học
**Định nghĩa.** Với $a \ge 0$, $\sqrt a$ là số $x$ **không âm** sao cho $x^2 = a$. Ví dụ $\sqrt 9 = 3$, không phải $\pm 3$ (số 9 có hai căn bậc hai là $\pm3$, nhưng ký hiệu $\sqrt 9$ chỉ căn số học, tức là căn không âm).
- $\sqrt A$ xác định khi và chỉ khi $A \ge 0$, và luôn có $\sqrt A \ge 0$.

**Vì sao $\sqrt{A^2} = \lvert A\rvert$?** Vì $\sqrt{A^2}$ phải là số không âm có bình phương bằng $A^2$, và số đó là $\lvert A\rvert$. Đây là lỗi hay gặp nhất:
$\sqrt{(1 - \sqrt2)^2} = \lvert 1 - \sqrt2\rvert = \sqrt2 - 1$, chứ không phải $1 - \sqrt2$.

**Quy tắc nhân và chia.** Với $A, B \ge 0$: $\sqrt{AB} = \sqrt A\cdot\sqrt B$; với $A \ge 0, B > 0$: $\sqrt{\frac AB} = \frac{\sqrt A}{\sqrt B}$.
*Chứng minh:* $\sqrt A\cdot\sqrt B \ge 0$ và $\left(\sqrt A\sqrt B\right)^2 = AB$, nên theo định nghĩa $\sqrt A\sqrt B = \sqrt{AB}$.
> **Cảnh báo:** $\sqrt{(-4)(-9)} = 6$, nhưng $\sqrt{-4}\cdot\sqrt{-9}$ không xác định. Quy tắc chỉ đúng khi các biểu thức dưới căn không âm. Khi $A, B \le 0$: $\sqrt{AB} = \sqrt{-A}\sqrt{-B}$.

**Đưa thừa số ra ngoài và vào trong dấu căn.** Với $B \ge 0$: $\sqrt{A^2B} = \lvert A\rvert\sqrt B$. Ngược lại $A\sqrt B = \sqrt{A^2B}$ nếu $A \ge 0$, và $A\sqrt B = -\sqrt{A^2B}$ nếu $A < 0$.

**So sánh hai căn.** Với $0 \le a < b$ thì $\sqrt a < \sqrt b$.
*Chứng minh:* $\sqrt b - \sqrt a = \frac{b - a}{\sqrt a + \sqrt b} > 0$.
Ví dụ so sánh $\sqrt 2 + \sqrt 7$ và $\sqrt 3 + \sqrt 6$: bình phương được $9 + 2\sqrt{14}$ và $9 + 2\sqrt{18}$, nên $\sqrt2 + \sqrt7 < \sqrt3 + \sqrt6$.

### 2. Căn bậc ba
- $\sqrt[3]a$ là số $x$ duy nhất sao cho $x^3 = a$; xác định với **mọi** số thực $a$ (kể cả số âm, ví dụ $\sqrt[3]{-8} = -2$).
- $\left(\sqrt[3]a\right)^3 = \sqrt[3]{a^3} = a$; $\quad\sqrt[3]{ab} = \sqrt[3]a\cdot\sqrt[3]b$; $\quad a < b \iff \sqrt[3]a < \sqrt[3]b$.
- Vì vậy phép **lập phương hai vế** luôn là phép biến đổi tương đương (khác với bình phương).

### 3. Các kỹ thuật biến đổi và lý do

**a) Căn chồng căn $\sqrt{m \pm 2\sqrt n}$.**
*Vì sao có thể rút gọn?* $(\sqrt a \pm \sqrt b)^2 = a + b \pm 2\sqrt{ab}$. Nếu tìm được $a \ge b \ge 0$ với $a + b = m$ và $ab = n$ (tức $a, b$ là nghiệm của $t^2 - mt + n = 0$) thì
$$\sqrt{m \pm 2\sqrt n} = \sqrt a \pm \sqrt b.$$
*Ví dụ:* $\sqrt{4 + 2\sqrt3}$: $a + b = 4$, $ab = 3$, nên $a = 3$, $b = 1$, kết quả là $\sqrt3 + 1$.
Nếu đề cho $\sqrt{m \pm \sqrt n}$ thì viết $\sqrt n = 2\sqrt{\frac n4}$; ví dụ $\sqrt{7 - \sqrt{48}} = \sqrt{7 - 2\sqrt{12}} = 2 - \sqrt3$.

**b) Trục căn ở mẫu (nhân liên hợp).**
*Vì sao nhân với "liên hợp"?* Để dùng hằng đẳng thức làm mất căn:
- $(\sqrt a - \sqrt b)(\sqrt a + \sqrt b) = a - b$, nên $\frac{1}{\sqrt a + \sqrt b} = \frac{\sqrt a - \sqrt b}{a - b}$;
- $(\sqrt[3]a - \sqrt[3]b)\left(\sqrt[3]{a^2} + \sqrt[3]{ab} + \sqrt[3]{b^2}\right) = a - b$ (HĐT $x^3 - y^3$).

**c) Tính $x = \sqrt[3]a + \sqrt[3]b$.** Dùng $(u + v)^3 = u^3 + v^3 + 3uv(u + v)$ (chứng minh: khai triển $(u+v)^3$ rồi nhóm $3u^2v + 3uv^2 = 3uv(u+v)$). Ta được
$$x^3 = a + b + 3\sqrt[3]{ab}\cdot x,$$
là phương trình bậc ba theo $x$, thường có nghiệm nguyên dễ nhẩm.

**d) Một số bất đẳng thức hay dùng với căn** (với $a, b \ge 0$):
- $\sqrt{a + b} \le \sqrt a + \sqrt b$ (bình phương hai vế: $a + b \le a + b + 2\sqrt{ab}$);
- $\sqrt a + \sqrt b \le \sqrt{2(a + b)}$ (bình phương hai vế: tương đương $(\sqrt a - \sqrt b)^2 \ge 0$);
- $\sqrt{ab} \le \frac{a + b}{2}$ (AM-GM).

### 4. Phương trình vô tỉ: vì sao phải đặt điều kiện và thử lại

**Bình phương hai vế không phải phép biến đổi tương đương.** Từ $A = B$ suy ra $A^2 = B^2$, nhưng $A^2 = B^2$ chỉ cho $A = \pm B$. Bình phương có thể **sinh nghiệm ngoại lai**.
*Ví dụ:* $\sqrt x = x - 2$. Bình phương: $x = x^2 - 4x + 4$, nên $x = 1$ hoặc $x = 4$. Nhưng $x = 1$ cho $1 = -1$, sai. Chỉ có $x = 4$ là nghiệm.

**Các dạng chuẩn (biến đổi tương đương):**
- $\sqrt A = B \iff \begin{cases} B \ge 0 \\ A = B^2\end{cases}$ (không cần ghi $A \ge 0$ vì $A = B^2$ đã đảm bảo).
- $\sqrt A = \sqrt B \iff \begin{cases} A \ge 0 \ (\text{hoặc } B \ge 0) \\ A = B\end{cases}$
- $\sqrt[3]A = B \iff A = B^3$.

### 5. Các phương pháp giải phương trình vô tỉ

| Phương pháp | Dấu hiệu nhận biết | Lưu ý |
|---|---|---|
| **Nâng lũy thừa** | Có 1–2 căn, sau khi bình phương được phương trình bậc thấp | Dùng dạng chuẩn ở mục 4 |
| **Đặt ẩn phụ hoàn toàn** | Biểu thức ngoài căn biểu diễn được qua căn | Tìm điều kiện của ẩn phụ |
| **Đặt ẩn phụ không hoàn toàn** | Còn cả $x$ và $t$, coi là phương trình bậc hai theo $t$ | $\Delta$ thường là bình phương đúng |
| **Hai ẩn phụ, đưa về hệ** | Có hai căn khác loại, hoặc dạng $x^n + b = a\sqrt[n]{ax - b}$ | Thường được hệ đối xứng |
| **Nhân liên hợp** | Nhẩm được nghiệm $x_0$ "đẹp" | Phải chứng minh phần còn lại khác 0 |
| **Đẳng cấp** | Dạng $\alpha P + \beta Q = \gamma\sqrt{PQ}$ | Chia cho $Q$, đặt $t = \sqrt{P/Q}$ |
| **Đánh giá** | Một vế $\le c$, vế kia $\ge c$ | Dấu "=" xảy ra đồng thời |
| **Hàm đơn điệu** | Một vế đồng biến, vế kia nghịch biến hoặc hằng | Có không quá một nghiệm |

**Vì sao nhân liên hợp tạo được nhân tử?** Vì $\sqrt A - \sqrt B = \frac{A - B}{\sqrt A + \sqrt B}$. Nếu $x_0$ là nghiệm thì ta ghép các căn sao cho mỗi hiệu $A - B$ đều chứa nhân tử $(x - x_0)$. Ví dụ $x_0 = 3$ và có $\sqrt{x + 1}$ thì ghép thành $\sqrt{x+1} - 2 = \frac{x - 3}{\sqrt{x+1} + 2}$.

**Vì sao phương pháp hàm đơn điệu đúng?** Nếu $f$ đồng biến thực sự thì $x_1 < x_2$ kéo theo $f(x_1) < f(x_2)$, nên phương trình $f(x) = c$ có không quá một nghiệm. Tổng hai hàm đồng biến là hàm đồng biến; các hàm $\sqrt{ax + b}$ với $a > 0$, $x^3$, $\sqrt[3]{x}$ đều đồng biến.

**Vì sao dạng $x^3 + b = a\sqrt[3]{ax - b}$ đưa được về hệ đối xứng?** Đặt $y = \sqrt[3]{ax - b}$ thì $y^3 + b = ax$, còn phương trình là $x^3 + b = ay$. Đổi vai trò $x \leftrightarrow y$ thì hai phương trình đổi cho nhau, đó chính là hệ đối xứng loại II.

---

## II. Bài tập vận dụng

**Bài 1.** Rút gọn: a) $A = \sqrt{4 + 2\sqrt3} - \sqrt{4 - 2\sqrt3}$; $\quad$ b) $B = \sqrt{6 + 2\sqrt{5 - \sqrt{13 + \sqrt{48}}}}$.

**Bài 2.** Tính $S = \frac{1}{\sqrt1 + \sqrt2} + \frac{1}{\sqrt2+\sqrt3} + \dots + \frac{1}{\sqrt{99} + \sqrt{100}}$.

**Bài 3.** Tính $x = \sqrt[3]{2 + \sqrt5} + \sqrt[3]{2 - \sqrt5}$.

**Bài 4.** Chứng minh rằng $\frac{1}{2\sqrt1} + \frac{1}{3\sqrt2} + \frac{1}{4\sqrt3} + \dots + \frac{1}{2026\sqrt{2025}} < 2$.

**Bài 5.** Giải phương trình $\sqrt{x+3} + \sqrt{6 - x} = 3$.

**Bài 6.** Giải phương trình $x^2 + x + 12\sqrt{x+1} = 36$.

**Bài 7.** Giải phương trình $\sqrt{x+3} + \sqrt{3x+1} = 2\sqrt x + \sqrt{2x+2}$.

**Bài 8.** Giải phương trình $\sqrt{x-2} + \sqrt{4-x} = x^2 - 6x + 11$.

**Bài 9.** Giải phương trình $x^3 + 1 = 2\sqrt[3]{2x - 1}$.

**Bài 10 (khó).** Giải phương trình $2(1 - x)\sqrt{x^2 + 2x - 1} = x^2 - 2x - 1$.

---

## III. Lời giải chi tiết

### Bài 1
**a)** $4 \pm 2\sqrt3 = (\sqrt3 \pm 1)^2$, nên $A = (\sqrt3 + 1) - |\sqrt3 - 1| = \sqrt3 + 1 - \sqrt3 + 1 = 2$.

**b)** Tính từ trong ra ngoài:
- $13 + \sqrt{48} = 13 + 4\sqrt3 = (2\sqrt3 + 1)^2$, nên $\sqrt{13+\sqrt{48}} = 2\sqrt3 + 1$.
- $5 - (2\sqrt3+1) = 4 - 2\sqrt3 = (\sqrt3 - 1)^2$, nên căn của nó bằng $\sqrt3 - 1$.
- $6 + 2(\sqrt3 - 1) = 4 + 2\sqrt3 = (\sqrt3+1)^2$.

Vậy $B = \sqrt3 + 1$.

### Bài 2
$\frac{1}{\sqrt k + \sqrt{k+1}} = \frac{\sqrt{k+1} - \sqrt k}{(k+1) - k} = \sqrt{k+1} - \sqrt k$. Cộng lại, các số hạng triệt tiêu dần:
$$S = (\sqrt2 - \sqrt1) + (\sqrt3 - \sqrt2) + \dots + (\sqrt{100} - \sqrt{99}) = 10 - 1 = 9.$$

### Bài 3
Đặt $u = \sqrt[3]{2+\sqrt5}$ và $v = \sqrt[3]{2 - \sqrt5}$. Khi đó $u^3 + v^3 = 4$ và $uv = \sqrt[3]{4 - 5} = -1$.
$$x^3 = u^3 + v^3 + 3uv(u+v) = 4 - 3x \iff x^3 + 3x - 4 = 0 \iff (x - 1)(x^2 + x + 4) = 0.$$
Vì $x^2 + x + 4 = \left(x + \frac12\right)^2 + \frac{15}{4} > 0$ nên $x = 1$.

### Bài 4
Đánh giá từng số hạng:
$$\frac{1}{(k+1)\sqrt k} = \frac{\sqrt k}{k(k+1)} = \sqrt k\left(\frac1k - \frac1{k+1}\right) = \sqrt k\left(\frac{1}{\sqrt k} - \frac{1}{\sqrt{k+1}}\right)\left(\frac{1}{\sqrt k} + \frac{1}{\sqrt{k+1}}\right).$$
Vì $\sqrt k\left(\frac1{\sqrt k} + \frac{1}{\sqrt{k+1}}\right) = 1 + \sqrt{\frac{k}{k+1}} < 2$, nên
$$\frac{1}{(k+1)\sqrt k} < 2\left(\frac{1}{\sqrt k} - \frac{1}{\sqrt{k+1}}\right).$$
Cộng từ $k = 1$ đến $2025$: tổng $< 2\left(1 - \frac{1}{\sqrt{2026}}\right) < 2$.

### Bài 5
Điều kiện: $-3 \le x \le 6$. Đặt $a = \sqrt{x+3} \ge 0$ và $b = \sqrt{6-x} \ge 0$, ta có $a + b = 3$ và $a^2 + b^2 = 9$.
Suy ra $2ab = (a+b)^2 - (a^2+b^2) = 0$, nên $a = 0$ hoặc $b = 0$, tức là $x = -3$ hoặc $x = 6$.
Thử lại: $x = -3$ cho $0 + 3 = 3$; $x = 6$ cho $3 + 0 = 3$. Cả hai đều đúng.

**Đáp số:** $x \in \{-3; 6\}$.

### Bài 6
Điều kiện: $x \ge -1$. Đặt $t = \sqrt{x+1} \ge 0$, khi đó $x = t^2 - 1$ và
$x^2 + x = x(x+1) = (t^2-1)t^2 = t^4 - t^2$. Phương trình trở thành
$$t^4 - t^2 + 12t - 36 = 0 \iff t^4 = t^2 - 12t + 36 = (t - 6)^2 \iff t^2 = |t - 6|.$$
- Nếu $0 \le t \le 6$: $t^2 = 6 - t \iff t^2 + t - 6 = 0 \iff t = 2$ (loại $t = -3$).
- Nếu $t > 6$: $t^2 = t - 6$, vô nghiệm vì $t^2 - t + 6 > 0$.

Với $t = 2$ thì $x = 3$. Thử lại: $9 + 3 + 24 = 36$, đúng.

**Đáp số:** $x = 3$.

### Bài 7
Điều kiện: $x \ge 0$. Chuyển vế để hai vế có hiệu biểu thức dưới căn "giống nhau":
$$\sqrt{3x+1} - \sqrt{2x+2} = 2\sqrt x - \sqrt{x+3}.$$
Nhân liên hợp hai vế (các mẫu đều dương vì $x \ge 0$):
$$\frac{x - 1}{\sqrt{3x+1} + \sqrt{2x+2}} = \frac{4x - (x+3)}{2\sqrt x + \sqrt{x+3}} = \frac{3(x-1)}{2\sqrt x + \sqrt{x+3}}.$$
$$\iff (x - 1)\left[\frac{1}{\sqrt{3x+1} + \sqrt{2x+2}} - \frac{3}{2\sqrt x + \sqrt{x+3}}\right] = 0.$$
Ta chứng minh ngoặc vuông âm, tức là $2\sqrt x + \sqrt{x+3} < 3\sqrt{3x+1} + 3\sqrt{2x+2}$:
- $9(3x+1) = 27x + 9 > 4x$, nên $3\sqrt{3x+1} > 2\sqrt x$;
- $9(2x+2) = 18x + 18 > x + 3$, nên $3\sqrt{2x+2} > \sqrt{x+3}$.

Vậy $x = 1$. Thử lại: $2 + 2 = 2 + 2$, đúng.

### Bài 8
Điều kiện: $2 \le x \le 4$.
- **Vế trái:** theo bất đẳng thức $(a+b)^2 \le 2(a^2+b^2)$:
  $\left(\sqrt{x-2} + \sqrt{4-x}\right)^2 \le 2\left[(x-2) + (4-x)\right] = 4$, nên VT $\le 2$. Dấu "=" xảy ra khi $x - 2 = 4 - x \iff x = 3$.
- **Vế phải:** $x^2 - 6x + 11 = (x-3)^2 + 2 \ge 2$. Dấu "=" xảy ra khi $x = 3$.

Do đó VT = VP khi và chỉ khi cả hai bằng 2, tức là $x = 3$.

### Bài 9
Đặt $y = \sqrt[3]{2x-1}$, ta được hệ đối xứng loại II:
$$\begin{cases} x^3 + 1 = 2y \\ y^3 + 1 = 2x\end{cases}$$
Trừ vế theo vế: $x^3 - y^3 = 2(y - x) \iff (x - y)(x^2 + xy + y^2 + 2) = 0$.
Vì $x^2 + xy + y^2 + 2 = \left(x + \frac y2\right)^2 + \frac{3y^2}{4} + 2 > 0$ nên $x = y$. Khi đó
$$x^3 - 2x + 1 = 0 \iff (x - 1)(x^2 + x - 1) = 0 \iff x = 1 \text{ hoặc } x = \frac{-1 \pm \sqrt5}{2}.$$

**Đáp số:** $x \in \left\{1;\ \frac{-1+\sqrt5}{2};\ \frac{-1-\sqrt5}{2}\right\}$.

### Bài 10
Giải phương trình $2(1-x)\sqrt{x^2 + 2x - 1} = x^2 - 2x - 1$ bằng **ẩn phụ không hoàn toàn**.

Điều kiện: $x^2 + 2x - 1 \ge 0$. Đặt $t = \sqrt{x^2+2x-1} \ge 0$. Ta viết $x^2 - 2x - 1 = t^2 - 4x$, phương trình trở thành
$$t^2 - 2(1-x)t - 4x = 0.$$
Coi đây là phương trình bậc hai theo $t$: $\Delta' = (1-x)^2 + 4x = (1+x)^2$ là bình phương đúng, nên
$$t = (1 - x) \pm (1 + x) \iff t = 2 \text{ hoặc } t = -2x.$$
- **$t = 2$:** $x^2 + 2x - 1 = 4 \iff x^2 + 2x - 5 = 0 \iff x = -1 \pm \sqrt6$.
- **$t = -2x$** (cần $x \le 0$): $x^2 + 2x - 1 = 4x^2 \iff 3x^2 - 2x + 1 = 0$, vô nghiệm ($\Delta' = 1 - 3 < 0$).

Thử lại $x = -1 \pm \sqrt6$: khi đó $x^2 + 2x = 5$, nên $x^2 - 2x - 1 = 4 - 4x$, và VT $= 2(1-x)\cdot 2 = 4 - 4x$ = VP. Cả hai nghiệm đều thỏa mãn.

**Đáp số:** $x = -1 \pm \sqrt6$.
