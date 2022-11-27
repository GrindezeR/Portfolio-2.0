import { nanoid } from 'nanoid';
import { data } from '../../common/data/data';

export const aboutList = [
  {
    id: nanoid(),
    title: 'First Name',
    text: 'Stanislav',
  },
  {
    id: nanoid(),
    title: 'Last Name',
    text: 'Tsarkov',
  },
  {
    id: nanoid(),
    title: 'Birthdate',
    text: data.about.birthdate,
  },
  {
    id: nanoid(),
    title: 'Address',
    text: data.about.city,
  },
  {
    id: nanoid(),
    title: 'Phone',
    text: data.about.phone,
  },
  {
    id: nanoid(),
    title: 'Email',
    text: data.about.email,
  },
  {
    id: nanoid(),
    title: 'Freelance',
    text: 'Not available',
  },
  {
    id: nanoid(),
    title: 'Telegram',
    link: data.about.telegram,
    text: 'GrindezeR',
  },
  {
    id: nanoid(),
    title: 'LinkedIn',
    link: data.about.linkedIn,
    text: 'Profile',
  },
  {
    id: nanoid(),
    title: 'GitHub',
    link: data.about.gitHub,
    text: 'Repositories',
  },
  {
    id: nanoid(),
    title: 'Languages',
    text: 'Russian, English (pre-intermediate in progress)',
  },
];
