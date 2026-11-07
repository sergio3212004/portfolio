# Bilingual CV — Sergio Monge

One-page A4 CVs in Spanish and English, using a minimal Harvard-inspired style: serif type, black text, ruled section headings and a single-column body. The photo is an optional adaptation in the header. All essential information is real PDF text; Unicode mappings support extraction of Spanish accents. No tables, icons, skill meters or text embedded in images.

## Build

Requires Python 3 and a TeX distribution with pdfLaTeX, geometry, fontenc, inputenc, lmodern, graphicx, enumitem, titlesec and hyperref.

From the repository root:

```sh
python3 cv/build.py
```

PDFs are written to `public/cv/cv-en.pdf` and `public/cv/cv-es.pdf`, the paths already used by the portfolio download component. Restart Nuxt after first creating the PDFs because download availability is evaluated in `nuxt.config.ts` at startup.

## Photo

The current PDFs use `cv/assets/sample-portrait.png`, an AI-generated fictional headshot included at the user’s request as an example. It is not a photo of Sergio Monge. Add your actual photo as `cv/assets/portrait.jpg` or `cv/assets/portrait.png` and rebuild; either takes priority over the sample. Image proportions are preserved within a 3.2 cm high header area. Remove the sample if you want to compile without a photo.

## Content and assumptions

Content comes from `content/en/`, `content/es/` and the portfolio contact links. The drafts use **Sergio Monge**, inferred from those links; confirm the desired full name before applying. Education starts in 2022 according to the home timeline. No graduation date, project dates, job history, native language or numerical achievements were invented. Tour360 is described as a contribution because individual responsibilities are not specified.

Projects are ordered by portfolio priority, with Sistema de prácticas first. Project dates are absent, so their order does not imply reverse chronology. Update both language files when adding verified dates or results. Skills reflect the portfolio's listed tools, without claims of proficiency or certification. B2 English is self-reported by the portfolio.

The PDF metadata contains the document language. The build checks one-page output, layout overflow and key extracted text when Poppler tools are installed. Text extraction is a useful ATS check, but does not certify compatibility with every applicant tracking system.

Reference: [Harvard MCS resume guide](https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/). This is a custom adaptation, not an official Harvard template.

## ResumeReadout feedback revision

The supplied report recognized clean PDF text and a single reading flow, but did not recognize Spanish section headings or the telephone number. Both PDFs now use the exact standalone headings `Summary`, `Education`, `Projects` and `Skills`; the Spanish CV keeps a Spanish subtitle beneath each heading. The contact block has explicit `Phone:` and `Email:` labels, and the international phone number is unbroken (`+51968891526`).

The report lists six possible standard sections, not six required sections. No employment or certifications sections were invented to increase the count. The sample portrait remains because a photo was explicitly requested; the image warning alone does not establish a parsing failure, and all substantive information remains selectable text. Local extraction checks passed; the revised files have not been re-tested in ResumeReadout.
