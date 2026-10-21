# Fred Karah — Personal Portfolio

## About the project

This personal portfolio was created for **CSN 1101: Web Technologies and Internet Applications** at KCA University. It introduces me as a Software Development student and presents my interests, skills, featured projects, and contact information.

## Technologies used

- HTML5
- CSS3 and responsive design
- JavaScript
- GitHub REST API (public repositories; no API key required)

## Features

- Responsive navigation and portfolio layout
- About, interests, skills, services, and contact sections
- Client-side contact form validation
- Project category filters on the Projects page
- Live public GitHub repositories fetched with the Fetch API
- Loading, success/empty, and error states for the API
- API-provided text inserted with safe DOM methods and `textContent`
- Compressed profile image
- HTTPS deployments on GitHub Pages and Vercel

## Live API integration

The Projects page requests public repositories from:

`https://api.github.com/users/ngumifred47-cyber/repos?sort=updated&per_page=12`

The page displays a loading status while the request runs. It then renders repository names, descriptions, primary languages, star counts, and links to GitHub. If the request fails, a friendly message and retry button appear. The endpoint does not require an API key, so no secret is stored in client-side code.

## Security review

- No API key or other secret is required for the GitHub repository request.
- Repository names and descriptions are rendered using `textContent`; the code does not insert API data using `innerHTML`.
- External repository links open in a new tab with `rel="noopener noreferrer"`.
- Check that both deployed sites use HTTPS (the browser address bar should show a secure connection).
- The contact form performs client-side validation only. It does not send messages to a server.

## Performance optimisation and Lighthouse

- Resized and compressed `pictures/fred-photo.jpg` for web delivery.
- The profile image is displayed near the top of the page, so it is not marked lazy-loaded. Add `loading="lazy"` to any images added below the fold.
- Lighthouse scores must be measured in Chrome DevTools on the deployed site. Do not enter estimated scores.

| Lighthouse Performance | Score |
| --- | --- |
| Before optimisation | **Enter your measured score here** |
| After optimisation | **Enter your measured score here** |

### How to record the scores

1. Open the deployed website in Chrome.
2. Open DevTools (`F12`) and select **Lighthouse**.
3. Choose **Performance** and the **Mobile** device setting, then run the report.
4. Record the original score before optimisation if you have it. If you did not measure it beforehand, state that honestly rather than inventing a baseline.
5. After the changes are deployed, run the same test again and enter the measured score above.

## Deployment links

- **GitHub repository:** https://github.com/ngumifred47-cyber/fred-portfolio
- **GitHub Pages:** https://ngumifred47-cyber.github.io/fred-portfolio/
- **Vercel:** https://fred-portfolio-alpha.vercel.app/

After pushing the updated files, open both live URLs in an incognito/private window and confirm the GitHub repositories load.

## Author

**Fred Karah**  
KCA University — Software Development
