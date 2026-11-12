# Thẻ ghi nhớ: Phương trình bậc hai, Viète

## Công thức nghiệm

### Công thức nghiệm từ đâu ra?
Hoàn thành bình phương: $ax^2 + bx + c = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a^2}\right]$ với $\Delta = b^2 - 4ac$.

### Công thức thu gọn khi $b = 2b'$?
$\Delta' = b'^2 - ac$, $x_{1,2} = \frac{-b' \pm \sqrt{\Delta'}}{a}$.

### Nhẩm nghiệm khi $a + b + c = 0$ hoặc $a - b + c = 0$?
- $a + b + c = 0$: $x_1 = 1$, $x_2 = \frac ca$.
- $a - b + c = 0$: $x_1 = -1$, $x_2 = -\frac ca$.

### Khi nào chắc chắn có hai nghiệm trái dấu?
Khi $ac < 0$ (lúc đó tự động $\Delta > 0$).

## Viète

### Định lý Viète?
$x_1 + x_2 = -\frac ba$, $x_1x_2 = \frac ca$.

*Chứng minh đẹp:* $ax^2 + bx + c = a(x - x_1)(x - x_2)$, so sánh hệ số.

### Viète đảo? Điều kiện tồn tại?
$u + v = S$, $uv = P$ thì $u, v$ là nghiệm của $X^2 - SX + P = 0$. Cần $S^2 - 4P \ge 0$.

### Viète cho phương trình bậc ba $ax^3 + bx^2 + cx + d = 0$?
$$\sum x_i = -\frac ba, \quad \sum x_ix_j = \frac ca, \quad x_1x_2x_3 = -\frac da.$$

### $x_1^2 + x_2^2$, $x_1^3 + x_2^3$, $(x_1 - x_2)^2$ theo $S, P$?
$$S^2 - 2P, \qquad S^3 - 3SP, \qquad S^2 - 4P.$$

### Truy hồi cho $S_n = x_1^n + x_2^n$?
$S_{n+2} = S\cdot S_{n+1} - P\cdot S_n$.

### Biểu thức không đối xứng như $x_1^2 + 2x_2$ xử lý thế nào?
Hạ bậc bằng chính phương trình: $ax_1^2 = -bx_1 - c$.

### Tìm hệ thức giữa hai nghiệm không phụ thuộc tham số?
Từ $S$ và $P$ (theo $m$), khử $m$.

## Dấu nghiệm, so sánh nghiệm

### Điều kiện hai nghiệm dương phân biệt?
$\Delta > 0$, $S > 0$, $P > 0$.

### Điều kiện $x_1 < \alpha < x_2$?
$a\cdot f(\alpha) < 0$, vì $a f(\alpha) = a^2(\alpha - x_1)(\alpha - x_2)$.

### Tam thức không âm với mọi $x$ ($a > 0$) thì sao?
$\Delta \le 0$. Đây là một cách chứng minh Cauchy-Schwarz.

### Chứng minh "ít nhất một trong hai phương trình có nghiệm"?
Chứng minh tổng (có trọng số) các $\Delta$ không âm.

## Quy về bậc hai

### Trùng phương có 4 nghiệm phân biệt khi nào?
Phương trình theo $t = x^2$ có hai nghiệm **dương** phân biệt.

### Phương trình hồi quy $ax^4 + bx^3 + cx^2 + bx + a = 0$?
Chia $x^2$, đặt $t = x + \frac1x$ (với $|t| \ge 2$), $x^2 + \frac1{x^2} = t^2 - 2$.

### $(x + a)(x + b)(x + c)(x + d) = m$ với $a + d = b + c$?
Ghép $(x + a)(x + d)$ và $(x + b)(x + c)$, đặt ẩn phụ cho phần chung $x^2 + (a + d)x$.

### Tìm $m$ để hai phương trình có nghiệm chung?
Gọi $x_0$ là nghiệm chung, trừ vế để khử $x_0^2$, tìm $x_0$, thay lại. Kiểm tra trường hợp hai phương trình trùng nhau.

### Parabol $y = ax^2$ và đường thẳng: tiếp xúc khi nào?
Phương trình hoành độ giao điểm có $\Delta = 0$.
