# Browser & mobile QA checklist

Target current Chrome, Edge, Firefox, Safari, iOS Safari, and Android Chrome. The liquid-glass effect is progressive enhancement; content must remain usable when `backdrop-filter` is unsupported.

## Desktop

Test latest stable versions of:
- Chrome
- Firefox
- Safari
- Microsoft Edge

At widths: 1280, 1440, 1920.

## Mobile / tablet

Test:
- 320, 360, 375, 390, 412, and 430 CSS px widths
- iPhone Safari
- Android Chrome
- iPad Safari portrait and landscape

## Navigation

- All four tabs remain visible on mobile: Work, Experience, Stack, Contact.
- There is no hamburger or Menu control.
- The active route has one highlighted glass capsule.
- Tabs remain at least ~44px tall.
- Long tab labels do not cause page-level horizontal scrolling.
- Brand disappears at narrow widths to reserve width for the four tabs.

## Visual fallback

In a browser with `backdrop-filter` disabled:
- Navigation and cards stay readable using the solid translucent fallback.
- Borders and inset highlights still separate surfaces from the background.
- Grain remains subtle and does not reduce text contrast.
- No important information depends on blur, transparency, hover, or motion.

## Functional checks

- Keyboard through every route; focus indicator stays visible.
- Skip-to-content appears on keyboard focus.
- `/resume.pdf` resolves and opens the included Marriott-targeted résumé.
- Every dedicated route loads directly after a hard refresh.
- GitHub, LinkedIn, and Medium links resolve correctly.
- No horizontal page scroll at 320px.
- Case-study architecture cards collapse cleanly on mobile.
- Case-study receipt/code blocks remain readable without causing page-level horizontal scroll.

## Accessibility / resilience

- Enable Reduced Motion.
- Enable increased contrast / forced colors where available.
- Zoom to 200% and confirm no text becomes unreachable.
- Disable JavaScript: core content and route navigation should still render because the UI is server-rendered.
- Run Lighthouse plus manual keyboard and zoom checks.

## Production checks

In DevTools:
- No unexpected third-party requests.
- No console errors or hydration warnings.
- All case-study routes return successful responses.
- Confirm `noise.png` is cached and does not visually tile with obvious seams.
