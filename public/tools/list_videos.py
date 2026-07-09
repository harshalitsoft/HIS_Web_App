import re
from pathlib import Path

root = Path(__file__).resolve().parent.parent
found: set[str] = set()
for p in root.glob("*.html"):
    t = p.read_text(encoding="utf-8", errors="replace")
    for m in re.finditer(r"videos/([^\"']+)", t):
        found.add(m.group(1).strip())
for x in sorted(found):
    print(x)
print("TOTAL", len(found), file=__import__("sys").stderr)
