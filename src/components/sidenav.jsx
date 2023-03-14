import React from "react";
import Link from "next/link";

function SideNav(){
  return <div id="side-nav">
    {/* Main, About Me, Projects (Code), Events (Esports), Resume */}
    <ul>
      <li>
        <Link href="/">Main</Link>
      </li>
      <li>
        <Link href="/aboutme">About Me</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/events">Events/Broadcasts</Link>
      </li>
      <li>
        <Link href="/resume">Resume</Link>
      </li>
    </ul>
  </div>
}

export default SideNav;