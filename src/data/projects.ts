export interface Project {
  slug: string;
  title: string;
  description?: string;
  category?: string;
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

export const projects: Project[] = [
  {
    slug: 'project-1',
    title: 'Project 1',
    category: 'Personal',
    description: 'Your first project description.',
    images: [
      { src: '/images/project-1-picture-1.JPG', alt: 'Project 1 - Image 1' },
      { src: '/images/project-1-picture-2.JPG', alt: 'Project 1 - Image 2' },
      { src: '/images/project-1-picture-3.JPG', alt: 'Project 1 - Image 3' },
      { src: '/images/project-1-picture-4.JPG', alt: 'Project 1 - Image 4' },
    ]
  },
  {
    slug: 'project-2',
    title: 'Project 2',
    category: 'Commissions',
    description: 'Your second project description.',
    images: [
      { src: '/images/project-2-picture-1.JPG', alt: 'Project 2 - Image 1' },
      { src: '/images/project-2-picture-2.JPG', alt: 'Project 2 - Image 2' },
      { src: '/images/project-2-picture-3.JPG', alt: 'Project 2 - Image 3' },
      { src: '/images/project-2-picture-4.JPG', alt: 'Project 2 - Image 4' },
      { src: '/images/project-2-picture-5.JPG', alt: 'Project 2 - Image 5' },
      { src: '/images/project-2-picture-6.JPG', alt: 'Project 2 - Image 6' },
      { src: '/images/project-2-picture-7.JPG', alt: 'Project 2 - Image 7' },
    ]
  },
  {
    slug: 'project-3',
    title: 'Project 3',
    category: 'Portraits',
    description: 'Your third project description.',
    images: [
      { src: '/images/project-3-picture-1.JPG', alt: 'Project 3 - Image 1' },
      { src: '/images/project-3-picture-2.JPG', alt: 'Project 3 - Image 2' },
      { src: '/images/project-3-picture-3.JPG', alt: 'Project 3 - Image 3' },
      { src: '/images/project-3-picture-4.JPG', alt: 'Project 3 - Image 4' },
      { src: '/images/project-3-picture-5.JPG', alt: 'Project 3 - Image 5' },
      { src: '/images/project-3-picture-6.JPG', alt: 'Project 3 - Image 6' },
      { src: '/images/project-3-picture-7.JPG', alt: 'Project 3 - Image 7' },
      { src: '/images/project-3-picture-8.JPG', alt: 'Project 3 - Image 8' },
      { src: '/images/project-3-picture-9.JPG', alt: 'Project 3 - Image 9' },
      { src: '/images/project-3-picture-10.JPG', alt: 'Project 3 - Image 10' },
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
