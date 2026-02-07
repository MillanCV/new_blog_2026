export interface Post {
  slug: string;
  title: string;
  date: string; // DD/MM/YYYY
  excerpt?: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: 'first-post',
    title: 'First post',
    date: '07/02/2026',
    excerpt: 'A short introduction to this blog.',
    content: `
      <p>This is the first post on the blog. You can write about your photography, behind-the-scenes, or whatever you like.</p>
      <p>Add more paragraphs, images, or links as needed. The content supports simple HTML.</p>
    `,
  },
  {
    slug: 'another-article',
    title: 'Another article',
    date: '01/02/2026',
    excerpt: 'Another example article.',
    content: `
      <p>Here is another article. You can add as many posts as you want in <code>src/data/posts.ts</code>.</p>
      <p>Posts are sorted by date, newest first.</p>
    `,
  },
  {
    slug: 'behind-the-lens',
    title: 'Behind the lens: a day on location',
    date: '15/01/2026',
    excerpt: 'Notes from a long shoot and why the light always wins.',
    content: `
      <p>Most of the time we plan around the light. We check the forecast, we pick a window, we show up. Sometimes the light has other ideas.</p>

      <p>This shoot was one of those. We’d scouted the spot the week before: an old yard with cracked walls and a single tree. The idea was to use the low sun and long shadows. By the time we got there, the sky had closed in. Flat grey, no direction, no drama. The kind of light that makes everything look like a passport photo.</p>

      <figure class="article-figure">
        <img src="/images/project-1-picture-1.JPG" alt="On location" loading="lazy" />
        <figcaption>On location. When the plan changes, you work with what you have.</figcaption>
      </figure>

      <h3>Waiting it out</h3>

      <p>We had two options: pack up and reschedule, or stay and see. We stayed. The first hour was slow. We moved the model through a few poses anyway, more as a warm-up than anything. Then, for about twenty minutes, a gap opened in the clouds. The light didn’t match the original idea—it was softer, more even—but it was good. We shot quickly. Most of the keepers from that day come from that short window.</p>

      <h3>What I keep from days like this</h3>

      <p>Planning matters, but so does flexibility. The best tool you have on location is attention: noticing when the light shifts, when a pose suddenly works, when the scene gives you something you didn’t expect. The image above is from later that same day, once we’d stopped fighting the conditions and started using them.</p>

      <p>If you’re starting out, my advice is simple: show up, stay a bit longer than you think you need to, and watch the light. It usually tells you what to do next.</p>
    `,
  },
  { slug: 'post-04', title: 'Winter light in the city', date: '10/01/2026', content: '<p>Short post about winter light.</p>' },
  { slug: 'post-05', title: 'Why I still shoot film sometimes', date: '05/01/2026', content: '<p>Thoughts on film.</p>' },
  { slug: 'post-06', title: 'Editing workflow in 2026', date: '28/12/2025', content: '<p>How I edit.</p>' },
  { slug: 'post-07', title: 'One lens for a week', date: '22/12/2025', content: '<p>Limitation as a tool.</p>' },
  { slug: 'post-08', title: 'Portraits without a studio', date: '15/12/2025', content: '<p>Using natural light only.</p>' },
  { slug: 'post-09', title: 'Street photography ethics', date: '08/12/2025', content: '<p>Being respectful while staying honest.</p>' },
  { slug: 'post-10', title: 'Printing at home', date: '01/12/2025', content: '<p>First steps into printing.</p>' },
  { slug: 'post-11', title: 'Colour vs black and white', date: '24/11/2025', content: '<p>When to choose which.</p>' },
  { slug: 'post-12', title: 'A month without social media', date: '17/11/2025', content: '<p>What changed in my work.</p>' },
  { slug: 'post-13', title: 'The best light is the one you have', date: '10/11/2025', content: '<p>Making the most of overcast days.</p>' },
  { slug: 'post-14', title: 'Learning from old masters', date: '03/11/2025', content: '<p>Books and exhibitions that shaped my eye.</p>' },
  { slug: 'post-15', title: 'Minimal gear, maximum focus', date: '27/10/2025', content: '<p>What I carry on a walk.</p>' },
  { slug: 'post-16', title: 'Shooting in the rain', date: '20/10/2025', content: '<p>Protection and patience.</p>' },
  { slug: 'post-17', title: 'Why I keep a journal', date: '13/10/2025', content: '<p>Notes and sketches alongside photos.</p>' },
  { slug: 'post-18', title: 'Collaborating with other artists', date: '06/10/2025', content: '<p>Projects that span disciplines.</p>' },
  { slug: 'post-19', title: 'Golden hour isn\'t everything', date: '29/09/2025', content: '<p>Blue hour and midday too.</p>' },
  { slug: 'post-20', title: 'Building a series', date: '22/09/2025', content: '<p>From single images to a body of work.</p>' },
  { slug: 'post-21', title: 'Feedback and criticism', date: '15/09/2025', content: '<p>How to give and receive it.</p>' },
  { slug: 'post-22', title: 'Travel with one camera', date: '08/09/2025', content: '<p>Packing light for a long trip.</p>' },
  { slug: 'post-23', title: 'Self-portraits as practice', date: '01/09/2025', content: '<p>Understanding the frame from both sides.</p>' },
  { slug: 'post-24', title: 'Archiving and backups', date: '25/08/2025', content: '<p>Don\'t lose your work.</p>' },
  { slug: 'post-25', title: 'Shadows and contrast', date: '18/08/2025', content: '<p>Using hard light in portraits.</p>' },
  { slug: 'post-26', title: 'Finding subjects close to home', date: '11/08/2025', content: '<p>You don\'t need to travel far.</p>' },
  { slug: 'post-27', title: 'Developing a personal style', date: '04/08/2025', content: '<p>It takes time.</p>' },
  { slug: 'post-28', title: 'When to put the camera down', date: '28/07/2025', content: '<p>Being present without documenting.</p>' },
  { slug: 'post-29', title: 'Mood boards and references', date: '21/07/2025', content: '<p>Planning a shoot visually.</p>' },
  { slug: 'post-30', title: 'Noise and grain', date: '14/07/2025', content: '<p>When to embrace it.</p>' },
  { slug: 'post-31', title: 'Working with models', date: '07/07/2025', content: '<p>Communication and direction.</p>' },
  { slug: 'post-32', title: 'Landscape at night', date: '30/06/2025', content: '<p>Long exposures and stars.</p>' },
  { slug: 'post-33', title: 'Documenting family', date: '23/06/2025', content: '<p>Intimate and unposed.</p>' },
  { slug: 'post-34', title: 'Composition rules (and when to break them)', date: '16/06/2025', content: '<p>Guidelines, not laws.</p>' },
  { slug: 'post-35', title: 'Exhibiting your work', date: '09/06/2025', content: '<p>From screen to wall.</p>' },
  { slug: 'post-36', title: 'Lens choice and perspective', date: '02/06/2025', content: '<p>Wide vs telephoto.</p>' },
  { slug: 'post-37', title: 'Slow photography', date: '26/05/2025', content: '<p>Taking your time.</p>' },
  { slug: 'post-38', title: 'Building a website that fits', date: '19/05/2025', content: '<p>Portfolio design choices.</p>' },
  { slug: 'post-39', title: 'Weather and persistence', date: '12/05/2025', content: '<p>Going back to the same place.</p>' },
  { slug: 'post-40', title: 'Why I don\'t shoot everything', date: '05/05/2025', content: '<p>Selectivity and intention.</p>' },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => {
    const [da, ma, ya] = a.date.split('/').map(Number);
    const [db, mb, yb] = b.date.split('/').map(Number);
    const dateA = new Date(ya, ma - 1, da);
    const dateB = new Date(yb, mb - 1, db);
    return dateB.getTime() - dateA.getTime();
  });
}
