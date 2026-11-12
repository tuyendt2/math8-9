# Thẻ ghi nhớ: Phương trình nghiệm nguyên

## Phương pháp

### Ý tưởng chung khi giải phương trình nghiệm nguyên?
Dùng tính chất số nguyên để thu hẹp về hữu hạn trường hợp, hoặc chỉ ra mâu thuẫn.

### Phương pháp ước số: vì sao hiệu quả?
Đưa về $A\cdot B = c$ ($c \ne 0$). $A$ phải là ước của $c$, mà $c$ chỉ có hữu hạn ước.

### Đưa $axy + bx + cy = d$ về dạng tích thế nào?
Nhân với $a$ rồi thêm $bc$: $(ax + c)(ay + b) = ad + bc$.

### Đưa $x^2 + bx + c = y^2$ về dạng tích thế nào?
Nhân 4: $(2x + b - 2y)(2x + b + 2y) = b^2 - 4c$. Hai thừa số cùng tính chẵn lẻ.

### Phương pháp xét số dư: vì sao đúng?
Hai số bằng nhau thì cùng số dư khi chia cho mọi $m$. Nếu hai vế luôn khác số dư thì vô nghiệm.

### Nên thử modulo nào cho $x^2$, $x^3$, $x^4$?
- $x^2$: mod 3, 4, 8.
- $x^3$: mod 7, 9 (số dư $0, \pm1$).
- $x^4$: mod 16 (số dư 0, 1).

### Số nào là hiệu hai bình phương?
Đúng các số không có dạng $4k + 2$.

### Tổng ba bình phương không bao giờ đồng dư mấy theo mod 8?
Không bao giờ $\equiv 7 \pmod 8$.

### Phương pháp kẹp: nguyên lý?
Không có số chính phương nằm giữa $X^2$ và $(X + 1)^2$. Nếu $X^n < Y^n < (X + 2)^n$ thì $Y = X + 1$.

### Tích $t(t + 1)$ là số chính phương khi nào?
Chỉ khi $t = 0$ hoặc $t = -1$.

### Phương trình đối xứng: vì sao được giả sử $x \le y \le z$? Cần nhớ gì?
Hoán vị nghiệm vẫn là nghiệm. Nhớ liệt kê lại các hoán vị ở đáp số.

### Phương pháp $\Delta$: hai điều kiện cần?
1. $\Delta \ge 0$ (chặn ẩn còn lại).
2. $\Delta$ là số chính phương.

### Phương pháp lùi vô hạn: dấu hiệu và ý tưởng?
Phương trình thuần nhất (như $x^2 + y^2 = 3z^2$). Từ một nghiệm khác 0 suy ra nghiệm nhỏ hơn thực sự, mâu thuẫn với nghiệm nhỏ nhất.

## Bậc nhất và trình bày

### $ax + by = c$ có nghiệm nguyên khi nào?
Khi $\gcd(a, b) \mid c$.

### Nghiệm tổng quát của $ax + by = c$ khi biết một nghiệm $(x_0; y_0)$?
$x = x_0 + \frac bd t$, $y = y_0 - \frac ad t$ với $d = \gcd(a, b)$, $t \in \mathbb Z$.

### Ba lưu ý khi trình bày bài nghiệm nguyên?
1. Đọc kỹ: nguyên, nguyên dương hay tự nhiên.
2. Mọi bước "suy ra" là điều kiện cần, nên thử lại.
3. Đổi biến thì nhớ điều kiện của biến mới.
