import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as VscIcons from "react-icons/ri";
import * as CgIcons from "react-icons/cg";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";

export const StdSidebarData = [
  {
    title: "Profile",
    path: "/profile",
    //  icon: <VscIcons.VscAccount />,
    icon: <VscIcons.RiAccountBoxFill />,
    cName: "nav-text",
  },
  {
    title: "Upload files",
    path: "/upload",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Announcement",
    path: "/announcement",
    icon: <AiIcons.AiOutlineEdit />,
    cName: "nav-text",
  },

  {
    title: "View Grades",
    path: "/grade",
    icon: <CgIcons.CgViewList />,
    cName: "nav-text",
  },

  {
    title: "Change Password",
    path: "/changepassword",
    icon: <RiIcons.RiLockPasswordFill />,
    cName: "nav-text",
  },

  {
    title: "Logout",
    path: "/",
    icon: <BiIcons.BiLogOut />,
    cName: "nav-text",
  },
];

// import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
// import * as RiIcons from 'react-icons/ri';

// export const SidebarData = [
//   {
//     title: 'Profile',
//     path: '/Profile',
//     icon: <AiIcons.AiFillHome />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Upload Record',
//         path: '/Upload',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Grade',
//         path: '/Grade',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Maintenance',
//     path: '/Change_pwd',
//     icon: <IoIcons.IoIosPaper />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Reports',
//         path: '/reports/reports1',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'Reports 2',
//         path: '/reports/reports2',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'Reports 3',
//         path: '/reports/reports3',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Products',
//     path: '/products',
//     icon: <FaIcons.FaCartPlus />
//   },
//   {
//     title: 'Team',
//     path: '/team',
//     icon: <IoIcons.IoMdPeople />
//   },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaIcons.FaEnvelopeOpenText />,

//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Message 1',
//         path: '/messages/message1',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Message 2',
//         path: '/messages/message2',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <IoIcons.IoMdHelpCircle />
//   }
// ];
