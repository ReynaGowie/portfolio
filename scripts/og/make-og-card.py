# Regenerates public/images/og-card.png (1200x630 social preview).
# Usage: python3 scripts/og/make-og-card.py <fonts-dir> public/images/reyna-gowie-headshot.jpg public/images/og-card.png
# Fonts (OFL, from github.com/google/fonts): Fraunces.ttf, Fraunces-Italic.ttf, DMSans.ttf, Caveat.ttf

import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter
F, headshot, out = sys.argv[1], sys.argv[2], sys.argv[3]
W, H = 1200, 630
PAPER=(251,249,248); TEXT=(22,20,22); MUTED=(95,90,95); PLUM=(107,45,92); SOFT=(241,229,238); BORDER=(231,225,228)

def fr(size, wght=400, italic=False):
    f = ImageFont.truetype(f"{F}/Fraunces{'-Italic' if italic else ''}.ttf", size)
    f.set_variation_by_axes([min(144, size), wght, 100, 0]); return f
def dm(size, wght=400):
    f = ImageFont.truetype(f"{F}/DMSans.ttf", size); f.set_variation_by_axes([14, wght]); return f
def cav(size):
    f = ImageFont.truetype(f"{F}/Caveat.ttf", size); f.set_variation_by_axes([600]); return f

img = Image.new('RGB', (W, H), PAPER)
d = ImageDraw.Draw(img)
# dot grid
for y in range(11, H, 22):
    for x in range(11, W, 22):
        d.ellipse((x-1.2, y-1.2, x+1.2, y+1.2), fill=(226, 214, 222))

# white card
card = (40, 40, W-40, H-40)
sh = Image.new('L', (W, H), 0); ImageDraw.Draw(sh).rounded_rectangle((card[0], card[1]+10, card[2], card[3]+10), 28, fill=60)
sh = sh.filter(ImageFilter.GaussianBlur(18))
img.paste((210, 196, 205), (0, 0), sh)
d = ImageDraw.Draw(img)
d.rounded_rectangle(card, 28, fill=(255,255,255), outline=BORDER, width=2)

# headshot on a tilted card
ph = Image.open(headshot).convert('RGB')
pw, phh = 300, 375
ph = ph.resize((pw, int(pw*ph.height/ph.width))).crop((0, 0, pw, phh))
frame = Image.new('RGBA', (pw+16, phh+16), (255,255,255,255))
mask = Image.new('L', (pw, phh), 0); ImageDraw.Draw(mask).rounded_rectangle((0,0,pw,phh), 14, fill=255)
frame.paste(ph, (8, 8), mask)
fmask = Image.new('L', frame.size, 0); ImageDraw.Draw(fmask).rounded_rectangle((0,0)+frame.size, 20, fill=255)
frame.putalpha(fmask)
rot = frame.rotate(-3, resample=Image.BICUBIC, expand=True)
px, py = W - 40 - rot.width - 60, (H - rot.height)//2
shadow = Image.new('L', (W, H), 0); shadow.paste(rot.split()[3], (px+6, py+14))
shadow = shadow.filter(ImageFilter.GaussianBlur(16))
img.paste((200, 170, 190), (0, 0), shadow.point(lambda a: int(a*0.55)))
img.paste(rot, (px, py), rot)

d = ImageDraw.Draw(img)
x = 100
d.text((x, 118), "hi, I'm", font=cav(46), fill=PLUM)
d.text((x, 168), "Reyna Simone Gowie", font=fr(64, 450), fill=TEXT)
# headline: "I build AI / and ask who it's built for." with handwritten "build"
y = 268
f_it = fr(44, 400, italic=True)
d.text((x, y), "I", font=f_it, fill=TEXT)
cx = x + d.textlength("I ", font=f_it)
d.text((cx, y-14), "build", font=cav(64), fill=PLUM)
cx += d.textlength("build", font=cav(64)) + 14
d.text((cx, y), "AI", font=f_it, fill=TEXT)
d.text((x, y+56), "and ask who it’s built for.", font=f_it, fill=TEXT)
# role line
f_role = dm(24)
d.text((x, 420), "AI Engineer Co-Op at IBM", font=f_role, fill=MUTED)
d.text((x, 452), "Enterprise Technology Integration at Penn State", font=f_role, fill=MUTED)
# url pill
u = "reynagowie.github.io/portfolio"
fu = dm(20, 500); tw = d.textlength(u, font=fu)
d.rounded_rectangle((x, 510, x+tw+36, 552), 21, fill=SOFT)
d.text((x+18, 519), u, font=fu, fill=PLUM)
# sparkle accents
def sparkle(cx, cy, r, col):
    pts=[]
    import math
    for i in range(8):
        a = math.pi/4*i - math.pi/2
        rr = r if i % 2 == 0 else r*0.28
        pts.append((cx+rr*math.cos(a), cy+rr*math.sin(a)))
    d.polygon(pts, fill=col)
sparkle(560, 128, 16, PLUM); sparkle(595, 158, 9, (200,138,169)); sparkle(520, 520, 11, (200,138,169))
img.save(out, 'PNG', optimize=True)
print(out, img.size)
