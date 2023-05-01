export const data = {
    cvs: [
      { id: 1, name: 'CV 1', age: 25, job: 'Developer', userId: 1, skillIds: [1, 2] },
      { id: 2, name: 'CV 2', age: 30, job: 'Designer', userId: 2, skillIds: [3, 4] },
      { id: 3, name: 'CV 3', age: 30, job: 'Project Manager', userId: 2, skillIds: [2, 5] },
    ],
    users: [
      { id: 1, name: 'Safa', email: 'safa@gmail.com', role: 'USER', cvIds: [1] },
      { id: 2, name: 'Salma', email: 'salma@gmail.com', role: 'ADMIN', cvIds: [2, 3] },
    ],
    skills: [
      { id: 1, designation: 'JavaScript' },
      { id: 2, designation: 'Project Management' },
      { id: 3, designation: 'UI/UX Design' },
      { id: 4, designation: 'Graphic Design' },
      { id: 5, designation: 'Team Management' },
    ],
  };
  