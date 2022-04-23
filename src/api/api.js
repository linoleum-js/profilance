import Role from "../models/Role";
import sleep from "../util/sleep";

const users = [{
  username: 'user1',
  password: 'pass1',
  role: Role.USER,
}, {
  username: 'admin1',
  password: 'pass2',
  role: Role.ADMIN,
}];

/** @type {Array<IPost>} */
const posts = [{
  title: 'post 1',
  text: 'lorem ipsum dolor sit amet, consectetur adip',
  createdAt: 123,
  isApproved: false,
  id: 1
}, {
  title: 'post 2',
  text: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, consectetur adip',
  createdAt: 123,
  isApproved: true,
  id: 2
}, {
  title: 'post 3',
  text: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
  createdAt: 123,
  isApproved: true,
  id: 3
}, {
  title: 'post 4',
  text: 'lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit ametlorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
  createdAt: 123,
  isApproved: true,
  id: 4
}, {
  title: 'post 5',
  text: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
  createdAt: 123,
  isApproved: false,
  id: 5
}];


export const authenticateUser = async ({ username, password }) => {
  await sleep(500);
  const user = users.filter(item => item.username === username && item.password === password)[0];
  if (!user) {
    throw new Error('User not found');
  }
  return {
    status: 200,
    data: user,
  }
};

export const loadPosts = async () => {
  await sleep(500);
  return {
    status: 200,
    data: posts,
  }
};

export const stubRequest = async () => {
  await sleep(500);
};
