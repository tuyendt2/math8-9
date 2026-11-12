# Chủ đề 10. Tổ hợp: nguyên lý Dirichlet, bất biến, cực hạn, đếm

## I. Kiến thức cần nắm

### 1. Nguyên lý Dirichlet (nguyên lý chuồng bồ câu)
- **Dạng cơ bản:** nhốt $n + 1$ con thỏ vào $n$ chuồng thì có ít nhất một chuồng chứa từ 2 con trở lên.
  *Chứng minh:* nếu mỗi chuồng có không quá 1 con thì tổng số thỏ không quá $n < n + 1$, mâu thuẫn.
- **Dạng tổng quát:** nhốt $N$ con thỏ vào $k$ chuồng thì có một chuồng chứa ít nhất $\left\lceil\frac Nk\right\rceil$ con (số nguyên nhỏ nhất không nhỏ hơn $\frac Nk$).
  *Chứng minh:* nếu mọi chuồng có không quá $\left\lceil\frac Nk\right\rceil - 1 < \frac Nk$ con thì tổng số thỏ nhỏ hơn $k\cdot\frac Nk = N$.
- **Dạng hình học:** nếu các hình có tổng diện tích (hoặc tổng độ dài) lớn hơn $S$ nằm trong một hình có diện tích (độ dài) $S$ thì có hai hình có điểm chung.

**Kỹ năng then chốt: chọn "thỏ" và "chuồng".**
| Bài toán về | "Chuồng" thường là |
|---|---|
| Chia hết, hiệu chia hết cho $n$ | Các số dư khi chia cho $n$ (có $n$ chuồng) |
| Tổng chia hết cho $n$ | Các cặp số dư $\{r; n - r\}$, hoặc số dư của các tổng tiền tố $S_k = a_1 + \dots + a_k$ |
| Chọn số trong $\{1, \dots, 2n\}$ | Các cặp $\{2k - 1; 2k\}$, hoặc các nhóm "cùng phần lẻ" $\{m, 2m, 4m, \dots\}$ |
| Điểm trong hình | Các phần của hình được chia nhỏ (ô vuông, tam giác, hình quạt) |
| Quen biết, tô màu | Các màu, hoặc các nhóm "quen" và "không quen" |

### 2. Nguyên lý bất biến
Một quá trình biến đổi được lặp lại nhiều lần. Ta tìm một đại lượng **không đổi** sau mỗi bước.
**Vì sao dùng được?** Nếu giá trị bất biến ở trạng thái đầu khác ở trạng thái đích thì không thể đi từ trạng thái đầu đến trạng thái đích.
> **Lưu ý logic:** điều ngược lại không đúng. Hai trạng thái có cùng giá trị bất biến **chưa chắc** đi được tới nhau. Bất biến chỉ dùng để chứng minh "không thể".

**Các bất biến hay gặp:**
- tính chẵn lẻ của tổng (ví dụ phép thay $a, b$ bằng $\lvert a - b\rvert$ hoặc $a + b$);
- số dư của tổng hoặc của hiệu khi chia cho $k$;
- tích (ví dụ phép thay $a, b$ bằng $a + b + ab$ giữ nguyên tích $\prod(x + 1)$);
- tổng đan dấu $a_1 - a_2 + a_3 - \dots$ (khi mỗi lần cộng vào hai ô kề nhau);
- số ô mỗi màu trong phép tô màu.

**Đơn biến (đại lượng chỉ tăng hoặc chỉ giảm):** nếu một đại lượng **nguyên dương giảm thực sự** sau mỗi bước thì quá trình phải dừng sau hữu hạn bước, vì không có dãy số tự nhiên giảm vô hạn.

### 3. Nguyên lý cực hạn
**Phát biểu:** một tập hữu hạn số thực luôn có phần tử lớn nhất và nhỏ nhất; một tập số tự nhiên khác rỗng (có thể vô hạn) luôn có phần tử nhỏ nhất.
**Cách dùng:** xét đối tượng "cực hạn" (khoảng cách nhỏ nhất, tổng độ dài nhỏ nhất, người có nhiều bạn nhất, ...). Giả sử nó không có tính chất cần chứng minh, rồi xây dựng một đối tượng "cực hạn hơn", mâu thuẫn với cách chọn.

### 4. Tô màu
Tô màu bảng hoặc hình (thường kiểu bàn cờ) để đếm hoặc tạo bất biến.
*Ví dụ:* trên bàn cờ đen trắng xen kẽ, mỗi quân domino $1\times 2$ luôn phủ đúng 1 ô đen và 1 ô trắng, vì hai ô kề nhau luôn khác màu. Do đó vùng phủ kín được bằng domino phải có số ô đen bằng số ô trắng.

### 5. Đếm cơ bản
- **Quy tắc cộng:** một việc được làm theo cách A **hoặc** cách B (không trùng nhau), có $m$ cách A và $n$ cách B thì có $m + n$ cách.
- **Quy tắc nhân:** một việc gồm bước 1 **rồi** bước 2, bước 1 có $m$ cách, ứng với mỗi cách đó bước 2 có $n$ cách, thì có $m\cdot n$ cách.

**Hoán vị, chỉnh hợp, tổ hợp** (và vì sao có công thức đó):
| Khái niệm | Công thức | Lý do |
|---|---|---|
| Hoán vị $n$ phần tử (xếp thứ tự) | $P_n = n! = n(n-1)\cdots 1$ | Vị trí đầu có $n$ cách, vị trí thứ hai còn $n - 1$ cách, ... |
| Chỉnh hợp chập $k$ (chọn có thứ tự) | $A_n^k = \frac{n!}{(n-k)!}$ | $n(n-1)\cdots(n - k + 1)$ theo quy tắc nhân |
| Tổ hợp chập $k$ (chọn không thứ tự) | $C_n^k = \frac{n!}{k!(n-k)!}$ | Mỗi tập con $k$ phần tử được đếm $k!$ lần trong $A_n^k$ |

**Tính chất của $C_n^k$:**
- $C_n^k = C_n^{n-k}$: chọn $k$ phần tử cũng là chọn $n - k$ phần tử **bị bỏ lại**.
- **Hằng đẳng thức Pascal** $C_{n+1}^k = C_n^k + C_n^{k-1}$: xét một phần tử cố định $x$; các tập con hoặc không chứa $x$ ($C_n^k$ cách) hoặc chứa $x$ ($C_n^{k-1}$ cách). Đây chính là quy tắc tạo tam giác Pascal ở Chủ đề 1, nên $(a + b)^n = \sum C_n^k a^{n-k}b^k$.

**Các kết quả đếm hay dùng:**
- Số đoạn thẳng nối $n$ điểm: $C_n^2 = \frac{n(n-1)}{2}$ (mỗi điểm nối với $n - 1$ điểm, mỗi đoạn được đếm hai lần).
- Số đường chéo của đa giác lồi $n$ cạnh: $\frac{n(n-1)}{2} - n = \frac{n(n-3)}{2}$.
- Số trận đấu vòng tròn một lượt của $n$ đội: $C_n^2$.
- **Chia kẹo Euler:** số nghiệm nguyên không âm của $x_1 + x_2 + \dots + x_k = n$ là $C_{n+k-1}^{k-1}$.
  *Vì sao?* Mỗi nghiệm ứng với một cách xếp $n$ ngôi sao và $k - 1$ vạch ngăn thành một hàng ($x_1$ là số sao trước vạch thứ nhất, ...). Ta chọn $k - 1$ vị trí cho vạch trong tổng số $n + k - 1$ vị trí.

**Kỹ thuật đếm phần bù:** đếm số cách **không** thỏa mãn rồi lấy tổng trừ đi, khi điều kiện "có ít nhất một ..." khó đếm trực tiếp.

### 6. Nguyên lý bù trừ
$$|A \cup B| = |A| + |B| - |A \cap B|,$$
$$|A \cup B \cup C| = |A| + |B| + |C| - |A\cap B| - |B\cap C| - |C\cap A| + |A\cap B\cap C|.$$
**Vì sao đúng?** Kiểm tra mỗi phần tử được đếm đúng 1 lần ở vế phải:
- phần tử chỉ thuộc một tập: đếm $1$ lần;
- thuộc đúng hai tập: đếm $2 - 1 = 1$ lần;
- thuộc cả ba tập: đếm $3 - 3 + 1 = 1$ lần.

Số bội của $d$ trong $\{1, 2, \dots, N\}$ là $\left\lfloor\frac Nd\right\rfloor$ (phần nguyên của $\frac Nd$).

### 7. Trò chơi và chiến lược
- **Vị trí thua (P):** mọi nước đi đều dẫn tới vị trí thắng cho đối phương. **Vị trí thắng (N):** có ít nhất một nước đi dẫn tới vị trí thua cho đối phương.
- Chiến lược thắng: luôn đưa đối phương vào vị trí thua. Tìm vị trí thua bằng cách **xét các trường hợp nhỏ** từ cuối trở về.
- **Chiến lược đối xứng:** đáp trả nước đi của đối phương bằng nước đi "đối xứng" để giữ một tính chất (ví dụ tổng hai lượt bằng hằng số, hoặc bố cục đối xứng qua tâm).

---

## II. Bài tập vận dụng

**Bài 1.** Trong hình vuông cạnh 2 cho 5 điểm bất kỳ. Chứng minh tồn tại hai điểm có khoảng cách không vượt quá $\sqrt2$.

**Bài 2.** Chứng minh rằng trong 10 số nguyên bất kỳ luôn chọn được một hoặc nhiều số có tổng chia hết cho 10.

**Bài 3.** Chứng minh tồn tại số tự nhiên chỉ gồm toàn chữ số 1 và chia hết cho 2027.

**Bài 4.** Chọn 51 số bất kỳ từ tập $\{1, 2, \dots, 100\}$. Chứng minh:
a) Có hai số nguyên tố cùng nhau.
b) Có hai số mà số này chia hết cho số kia.

**Bài 5.** Trong một nhóm 6 người, hai người bất kỳ hoặc quen nhau hoặc không quen nhau. Chứng minh luôn có 3 người đôi một quen nhau, hoặc 3 người đôi một không quen nhau.

**Bài 6.** Trên bảng ghi các số $1, 2, 3, \dots, 2025$. Mỗi lần, xóa hai số $a, b$ bất kỳ rồi viết thêm số $|a - b|$. Sau 2024 lần, trên bảng còn một số. Số đó có thể bằng 0 không?

**Bài 7.** Bàn cờ $8 \times 8$ bị cắt đi hai ô ở hai góc đối diện. Có thể phủ kín phần còn lại bằng 31 quân domino kích thước $1\times 2$ không?

**Bài 8.** Có bao nhiêu số tự nhiên có 4 chữ số đôi một khác nhau và chia hết cho 5?

**Bài 9.** Có bao nhiêu số nguyên từ 1 đến 1000 không chia hết cho số nào trong ba số 2, 3, 5?

**Bài 10 (khó, cực hạn).** Trên mặt phẳng có $n$ điểm đỏ và $n$ điểm xanh, không có ba điểm nào thẳng hàng. Chứng minh có thể nối mỗi điểm đỏ với đúng một điểm xanh bằng $n$ đoạn thẳng sao cho không có hai đoạn nào cắt nhau.

**Bài 11 (khó, bất biến).** Ba đống sỏi có 19, 8 và 9 viên. Mỗi lần được lấy 1 viên từ mỗi đống trong hai đống bất kỳ rồi bỏ cả 2 viên vào đống thứ ba. Có thể đạt được trạng thái ba đống đều có 12 viên không?

---

## III. Lời giải chi tiết

### Bài 1
Chia hình vuông cạnh 2 thành 4 hình vuông nhỏ cạnh 1 (4 "chuồng"). Theo nguyên lý Dirichlet, có ít nhất 2 trong 5 điểm (5 "thỏ") cùng nằm trong một hình vuông nhỏ (kể cả biên). Khoảng cách giữa hai điểm này không vượt quá đường chéo của hình vuông nhỏ, tức là $\sqrt2$.

### Bài 2
Gọi 10 số là $a_1, \dots, a_{10}$. Xét 10 tổng $S_k = a_1 + a_2 + \dots + a_k$ với $k = 1, \dots, 10$.
- Nếu có $S_k$ chia hết cho 10 thì bài toán được chứng minh.
- Nếu không, 10 tổng chỉ nhận 9 số dư $1, 2, \dots, 9$ khi chia cho 10. Theo Dirichlet, có $S_i \equiv S_j \pmod{10}$ với $i < j$. Khi đó $S_j - S_i = a_{i+1} + \dots + a_j$ chia hết cho 10.

### Bài 3
Xét 2028 số $1, 11, 111, \dots, \underbrace{11\dots1}_{2028}$. Chia cho 2027 chỉ có 2027 số dư, nên có hai số cùng số dư, chẳng hạn $\underbrace{1\dots1}_{m}$ và $\underbrace{1\dots1}_{n}$ với $m > n$. Hiệu của chúng là
$$\underbrace{1\dots1}_{m} - \underbrace{1\dots1}_{n} = \underbrace{1\dots1}_{m - n}\underbrace{0\dots0}_{n} = \underbrace{1\dots1}_{m-n}\cdot 10^n,$$
và hiệu này chia hết cho 2027. Vì $\gcd(10^n, 2027) = 1$ (2027 không chia hết cho 2 và 5) nên $\underbrace{1\dots1}_{m-n}$ chia hết cho 2027.

### Bài 4
**a)** Chia tập $\{1, \dots, 100\}$ thành 50 cặp $\{1,2\}, \{3,4\}, \dots, \{99, 100\}$. Chọn 51 số thì có hai số thuộc cùng một cặp, tức là hai số tự nhiên liên tiếp, và chúng nguyên tố cùng nhau.

**b)** Mỗi số $n \le 100$ viết duy nhất được dưới dạng $n = 2^k\cdot m$ với $m$ lẻ, $m \in \{1, 3, 5, \dots, 99\}$ (50 giá trị). Chọn 51 số thì có hai số cùng "phần lẻ" $m$: $2^{k_1}m$ và $2^{k_2}m$ với $k_1 < k_2$. Khi đó số thứ hai chia hết cho số thứ nhất.

> Con số 51 là tốt nhất: chọn 50 số $51, 52, \dots, 100$ thì không có số nào chia hết cho số khác.

### Bài 5
Xét người $A$ bất kỳ. Năm người còn lại chia thành hai nhóm: quen $A$ và không quen $A$. Theo Dirichlet, có một nhóm có ít nhất 3 người. Giả sử $B, C, D$ đều quen $A$ (trường hợp không quen làm tương tự).
- Nếu hai trong ba người $B, C, D$ quen nhau, chẳng hạn $B$ và $C$, thì $A, B, C$ đôi một quen nhau.
- Nếu không, $B, C, D$ đôi một không quen nhau.

Cả hai trường hợp đều thỏa mãn yêu cầu.

> Với 5 người thì kết luận có thể sai (xếp 5 người thành vòng tròn, mỗi người chỉ quen hai người ngồi cạnh). Đây là số Ramsey $R(3,3) = 6$.

### Bài 6
**Bất biến: tính chẵn lẻ của tổng các số trên bảng.**
Vì $|a - b| \equiv a - b \equiv a + b \pmod 2$, mỗi lần thay hai số $a, b$ bằng $|a-b|$ thì tổng giảm đi $a + b - |a - b|$, là một số chẵn. Vậy tính chẵn lẻ của tổng không đổi.
Ban đầu tổng là $\frac{2025\cdot 2026}{2} = 2025\cdot 1013$, một số lẻ. Do đó số cuối cùng là số lẻ, **không thể bằng 0**.

### Bài 7
**Không thể.** Tô màu bàn cờ đen trắng xen kẽ. Hai ô ở hai góc đối diện có **cùng màu** (chẳng hạn đều trắng). Sau khi cắt, còn lại 32 ô đen và 30 ô trắng. Mỗi quân domino luôn phủ đúng 1 ô đen và 1 ô trắng, nên 31 quân phủ 31 ô đen và 31 ô trắng, mâu thuẫn.

### Bài 8
Gọi số cần tìm là $\overline{abcd}$, với $d \in \{0; 5\}$.
- **$d = 0$:** $a$ có 9 cách chọn (từ 1 đến 9), $b$ có 8 cách, $c$ có 7 cách: $9\cdot8\cdot7 = 504$ số.
- **$d = 5$:** $a$ có 8 cách (khác 0 và khác 5), $b$ có 8 cách (khác $a$ và 5, được chọn 0), $c$ có 7 cách: $8\cdot8\cdot7 = 448$ số.

**Đáp số:** $504 + 448 = 952$ số.

### Bài 9
Gọi $A_2, A_3, A_5$ là tập các số từ 1 đến 1000 chia hết cho 2, 3, 5 tương ứng.
- $|A_2| = 500$, $|A_3| = 333$, $|A_5| = 200$.
- $|A_2\cap A_3| = \lfloor 1000/6\rfloor = 166$, $|A_2\cap A_5| = 100$, $|A_3\cap A_5| = \lfloor 1000/15\rfloor = 66$.
- $|A_2\cap A_3\cap A_5| = \lfloor 1000/30\rfloor = 33$.

$|A_2\cup A_3\cup A_5| = 500 + 333 + 200 - 166 - 100 - 66 + 33 = 734$.

**Đáp số:** $1000 - 734 = 266$ số.

### Bài 10
Có hữu hạn cách ghép cặp ($n!$ cách). Chọn cách ghép có **tổng độ dài các đoạn thẳng nhỏ nhất** (nguyên lý cực hạn). Ta chứng minh trong cách ghép này không có hai đoạn nào cắt nhau.

Giả sử phản chứng: hai đoạn $R_1X_1$ và $R_2X_2$ ($R$ đỏ, $X$ xanh) cắt nhau tại $O$. Thay chúng bằng hai đoạn $R_1X_2$ và $R_2X_1$. Theo bất đẳng thức tam giác (chặt, vì không có ba điểm thẳng hàng):
$$R_1X_2 + R_2X_1 < (R_1O + OX_2) + (R_2O + OX_1) = R_1X_1 + R_2X_2.$$
Cách ghép mới có tổng độ dài nhỏ hơn, mâu thuẫn với cách chọn. Vậy cách ghép có tổng độ dài nhỏ nhất thỏa mãn yêu cầu.

### Bài 11
Gọi số sỏi ba đống là $(x, y, z)$. Mỗi lần biến đổi, chẳng hạn $(x, y, z) \to (x - 1, y - 1, z + 2)$, thì hiệu giữa hai đống bất kỳ thay đổi một lượng thuộc $\{0, \pm3\}$:
- $(x-1) - (y-1) = x - y$;
- $(x-1) - (z+2) = x - z - 3$;
- $(y - 1) - (z + 2) = y - z - 3$.

Do đó **số dư khi chia cho 3 của các hiệu $x - y$, $y - z$, $z - x$ là bất biến**.
Ban đầu $(19, 8, 9)$: $x - y = 11 \equiv 2 \pmod 3$. Trạng thái đích $(12, 12, 12)$: $x - y = 0$. Hai số dư khác nhau.

**Kết luận:** Không thể đạt được trạng thái ba đống đều có 12 viên.
