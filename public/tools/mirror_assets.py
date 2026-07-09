#!/usr/bin/env python3
"""Download images referenced by local HTML/CSS mirrors of digitalinfobytes.com."""
from __future__ import annotations

import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parent.parent
BASE_URL = "https://digitalinfobytes.com/images/"


def extract_from_html_css(content: str) -> set[str]:
    found: set[str] = set()
    i = 0
    while True:
        j = content.find("../images/", i)
        if j < 0:
            break
        j += len("../images/")
        k = j
        while k < len(content) and content[k] not in "\"')>":
            k += 1
        path = content[j:k].strip()
        if path and not path.startswith("data:"):
            found.add(path)
        i = k
    for m in re.finditer(r"url\(\.\./images/([^)]+)\)", content):
        p = m.group(1).strip().strip("\"'")
        if p and not p.startswith("data:"):
            found.add(p)
    return found


def collect_all_images() -> set[str]:
    all_paths: set[str] = set()
    for p in ROOT.glob("*.html"):
        all_paths |= extract_from_html_css(p.read_text(encoding="utf-8", errors="replace"))
    css = ROOT / "css" / "healthcareStyle.css"
    if css.exists():
        all_paths |= extract_from_html_css(css.read_text(encoding="utf-8", errors="replace"))
    return all_paths


def download_one(rel: str) -> bool:
    # rel may contain spaces e.g. "Brand logos/finit.webp" or "Construction-icon 1.svg"
    parts = rel.split("/")
    encoded = "/".join(quote(part, safe="") for part in parts)
    url = BASE_URL + encoded.replace("//", "/")
    dest = ROOT / "images" / rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() and dest.stat().st_size > 0:
        return True
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; AssetMirror/1.0)"})
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = resp.read()
        if len(data) < 50:
            return False
        dest.write_bytes(data)
        return True
    except (urllib.error.HTTPError, urllib.error.URLError, OSError):
        return False


def rewrite_html_files() -> None:
    subs = [
        ('href="../', 'href="'),
        ("href='../", "href='"),
        ('src="../images/', 'src="images/'),
        ("src='../images/", "src='images/"),
        ('href="healthcareStyle.css"', 'href="css/healthcareStyle.css"'),
        ("href='healthcareStyle.css'", "href='css/healthcareStyle.css'"),
        ('href="stellarnav.css"', 'href="css/stellarnav.css"'),
        ("href='stellarnav.css'", "href='css/stellarnav.css'"),
        ('src="../js/', 'src="js/'),
        ("src='../js/", "src='js/"),
    ]
    for p in ROOT.glob("*.html"):
        text = p.read_text(encoding="utf-8", errors="replace")
        orig = text
        for a, b in subs:
            text = text.replace(a, b)
        if text != orig:
            p.write_text(text, encoding="utf-8")


def main() -> int:
    imgs = sorted(collect_all_images())
    print(f"Found {len(imgs)} unique image paths", file=sys.stderr)
    ok, fail = 0, 0
    for i, rel in enumerate(imgs):
        if download_one(rel):
            ok += 1
        else:
            print(f"MISS: {rel}", file=sys.stderr)
            fail += 1
        if (i + 1) % 50 == 0:
            time.sleep(0.3)
    print(f"Downloaded OK: {ok}, failed: {fail}", file=sys.stderr)
    rewrite_html_files()
    print("HTML paths rewritten.", file=sys.stderr)
    return 0 if fail == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
