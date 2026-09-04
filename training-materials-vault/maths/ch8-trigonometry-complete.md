# 📐 CBSE Class 10 Mathematics — Chapter 8: Introduction to Trigonometry (Fastrack Mastery)

---

## 🌟 1. Fastrack Core Revision & Theory

### What is Trigonometry?
- **Etymology**: Derived from Greek words: **Tri** (three) + **Gon** (sides) + **Metron** (measure).
- **Definition**: Branch of Mathematics that deals with the relationships between angles and lengths of sides of a triangle.
- **Trigonometric Ratios (T-Ratios)**: In a right-angled triangle $\triangle ABC$ ($\angle B = 90^\circ$, $\angle A = \theta$):
  - **Hypotenuse ($H$)**: Side opposite to the $90^\circ$ angle ($AC$).
  - **Perpendicular ($P$)**: Side opposite to angle $\theta$ ($BC$).
  - **Base ($B$)**: Third side adjacent to angle $\theta$ ($AB$).

$$\sin\theta = \frac{\text{Perpendicular}}{\text{Hypotenuse}} = \frac{P}{H} = \frac{BC}{AC}$$
$$\cos\theta = \frac{\text{Base}}{\text{Hypotenuse}} = \frac{B}{H} = \frac{AB}{AC}$$
$$\tan\theta = \frac{\text{Perpendicular}}{\text{Base}} = \frac{P}{B} = \frac{BC}{AB} = \frac{\sin\theta}{\cos\theta}$$
$$\csc\theta = \frac{\text{Hypotenuse}}{\text{Perpendicular}} = \frac{H}{P} = \frac{1}{\sin\theta}$$
$$\sec\theta = \frac{\text{Hypotenuse}}{\text{Base}} = \frac{H}{B} = \frac{1}{\cos\theta}$$
$$\cot\theta = \frac{\text{Base}}{\text{Perpendicular}} = \frac{B}{P} = \frac{1}{\tan\theta} = \frac{\cos\theta}{\sin\theta}$$

---

## 📊 2. Standard Angles T-Ratio Table

| T-Ratio | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ |
|---|---|---|---|---|---|
| $\sin\theta$ | $0$ | $\frac{1}{2}$ | $\frac{1}{\sqrt{2}}$ | $\frac{\sqrt{3}}{2}$ | $1$ |
| $\cos\theta$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{2}}$ | $\frac{1}{2}$ | $0$ |
| $\tan\theta$ | $0$ | $\frac{1}{\sqrt{3}}$ | $1$ | $\sqrt{3}$ | $\infty$ (Not Defined) |
| $\cot\theta$ | $\infty$ (Not Defined) | $\sqrt{3}$ | $1$ | $\frac{1}{\sqrt{3}}$ | $0$ |
| $\sec\theta$ | $1$ | $\frac{2}{\sqrt{3}}$ | $\sqrt{2}$ | $2$ | $\infty$ (Not Defined) |
| $\csc\theta$ | $\infty$ (Not Defined) | $2$ | $\sqrt{2}$ | $\frac{2}{\sqrt{3}}$ | $1$ |

---

## 💡 3. Knowledge Boosters & Examiner Tips

1. **Range of Values**:
   - For an acute angle $0^\circ \le \theta \le 90^\circ$, $0 \le \sin\theta \le 1$ and $0 \le \cos\theta \le 1$.
   - $\sec\theta \ge 1$ and $\csc\theta \ge 1$.
2. **Scale Independence**:
   - The values of trigonometric ratios depend **only on the magnitude of the angle** $\theta$, NOT on the lengths of the sides of the triangle.
3. **Fundamental Trigonometric Identities**:
   - $\sin^2\theta + \cos^2\theta = 1 \iff \cos^2\theta = 1 - \sin^2\theta \iff \sin^2\theta = 1 - \cos^2\theta$
   - $1 + \tan^2\theta = \sec^2\theta \iff \sec^2\theta - \tan^2\theta = 1 \iff \tan^2\theta = \sec^2\theta - 1$
   - $1 + \cot^2\theta = \csc^2\theta \iff \csc^2\theta - \cot^2\theta = 1 \iff \cot^2\theta = \csc^2\theta - 1$

---

## 🎯 4. Pro Tricks & Common Errors

- ⚠️ **Common Error #1**: Confusing values: $\tan 30^\circ = \frac{1}{\sqrt{3}}$ vs $\tan 60^\circ = \sqrt{3}$.
- ⚡ **Pro Trick #1**: $(a^2 - b^2) = (a - b)(a + b)$. Always use $(\sec\theta - \tan\theta)(\sec\theta + \tan\theta) = 1 \implies \sec\theta - \tan\theta = \frac{1}{\sec\theta + \tan\theta}$.
- ⚠️ **Common Error #2**: Forgetting algebraic expansion $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ and $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$.

---

## 📚 5. High-Yield Practice Questions & Solutions

### MCQs:
1. **Hour hand angle swept**: Hour hand is $6\text{ cm}$. Angle swept between 7:20 am and 7:55 am ($35\text{ mins}$):
   - Angle in $12\text{ hours} = 360^\circ \implies \text{in } 1\text{ hour} = 30^\circ$.
   - $\text{Time} = \frac{35}{60}\text{ hr} \implies \text{Angle} = 30 \times \frac{35}{60} = \left(\frac{35}{2}\right)^\circ$. (Ans: **(b)**)
2. **Given $\sin\theta = \frac{a}{b}$, find $\cos\theta$**:
   - $\cos\theta = \sqrt{1 - \sin^2\theta} = \sqrt{1 - \frac{a^2}{b^2}} = \frac{\sqrt{b^2 - a^2}}{b}$. (Ans: **(c)**)
3. **$\triangle ABC$ right-angled at $B$, $\tan A = \sqrt{3}$**:
   - $\tan A = \sqrt{3} \implies A = 60^\circ, C = 30^\circ$.
   - $\cos A \cos C - \sin A \sin C = \cos 60^\circ \cos 30^\circ - \sin 60^\circ \sin 30^\circ = \frac{1}{2} \cdot \frac{\sqrt{3}}{2} - \frac{\sqrt{3}}{2} \cdot \frac{1}{2} = 0$. (Ans: **(b)**)
4. **If $\sin x + \csc x = 2$, then $\sin^{19} x + \csc^{20} x$**:
   - $\sin x + \frac{1}{\sin x} = 2 \implies (\sin x - 1)^2 = 0 \implies \sin x = 1 \implies \csc x = 1$.
   - $1^{19} + 1^{20} = 2$. (Ans: **(c)**)
5. **If $\tan A + \cot A = 4$, find $\tan^4 A + \cot^4 A$**:
   - Square: $\tan^2 A + \cot^2 A + 2 = 16 \implies \tan^2 A + \cot^2 A = 14$.
   - Square again: $\tan^4 A + \cot^4 A + 2 = 196 \implies \tan^4 A + \cot^4 A = 194$. (Ans: **(b)**)

---

## 🏛️ 6. CBSE Case Study Simulations

### Case Study 1: Anika's Right Triangle Exploration
- In $\triangle PQR$, $\angle Q = 90^\circ$, $PQ = 12\text{ cm}$, $QR = 8.5\text{ cm}$, $ST = 4\text{ cm}$, $SQ = 5\text{ cm}$, $PS = 12 - 5 = 7\text{ cm}$.
- (i) $PT = \sqrt{PS^2 + ST^2} = \sqrt{7^2 + 4^2} = \sqrt{49 + 16} = \sqrt{65}\text{ cm}$.
- (ii) $\tan x = \frac{SQ}{TS} = \frac{5}{4}$.
- (iii) $\sec x = \sqrt{1 + \tan^2 x} = \sqrt{1 + \frac{25}{16}} = \frac{\sqrt{41}}{4}$.
- (iv) $\sin y = \frac{TS}{PT} = \frac{4}{\sqrt{65}}$.
- (v) $\cot y = \frac{PS}{TS} = \frac{7}{4}$.

### Case Study 2: Sailing Boat Triangular Masts
- Masts form right triangles $PQR$ and $PQS$ with $PQ = 5\text{ m}$, $QR = 2\text{ m}$, $QS = 3\text{ m}$.
- $\sec S = \frac{PS}{QS} = \frac{\sqrt{5^2 + 3^2}}{3} = \frac{\sqrt{34}}{3}$.
- $\csc R = \frac{PR}{PQ} = \frac{\sqrt{5^2 + 2^2}}{5} = \frac{\sqrt{29}}{5}$.
- $\tan S + \cot R = \frac{5}{3} + \frac{2}{5} = \frac{25 + 6}{15} = \frac{31}{15}$.
