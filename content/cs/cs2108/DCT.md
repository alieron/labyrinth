---
tags:
  - cs2108/chapter8
  - math/analysis
complete: true
prev: /labyrinth/notes/cs/cs2108/sampling
next: /labyrinth/notes/cs/cs2108/huffman_coding

---
### Concept
#### Cosine transform
- [fourier transform](/labyrinth/notes/cs/cs2108/fourier_transform) but only with the cosine component
- [even](/labyrinth/notes/cs/cs2108/even_&_odd_functions#^938d30) signals can be represented with a linear combination of cosine fuctions
- used in:
	- JPEG
	- MPEG

$$
\begin{align*}
X(\omega) &= \int_{-\infty}^{\infty} x(t) \ e^{-j \omega t} \ dt\\
&= \underbrace{ \int_{-\infty}^{\infty} x(t)\cos(\omega t) \ dt }_{ 0\text{ if odd} } -j \underbrace{ \int_{-\infty}^{\infty} x(t)\sin(\omega t) \ dt }_{ 0\text{ if even} }
\end{align*}
$$
> similarly, the DFT of an even signal real, but the DFT of an odd signal is imaginary
#### Discrete Cosine Transform(DCT)
- like the [DFT](/labyrinth/notes/cs/cs2108/DFT)'s periodic assumption, but requiring symmetric extensions 
- different variations of tiling

![[DCT_types.png|500]]
> usually DCT-2 is used for compression

Even symmetry
- symmetry removes the need for phase

$$
\begin{gather*}
x[n] = \sum_{k}a_{k}\cos(\omega_{k}n) + b_{k}\sin(\omega_{k}n) \\
\\
\text{Even symmetry:}\quad x[n] = x[-n] \\
\\
\begin{aligned}
x[-n] &= \sum_{k}a_{k}\cos(-\omega_{k}n) + b_{k}\sin(-\omega_{k}n) \\
&= \sum_{k}a_{k}\cos(\omega_{k}n) - b_{k}\sin(\omega_{k}n) & \text{(Even/Odd)}
\end{aligned} \\
\\
\therefore \sum_{k}a_{k}\cos(\omega_{k}n) + b_{k}\sin(\omega_{k}n) = \sum_{k}a_{k}\cos(\omega_{k}n) - b_{k}\sin(\omega_{k}n) \\
b_{k}\sin(\omega_{k}n) = -b_{k}\sin(\omega_{k}n) = 0 \\
\\
\\
\therefore x[n] = \sum_{k}a_{k}\cos(\omega_{k}n) \iff x[n] = x[-n]
\end{gather*}
$$

DCT-2
- tile by flipping

$$
X[k] = \sum_{n=0}^{N-1} x[n]\cos\left( \frac{\pi\left( n+\frac{1}{2} \right)k}{N} \right)
$$
#### JPEG compression
- lossy compression
- 2D DCT and filtering out the high frequency components

Steps
1. color space transform, RGB to YCbCr (Y = luminance, Cb = blue diff, Cr = red diff)
2. image is divided into 8x8 chunks
3. apply 2D DCT to each chunk
	- which yields an 8x8 set of coefficients for the 8x8 basis functions
![[jpeg_dct_basis.png]]
> note the high frequency allow for the most detail, filtering them out causes a loss in detail

4. the coefficients are divided by the values in the quantization table and rounded
	- usually lowers the high frequencies until they are mostly 0
5. [RLE](/labyrinth/notes/cs/cs2108/RLE) and [huffman coding](/labyrinth/notes/cs/cs2108/huffman_coding) used to further compress the data
	- having many consecutive 0s is good for RLE

Frequency values
- $N$ pixels(samples) can be represented by and transformed into $N$ independent basis functions(frequencies)

$$
\begin{gather*}
\text{Per pixel sampling:} \quad f_{s} = 1 \ (\text{sample per pixel}) \\
\\
\text{Nyquist Limit:} \quad f_{max} = \frac{f_{s}}{2} = \frac{1}{2} \ (\text{cycles per pixel}) \\
\\
\text{JPEG basis frequencies:} \quad f_{u} = \frac{u}{2N} \ (\text{cycles per pixel}), \forall u = 0, \dots, N-1 \\
\\
\text{Max JPEG:} \quad f_{N-1} = \frac{N-1}{2N}<  f_{max} = \frac{1}{2} \\
\\
\therefore N\text{ JPEG basis functions can be represented by }N\text{ samples/pixels}
\end{gather*}
$$