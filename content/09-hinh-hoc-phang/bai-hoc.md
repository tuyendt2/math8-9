# Chủ đề 9. Hình học phẳng

> Khi làm bài, **luôn tự vẽ hình** theo đề bài. Lời giải dưới đây mô tả hình bằng lời; nên vẽ hình chính xác bằng thước và compa, hoặc dùng GeoGebra.

## I. Kiến thức cần nắm

### 1. Lớp 8: định lý Thales và tam giác đồng dạng

**Định lý Thales.** Nếu $MN \parallel BC$ với $M \in AB$, $N \in AC$ thì $\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}$. Định lý đảo: nếu $\frac{AM}{MB} = \frac{AN}{NC}$ thì $MN \parallel BC$.
> *Gợi ý chứng minh (bằng diện tích):* hai tam giác có chung đường cao thì tỉ số diện tích bằng tỉ số hai đáy. Do đó $\frac{S_{AMN}}{S_{BMN}} = \frac{AM}{MB}$ và $\frac{S_{AMN}}{S_{CMN}} = \frac{AN}{NC}$. Vì $MN \parallel BC$, khoảng cách từ $B$ và $C$ đến $MN$ bằng nhau, nên $S_{BMN} = S_{CMN}$. Suy ra $\frac{AM}{MB} = \frac{AN}{NC}$.

**Tính chất đường phân giác.** Nếu $AD$ là phân giác trong của tam giác $ABC$ thì $\frac{DB}{DC} = \frac{AB}{AC}$.
> *Chứng minh 1:* qua $C$ kẻ đường thẳng song song với $AD$, cắt tia đối của tia $AB$ tại $E$. Các góc so le và đồng vị cho $\widehat{ACE} = \widehat{AEC}$, nên tam giác $ACE$ cân, $AE = AC$. Theo Thales: $\frac{DB}{DC} = \frac{AB}{AE} = \frac{AB}{AC}$.
> *Chứng minh 2 (diện tích):* $D$ cách đều $AB$ và $AC$ (khoảng cách $d$), nên $\frac{S_{ABD}}{S_{ACD}} = \frac{\frac12AB\cdot d}{\frac12AC\cdot d} = \frac{AB}{AC}$. Mặt khác hai tam giác có chung đường cao từ $A$, nên tỉ số diện tích cũng bằng $\frac{DB}{DC}$.

Phân giác ngoài tại $A$ cắt đường thẳng $BC$ tại $E$ thì cũng có $\frac{EB}{EC} = \frac{AB}{AC}$.

**Tam giác đồng dạng.**
- Ba trường hợp: **c.c.c** (ba cặp cạnh tỉ lệ), **c.g.c** (hai cặp cạnh tỉ lệ và góc xen giữa bằng nhau), **g.g** (hai cặp góc bằng nhau).
- Tam giác vuông: chỉ cần một cặp góc nhọn bằng nhau, hoặc cạnh huyền và một cạnh góc vuông tỉ lệ.
- **Nếu tỉ số đồng dạng là $k$ thì tỉ số các đường cao, trung tuyến, phân giác, chu vi, bán kính đường tròn nội tiếp và ngoại tiếp đều bằng $k$; tỉ số diện tích bằng $k^2$** (vì diện tích bằng nửa tích đáy và chiều cao, cả hai đều nhân với $k$).

**Tỉ số diện tích.** Hai tam giác có chung đường cao thì tỉ số diện tích bằng tỉ số hai đáy; có chung đáy thì bằng tỉ số hai đường cao. Đây là công cụ rất mạnh để chứng minh tỉ số đoạn thẳng.

### 2. Lớp 9: hệ thức lượng trong tam giác vuông
Tam giác $ABC$ vuông tại $A$, đường cao $AH$, $BC = a$, $CA = b$, $AB = c$, $AH = h$, $BH = c'$, $CH = b'$.

| Hệ thức | Chứng minh nhanh |
|---|---|
| $c^2 = ac'$, $\ b^2 = ab'$ | $\triangle ABC \sim \triangle HBA$ (chung góc $B$) cho $\frac{AB}{HB} = \frac{BC}{BA}$ |
| $a^2 = b^2 + c^2$ (Pythagoras) | Cộng hai hệ thức trên: $b^2 + c^2 = a(b' + c') = a^2$ |
| $h^2 = b'c'$ | $\triangle HBA \sim \triangle HAC$ cho $\frac{HA}{HC} = \frac{HB}{HA}$ |
| $ah = bc$ | Cả hai bằng $2S_{ABC}$ |
| $\frac{1}{h^2} = \frac1{b^2} + \frac1{c^2}$ | Từ $h = \frac{bc}{a}$: $\frac{1}{h^2} = \frac{a^2}{b^2c^2} = \frac{b^2 + c^2}{b^2c^2}$ |
| Trung tuyến $AM = \frac{BC}{2}$ | $M$ là tâm đường tròn ngoại tiếp tam giác vuông |

**Tỉ số lượng giác của góc nhọn** (trong tam giác vuông tại $A$):
$\sin B = \frac{\text{đối}}{\text{huyền}} = \frac ba$, $\ \cos B = \frac{\text{kề}}{\text{huyền}} = \frac ca$, $\ \tan B = \frac ba \cdot\frac ac = \frac bc$, $\ \cot B = \frac cb$.
- $\sin^2\alpha + \cos^2\alpha = 1$ (chính là định lý Pythagoras chia cho $a^2$); $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$.
- Hai góc phụ nhau: $\sin\alpha = \cos(90^\circ - \alpha)$, $\tan\alpha = \cot(90^\circ - \alpha)$.
- Giá trị đặc biệt (lấy từ nửa tam giác đều cạnh 2 và tam giác vuông cân cạnh 1):

| | $30^\circ$ | $45^\circ$ | $60^\circ$ |
|---|---|---|---|
| $\sin$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ |
| $\cos$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ |
| $\tan$ | $\frac{\sqrt3}{3}$ | 1 | $\sqrt3$ |

- **Công thức diện tích:** $S = \frac12 ab\sin C$, vì đường cao hạ từ $A$ xuống $BC$ bằng $b\sin C$.

### 3. Lớp 9: đường tròn

**a) Góc nội tiếp bằng nửa góc ở tâm cùng chắn một cung** (tức bằng nửa số đo cung bị chắn).
> *Gợi ý chứng minh:* xét trường hợp tâm $O$ nằm trên cạnh $AC$ của góc nội tiếp $\widehat{BAC}$. Tam giác $OAB$ cân tại $O$ nên $\widehat{BOC}$ (góc ngoài) bằng $\widehat{OAB} + \widehat{OBA} = 2\widehat{BAC}$. Các trường hợp khác: kẻ đường kính qua $A$ rồi cộng hoặc trừ hai góc.

*Hệ quả:* các góc nội tiếp cùng chắn một cung thì bằng nhau; góc nội tiếp chắn nửa đường tròn là góc vuông.

**b) Góc tạo bởi tiếp tuyến và dây cung bằng góc nội tiếp chắn cùng cung đó.**
> *Gợi ý:* tiếp tuyến $Ax$ vuông góc với bán kính $OA$. Góc giữa $Ax$ và dây $AB$ bằng $90^\circ - \widehat{OAB}$, mà trong tam giác cân $OAB$ thì $90^\circ - \widehat{OAB} = \frac12\widehat{AOB}$.

**c) Góc có đỉnh bên trong đường tròn** bằng nửa tổng số đo hai cung bị chắn; **góc có đỉnh bên ngoài** bằng nửa hiệu. *Gợi ý:* dùng góc ngoài của tam giác tạo bởi hai dây.

**d) Tứ giác nội tiếp.** Một tứ giác nội tiếp khi và chỉ khi có một trong các điều kiện:
- tổng hai góc đối bằng $180^\circ$ (*vì sao?* hai góc nội tiếp chắn hai cung có tổng là cả đường tròn $360^\circ$, nên tổng hai góc bằng $\frac{360^\circ}{2}$);
- góc ngoài tại một đỉnh bằng góc trong của đỉnh đối diện (tương đương điều kiện trên);
- hai đỉnh kề nhau cùng nhìn cạnh nối hai đỉnh còn lại dưới các góc bằng nhau (cung chứa góc);
- bốn đỉnh cách đều một điểm;
- (nâng cao) $MA\cdot MB = MC\cdot MD$ với $M$ là giao điểm của hai đường thẳng $AB$ và $CD$.

**e) Tiếp tuyến.**
- Tiếp tuyến vuông góc với bán kính tại tiếp điểm (khoảng cách từ tâm đến tiếp tuyến bằng bán kính, mà đường vuông góc là đường ngắn nhất).
- Hai tiếp tuyến cắt nhau tại $M$ thì $MA = MB$ (hai tam giác vuông $OAM$ và $OBM$ bằng nhau), $MO$ là phân giác góc $AMB$ và là trung trực của $AB$.

**f) Phương tích của một điểm.** Một đường thẳng qua $M$ cắt đường tròn $(O; R)$ tại $C, D$ thì
$$MC\cdot MD = \lvert MO^2 - R^2\rvert \quad \text{(không phụ thuộc vào đường thẳng)}.$$
> *Chứng minh:* gọi $I$ là trung điểm $CD$, khi đó $OI \perp CD$. Với $M$ ở ngoài đường tròn: $MC\cdot MD = (MI - IC)(MI + IC) = MI^2 - IC^2 = (MO^2 - OI^2) - (R^2 - OI^2) = MO^2 - R^2$.

*Hệ quả:* với tiếp tuyến $MA$ thì $MA^2 = MC\cdot MD$; hai dây $AB$, $CD$ cắt nhau tại $I$ thì $IA\cdot IB = IC\cdot ID$.

### 4. Các điểm đặc biệt của tam giác
| Điểm | Giao của | Tính chất | Vì sao đồng quy |
|---|---|---|---|
| Trọng tâm $G$ | 3 trung tuyến | $AG = \frac23 AM$ | Chứng minh bằng đường trung bình |
| Tâm ngoại tiếp $O$ | 3 trung trực | Cách đều 3 đỉnh | Điểm trên trung trực $AB$ và $BC$ thì cách đều $A, B, C$, nên nằm trên trung trực $CA$ |
| Tâm nội tiếp $I$ | 3 phân giác trong | Cách đều 3 cạnh | Lập luận tương tự với khoảng cách đến các cạnh |
| Trực tâm $H$ | 3 đường cao | $AH = 2OM$ | Các đường cao của $ABC$ là trung trực của tam giác có các cạnh song song với $ABC$ qua các đỉnh |

**Đường thẳng Euler:** $O, G, H$ thẳng hàng và $GH = 2GO$.

### 5. Định lý nâng cao (luyện thi chuyên)

**Định lý Menelaus.** Một đường thẳng cắt các đường thẳng $BC, CA, AB$ lần lượt tại $M, N, P$ thì
$$\frac{MB}{MC}\cdot\frac{NC}{NA}\cdot\frac{PA}{PB} = 1.$$
> *Gợi ý chứng minh:* qua $C$ kẻ đường thẳng song song với $AB$, cắt đường thẳng $MN$ tại $K$. Theo Thales: $\frac{MB}{MC} = \frac{PB}{CK}$ và $\frac{NC}{NA} = \frac{CK}{AP}$. Nhân hai đẳng thức rồi nhân với $\frac{PA}{PB}$ được 1.

**Định lý Ceva.** $AD, BE, CF$ ($D \in BC$, $E \in CA$, $F \in AB$) đồng quy khi và chỉ khi
$$\frac{DB}{DC}\cdot\frac{EC}{EA}\cdot\frac{FA}{FB} = 1.$$
> *Gợi ý chứng minh chiều thuận (diện tích):* gọi $M$ là điểm đồng quy. Hai cặp tam giác $ABD, ACD$ và $MBD, MCD$ có tỉ số diện tích đều bằng $\frac{DB}{DC}$, nên trừ đi được $\frac{DB}{DC} = \frac{S_{ABM}}{S_{ACM}}$. Tương tự cho hai tỉ số còn lại; nhân ba đẳng thức thì các diện tích triệt tiêu.

**Định lý Ptolemy.** Tứ giác $ABCD$ nội tiếp thì $AC\cdot BD = AB\cdot CD + AD\cdot BC$. (Chứng minh ở Bài 7.)

### 6. Hộp công cụ: muốn chứng minh ... thì nghĩ đến ...
| Cần chứng minh | Công cụ thường dùng |
|---|---|
| Hai đoạn thẳng bằng nhau | Tam giác bằng nhau, tam giác cân, tính chất tiếp tuyến, cung bằng nhau |
| Hệ thức tích $AB\cdot CD = EF\cdot GH$ | Tam giác đồng dạng, phương tích, hệ thức lượng |
| Hai góc bằng nhau | Góc nội tiếp cùng chắn một cung, tứ giác nội tiếp, tam giác đồng dạng |
| Tứ giác nội tiếp | Tổng hai góc đối $180^\circ$, hai đỉnh cùng nhìn một cạnh dưới góc bằng nhau |
| Hai đường thẳng vuông góc | Góc nội tiếp chắn nửa đường tròn, đường cao thứ ba (trực tâm), tổng hai góc bằng $90^\circ$ |
| Hai đường thẳng song song | Góc so le hoặc đồng vị bằng nhau, Thales đảo, cùng vuông góc với một đường |
| Đường thẳng là tiếp tuyến | Vuông góc với bán kính tại điểm nằm trên đường tròn |
| Ba điểm thẳng hàng | Góc bẹt $180^\circ$, Menelaus, hai đường thẳng cùng song song với một đường |
| Ba đường thẳng đồng quy | Ceva, chứng minh là ba đường đặc biệt của một tam giác |
| Cực trị hình học | Bất đẳng thức tam giác, đường vuông góc ngắn hơn đường xiên, dây cung không lớn hơn đường kính |

---

## II. Bài tập vận dụng

**Bài 1.** Cho tam giác $ABC$ có phân giác trong $AD$. Chứng minh $AD^2 = AB\cdot AC - DB\cdot DC$.

**Bài 2.** Cho tam giác $ABC$, $M$ là trung điểm $BC$, $N$ thuộc cạnh $AC$ sao cho $AN = 2NC$. Gọi $I$ là giao điểm của $AM$ và $BN$. Tính các tỉ số $\frac{AI}{IM}$ và $\frac{BI}{IN}$.

**Bài 3.** Cho tam giác $ABC$, điểm $M$ nằm trong tam giác. Các tia $AM, BM, CM$ cắt $BC, CA, AB$ lần lượt tại $D, E, F$.
a) Chứng minh $\frac{MD}{AD} + \frac{ME}{BE} + \frac{MF}{CF} = 1$.
b) Chứng minh $\frac{AM}{MD} + \frac{BM}{ME} + \frac{CM}{MF} \ge 6$. Khi nào dấu "=" xảy ra?

**Bài 4.** Cho tam giác nhọn $ABC$ với các đường cao $AD, BE, CF$ cắt nhau tại $H$. Chứng minh $H$ là tâm đường tròn nội tiếp tam giác $DEF$.

**Bài 5.** Từ điểm $M$ nằm ngoài đường tròn $(O)$, kẻ hai tiếp tuyến $MA, MB$ ($A, B$ là tiếp điểm) và cát tuyến $MCD$ không đi qua $O$ ($C$ nằm giữa $M$ và $D$). Gọi $I$ là trung điểm $CD$, và $H$ là giao điểm của $AB$ và $MO$.
a) Chứng minh $MA^2 = MC\cdot MD$.
b) Chứng minh 5 điểm $M, A, I, O, B$ cùng thuộc một đường tròn.
c) Chứng minh tứ giác $CHOD$ nội tiếp.

**Bài 6.** Cho tam giác nhọn $ABC$ nội tiếp đường tròn $(O)$, các đường cao $AD, BE, CF$ cắt nhau tại $H$, và $M$ là trung điểm $BC$.
a) Chứng minh $OA \perp EF$.
b) Chứng minh $AH = 2OM$.

**Bài 7.** Chứng minh định lý Ptolemy. Áp dụng: cho tam giác đều $ABC$ nội tiếp đường tròn $(O)$, $M$ là điểm trên cung nhỏ $BC$. Chứng minh $MA = MB + MC$.

**Bài 8 (cực trị hình học).** Cho đường tròn $(O; R)$ và dây $AB$ cố định không đi qua $O$. Điểm $M$ di động trên cung lớn $AB$. Xác định vị trí của $M$ để chu vi tam giác $MAB$ lớn nhất.

**Bài 9 (khó).** Cho tam giác $ABC$ vuông tại $A$, đường cao $AH$. Gọi $r, r_1, r_2$ lần lượt là bán kính đường tròn nội tiếp các tam giác $ABC, ABH, ACH$. Chứng minh $r^2 = r_1^2 + r_2^2$.

---

## III. Lời giải chi tiết

### Bài 1
Gọi $E$ là giao điểm thứ hai của tia $AD$ với đường tròn ngoại tiếp tam giác $ABC$.
- Xét tam giác $ABD$ và tam giác $AEC$: $\widehat{BAD} = \widehat{EAC}$ (vì $AD$ là phân giác) và $\widehat{ABD} = \widehat{ABC} = \widehat{AEC}$ (hai góc nội tiếp cùng chắn cung $AC$). Do đó $\triangle ABD \sim \triangle AEC$ (g.g).
- Suy ra $\frac{AB}{AE} = \frac{AD}{AC}$, tức là $AB\cdot AC = AD\cdot AE = AD(AD + DE) = AD^2 + AD\cdot DE$.
- Hai dây $AE$ và $BC$ cắt nhau tại $D$ nên $AD\cdot DE = DB\cdot DC$ (do $\triangle DAB \sim \triangle DCE$).

Vậy $AD^2 = AB\cdot AC - DB\cdot DC$.

### Bài 2
**Áp dụng Menelaus cho tam giác $AMC$ với đường thẳng $B, I, N$:** ($B$ nằm trên đường thẳng $MC$, $I$ trên $AM$, $N$ trên $CA$)
$$\frac{IA}{IM}\cdot\frac{BM}{BC}\cdot\frac{NC}{NA} = 1 \iff \frac{IA}{IM}\cdot\frac12\cdot\frac12 = 1 \iff \frac{AI}{IM} = 4.$$

**Áp dụng Menelaus cho tam giác $BNC$ với đường thẳng $A, I, M$:**
$$\frac{IB}{IN}\cdot\frac{AN}{AC}\cdot\frac{MC}{MB} = 1 \iff \frac{IB}{IN}\cdot\frac23\cdot1 = 1 \iff \frac{BI}{IN} = \frac32.$$

> **Cách không dùng Menelaus:** kẻ $MK \parallel BN$ với $K \in AC$. Vì $M$ là trung điểm $BC$ nên $K$ là trung điểm $NC$, do đó $NK = \frac12 NC = \frac14 AN$. Theo Thales trong tam giác $AMK$: $\frac{AI}{IM} = \frac{AN}{NK} = 4$.

### Bài 3
**a)** Hai tam giác $MBC$ và $ABC$ có chung đáy $BC$. Kẻ $MM' \perp BC$ và $AA' \perp BC$, ta có $MM' \parallel AA'$ nên theo Thales:
$$\frac{S_{MBC}}{S_{ABC}} = \frac{MM'}{AA'} = \frac{MD}{AD}.$$
Tương tự $\frac{ME}{BE} = \frac{S_{MCA}}{S_{ABC}}$ và $\frac{MF}{CF} = \frac{S_{MAB}}{S_{ABC}}$. Cộng lại:
$$\frac{MD}{AD} + \frac{ME}{BE} + \frac{MF}{CF} = \frac{S_{MBC} + S_{MCA} + S_{MAB}}{S_{ABC}} = 1.$$

**b)** Đặt $x = \frac{MD}{AD}$, $y = \frac{ME}{BE}$, $z = \frac{MF}{CF}$, với $x, y, z > 0$ và $x + y + z = 1$. Khi đó $\frac{AM}{MD} = \frac{AD - MD}{MD} = \frac1x - 1$. Do đó
$$\frac{AM}{MD} + \frac{BM}{ME} + \frac{CM}{MF} = \frac1x + \frac1y + \frac1z - 3 \ge \frac{9}{x + y + z} - 3 = 6.$$
Dấu "=" khi $x = y = z = \frac13$, tức là $S_{MBC} = S_{MCA} = S_{MAB}$, khi đó $M$ là **trọng tâm** tam giác $ABC$.

### Bài 4
- Tứ giác $BFHD$ có $\widehat{BFH} + \widehat{BDH} = 90^\circ + 90^\circ = 180^\circ$ nên nội tiếp, suy ra $\widehat{HDF} = \widehat{HBF}$ (cùng chắn cung $HF$), tức là $\widehat{HDF} = \widehat{EBA}$.
- Tương tự, tứ giác $CEHD$ nội tiếp nên $\widehat{HDE} = \widehat{HCE} = \widehat{FCA}$.
- Trong tam giác vuông $ABE$: $\widehat{EBA} = 90^\circ - \widehat{A}$. Trong tam giác vuông $ACF$: $\widehat{FCA} = 90^\circ - \widehat{A}$.

Do đó $\widehat{HDF} = \widehat{HDE}$, tức là $DH$ là phân giác của góc $EDF$. Chứng minh tương tự, $EH$ là phân giác của góc $DEF$. Vậy $H$ là giao điểm hai đường phân giác, chính là tâm đường tròn nội tiếp tam giác $DEF$.

### Bài 5
**a)** Xét tam giác $MAC$ và tam giác $MDA$: chung góc $M$; $\widehat{MAC} = \widehat{MDA}$ (góc tạo bởi tiếp tuyến và dây cung bằng góc nội tiếp cùng chắn cung $AC$). Do đó $\triangle MAC \sim \triangle MDA$ (g.g), suy ra $\frac{MA}{MD} = \frac{MC}{MA}$, tức là $MA^2 = MC\cdot MD$.

**b)** $\widehat{MAO} = \widehat{MBO} = 90^\circ$ (tính chất tiếp tuyến). Vì $I$ là trung điểm dây $CD$ không qua tâm nên $OI \perp CD$, tức là $\widehat{MIO} = 90^\circ$. Ba điểm $A, I, B$ cùng nhìn đoạn $MO$ dưới góc vuông, nên $M, A, I, O, B$ cùng thuộc đường tròn đường kính $MO$.

**c)** $MA = MB$ và $OA = OB$ nên $MO$ là trung trực của $AB$, suy ra $AH \perp MO$ tại $H$. Trong tam giác vuông $MAO$ với đường cao $AH$: $MA^2 = MH\cdot MO$.
Kết hợp với a): $MC\cdot MD = MH\cdot MO$, tức là $\frac{MC}{MO} = \frac{MH}{MD}$. Hai tam giác $MCH$ và $MOD$ có chung góc $M$ nên $\triangle MCH \sim \triangle MOD$ (c.g.c), suy ra $\widehat{MHC} = \widehat{MDO}$.
Góc $\widehat{MHC}$ là góc ngoài tại đỉnh $H$ của tứ giác $CHOD$ và bằng góc trong tại đỉnh đối diện $D$. Vậy tứ giác $CHOD$ nội tiếp.

### Bài 6
**a)** Kẻ tiếp tuyến $Ax$ của $(O)$ tại $A$, chọn tia $Ax$ nằm khác phía với $C$ so với đường thẳng $AB$.
- $\widehat{xAB} = \widehat{ACB}$ (góc tạo bởi tiếp tuyến và dây cung).
- Tứ giác $BCEF$ nội tiếp đường tròn đường kính $BC$ (vì $\widehat{BEC} = \widehat{BFC} = 90^\circ$), nên $\widehat{AFE} = \widehat{ACB}$ (góc ngoài bằng góc trong đối diện).

Suy ra $\widehat{xAB} = \widehat{AFE}$. Hai góc này ở vị trí so le trong, nên $Ax \parallel EF$. Mà $OA \perp Ax$, do đó $OA \perp EF$.

**b)** Gọi $A'$ là điểm đối xứng với $A$ qua $O$ (tức $AA'$ là đường kính).
- $\widehat{ACA'} = 90^\circ$ (góc nội tiếp chắn nửa đường tròn), nên $A'C \perp AC$. Mà $BH \perp AC$, nên $BH \parallel A'C$.
- Tương tự, $CH \parallel A'B$.

Vậy $BHCA'$ là hình bình hành, nên trung điểm $M$ của $BC$ cũng là trung điểm của $HA'$. Trong tam giác $AHA'$, $OM$ là đường trung bình (vì $O$ là trung điểm $AA'$ và $M$ là trung điểm $HA'$), nên $AH = 2OM$.

### Bài 7
**Chứng minh Ptolemy.** Cho tứ giác $ABCD$ nội tiếp. Lấy điểm $E$ trên đường chéo $BD$ sao cho $\widehat{BAE} = \widehat{CAD}$.
- $\triangle ABE \sim \triangle ACD$ (g.g) vì $\widehat{BAE} = \widehat{CAD}$ và $\widehat{ABE} = \widehat{ABD} = \widehat{ACD}$ (cùng chắn cung $AD$). Suy ra $\frac{AB}{AC} = \frac{BE}{CD}$, tức là $AB\cdot CD = AC\cdot BE$. $\quad (1)$
- Cộng thêm $\widehat{EAC}$ vào hai góc bằng nhau, ta được $\widehat{BAC} = \widehat{EAD}$. Ngoài ra $\widehat{ACB} = \widehat{ADB} = \widehat{ADE}$ (cùng chắn cung $AB$). Do đó $\triangle ABC \sim \triangle AED$ (g.g), suy ra $\frac{BC}{ED} = \frac{AC}{AD}$, tức là $AD\cdot BC = AC\cdot ED$. $\quad (2)$

Cộng (1) và (2): $AB\cdot CD + AD\cdot BC = AC(BE + ED) = AC\cdot BD$.

**Áp dụng.** Tứ giác $ABMC$ nội tiếp (theo thứ tự đó). Theo Ptolemy: $AM\cdot BC = AB\cdot MC + AC\cdot MB$. Vì $AB = BC = CA$, chia hai vế cho $BC$ ta được $MA = MB + MC$.

### Bài 8
Gọi $N$ là điểm chính giữa của cung nhỏ $AB$ (cung không chứa $M$). Khi đó $NA = NB$, và $NA$ có độ dài cố định.
Tứ giác $AMBN$ nội tiếp, theo Ptolemy:
$$MN\cdot AB = MA\cdot NB + MB\cdot NA = NA(MA + MB) \implies MA + MB = \frac{AB}{NA}\cdot MN.$$
Vì $\frac{AB}{NA}$ không đổi và $MN \le 2R$ (dây cung không dài hơn đường kính), nên $MA + MB$ lớn nhất khi $MN = 2R$, tức là $MN$ là đường kính.
Khi đó $M$ là điểm đối xứng với $N$ qua $O$, chính là **điểm chính giữa của cung lớn $AB$**. Vì $AB$ cố định, chu vi tam giác $MAB$ lớn nhất khi $M$ là điểm chính giữa cung lớn $AB$.

### Bài 9
Ba tam giác $ABC$, $HBA$, $HAC$ đều vuông (lần lượt tại $A$, $H$, $H$) và đồng dạng với nhau ($\widehat{B}$ chung với tam giác $HBA$, $\widehat{C}$ chung với tam giác $HAC$). Các cạnh huyền tương ứng là $BC$, $AB$, $AC$.
Trong hai tam giác đồng dạng, tỉ số bán kính đường tròn nội tiếp bằng tỉ số đồng dạng, tức là bằng tỉ số hai cạnh huyền:
$$\frac{r_1}{r} = \frac{AB}{BC}, \quad \frac{r_2}{r} = \frac{AC}{BC}.$$
Do đó $\frac{r_1^2 + r_2^2}{r^2} = \frac{AB^2 + AC^2}{BC^2} = 1$ (theo định lý Pythagoras). Vậy $r^2 = r_1^2 + r_2^2$.
