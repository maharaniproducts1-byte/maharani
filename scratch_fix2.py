import re
from glob import glob

for filepath in glob("src/app/**/*.tsx", recursive=True):
    with open(filepath, "r") as f:
        content = f.read()

    # If the file imports motion, it should also import Variants
    if "from \"framer-motion\"" in content and "Variants" not in content:
        content = content.replace('import { motion } from "framer-motion";', 'import { motion, Variants } from "framer-motion";')
        content = content.replace('import { motion, AnimatePresence } from "framer-motion";', 'import { motion, AnimatePresence, Variants } from "framer-motion";')
        
    # Replace fadeUp and staggerContainer
    content = content.replace("const fadeUp = {", "const fadeUp: Variants = {")
    content = content.replace("const staggerContainer = {", "const staggerContainer: Variants = {")

    with open(filepath, "w") as f:
        f.write(content)
