# Thẻ ghi nhớ: Tổ hợp, Dirichlet, bất biến

## Dirichlet

### Nguyên lý Dirichlet dạng tổng quát?
$N$ thỏ vào $k$ chuồng thì có chuồng chứa ít nhất $\left\lceil\frac Nk\right\rceil$ con.

### Bài toán chia hết / hiệu chia hết cho $n$: chọn "chuồng" là gì?
Các số dư khi chia cho $n$.

### Bài toán "chọn một số số có tổng chia hết cho $n$": chọn gì?
Số dư của các tổng tiền tố $S_k = a_1 + \dots + a_k$.

### Chọn số trong $\{1, \dots, 2n\}$: hai cách chia chuồng?
Các cặp $\{2k - 1; 2k\}$ (hai số liên tiếp); các nhóm cùng phần lẻ $\{m, 2m, 4m, \dots\}$.

### Điểm trong hình: chọn chuồng thế nào?
Chia hình thành các phần nhỏ (ô vuông, tam giác, hình quạt) sao cho hai điểm trong một phần cách nhau không quá khoảng cách cần.

### Số Ramsey $R(3, 3)$ nói gì?
Trong 6 người luôn có 3 người đôi một quen hoặc 3 người đôi một không quen; 5 người thì chưa chắc.

## Bất biến, cực hạn, tô màu

### Bất biến dùng để chứng minh điều gì? Lưu ý logic?
Chứng minh "không thể đạt tới". Cùng giá trị bất biến **chưa chắc** đi được tới nhau.

### Các bất biến hay gặp?
Tính chẵn lẻ của tổng; số dư của tổng/hiệu modulo $k$; tích $\prod(x + 1)$; tổng đan dấu; số ô mỗi màu.

### Đơn biến là gì và dùng làm gì?
Đại lượng nguyên dương giảm thực sự sau mỗi bước, nên quá trình phải dừng sau hữu hạn bước.

### Nguyên lý cực hạn: cách dùng?
Xét đối tượng cực hạn (nhỏ nhất, lớn nhất). Giả sử nó không có tính chất cần chứng minh, xây dựng đối tượng "cực hạn hơn", mâu thuẫn.

### Tô màu bàn cờ với domino $1\times 2$?
Mỗi domino phủ 1 ô đen 1 ô trắng, nên vùng phủ kín phải có số ô đen bằng số ô trắng.

## Đếm

### Quy tắc cộng và quy tắc nhân?
Cộng: làm cách A **hoặc** cách B (không trùng). Nhân: bước 1 **rồi** bước 2.

### Công thức $P_n$, $A_n^k$, $C_n^k$?
$$P_n = n!, \quad A_n^k = \frac{n!}{(n-k)!}, \quad C_n^k = \frac{n!}{k!(n-k)!}.$$

### Vì sao $C_n^k = \frac{A_n^k}{k!}$?
Mỗi tập con $k$ phần tử được đếm $k!$ lần trong $A_n^k$ (theo các thứ tự sắp xếp).

### Hằng đẳng thức Pascal và lý do?
$C_{n+1}^k = C_n^k + C_n^{k-1}$: tập con không chứa hoặc có chứa một phần tử cố định.

### Số đường chéo của đa giác lồi $n$ cạnh?
$\frac{n(n-3)}{2}$.

### Chia kẹo Euler: số nghiệm nguyên không âm của $x_1 + \dots + x_k = n$?
$C_{n+k-1}^{k-1}$ (xếp $n$ ngôi sao và $k - 1$ vạch ngăn).

### Khi nào đếm phần bù?
Khi điều kiện "có ít nhất một ..." khó đếm trực tiếp.

### Nguyên lý bù trừ cho ba tập?
$$|A\cup B\cup C| = |A| + |B| + |C| - |A\cap B| - |B\cap C| - |C\cap A| + |A\cap B\cap C|.$$

### Số bội của $d$ trong $\{1, \dots, N\}$?
$\left\lfloor\frac Nd\right\rfloor$.

## Trò chơi

### Vị trí thua (P) và vị trí thắng (N)?
P: mọi nước đi đều dẫn tới vị trí N. N: có ít nhất một nước đi tới vị trí P. Tìm bằng cách xét các trường hợp nhỏ từ cuối.

### Chiến lược đối xứng?
Đáp trả bằng nước đi "đối xứng" để giữ một tính chất (tổng hai lượt bằng hằng số, bố cục đối xứng qua tâm).
