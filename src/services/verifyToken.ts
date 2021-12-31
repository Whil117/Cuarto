const verifyToken = async (token: string): Promise<boolean> => {
  const resp = await fetch('https://cuartobackend.herokuapp.com/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token
    })
  });
  const data: { auth: boolean } = await resp.json();

  return data.auth;
};
export default verifyToken;
