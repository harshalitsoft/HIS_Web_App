import re
import urllib.request
from pathlib import Path
from urllib.parse import quote

root = Path(__file__).resolve().parent.parent
t = (root / "index.html").read_text(encoding="utf-8")
paths = set(re.findall(r'images/(Brand logos/[^"]+)', t))
base = "https://digitalinfobytes.com/images/"
for rel in sorted(paths):
    enc = "/".join(quote(p, safe="") for p in rel.split("/"))
    url = base + enc
    dest = root / "images" / rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        data = urllib.request.urlopen(req, timeout=30).read()
        dest.write_bytes(data)
        print("OK", rel, len(data))
    except Exception as e:
        print("FAIL", rel, e)
