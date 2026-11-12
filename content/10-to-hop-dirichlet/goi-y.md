# Gợi ý từng tầng: Tổ hợp, Dirichlet, bất biến

## Bài 1 | 1
**Ý tưởng:** Chia hình vuông thành 4 hình vuông nhỏ cạnh 1 (4 chuồng, 5 thỏ).

### Gợi ý 1
Số $\sqrt2$ là đường chéo của hình vuông cạnh bao nhiêu? Chia hình vuông lớn thành các hình như vậy.

### Gợi ý 2
4 hình vuông cạnh 1, 5 điểm: có hai điểm cùng một hình vuông nhỏ, khoảng cách không quá đường chéo $\sqrt2$.

## Bài 2 | 2
**Ý tưởng:** Xét các tổng tiền tố $S_k = a_1 + \dots + a_k$ theo modulo 10.

### Gợi ý 1
Các số được chọn nên là một đoạn liên tiếp $a_{i+1}, \dots, a_j$. Tổng của một đoạn liên tiếp bằng hiệu hai tổng nào?

### Gợi ý 2
Nếu không có $S_k$ nào chia hết cho 10, thì 10 tổng chỉ có 9 số dư khác 0, nên có $S_i \equiv S_j$; khi đó $S_j - S_i$ chia hết cho 10.

## Bài 3 | 2
**Ý tưởng:** 2028 số $1, 11, 111, \dots$ có hai số cùng dư khi chia cho 2027; hiệu là $\underbrace{1\dots1}_{m-n}\cdot 10^n$.

### Gợi ý 1
Xét 2028 số dạng $\underbrace{11\dots1}_k$. Dirichlet nói gì về số dư của chúng khi chia cho 2027?

### Gợi ý 2
Hiệu hai số cùng dư có dạng $\underbrace{1\dots1}_{m-n}\cdot 10^n$. Dùng $\gcd(10^n, 2027) = 1$.

## Bài 4 | 2
**Ý tưởng:** a) 50 cặp số liên tiếp; b) 50 nhóm theo phần lẻ $m$ trong $n = 2^k m$.

### Gợi ý 1
a) Hai số liên tiếp luôn nguyên tố cùng nhau; chia tập thành 50 cặp thích hợp. b) Viết mỗi số dưới dạng $2^k\cdot m$ với $m$ lẻ. Có bao nhiêu giá trị $m$?

### Gợi ý 2
b) Có 50 giá trị lẻ $m$ từ 1 đến 99. 51 số thì có hai số cùng $m$: $2^{k_1}m$ và $2^{k_2}m$, số này chia hết cho số kia.

## Bài 5 | 2
**Ý tưởng:** Xét người $A$; 5 người còn lại chia hai nhóm quen/không quen, một nhóm có $\ge 3$ người.

### Gợi ý 1
Cố định một người $A$. Chia 5 người còn lại theo quan hệ với $A$.

### Gợi ý 2
Giả sử $B, C, D$ đều quen $A$. Nếu hai người trong $B, C, D$ quen nhau thì xong; nếu không thì $B, C, D$ đôi một không quen.

## Bài 6 | 2
**Ý tưởng:** Bất biến: tính chẵn lẻ của tổng các số trên bảng.

### Gợi ý 1
Khi thay $a, b$ bằng $|a - b|$, tổng các số thay đổi bao nhiêu? Lượng đó chẵn hay lẻ?

### Gợi ý 2
Tổng giảm $a + b - |a - b|$, luôn chẵn. Tổng ban đầu $\frac{2025\cdot 2026}{2}$ lẻ, nên số cuối cùng lẻ.

## Bài 7 | 1
**Ý tưởng:** Tô màu bàn cờ: hai góc đối diện cùng màu; mỗi domino phủ 1 đen 1 trắng.

### Gợi ý 1
Tô bàn cờ đen trắng xen kẽ. Hai ô bị cắt có màu gì? Mỗi quân domino phủ những màu nào?

### Gợi ý 2
Còn 32 ô một màu và 30 ô màu kia, nhưng 31 quân domino phủ 31 ô mỗi màu.

## Bài 8 | 1
**Ý tưởng:** Chia trường hợp chữ số cuối $d = 0$ và $d = 5$.

### Gợi ý 1
Chia hết cho 5 thì chữ số tận cùng là 0 hoặc 5. Xét riêng hai trường hợp vì điều kiện "chữ số đầu khác 0" ảnh hưởng khác nhau.

### Gợi ý 2
$d = 0$: $9\cdot 8\cdot 7$. $d = 5$: chữ số đầu có 8 cách (khác 0, 5), rồi $8\cdot 7$.

## Bài 9 | 2
**Ý tưởng:** Nguyên lý bù trừ cho ba tập bội của 2, 3, 5, rồi lấy phần bù.

### Gợi ý 1
Đếm số các số chia hết cho **ít nhất một** trong 2, 3, 5, rồi lấy 1000 trừ đi.

### Gợi ý 2
$|A_2 \cup A_3 \cup A_5| = 500 + 333 + 200 - 166 - 100 - 66 + 33$.

## Bài 10 | 3
**Ý tưởng:** Cực hạn: chọn cách ghép có tổng độ dài nhỏ nhất; nếu hai đoạn cắt nhau thì đổi cặp làm tổng giảm.

### Gợi ý 1
Có hữu hạn cách ghép cặp. Chọn cách ghép "tốt nhất" theo một đại lượng nào đó và chứng minh nó không có đoạn cắt nhau.

### Gợi ý 2
Chọn cách có tổng độ dài nhỏ nhất. Nếu $R_1X_1$ cắt $R_2X_2$ tại $O$, thay bằng $R_1X_2$, $R_2X_1$; bất đẳng thức tam giác cho tổng nhỏ hơn.

## Bài 11 | 2
**Ý tưởng:** Bất biến: số dư của hiệu hai đống khi chia cho 3.

### Gợi ý 1
Sau một bước $(x, y, z) \to (x - 1, y - 1, z + 2)$, các hiệu $x - y$, $x - z$ thay đổi bao nhiêu?

### Gợi ý 2
Mỗi hiệu thay đổi 0 hoặc $\pm 3$, nên số dư modulo 3 không đổi. Ban đầu $19 - 8 \equiv 2$, đích là $0$.
