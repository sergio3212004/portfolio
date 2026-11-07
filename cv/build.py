#!/usr/bin/env python3
"""Build both CVs with pdfLaTeX and publish PDFs to the portfolio."""
from pathlib import Path
import shutil
import subprocess
import tempfile

root = Path(__file__).resolve().parent
output = root.parent / 'public' / 'cv'
output.mkdir(parents=True, exist_ok=True)
with tempfile.TemporaryDirectory(prefix='portfolio-cv-') as temporary:
    for language in ('en', 'es'):
        name = f'cv-{language}'
        for _ in range(2):
            result = subprocess.run(
                ['pdflatex', '-interaction=nonstopmode', '-halt-on-error',
                 f'-output-directory={temporary}', f'{name}.tex'],
                cwd=root, capture_output=True, text=True,
            )
            if result.returncode:
                raise SystemExit(result.stdout + result.stderr)
        log = (Path(temporary) / f'{name}.log').read_text()
        if 'Overfull' in log:
            raise SystemExit(f'{name}: layout overflow; inspect the LaTeX output.')
        pdf = Path(temporary) / f'{name}.pdf'
        if shutil.which('pdfinfo'):
            info = subprocess.check_output(['pdfinfo', str(pdf)], text=True)
            if not any(line.split() == ['Pages:', '1'] for line in info.splitlines()):
                raise SystemExit(f'{name}: expected a one-page CV.')
        if shutil.which('pdftotext'):
            text = subprocess.check_output(['pdftotext', str(pdf), '-'], text=True)
            for required in ('Sergio Monge', 'smonge630@gmail.com', 'Phone: +51968891526', 'Tour360', 'PostgreSQL', 'B2',
                             'Summary', 'Education', 'Projects', 'Skills'):
                if required not in text:
                    raise SystemExit(f'{name}: missing extractable text: {required}')
        shutil.copyfile(pdf, output / pdf.name)
        print(f'Built {output / pdf.name}')
