# Thẻ ghi nhớ: Hệ phương trình

## Các loại hệ

### Hệ bậc nhất hai ẩn: ba trường hợp theo $D = a_1b_2 - a_2b_1$?
- $D \ne 0$: nghiệm duy nhất $x = \frac{D_x}{D}$, $y = \frac{D_y}{D}$.
- $D = 0$, $D_x$ hoặc $D_y \ne 0$: vô nghiệm.
- $D = D_x = D_y = 0$: vô số nghiệm (trừ trường hợp suy biến).

Hình học: hai đường thẳng cắt nhau, song song, trùng nhau.

### Hệ đối xứng loại I: nhận biết và cách giải?
Mỗi phương trình không đổi khi đổi $x \leftrightarrow y$. Đặt $S = x + y$, $P = xy$; $x, y$ là nghiệm của $X^2 - SX + P = 0$.

### Điều kiện bắt buộc khi đặt $S, P$?
$S^2 \ge 4P$, vì $S^2 - 4P = (x - y)^2$.

### $x^4 + y^4$ theo $S, P$?
$(S^2 - 2P)^2 - 2P^2$.

### Hệ đối xứng loại II: nhận biết và cách giải?
Đổi $x \leftrightarrow y$ thì hai phương trình đổi cho nhau. Trừ vế được $(x - y)g(x, y) = 0$.

### Vì sao hiệu hai phương trình của hệ loại II chứa $x - y$?
Hiệu dạng $F(x,y) - F(y,x)$ bằng 0 khi $x = y$, nên chia hết cho $x - y$ (Bézout).

### Hệ đẳng cấp: hai cách giải?
1. Xét $y = 0$; nếu $y \ne 0$ đặt $x = ty$, chia hai phương trình cho nhau.
2. Khử hằng số để được phương trình đẳng cấp bằng 0, phân tích thành $(\alpha x - \beta y)(\gamma x - \delta y) = 0$.

## Kỹ thuật

### Tạo hằng đẳng thức: tìm hệ số $k$ thế nào?
Viết dạng mong muốn, ví dụ $(x - 1)^3 = x^3 - 3x^2 + 3x - 1$, chọn $k$ để hệ số $x^2$ khớp, rồi kiểm tra phần còn lại.

### Hàm đơn điệu trong hệ phương trình?
Đưa về $f(x) = f(y)$ với $f$ đồng biến thực sự thì $x = y$. Ví dụ $f(t) = t^3 + t$.

### Hệ ba ẩn biết $x + y + z = p$, $xy + yz + zx = q$, $xyz = r$?
$x, y, z$ là ba nghiệm của $t^3 - pt^2 + qt - r = 0$.

### Hệ hoán vị vòng quanh $y = f(x)$, $z = f(y)$, $x = f(z)$: cẩn thận gì?
Không vội kết luận $x = y = z$. Thế liên tiếp về một ẩn hoặc chứng minh bằng tính đơn điệu.

### Một phương trình bậc hai của hệ có $\Delta$ là bình phương đúng thì sao?
Phương trình đó phân tích được thành tích hai nhân tử bậc nhất.

### Ba lưu ý khi trình bày bài hệ phương trình?
1. Đặt điều kiện xác định.
2. Chia cho biểu thức thì xét riêng trường hợp nó bằng 0.
3. Thử lại nghiệm vào hệ ban đầu.
