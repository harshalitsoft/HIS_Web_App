#!/usr/bin/env python3
"""Download video files referenced in local HTML."""
from __future__ import annotations

import re
import sys
import urllib.request
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://digitalinfobytes.com/videos/"


def list_videos() -> set[str]:
    found: set[str] = set()
    for p in ROOT.glob("*.html"):
        t = p.read_text(encoding="utf-8", errors="replace")
        for m in re.finditer(r'videos/([^"\']+)', t):
            name = m.group(1).strip()
            if name and not name.startswith("http"):
                found.add(name)
    return found


def download(rel: str) -> bool:
    # Encode path segments (spaces, special chars in filenames)
    encoded = "/".join(quote(seg, safe="") for seg in rel.split("/"))
    url = BASE + encoded
    dest = ROOT / "videos" / rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() and dest.stat().st_size > 10_000:
        return True
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=300) as resp:
            chunk = 256 * 1024
            total = 0
            with open(dest, "wb") as f:
                while True:
                    b = resp.read(chunk)
                    if not b:
                        break
                    f.write(b)
                    total += len(b)
        return total > 1000
    except Exception as e:
        print(f"FAIL {rel}: {e}", file=sys.stderr)
        if dest.exists():
            dest.unlink(missing_ok=True)
        return False


def main() -> int:
    vids = sorted(list_videos())
    print(f"{len(vids)} videos", file=sys.stderr)
    ok = 0
    for v in vids:
        if download(v):
            ok += 1
            print("OK", v, file=sys.stderr)
    print(f"done {ok}/{len(vids)}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
