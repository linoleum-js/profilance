import Role from '../models/Role';
import sleep from '../util/sleep';

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
  title: 'С дизайном у меня так себе',
  text: 'Поэтому попробовал с вашего сайта срисовать какие-то вещи. Но всё равно выглядит так себе.',
  createdAt: 1560796691597,
  isApproved: true,
  id: 1
}, {
  title: 'Чистый javascript',
  text: 'Раз было требование использовать js, а не TypeScript, то и flow тоже решил не использовать. Добавил какие-то тайп хинты через jsdoc, хотя бы ide местами подсказывает. Но ошибок компиляции это не даёт, что есть минус.',
  createdAt: 1570686591597,
  isApproved: true,
  id: 2
}, {
  title: 'post 3',
  text: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
  createdAt: 1590576491597,
  isApproved: true,
  id: 3
}, {
  title: 'post 4',
  text: 'lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit ametlorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet dolor sit ametlorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
  createdAt: 1600466391597,
  isApproved: true,
  id: 4
}, {
  title: 'post 5',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  createdAt: 1650356291597,
  isApproved: false,
  id: 5
}, {
  title: 'post 6',
  text: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
  createdAt: 1590576491597,
  isApproved: true,
  id: 6
}, {
  title: 'post 7',
  text: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. ',
  createdAt: 1600466391597,
  isApproved: true,
  id: 7
}, {
  title: 'post 8',
  text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
  createdAt: 1650356291597,
  isApproved: false,
  id: 8
}, {
  title: 'post 9',
  text: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
  createdAt: 1590576491597,
  isApproved: true,
  id: 9
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
