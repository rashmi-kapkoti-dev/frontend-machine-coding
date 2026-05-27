import type { CommentType } from '../../types';

export const commentsData: CommentType[] = [
  {
    id: 1,
    comment: 'This is the first parent comment',
    userName: 'John',
    userUrl:
      'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
    replies: [
      {
        id: 11,
        comment: 'This is a reply to first comment',
        userName: 'Emma',
        userUrl:
          'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
        replies: [
          {
            id: 111,
            comment: 'Nested reply level 2',
            userName: 'Michael',
            userUrl:
              'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
            replies: [],
          },
        ],
      },
      {
        id: 12,
        comment: 'Another reply to first comment',
        userName: 'Sophia',
        userUrl:
          'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
        replies: [],
      },
    ],
  },
  {
    id: 2,
    comment: 'Second parent comment',
    userName: 'James',
    userUrl:
      'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
    replies: [
      {
        id: 21,
        comment: 'Reply to second comment',
        userName: 'Olivia',
        userUrl:
          'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
        replies: [
          {
            id: 211,
            comment: 'Deep nested reply',
            userName: 'William',
            userUrl:
              'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
            replies: [
              {
                id: 2111,
                comment: 'Level 4 nested reply',
                userName: 'Charlotte',
                userUrl:
                  'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    comment: 'Third parent comment',
    userName: 'Benjamin',
    userUrl:
      'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
    replies: [],
  },
];
