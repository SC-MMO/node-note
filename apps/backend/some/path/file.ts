<code>
        ```
    or a markdown heading/comment right before the code block:
        ## src/components/Foo.tsx
        ```tsx
        <code>
        ```
    """
    files: list[tuple[str, str]] = []

    # Pattern 1: file path as a comment in the first line of the code block
    # Matches ```lang\n// path/file.ext  or  ```lang\n/* path/file.ext */
    pattern_inline = re.compile(
        r"```\w*\s*\n"
        r"\s*(?://|/\*|#)\s*(src/[^\s*]+|[a-zA-Z][\w\-]*/[^\s*]+)\s*\*?\s*\n"
        r"([\s\S]*?)"
        r"\n```",
        re.MULTILINE,
    )

    # Pattern 2: heading or bold text with path before a code block
    # e.g.  ### src/hooks/useNotes.ts  or  **src/hooks/useNotes.ts**
    pattern_heading = re.compile(
        r"(?:^#{1,6}\s+|^\*\*)"
        r"((?:src/|\./)[\w\-./]+\.\w+)"
        r"\**\s*\n+"
        r"```\w*\s*\n"
        r"([\s\S]*?)"
        r"\n```",
        re.MULTILINE,
    )

    # Pattern 3: path appears right after ```lang on same idea but formatted as
    # ```tsx\n// src/...  (already covered by pattern_inline)
    # Additional: bare comment like  // src/types/index.ts  before ```
    pattern_comment_above = re.compile(
        r"(?://|#)\s*((?:src/|\./)[\w\-./]+\.\w+)\s*\n"
        r"```\w*\s*\n"
        r"([\s\S]*?)"
        r"\n```",
        re.MULTILINE,
    )

    seen_paths: set[str] = set()

    for pattern in [pattern_inline, pattern_heading, pattern_comment_above]:
        for match in pattern.finditer(text):
            filepath = match.group(1).strip()
            code = match.group(2)

            # Normalize path
            filepath = filepath.lstrip("./")

            if filepath not in seen_paths:
                seen_paths.add(filepath)
                files.append((filepath, code))

    # If nothing matched with those patterns, try a more aggressive approach:
    # look for the project structure block and match filenames to code blocks
    if not files:
        files = extract_by_sequence(text)

    return files


def extract_by_sequence(text: str) -> list[tuple[str, str]]:
    """
    Fallback: finds file paths mentioned anywhere near code blocks.
    Looks for lines containing file-like paths (with extensions) followed
    by the next code block.
    """
    files: list[tuple[str, str]] = []
    seen: set[str] = set()

    # Find all code blocks
    code_blocks = list(re.finditer(
        r"```(\w*)\s*\n([\s\S]*?)\n```",
        text,
        re.MULTILINE,
    ))

    # Find all file-path-like strings
    path_pattern = re.compile(
        r"((?:src|public|components|hooks|pages|api|types|modals|utils)"
        r"(?:/[\w\-]+)*"
        r"/[\w\-]+\.(?:ts|tsx|js|jsx|css|json|html|md))",
    )

    for block in code_blocks:
        block_start = block.start()
        # Search in the 500 chars before this code block for a file path
        search_region = text[max(0, block_start - 500):block_start]
        path_matches = path_pattern.findall(search_region)

        if path_matches:
            # Take the last (closest) path match
            filepath = path_matches[-1].strip()
            code = block.group(2)

            if filepath not in seen and len(code.strip()) > 10:
                seen.add(filepath)
                files.append((filepath, code))

    return files


def create_project(files: list[tuple[str, str]], output_dir: str) -> None:
    base = Path(output_dir)
    base.mkdir(parents=True, exist_ok=True)

    for filepath, code in files:
        full_path = base / filepath
        full_path.parent.mkdir(parents=True, exist_ok=True)
        full_path.write_text(code.strip() + "\n", encoding="utf-8")
        print(f"  ✅ {filepath}")


def main() -> None:
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    input_file = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else "./generated-project"

    if not os.path.isfile(input_file):
        print(f"❌ File not found: {input_file}")
        sys.exit(1)

    print(f"📖 Reading {input_file}...")
    text = Path(input_file).read_text(encoding="utf-8")

    print("🔍 Extracting files...")
    files = extract_files(text)

    if not files:
        print("⚠️  No files found. Trying raw extraction...")
        # Last resort: extract ALL code blocks and name them sequentially
        blocks = re.findall(r"```(\w+)\s*\n([\s\S]*?)\n```", text, re.MULTILINE)
        ext_map = {
            "tsx": "tsx", "ts": "ts", "typescript": "ts",
            "jsx": "jsx", "js": "js", "javascript": "js",
            "css": "css", "json": "json", "python": "py",
        }
        for i, (lang, code) in enumerate(blocks):
            if len(code.strip()) > 20:
                ext = ext_map.get(lang, lang or "txt")
                files.append((f"extracted/block_{i:02d}.{ext}", code))

    if not files:
        print("❌ Could not extract any code blocks.")
        sys.exit(1)

    print(f"\n📁 Creating project in {output_dir}/ ({len(files)} files):\n")
    create_project(files, output_dir)

    print(f"\n✨ Done! {len(files)} files created in {output_dir}/")
    print(f"   cd {output_dir} && npm install")


if __name__ == "__main__":
    main()
