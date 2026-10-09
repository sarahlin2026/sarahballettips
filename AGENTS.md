# Project instructions

## Project
Build "Sarahs Ballettips", a Danish website helping adults
prepare for their first ballet class.

The tone is welcoming, calm and practical. Visitors should
feel that they can begin without experience or expensive equipment.

## Language
- Keep all website content in Danish.
- Explain your work and ask questions in Danish.
- Use clear English names for files, classes and variables.

## Technology
- Use semantic HTML and plain CSS.
- Only add small amounts of vanilla JavaScript when needed
  for interactions such as the mobile menu.
- Do not add frameworks, packages, build tools or a backend.
- The website must work on ordinary static web hosting.
- Use relative paths so it can also work in a hosting subfolder.

## Pages
Create four pages:
- index.html: Forside
- before-class.html: Før din første time
- first-steps.html: Prøv dine første trin
- after-class.html: Efter din første time

Use a shared stylesheet and consistent navigation and footer.
Keep images in an images folder.
Create additional files only when necessary.

## Design source
- Follow the supplied Figma mobile and desktop designs.
- Preserve the approved Danish text and visual hierarchy.
- Use the current name "Sarahs Ballettips" throughout.
- Do not redesign the website or add unsolicited sections.
- If Figma cannot be accessed, say so and request exports
  or screenshots. Do not claim to have inspected it.
- Ask about material gaps instead of inventing content or assets.

## Visual identity
- Font: Judson, regular and bold, with a serif fallback.
- Cream: #F5F0E8
- Sand: #DED3C5
- Bordeaux: #682C3E
- Charcoal: #302C2B
- Follow the actual Figma values if they differ; flag conflicts.
- Preserve image proportions and meaningful parts of each image.

## Responsive layout
- Use mobile-first CSS.
- Reference designs are 390px wide on mobile and 1440px on desktop.
- Mobile content has 24px side margins.
- Desktop content has a maximum width of 1200px and is centered.
- Adapt smoothly between widths without horizontal overflow.
- Use normal document flow, Flexbox or CSS Grid.
- Do not reproduce the page using fixed x/y coordinates,
  fixed page heights or absolute positioning for the main layout.

## Navigation and accessibility
- Use real links for navigation and buttons for actions.
- Link the logo to the homepage.
- Include all four pages in the mobile menu.
- Make the menu usable with keyboard and touch.
- Provide a clear close control, accurate aria-expanded state
  and sensible focus handling.
- Use one h1 per page and a logical heading hierarchy.
- Include lang="da", a viewport meta tag and descriptive page titles.
- Preserve visible keyboard focus and readable contrast.
- Transfer the supplied Figma alt-text notes into image alt attributes.
- Keep those notes out of the visible page content.
- Use empty alt text for purely decorative images.

## Video
- Use this approved video:
  https://www.youtube.com/watch?v=S5HwZJQ8NuA
- Add a responsive YouTube embed if embedding is permitted.
- Give the iframe a descriptive title.
- Keep a visible "Se på YouTube" fallback link and source credit.
- Do not autoplay or download and rehost the video.

## Working method
- Inspect existing files before editing.
- Follow the existing project structure once established.
- Understand the relevant code before editing it.
- Preserve working code and make focused changes.
- Follow the scope of the current prompt.
- Keep code readable for a beginner.
- Add brief comments where they clarify non-obvious decisions.
- Create new files or folders only when necessary for the task.
- Rewrite or remove existing code only when required by the task
  or when it provides a clear improvement. Avoid unnecessary refactoring.
- Do not change the chosen technologies without permission.
- Do not overwrite unrelated work.
- Preserve functionality outside the scope of the current task.
- Ask when important information is missing; do not invent it.
- Never put passwords, tokens or hosting credentials in files.
- Do not push to GitHub or upload to hosting unless requested.
- After each task, briefly explain in Danish:
    - What changed.
    - Why, if the change was not directly requested.
    - What was verified and any relevant remaining issues.
    - If nothing changed, explain why.

## Verification
- Check navigation, the mobile menu, images and video fallback.
- Check the layout at mobile, intermediate and desktop widths.
- Check for clipping, overflow and keyboard accessibility.
- Report what was changed, what was actually tested and any
  remaining issues. Do not claim tests passed unless performed.