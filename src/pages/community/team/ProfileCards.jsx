import React from 'react';
import { Instagram as InstagramIcon, Linkedin as LinkedinIcon } from 'lucide-react';
import Shantanu from "../../../../assets/CoreTeam/Shantanu.png";
import Sairaj from "../../../../assets/CoreTeam/Sairaj.png";
import Tashif from "../../../../assets/CoreTeam/Tashif.png";
import Vaibhav from "../../../../assets/CoreTeam/Vaibhav.jpeg";
import Nandini from "../../../../assets/CoreTeam/Nandini.png";
import Aryan from "../../../../assets/CoreTeam/Aryan.png";
import Rajat from "../../../../assets/CoreTeam/Rajat.png";
import Mayer from "../../../../assets/CoreTeam/Mayer.jpeg";
import Yash from "../../../../assets/CoreTeam/Yash.png";
import Navy from "../../../../assets/CoreTeam/Navy.png";
import Raunak from "../../../../assets/CoreTeam/Raunak.jpeg";
import Sumant from "../../../../assets/CoreTeam/Sumant.png";

const CoreTeamData = [
    {
      imgsrc: Shantanu,
      name: "Shantanu Pandey",
      designation: "President",
      instaLink: "https://www.instagram.com/shantanu_pandey_108?igsh=c3hxZmswODRsaGt6",
      linkedinLink: "https://www.linkedin.com/in/shantanu-pandey-b0609925b",
    },
    {
      imgsrc: Sairaj,
      name: "Sai Raj Singh",
      designation: "Vice President",
      instaLink: "https://www.instagram.com/sairajsingh04?igsh=ZmUwdW40dms1cHk3",
      linkedinLink: "https://www.linkedin.com/in/sai-raj-singh-67ba28248",
    },
    {
      imgsrc: Tashif,
      name: "Tashif Ahmad Khan",
      designation: "Treasurer",
      instaLink: "https://www.instagram.com/khan_tashif?utm_source=qr&igsh=MTVnOThleHFzb3M4aQ==",
      linkedinLink: "https://www.linkedin.com/in/tashif-ahmad-khan-982304244",
    },
    {
      imgsrc: Vaibhav,
      name: "Vaibhav Vinayak",
      designation: "Secretary",
      instaLink: "https://www.instagram.com/vaibhavvinayak47?igsh=bmY2ZXcxZ2FzdTA0&utm_source=qr",
      linkedinLink: "https://www.linkedin.com/in/vaibhav-vinayak-9690b3172",
    },
    {
      imgsrc: Nandini,
      name: "Nandini Jindal",
      designation: "Strategic Chief",
      linkedinLink: "https://www.linkedin.com/in/nandini-jindal-33a3a7282/",
    },
    {
      imgsrc: Aryan,
      name: "Aryan Goyal",
      designation: "Technical Head",
      instaLink: "https://www.instagram.com/ag_0080/",
      linkedinLink: "https://www.linkedin.com/in/aryangoyal80/",
    },
    {
      imgsrc: Rajat,
      name: "Rajat Bhati",
      designation: "Web Master",
      instaLink: "https://www.instagram.com/rajat___.13?igsh=NWVpaWxxMzRpc2ht",
      linkedinLink: "https://www.linkedin.com/in/rajat-bhati-6a2114216",
    },
    {
      imgsrc: Mayer,
      name: "Mayer Goyal",
      designation: "Outreach Head",
      instaLink: "https://www.instagram.com/mayer_goyallll/",
      linkedinLink: "https://www.linkedin.com/in/mayer-goyal-07a58527a/",
    },
    {
      imgsrc: Yash,
      name: "Yash Mittal",
      designation: "Management Head",
      instaLink: "https://www.instagram.com/yashmittal_05?igsh=MXI2MGR4YWhwZnQ5Yw==",
      linkedinLink: "https://www.linkedin.com/in/yash-mittal-433307251/",
    },
    {
      imgsrc: Navy,
      name: "Navy Gautam",
      designation: "Management Head",
      instaLink: "https://www.instagram.com/navy_gautam_/",
      linkedinLink: "https://www.linkedin.com/in/navy-gautam-0247b1249/",
    },
    {
      imgsrc: Raunak,
      name: "Raunak Sharma",
      designation: "Creative Head",
      instaLink: "https://www.instagram.com/raunak._.sharma_?igsh=MXFidXd0ZDQxemEwOQ==",
    },
    {
      imgsrc: Sumant,
      name: "Sumant Kumar",
      designation: "Creative Head",
      instaLink: "https://www.instagram.com/sumantkumar_?igsh=MXFidXd0ZDQxemEwOQ==",
    },
  ];

  const InfoCard = () => {
    return (
      <div className="min-h-screen bg-black">
        <header className="h-16 bg-[#111122] text-white text-2xl leading-16 text-center py-4">
          Core Team Members
        </header>
        
      
        <div className="mx-auto max-w-7xl p-10">
          {/* Flex container for cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {CoreTeamData.map((member, index) => (
             <div
             key={index}
             className="group relative h-52 w-52 mx-auto rounded-full bg-gradient-to-br from-transparent via-transparent to-[#26baf0] transition-all ease-in-out duration-500 hover:w-[500px] hover:rounded-[100px_10px_100px_100px] overflow-hidden"
           >
             {/* Image Container */}
             <div className="absolute top-2 left-2 h-52 w-52 flex-shrink-0">
               <img
                 src={member.imgsrc}
                 alt={member.name}
                 className="h-44 w-44 rounded-full border-[10px] border-white object-cover"
               />
             </div>
           
             {/* Content Container */}
             <div className="absolute inset-1 flex flex-col items-center justify-center space-y-5 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
               {/* Name and Designation */}
               <h2 className="font-['Fira_Sans_Condensed']  ml-4 text-xl font-semibold italic text-white">
                 {member.name}
               </h2>
               <h4 className="font-['Fira_Sans_Condensed'] text-l font-light text-white space-y-reverse">
                 {member.designation}
               </h4>
           
               {/* Social Links */}
               <div className="flex gap-4">
                 {member.instaLink && (
                   <a
                     href={member.instaLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E1306C] text-white transition-transform transform hover:scale-110"
                   >
                     <InstagramIcon />
                   </a>
                 )}
                 {member.linkedinLink && (
                   <a
                     href={member.linkedinLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077B5] text-white transition-transform transform hover:scale-110"
                   >
                     <LinkedinIcon />
                   </a>
                 )}
               </div>
             </div>
           </div>
           
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default InfoCard;
  


 