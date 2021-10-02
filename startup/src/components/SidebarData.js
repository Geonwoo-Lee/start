import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs' 
import * as SiIcons from 'react-icons/si'

export const SidebarData = [
  {
    title: 'Url 보기',
    path: '/urls',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '전체 보기',
        path: '/urls/all',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '게임',
        path: '/urls/games',
        icon: <SiIcons.SiRiotgames/>
      },
      {
        title: '게임인벤',
        path: '/urls/gameinven',
        icon: <SiIcons.SiNintendogamecube/>
      },
      {
        title: '일',
        path: '/urls/works',
        icon: <MdIcons.MdWork/>
      },
      {
        title: '음악',
        path: '/urls/music',
        icon: <BsIcons.BsMusicNoteBeamed/>
      },
      {
        title: '기타등등',
        path: '/urls/etc',
        icon: <BsIcons.BsThreeDots/>
      }
    ]
  },
  {
    title: 'Private',
    path: '/private',
    icon: <RiIcons.RiGitRepositoryPrivateFill/>
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
