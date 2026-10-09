from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
import json, shutil

root = Path(__file__).resolve().parent.parent
files = sorted(root.glob('pushkar image*.jpeg'))
out = root / 'public' / 'images'
out.mkdir(parents=True, exist_ok=True)
sheet = Image.new('RGB', (1200, 1080), '#fff8ee')
draw = ImageDraw.Draw(sheet)
manifest = {}
for i, source in enumerate(files):
    im = ImageOps.exif_transpose(Image.open(source)).convert('RGB')
    name = source.stem.replace('pushkar image-', 'photo-')
    manifest[name] = {'source': source.name, 'width': im.width, 'height': im.height}
    for width in [480, 768, 960, 1600]:
        copy = im.copy()
        copy.thumbnail((width, width * 3))
        copy.save(out / f'{name}-{width}.webp', 'WEBP', quality=78, method=6)
    thumb = ImageOps.fit(im, (380, 220))
    x, y = (i % 3) * 400 + 10, (i // 3) * 270 + 10
    sheet.paste(thumb, (x, y))
    draw.text((x, y + 225), f'{source.name} / {im.width} x {im.height}', fill='#3b1d0f')
qa = root / 'output' / 'playwright'
qa.mkdir(parents=True, exist_ok=True)
sheet.save(qa / 'asset-contact-sheet.jpg')
(out / 'manifest.json').write_text(json.dumps(manifest, indent=2))
for name in ['pushkar-website-logo-withoutbg.webp', 'pushkar-website-logo.webp']:
    shutil.copy2(root / name, out / name)
logo = Image.open(root / 'pushkar-website-logo-withoutbg.webp').convert('RGBA')
logo.thumbnail((460, 280))
logo.save(out / 'logo-display.webp', 'WEBP', quality=85, method=6)
print(json.dumps(manifest, indent=2))
