const user = {
  response: {
    200: {
      username: { type: 'string' },
      email: { type: 'string', format: 'email' },
      password: {
        type: 'string',
        min: 8,
        max: 128,
      },
    },
  },
  params: {
    id: { type: 'string' },
  },
};

export { user };
