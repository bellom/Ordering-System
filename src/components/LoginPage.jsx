import React from 'react';

function getUsers() {
  fetch(`/api/users`)
  .then((response) => response.json())
  .then(users => console.log(users));
}

export function LoginPage() {
  return (
    <div>
      This is Login Page
      {getUsers()}
    </div>
  );
}