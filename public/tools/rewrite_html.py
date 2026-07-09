from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SUBS = [
    ('href="../', 'href="'),
    ("href='../", "href='"),
    ('src="../images/', 'src="images/'),
    ("src='../images/", "src='images/"),
    ('href="../images/', 'href="images/'),
    ("href='../images/", "href='images/"),
    ('"../images/', '"images/'),
    ("'../images/", "'images/"),
    ('"../videos/', '"videos/'),
    ("'../videos/", "'videos/"),
    ('src="../videos/', 'src="videos/'),
    ("src='../videos/", "src='videos/"),
    ('href="healthcareStyle.css"', 'href="css/healthcareStyle.css"'),
    ("href='healthcareStyle.css'", "href='css/healthcareStyle.css'"),
    ('href="stellarnav.css"', 'href="css/stellarnav.css"'),
    ("href='stellarnav.css'", "href='css/stellarnav.css'"),
    ('src="../js/', 'src="js/'),
    ("src='../js/", "src='js/"),
    ('href="//', 'href="https://'),
    ('src="//', 'src="https://'),
]

for p in ROOT.glob("*.html"):
    text = p.read_text(encoding="utf-8", errors="replace")
    orig = text
    for a, b in SUBS:
        text = text.replace(a, b)
    if text != orig:
        p.write_text(text, encoding="utf-8")
        print("fixed", p.name)
print("done")
