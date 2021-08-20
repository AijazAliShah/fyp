import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as VscIcons from 'react-icons/ri';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

export const CodSidebarData = [
 
  
  {
    title: 'Profile',
    path: '/profile',
    //  icon: <VscIcons.VscAccount />,
     icon: <VscIcons.RiAccountBoxFill />,
    cName: 'nav-text'
  },
  {
    title: 'Upload files',
    path: '/upload',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Insert Project',
    path: '/project',
    icon: <AiIcons.AiOutlineInsertRowBelow />,
    cName: 'nav-text'
  },
  {
    title: 'Insert Marks',
    path: '/rubric',
    icon: <AiIcons.AiOutlineInsertRowBelow />,
    cName: 'nav-text'
  },
  {
    title: 'Announcement',
    path: '/announcement',
    icon: <AiIcons.AiOutlineEdit />,
    cName: 'nav-text'
  },
  {
    title: 'View Projects',
    path: '/assignment',
    icon: <CgIcons.CgViewList />,
    cName: 'nav-text'
  },
  {
    title: 'View Grades',
    path: '/showGrades',
    icon: <CgIcons.CgViewList />,
    cName: 'nav-text'
  },
  
  {
    title: "Change Password",
    path: '/changepassword',
    icon: <RiIcons.RiLockPasswordFill />,
    cName: 'nav-text'
  },
  
  {
    title: 'Logout',
    path: '/',
    icon: <BiIcons.BiLogOut />,
    cName: 'nav-text'
  }
];

