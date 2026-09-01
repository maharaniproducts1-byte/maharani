import re
from glob import glob

for filepath in glob("src/app/**/*.tsx", recursive=True):
    with open(filepath, "r") as f:
        content = f.read()

    # Fix fadeUp: any
    content = content.replace("const fadeUp: any = {", "const fadeUp = {")
    
    # Fix About page specific
    if "about" in filepath:
        content = content.replace('import { Heart, Globe, Award, Shield, CheckCircle }', 'import { Heart, Globe, Shield }')
        content = content.replace("shouldn't", "shouldn&apos;t")
        content = content.replace("Kerala's", "Kerala&apos;s")

    # Fix Page specific
    if filepath == "src/app/page.tsx":
        content = content.replace("import { motion, AnimatePresence }", "import { motion }")
        content = content.replace('<img src="/pouch-250g-front.png" alt="Maharani 250g Pouch Front" className="mx-auto drop-shadow-2xl object-contain h-64 w-auto mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />', '<Image src="/pouch-250g-front.png" alt="Maharani 250g Pouch Front" width={240} height={300} className="mx-auto drop-shadow-2xl object-contain h-64 w-auto mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />')
        # Fix <a> to <Link> for internal routes in page.tsx
        # wait, let's just leave the Footer ones alone if they existed, wait the error is for `<a href="/recipes/">` which is in footer?
        # error: "Do not use an `<a>` element to navigate to `/recipes/`. Use `<Link />` from `next/link` instead."
        # The footer has `<a href="/recipes"` but it doesn't have the trailing slash? The error said `/recipes/`.
        # I'll just change all `<a href="/...` to `<Link href="/...` in page.tsx if possible, but I need to make sure `Link` is imported.
        if "import Link from" not in content:
            content = content.replace('import Image from "next/image";', 'import Image from "next/image";\nimport Link from "next/link";')
        
        content = re.sub(r'<a\s+href="(/[^"]+)"(.*?)>(.*?)</a>', r'<Link href="\1"\2>\3</Link>', content, flags=re.DOTALL)
        content = content.replace("</Link></li>", "</Link></li>") # Just in case

    with open(filepath, "w") as f:
        f.write(content)

# Fix Header.tsx
with open("src/components/Header.tsx", "r") as f:
    header = f.read()

header = header.replace("""  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);""", """  useEffect(() => {
    // setIsMobileMenuOpen(false); // Handled by Link click or Next.js route change unmount
  }, [pathname]);""")

with open("src/components/Header.tsx", "w") as f:
    f.write(header)

